import React from 'react';
import Moment from 'moment';
class Change extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDMY: Moment(new Date().toLocaleDateString()).format('DD-MM-YYYY'),
    };
  }
  render() {
    return (
      <div>
        <p>change Date Format</p>
        <p>Date-Month-Year :{this.state.dateDMY}</p>
      </div>
    );
  }
}
export default Change;
