import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {
    text: string;
    link?: string;
    externalLink?: string;
}

export default class HeaderButton extends Component<Props> {
    render() {
        let className =
            "inline float-left mx-1 text-xl py-1 px-4 my-3 dark:text-white text-slate-800 dark:hover:bg-slate-700 hover:bg-gray-100 rounded-md cursor-pointer";
        let linkTag = <div className={className}>{this.props.text}</div>;
        if (this.props.link !== undefined || this.props.externalLink !== undefined) {
            linkTag =
                this.props.link !== undefined ? (
                    <Link className={className} to={this.props.link}>
                        {this.props.text}
                    </Link>
                ) : (
                    <a className={className} href={this.props.externalLink}>
                        {this.props.text}
                    </a>
                );
        }
        return linkTag;
    }
}
