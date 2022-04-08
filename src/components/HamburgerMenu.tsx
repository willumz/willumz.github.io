import React, { Component } from "react";
import HamburgerMenuButton from "./HamburgerMenuButton";

interface Props {
    hidden: boolean;
    closeMenu: () => undefined;
}

export default class HamburgerMenu extends Component<Props> {
    render() {
        return (
            <div
                className={`w-screen h-screen bg-gray-200 dark:bg-slate-900 md:hidden ${
                    this.props.hidden ? "hidden" : "visible"
                }`}
            >
                <div className="absolute top-24 px-3 w-[90%]">
                    <HamburgerMenuButton
                        text="About"
                        link="/about"
                        onClick={this.props.closeMenu}
                    />
                    <HamburgerMenuButton
                        text="Projects"
                        link="/projects"
                        onClick={this.props.closeMenu}
                    />
                </div>
            </div>
        );
    }
}
