import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Mainheader from './components/mainheader';
import { Link } from 'react-router-dom';



class App extends Component {
  render() { 
    return (
      <div className="demo-big-content" style={{flex: 'auto'}}>
    <Layout>
        <Header className="header-color" title=""  >
            <Navigation>
                <Link to="/my-app">Main</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  title="MENU" >
            <Navigation>
                <Link to="/my-app">Main</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Mainheader/>
        </Content>
    </Layout>
</div>
    );
    }
}

export default App;
