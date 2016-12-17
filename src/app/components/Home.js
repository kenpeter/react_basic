import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      age: props.initAge,
      initHomeLink: props.initHomeLink,
      status: 0,
    };
    
    console.log("constructor");
  }
  
  
  componentWillMount() {
    console.log("component will mount");
  }
  
  componentDidMount() {
    console.log("component did mount");
  }
  
  componentWillReceiveProps(nextProps) {
    console.log("component will receive props", nextProps);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("componentWillUpdate", prevProps, prevState);
  }
  
  componentWillUnmount() {
    console.log("componentWillUnmount");  
  }
  
  onMakeOlder() {
    this.setState({
      age: this.state.age + 4
    });
  }
  
  onChangeHomeLink() {
    this.props.onChangeHomeLink(this.state.initHomeLink);
  }
  
  
  onInputChange(event) {
    this.setState({
      initHomeLink: event.target.value
    });
  }
  
  render() {
    return(
      <div>
        <p>a new component</p>
        <p>your name: {this.state.name}, age is {this.state.age}</p>
        <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older</button>
        
        <br/>
        <br/>
        <button className="btn btn-primary" onClick={this.props.sayhi}>sayhi</button>
        
        <br/>
        <br/>
        <input className="form-control" type="text" 
          defaultValue={this.state.initHomeLink} 
          onChange={(event) => this.onInputChange(event)}
        />
        
        <br/>
        <br/>
        <button className="btn btn-primary" onClick={() => this.onChangeHomeLink()}>change link name</button>
      </div>
    );
  }

}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  sayhi: React.PropTypes.func
};
