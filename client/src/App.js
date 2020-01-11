import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Landing from './components/layout/Landing'
import Alert from './components/layout/Alert'
import Posts from './components/posts/Post'
import PrivateRoute from './components/routing/PrivateRoute'
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

//style
import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}



const App = () =>{
  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelector("body").classList.add("loaded")
      document.querySelector("nav").classList.add("nav2")
     })
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
//   return(
//   <Provider store={store}>
//   <Router>
//     <Fragment>
//     <Navbar />
//       <Route exact path='/' component = { Landing } />
//         < Alert />
//         <Switch>
//           <Route exact path = '/register' component = { Register }/>
//           <Route exact path = '/login' component = { Login }/>
//           <PrivateRoute exact path = '/posts' component = {Posts} />
//         </Switch>
    
//     </Fragment>
//   </Router>
//   </Provider>
// )
}

export default App


// import React, { Fragment, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';
// import Routes from './components/routing/Routes';

// // Redux
// import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

// import './App.css';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

// const App = () => {
//   useEffect(() => {
//     store.dispatch(loadUser());
//   }, []);

//   return (
//     <Provider store={store}>
//       <Router>
//         <Fragment>
//           <Navbar />
//           <Switch>
//             <Route exact path='/' component={Landing} />
//             <Route component={Routes} />
//           </Switch>
//         </Fragment>
//       </Router>
//     </Provider>
//   );
// };

// export default App;