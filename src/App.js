import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/homepage/homepage.component';
import SignInSignUpPage from './pages/signIn-signUp-page/signIn-signUp.component';
import NutritionsPage from './pages/nutritions-page/nutritions-page-component';
import Header from './components/header/header.component';
import SummaryPage from './pages/summary/summary.component';
import ConsumptionPage from './pages/consumptions/consumptions.component';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render () {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/allProducts' component={NutritionsPage} />
          <Route exact path='/signIn' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage />)} />
          <Route exact path='/summary' component={SummaryPage} />
          <Route exact path='/myconsumptions' component={ConsumptionPage} />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
