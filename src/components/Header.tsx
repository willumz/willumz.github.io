import React, { Component } from "react";
import ProfilePicture from "./ProfilePicture";
import HoverIcon from "./HoverIcon";
import ModeSwitch from "./ModeSwitch";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";

import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "line-awesome/dist/font-awesome-line-awesome/css/all.min.css";

interface Props {
    toggleDarkMode: () => undefined;
}

interface State {
    menuOpen: boolean;
}

export default class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { menuOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
        return undefined;
    }
    render() {
        return (
            <div className="bg-blue-50 dark:bg-slate-900 h-16 sticky top-0 z-50">
                <Link to="/">
                    <ProfilePicture className="absolute my-2 left-4 w-12" />
                </Link>
                <div className="absolute left-20 h-16 w-max inline-block invisible md:visible">
                    <HeaderButton text="Projects" link="/projects" />
                    <HeaderButton text="About" link="/about" />
                </div>
                <div className="absolute right-3 md:right-10 h-16 w-max inline-block">
                    <HoverIcon defaultClass="lab la-github" link="https://github.com/willumz" />
                    <ModeSwitch toggleDark={this.props.toggleDarkMode} />
                    <HamburgerButton onClick={this.toggleMenu} />
                </div>
                <HamburgerMenu hidden={!this.state.menuOpen} closeMenu={this.toggleMenu} />
            </div>
        );
    }
}
