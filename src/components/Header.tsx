import React, { Component } from "react";
import ProfilePicture from "./ProfilePicture";
import HoverIcon from "./HoverIcon";
import ModeSwitch from "./ModeSwitch";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";

import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "line-awesome/dist/font-awesome-line-awesome/css/all.min.css";

interface Props {
    toggleDarkMode: () => undefined;
}

export default class Header extends Component<Props> {
    render() {
        return (
            <div className="bg-gray-200 dark:bg-slate-900 w-screen h-16 sticky top-0">
                <Link to="/">
                    <ProfilePicture className="absolute my-2 left-4 w-12" />
                </Link>
                <div className="absolute left-20 h-16 w-max inline-block">
                    <HeaderButton text="Projects" link="/projects" />
                    <HeaderButton text="About" link="/about" />
                </div>
                <div className="absolute right-10 h-16 w-max inline-block">
                    <HoverIcon defaultClass="lab la-github" link="https://github.com/willumz" />
                    <ModeSwitch toggleDark={this.props.toggleDarkMode} />
                </div>
            </div>
        );
    }
}
