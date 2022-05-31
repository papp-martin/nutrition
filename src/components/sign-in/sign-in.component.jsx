import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.error(error);
        }

        this.setState({ email: '', password: '' })
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>Már van fiókom</h2>
                <span>Belépés email-el és jelszóval</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit'> Belépés </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Belépés Google fiókkal</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;