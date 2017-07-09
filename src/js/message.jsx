/**
 * Created by viktor on 15/05/2017.
 */
import React from 'react';
import '../css/message.css';

export default class Message extends React.Component {
    render() {
        let messageClassName = `message ${this.props.message.type}`;
        return (
            <div className={messageClassName}>
                {this.props.message.txt}
            </div>
        )
    }
}
