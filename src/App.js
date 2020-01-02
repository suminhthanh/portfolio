import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import profileData from './profileData.json';
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import {ReduxComponentContainer} from "./components/ReduxComponent";
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
          <ReduxComponentContainer/>
        </div>
    );
  }
}


export default App;
