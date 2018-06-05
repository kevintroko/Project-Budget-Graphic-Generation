import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';
import Profile from './components/Profile.js';
import NewProjectPage from './containers/NewProjectPage.jsx';
import EditProjectPage from './containers/EditProjectPage.jsx';
import ProjectContainer from './components/ProjectContainer.js';



const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/project',
      component: ProjectContainer
    },
    {
      path: '/newproject',
      component: NewProjectPage
    },

    {
      path: '/editproject',
      component: EditProjectPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
