/**
 * Created by viktor on 12/05/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import '../css/usersList.css'

export default class UsersList extends React.Component {

    render() {
        return (
            <div>
                <div className='listHeader'>
                    <div className='col-id'>ID</div>
                    <div className='col-name'>USER</div>
                    <div className='col-email'>EMAIL</div>
                </div>
                <ul>{this.props.users}</ul>
            </div>
        )
    }
};

UsersList.PropTypes = {
    users: PropTypes.array
};
