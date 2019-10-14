// core
import React from 'react';

const UserFilter = ({ pages, onPage, gender, nationality, disabled,
  onChangePages, onChangeOnPage, onChangeGender, onChangeNationality }) => {

  return (
    <div className="row">
      <div className="col-12">
        <form>
          <div className="form-row">

            <div className="form-group col-md-3">
              <label htmlFor="pages">Pages</label>
              <select id="pages"
                className="form-control"
                value={pages}
                onChange={onChangePages}
                disabled={disabled}
              >
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="usersOnPage">Users on page</label>
              <select id="usersOnPage"
                className="form-control"
                value={onPage}
                onChange={onChangeOnPage}
                disabled={disabled}
              >
                <option>3</option>
                <option>9</option>
                <option>27</option>
                <option>54</option>
              </select>
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="gender">Gender</label>
              <select id="gender"
                className="form-control"
                value={gender}
                onChange={onChangeGender}
                disabled={disabled}
              >
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="nationalities">Nationalities</label>
              <select id="nationalities"
                className="form-control"
                value={nationality}
                onChange={onChangeNationality}
                disabled={disabled}
              >
                <option value="">All</option>
                <option>AU</option>
                <option>BR</option>
                <option>CA</option>
                <option>CH</option>
                <option>DE</option>
                <option>DK</option>
                <option>ES</option>
                <option>FI</option>
                <option>FR</option>
                <option>GB</option>
                <option>IE</option>
                <option>IR</option>
                <option>NR</option>
                <option>NZ</option>
              </select>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFilter;
