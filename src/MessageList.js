import React from 'react';
export default class MessageList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.messages.map(function (item, index) {
                        return (
                            <li className="list-group-item" key={index}>
                                {item.author}:{item.content}
                                <span className="pull-right">
                                    {item.createAt.toLocaleString()}
                                    </span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}