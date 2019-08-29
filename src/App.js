import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import profileData from './profileData.json';
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Awards from "./components/Awards";


class App  extends React.Component{


  constructor(props, context) {
    super(props, context);
    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      awards : profileData.awards
    }
  }


  render(){
    return (
        <div className="App text-left">
          <Sidebar sidebarData={this.state.landingData}></Sidebar>
          <div className="container-fluid p-0">
            <Landing landingData={this.state.landingData} />
            <hr className="m-0" />
            <Experience experience={this.state.experience} />
            <hr className="m-0" />
            <Education education={this.state.education}/>
            <hr className="m-0" />
            <Skills skills={this.state.skills} />
            <hr className="m-0" />
            <Interests interests={this.state.interests} />
            <hr className="m-0" />
            {/*<Awards awards={this.state.awards} />*/}
          </div>
        </div>
    );
  }
}


export default App;
