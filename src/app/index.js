import React from "react";
import { render }  from "react-dom";

import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home1"
    };
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
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink="home" homeLink={this.state.homeLink} />            
          </div>
        </div>
        
        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home 
              name={"Max"} 
              initAge={27} 
              sayhi={this.sayhi}
              onChangeHomeLink={this.onChangeHomeLink.bind(this)}
              initHomeLink={this.state.homeLink} 
            >            
            </Home>
          </div>
        </div>
      </div>
    );
  }

}

// use this
render(<App />, window.document.getElementById("app"));
