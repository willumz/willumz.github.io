import React, { Component } from "react";
import profilePic from "../assets/profilepic.jpg";
import ProfilePicture from "../components/ProfilePicture";

export default class About extends Component {
    render() {
        return (
            <div>
                <ProfilePicture className="h-36 md:h-64 my-4" />
                <hr className="w-5/6 mx-auto bg-gradient-to-r to-transparent from-transparent via-slate-800 h-0 py-[0.5px] border-transparent my-4 dark:via-gray-400 border-1"></hr>
            </div>
        );
    }
}
