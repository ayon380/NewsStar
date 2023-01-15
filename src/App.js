import './App.css';
import React, { Component } from 'react'
import { NavBar } from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
console.log(process.env.API);
export default class App extends Component {
  state = { progress: 0 }
  setProgress=(progress) =>{
    this.setState({ progress: progress })
  }
  
  render() {
    let pno = 8;
    let api = process.env.API;
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#000000'
            height='5px'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="general" country="in" category="general" />} />
            <Route exact path="/general" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="general" country="in" category="general" />} />
            <Route exact path="/sports" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="sports" country="in" category="sports" />} />
            <Route exact path="/science" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="science" country="in" category="science" />} />
            <Route exact path="/entertainment" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/business" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="business" country="in" category="business" />} />
            <Route exact path="/technology" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="technology" country="in" category="technology" />} />
            <Route exact path="/health" element={<News apiKey={api} setProgress={this.setProgress} pageSize={pno} key="health" country="in" category="health" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
