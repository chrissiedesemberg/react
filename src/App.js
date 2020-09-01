import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Chrissie from './Chrissie';
import GitHubUser from './GitHubUser';

class App extends Component {
  render() {        
    return (
      // <div>  
      //   <Products/> 
      //   <JumboTronComponent>
      //   This is a long sentence, and I want to insert content into the
      //   jumbotron component from the outside.
      //   </JumboTronComponent>
      //  </div>
        // <div>
        //   <UserForm />
        // </div>  
      // <div>
      //   <GitHub />
      // </div>
      <div>
        <Header />
      </div>

    );
  }
}

export default App;

class Header extends Component {
  render(){
      return (
          <BrowserRouter>
              <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/github">GitHub</Nav.Link>
                      <Nav.Link href="/Chrissie">Chrissie's Page</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
                  <Switch>
                      <Route path="/github/user/:login/:score" component={GitHubUser} />
                      <Route path="/github" component={GitHub} />
                      <Route exact path="/" component={Home} />
                      <Route exact path="/chrissie" component={Chrissie} />
                      <Route path="/*" component={NotFound} />
                  </Switch>
              </div>
          </BrowserRouter>
      )
      }
  }

class Home extends Component {
  render(){
      return (
          <div>
          Home
          </div>
      )
  }
}
class NotFound extends Component {
  render(){
      return <div>Not Found</div>
  }
}