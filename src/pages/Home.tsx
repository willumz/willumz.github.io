import React, { Component } from "react";
import SummaryCard from "../components/SummaryCard";

import profilePic from "../assets/profilepic.jpg";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="absolute top-80">
                    <SummaryCard
                        img={profilePic}
                        text="Hi there this is a test"
                        readMoreLink="/about"
                    />
                </div>
            </div>
        );
    }
}
