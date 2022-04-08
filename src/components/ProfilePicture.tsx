import React, { Component } from "react";

import profilePic from "../assets/profilepic.jpg";

interface Props {
    className: string;
}

export default class ProfilePicture extends Component<Props> {
    render() {
        return (
            <img
                src={profilePic}
                alt="profile"
                className={`${this.props.className} rounded-full mx-auto bg-gradient-to-r from-indigo-500 to-cyan-500 p-[2px]`}
            />
        );
    }
}
