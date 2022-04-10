import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
    text: string;
    onClick?: () => undefined;
}

export default class SearchItem extends Component<Props> {
    uid_key = uuidv4();
    render() {
        return (
            <div
                key={this.uid_key}
                className="p-3 text-gray-800 dark:text-gray-400 hover:bg-blue-300 dark:hover:bg-blue-800"
                onClick={this.props.onClick}
            >
                {this.props.text}
            </div>
        );
    }
}
