/**
 * Created by viktor on 11/05/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {validateModelLength, validateNewEmailInModel} from './validators'

import {MESSAGES} from './messages.js'

import '../css/main.css'

import UsersList from './usersList.jsx'
import UserItem from './userItem.jsx'
import AddUser from './addUser.jsx'

class UsersComponent extends React.Component {
    state = {
        users: [
            {id: 1, name: 'Jack Black', email: 'jackblack@email.com'},
            {id: 2, name: 'Jenny Brown', email: 'jbrown@inbox.me'},
            {id: 3, name: 'Jack Black', email: 'jackblack@email.com'},
            {id: 4, name: 'Jenny Brown', email: 'jbrown@inbox.me'},
            {id: 5, name: 'Jack Black', email: 'jackblack@email.com'},
            {id: 6, name: 'Jenny Brown', email: 'jbrown@inbox.me'},
            {id: 7, name: 'Jack Black', email: 'jackblack@email.com'},
            {id: 8, name: 'Jenny Brown', email: 'jbrown@inbox.me'},
            {id: 9, name: 'Jack Black', email: 'jackblack@email.com'},
            {id: 10, name: 'Jenny Brown', email: 'jbrown@inbox.me'}
        ],
        message: ''
    };

    render() {
        let users = this.state.users.map((user, index) => {
            return (
                <UserItem user={user} key={index} onDelete={this.onDelete.bind(this)}/>
            )
        });

        return (
            <div>
                <AddUser onFormSubmit={this.onFormSubmit.bind(this)} onAdd={this.onAdd.bind(this)} message={this.state.message}/>
                <UsersList users={users}/>
            </div>
        )
    }

    onDelete(item) {
        let updatedUsersList = this.state.users.filter((val) => {
            return item !== val
        });
        this.updateIds(updatedUsersList);
        this.setState({
            users: updatedUsersList,
        });
        if (validateModelLength(this.state.users)) {
            this.setState({
                message: ''
            })
        }
    }

    onAdd() {
        if (!validateModelLength(this.state.users)) {
            this.setState({ error: MESSAGES.error.limit })
        } else {
            this.setState({ error: '' })
        }
    }

    onFormSubmit(item) {
        let updatedUsersList = this.state.users;
        if (validateNewEmailInModel(this.state.users, item)) {
            updatedUsersList.unshift(item);
            this.updateIds(updatedUsersList);
            updatedUsersList.map((user, index) => {
                console.log(user, index)
            });
            this.setState({
                users: updatedUsersList,
                message: MESSAGES.success
            })
        } else {
            this.setState({message: MESSAGES.error.email});
        }
    }

    updateIds(list) {
        list.forEach((user, index) => {
            return user.id = index + 1
        })
    }

}

ReactDOM.render(<UsersComponent />, document.getElementById('app'));
