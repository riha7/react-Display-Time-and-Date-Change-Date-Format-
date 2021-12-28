import React from 'react';
class Rend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   console.log(this.timer);
  //   console.log('not calling');
  // }

  render() {
    //console.log('rendering');
    return (
      <div>
        <span>{this.state.time}</span>
      </div>
    );
  }
}
export default Rend;
