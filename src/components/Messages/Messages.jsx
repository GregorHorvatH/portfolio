// core
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styles
import './Messages.scss';

// mock
import messages from './mock';

const user = 'Geri';

class Messages extends Component {
  componentDidMount() {
    this.row.scrollTop = this.row.scrollHeight;
  }

  render() {
    return (
      <Row className="msgHistory justify-content-sm-center" ref={ref => this.row = ref}>
        {
          messages.map(message => message.author === user
            ? <Col xs={12} sm={10} md={7} className="msg" key={message.id}>
              <div className="sent_msg">
                <p>{message.text}</p>
                <span className="time_date">{message.timedate}</span>
              </div>
            </Col>
            : <Col xs={12} sm={10} md={7} className="msg" key={message.id}>
              <div className="incoming_msg_img">
                <img src={message.img} alt="sunil" />
              </div>
              <div className="received_msg">
                <p>{message.text}</p>
                <span className="time_date">{message.timedate}</span>
              </div>
            </Col>
          )
        }
      </Row>
    );
  }
}

export default Messages;
