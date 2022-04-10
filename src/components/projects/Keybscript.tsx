import React, { Component } from "react";
import keybscriptLogo from "../../assets/keybscript-logo.png";

export default class Keybscript extends Component {
    render() {
        return (
            <div className="rounded-xl bg-gray-50 border-gray-200 border-[2px] dark:border-[1px] h-fit dark:bg-slate-900 dark:border-slate-700 p-5">
                <h1 className="text-2xl md:text-7xl text-black dark:text-white mt-10">
                    keybscript
                </h1>
                <img className="my-24 rounded-md" src={keybscriptLogo} alt="keybscript" />
            </div>
        );
    }
}
