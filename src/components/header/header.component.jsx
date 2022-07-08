import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ScaleIconComp from '../scale-icon/scale-icon.component';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/bread.svg';
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/myconsumptions'>MY CONSUMPTIONS</Link>
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signIn'>SIGN IN</Link>)
            }
            <Link className='option' to='/summary'>
                <ScaleIconComp />
            </Link>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(Header));