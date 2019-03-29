import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        let fnameField = null;
        let modalTitle = null;
        let modalDescription = null;
        let authSpan = null;

        if (this.props.formType === 'Register') {
            modalTitle = <h1>Create your account</h1>
            modalDescription = <p className='reg-text'>Registration is easy.</p>
            authSpan = <span className='auth-star'>*</span>
            fnameField = (
                <>
                    <label>First name {authSpan}
                    <br></br>
                        
                        <input type="text"
                            value={this.state.first_name.charAt(0).toUpperCase() + this.state.first_name.slice(1)}
                            onChange={this.handleChange('first_name')}
                        />
                    </label>
                    <br />
                </>
            );
        } else {
            modalTitle = <h1>Sign in to continue</h1>
        }

        let emailError = null;
        let nameError = null;
        let passwordError = null;
        let loginError = null;

        this.props.errors.forEach(error => {
            if (error.includes('Email')) {
                emailError = error;
            } else if (error.includes('Password')) {
                passwordError = error;
            } else if (error.includes('/')) {
                loginError = error;
            } else {
                nameError = error;
            }
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                <div>
                    {modalTitle}

                    {modalDescription}
                    <p className='error'>{loginError}</p>
                    <label>Email address {authSpan}
                    <br></br>
                    <input type="email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                    />
                    </label>
                    <p className='error'>{emailError}</p>
                    <br />

                    {fnameField}
                    <p className='error'>{nameError}</p>

                    <label>Password {authSpan}
                    <br></br>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                    />
                    </label>
                    <p className='error'>{passwordError}</p>
                    <br />

                    <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;