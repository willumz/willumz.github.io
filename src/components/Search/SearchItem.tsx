import React, { Component } from "react";

interface Props {
    text: string;
    onClick?: () => undefined;
}

export default class SearchItem extends Component<Props> {
    render() {
        return (
            <div
                className="p-3 text-gray-800 dark:text-gray-400 hover:bg-blue-300 dark:hover:bg-blue-800"
                onClick={this.props.onClick}
            >
                {this.props.text}
            </div>
        );
    }
}
