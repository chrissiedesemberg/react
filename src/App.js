import React, { Component } from 'react';
//import Products from './Products';
//import JumboTronComponent from './JumboTronComponent';
// import GitHub from './GitHub';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import { Nav, Navbar } from 'react-bootstrap';
// import Chrissie from './Chrissie';
// import GitHubUser from './GitHubUser';
// import * as firebase from 'firebase';
//import UserForm from './UserFormOLD';
import User from './User';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/edit/:id" component={UserForm} />
            <Route path="/add" component={UserForm} />
            <Route exact path="/" component={User} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
  export default App;


  class NotFound extends Component {
    render(){
        return <div>Not Found</div>
    }
  }


// class App extends Component {

//   constructor(){
//     super();
//     console.log(firebase);
//   }

//   render() {        
//     return (
//       // <div>  
//       //   <Products/> 
//       //   <JumboTronComponent>
//       //   This is a long sentence, and I want to insert content into the
//       //   jumbotron component from the outside.
//       //   </JumboTronComponent>
//       //  </div>
//         // <div>
//         //   <UserForm />
//         // </div>  
//       // <div>
//       //   <GitHub />
//       // </div>
//       <div>
//         <Header />
//       </div>

//     );
//   }
// }

// export default App;

// class Home extends Component {
//   render(){
//       return (
//           <div>
//           Home
//           </div>
//       )
//   }
// }


// class Header extends Component {
//   render(){
//       return (
//           <BrowserRouter>
//               <div>
//               <Navbar bg="light" expand="lg">
//                 <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                   <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="mr-auto">
//                       <Nav.Link href="/">Home</Nav.Link>
//                       <Nav.Link href="/github">GitHub</Nav.Link>
//                       <Nav.Link href="/Chrissie">Chrissie's Page</Nav.Link>
//                     </Nav>
//                   </Navbar.Collapse>
//               </Navbar>
//                   <Switch>
//                       <Route path="/github/user/:login/:score" component={GitHubUser} />
//                       <Route path="/github" component={GitHub} />
//                       <Route exact path="/" component={Home} />
//                       <Route exact path="/chrissie" component={Chrissie} />
//                       <Route path="/*" component={NotFound} />
//                   </Switch>
//               </div>
//           </BrowserRouter>
//       )
//       }
//   }


