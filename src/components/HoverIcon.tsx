import React, { Component } from "react";

import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "line-awesome/dist/font-awesome-line-awesome/css/all.min.css";

interface Props {
    defaultClass: string;
    hoveredClass?: string;
    link?: string;
}
interface State {
    hovered: boolean;
}

export default class HoverIcon extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hovered: false };
    }
    toggleHover() {
        this.setState(prevState => ({ hovered: !prevState.hovered }));
    }
    render() {
        return (
            <div
                onClick={() => {
                    if (this.props.link !== undefined) window.location.href = this.props.link;
                }}
                className="inline float-left mx-1"
            >
                <i
                    className={`${
                        this.state.hovered && this.props.hoveredClass !== undefined
                            ? this.props.hoveredClass
                            : this.props.defaultClass
                    } ${
                        this.props.link !== undefined ? "cursor-pointer" : "cursor-default"
                    } la-3x my-2 relative float-left inline text-slate-800 dark:text-white dark:hover:bg-clip-text dark:hover:bg-gradient-to-br dark:hover:from-indigo-500 dark:hover:to-cyan-500 dark:hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 hover:text-transparent`}
                    onMouseEnter={() => this.toggleHover()}
                    onMouseLeave={() => this.toggleHover()}
                ></i>
            </div>
        );
    }
}
