import React, { Component } from "react";
import pseudocodeLogo from "../../assets/pseudocode-logo.png";

export default class Pseudocode extends Component {
    render() {
        return (
            <div className="rounded-xl bg-gray-50 border-gray-200 border-[2px] dark:border-[1px] h-fit dark:bg-slate-900 dark:border-slate-700 p-5">
                <h1 className="text-2xl md:text-7xl text-black dark:text-white mt-10">
                    Generic Pseudocode
                </h1>
                <img className="my-24 rounded-md" src={pseudocodeLogo} alt="pseudocode" />
            </div>
        );
    }
}
