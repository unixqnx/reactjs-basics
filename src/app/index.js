// https://css-tricks.com/react-router-4/
import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

// const PrimaryLayout = () => (
//     <div className="primary-layout">
//       <header>
//         Our React Router 4 App
//       </header>
//       <main>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/users" component={UsersPage} />
//       </main>
//     </div>
//   )
  
// const PrimaryLayout = () => (
//     <div className="primary-layout">
//       <header>
//         Our React Router 4 App
//         <Route path="/users" component={UsersMenu} />
//       </header>
//       ------------------------------------------------------
//       <main>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/users" component={UsersPage} />
//       </main>
//     </div>
//   )

// const PrimaryLayout = () => (
//     <div className="primary-layout">
//       {/* <PrimaryHeader /> */}
//       <main>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/users/add" component={UserAddPage} />
//           <Route path="/users" component={UsersPage} />
//           <Redirect to="/" />
//         </Switch>
//       </main>
//     </div>
//   )


// ///Bad approach to nested routing
// const PrimaryLayout = props => {
//     return (
//       <div className="primary-layout">
//         {/* <PrimaryHeader /> */}
//         <main>
//           <Switch>
//             <Route path="/" exact component={HomePage} />
//             <Route path="/users" exact component={BrowseUsersPage} />
//             <Route path="/users/:userId" component={UserProfilePage} />
//             <Route path="/products" exact component={BrowseProductsPage} />
//             <Route path="/products/:productId" component={ProductProfilePage} />
//             <Redirect to="/" />
//           </Switch>
//         </main>
//       </div>
//     )
//   };

///Good approach to nested routing
const PrimaryLayout = props => {
    return (
      <div className="primary-layout">
        {/* <PrimaryHeader /> */}
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" component={UserSubLayout} />
            <Route path="/products" component={ProductSubLayout} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    )
  };



  const HomePage =() => <div>Home Page</div>;
  const UsersPage = () => <div>Users Page</div>;
  const UsersMenu = ()=><div>Users Menu</div>;
  const UserAddPage = ()=><div>User Add Page</div>;
  const BrowseUsersPage = ()=><div>Browse Users Page</div>;
  const UserProfilePage = ()=><div>User Profile Page</div>;
  const BrowseProductsPage = ()=><div>Browse Products Page</div>;
  const ProductProfilePage = ()=><div>Product Profile Page</div>;

//   const UserSubLayout = () => (
//     <div className="user-sub-layout">
//       <aside>
//         {/* <UserNav /> */}
//       </aside>
//       <div className="primary-content">
//         <Switch>
//           <Route path="/users" exact component={BrowseUsersPage} />
//           <Route path="/users/:userId" component={UserProfilePage} />
//         </Switch>
//       </div>
//     </div>
//   )

  const UserSubLayout = props => (
    <div className="user-sub-layout">
      <aside>
        {/* <UserNav /> */}
      </aside>
      <div className="primary-content">
        <Switch>
          <Route path={props.match.path} exact component={BrowseUsersPage} />
          <Route path={`${props.match.path}/:userId`} component={UserProfilePage} />
        </Switch>
      </div>
    </div>
  )


  const ProductSubLayout = ()=><div>Product Sub Layout</div>;
  
  const App = () => (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  )


render(<App/>, window.document.getElementById("app"));



// import React from "react";
// import { render } from "react-dom";
// // import {Router, Route, browserHistory} from "react-router";

// import { BrowserRouter as Router, Route, browserHistory ,Switch} from "react-router-dom";

// import { Root } from ".\\components\\Root";
// import { Home } from ".\\components\\Home";
// import { User } from ".\\components\\User";

// // class App extends React.Component{
// //     render(){
// //         return(
// //             <Router history={browserHistory}>
// //                 <Root>
// //                     <Route path='/user' component={User} />
// //                     <Route path='/home' component={Home} />
// //                 </Root>
// //             </Router>
// //         );
// //     }
// // }

// class App extends React.Component{
//     render(){
//         return(
//             <Router history={browserHistory}>
//                 <div>
//                     <Route path='/'>
//                         <Switch>
//                             <Route path='user' component={User} />
//                             <Route path='home' component={Home} />
//                         </Switch>
//                     </Route>
//                 </div>
//             </Router>
//         );
//     }
// }

// render(<App/>, window.document.getElementById("app"));



// ----------------------------------------------------------------------------------------

// import React from "react";
// import { render } from "react-dom";
// import {Router, Route, browserHistory} from "react-router";

// import { Root } from ".\\components\\Root";
// import { Home } from ".\\components\\Home";
// import { User } from ".\\components\\User";

// class App extends React.Component{
//     render(){
//         return(
//             <Router history={browserHistory}>
//                 <Route path={"user"} component={User}/>
//                 <Route path={"home"} component={Home}/>
//             </Router>
//             // <Root>
//             //     <Home></Home>
//             // </Root>
//         );
//     }
// }

// render(<App/>, window.document.getElementById("app"));






