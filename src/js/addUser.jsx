import React from 'react'

import {validateNameInput, validateEmailInput, validateNewEmailInModel} from './validators.js'
import '../css/addUser.css'

import Message from './message.jsx';

export default class AddUser extends React.Component {
    state = {
        addUserButtonVisible: true,
        addUserButtonDisabled: false,
        addUserFormVisible: false,
        nameValue: '',
        emailValue: ''
    };

    render() {
        return (
            <form id='add-user' onSubmit={this.handleSubmit.bind(this)}>

                {this.state.addUserButtonVisible && (
                    <button disabled={!!(this.state.addUserButtonDisabled)}
                            onClick={this.handleAdd.bind(this)}>
                        <span className="icon"></span><span className="text">Add user</span>
                    </button>
                )}

                {this.state.addUserButtonVisible && this.props.message && (
                    <Message message={this.props.message}/>
                )}

                {!this.state.addUserButtonVisible && this.state.addUserFormVisible && (
                    <div>
                        <input type='text' id='name' placeholder='Name' value={this.state.nameValue}
                               onChange={(evt) => this.handleNameChange(evt)} autoFocus={true} required/>
                        <input type='text' id='email' placeholder='Email' value={this.state.emailValue}
                               onChange={(evt) => this.handleEmailChange(evt)} required/>
                        <input type='submit' value='Submit'/>
                        {this.state.nameValue && this.state.emailValue &&
                        (
                            <div className='formsReset' onClick={this.handleReset.bind(this)}>Reset fields</div>
                        )
                        }
                    </div>
                )}
            </form>
        )
    }


    handleAdd(e) {
        if (!this.props.onAdd() && !this.props.message) (
            this.setState({
                addUserButtonVisible: false,
                addUserFormVisible: true
            })
        )
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value})
    }

    handleEmailChange(e) {
        this.setState({emailValue: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (validateNameInput(this.state.nameValue) && validateEmailInput(this.state.emailValue)) {
            let newUser = {
                id: '',
                name: this.state.nameValue,
                email: this.state.emailValue
            };
            this.props.onFormSubmit(newUser)
        }
        this.setState({
            addUserButtonVisible: true,
            addUserFormVisible: false
        })

    }

    handleReset(e) {
        e.preventDefault();
        this.setState({nameValue: '', emailValue: ''});
    }

};
