import React from "react";
import { render }  from "react-dom";

import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home1",
      homeMounted: true
    };
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  sayhi() {
    console.log("sayhi");
  }

  onChangeHomeLink(newName) {
    this.setState({
      homeLink: newName
    });
  }


  render() {
    let homeComp = "";
    
    if(this.state.homeMounted) {
      homeComp = (
        <Home 
          name={"Max"} 
          initAge={27} 
          sayhi={this.sayhi}
          onChangeHomeLink={this.onChangeHomeLink.bind(this)}
          initHomeLink={this.state.homeLink} 
        >            
        </Home>
      );
    }
    else {
      homeComp = "";
    }
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink="home" homeLink={this.state.homeLink} />            
          </div>
        </div>
        
        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {homeComp}  
          </div>
        </div>
        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(un) mount</button>
          </div>
        </div>
      </div>
    );
  }

}

// use this
render(<App />, window.document.getElementById("app"));
