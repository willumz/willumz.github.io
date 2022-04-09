import React, { Component } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Cookies, withCookies } from "react-cookie";

interface Props {
    toggleDark: () => undefined;
    cookies: Cookies;
}

interface State {
    darkMode: boolean;
}

class ModeSwitch extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { darkMode: props.cookies.get("dark_mode") === "true" };
    }
    toggleDarkMode() {
        this.setState(prevState => ({ darkMode: !prevState.darkMode }));
        return undefined;
    }
    render() {
        return (
            <div className="inline float-left">
                <div className="rounded-lg relative my-2 bg-white dark:bg-slate-800 w-12 h-12 flex items-center justify-center transition">
                    <div
                        className="transition hover:scale-110 cursor-pointer"
                        onClick={() => {
                            this.props.toggleDark();
                            this.toggleDarkMode();
                        }}
                    >
                        <i
                            className={`bi bi-${
                                this.state.darkMode ? "moon" : "sun"
                            }-fill text-2xl dark:text-white text-slate-800`}
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withCookies(ModeSwitch);
