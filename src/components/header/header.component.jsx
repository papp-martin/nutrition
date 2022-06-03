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

const Header = ({currentUser, history}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            {
                currentUser ?
                (<div className='signed-as'>BEJELENTKEZVE: undefined</div>)
                :
                (<div className='signed-as'> </div>)
            }
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>KIJELENTKEZÉS</div>)
                :
                (<Link className='option' to='/signIn'>BEJELENTKEZÉS</Link>)
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