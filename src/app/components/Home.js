import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initAge,
      status: 0
    };
  }
  
  
  onMakeOlder() {
    this.setState({
      age: this.state.age + 4
    });
  }
  
  render() {
    return(
      <div>
        <p>a new component</p>
        <p>your name: {this.name}, age is {this.state.age}</p>
        <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older</button>
      </div>
    );
  }

}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number
};
