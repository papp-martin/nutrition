import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import ScaleIconComp from '../scale-icon/scale-icon.component';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/bread.svg';
import './header.styles.scss';

const Header = ({currentUser}) => {
    //console.log(currentUser.displayName);
    return(
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
            <ScaleIconComp />
        </div>
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);