/**
 * Created by viktor on 11/05/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import '../css/userItem.css'

export default class UserItem extends React.Component {
    static defaultProps = {
        user: {}, onDelete: null
    };

    render() {
        return (
            <li>
                <div className='col-id'>
                    <div>{this.props.user.id}</div>
                </div>
                <div className='col-name'>{this.props.user.name}</div>
                <div className='col-email'>{this.props.user.email}</div>
                <div className='col-delete' onClick={this.handleDelete.bind(this)}/>
            </li>
        )
    }

    handleDelete() {
        this.props.onDelete(this.props.user)
    }
};

UserItem.PropTypes = {
    user: PropTypes.object,
    onDelete: PropTypes.func
};
