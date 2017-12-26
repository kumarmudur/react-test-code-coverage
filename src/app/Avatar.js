import React, { PropTypes } from "react";
import avatar from "./app.css";

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ avatar.avatar_name }>
                <p>
                    <em>{ this.props.text }</em>
                </p>
                <img src={ this.props.elementClass} className="img-rounded"/>
                <div className="avatar">
                    <p>Hi</p>
                </div>
            </div>
        );
    };
}

export default Avatar;


