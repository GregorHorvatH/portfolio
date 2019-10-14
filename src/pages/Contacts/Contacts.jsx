// core
import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import axios from 'axios';

// components
import Description from '../../components/Description';
import UserFilter from '../../components/UserFilter';
import Users from '../../components/Users';
import Pagination from '../../components/Pagination';

// constants
const URL = 'https://randomuser.me/api/1.1/?seed=Incuber';
const DESCRIPTION = {
  title: 'Contact List',
  details: 'React, React Hooks, Axios, ClassNames, ReactTooltip, React Loader, CSS Modules, Bootstrap'
};

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [pages, setPages] = useState(10);
  const [onPage, setOnPage] = useState(3);
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('AU');

  const loadUsers = () => {
    setIsLoading(true);

    axios.get(`${URL}&results=${onPage}&page=${activePage}&nat=${nationality}&gender=${gender}`)
      .then(({ status, data }) => {
        if (status === 200 && data.results) {
          setUsers(data.results);
        } else {
          throw new Error('error loading users data');
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }

  const handlePageChange = (e) => setActivePage(e.selected);

  useEffect(() => {
    loadUsers();
  }, []); // eslint-disable-line

  useEffect(loadUsers, [pages, onPage, gender, nationality, activePage]);

  return (
    <div className="container-fluid app-container">
      <Description title={DESCRIPTION.title} details={DESCRIPTION.details} />
      <UserFilter
        pages={pages}
        onChangePages={(e) => setPages(e.target.value)}

        onPage={onPage}
        onChangeOnPage={(e) => setOnPage(e.target.value)}

        gender={gender}
        onChangeGender={(e) => setGender(e.target.value)}

        nationality={nationality}
        onChangeNationality={(e) => setNationality(e.target.value)}

        disabled={isLoading}
      />
      {
        isLoading
          ? <Loader />
          : <Users users={users} />
      }
      <Pagination pageCount={pages} initialPage={activePage} onPageChange={handlePageChange} />
    </div>
  );
}

export default Contacts;
