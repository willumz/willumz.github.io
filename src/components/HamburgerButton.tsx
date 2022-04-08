import React, { Component } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
    onClick: () => undefined;
}

export default class HamburgerButton extends Component<Props> {
    render() {
        return (
            <div
                className="inline float-left ml-5 mr-2 mt-2 md:hidden"
                onClick={() => {
                    this.props.onClick();
                }}
            >
                <div className=" flex justify-center py-1 px-2 la-3x relative text-slate-800 dark:text-white dark:hover:bg-slate-700 hover:bg-gray-100 rounded-md cursor-pointer">
                    <i className="bi bi-list text-4xl dark:text-white text-slate-800"></i>
                </div>
            </div>
        );
    }
}
