import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import profileData from './profileData.json';


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
        <div className="App">
          <Sidebar sidebarData={this.state.landingData}></Sidebar>
        </div>
    );
  }
}


export default App;
