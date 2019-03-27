import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                <div>    
                    <label>Email:
                    <input type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                    />
                    </label>
                    <br />
                    
                    <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                    />
                    </label>
                    <br />
                    <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;