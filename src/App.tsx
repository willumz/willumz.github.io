import React, { Component } from "react";
import { withCookies, Cookies } from "react-cookie";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import "./styles/App.css";

interface Props {
    cookies: Cookies;
}

interface State {
    darkMode: boolean;
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // Check cookie is defined
        if (this.props.cookies.get("dark_mode") === undefined)
            this.props.cookies.set("dark_mode", true, {
                path: "/",
                secure: true,
                sameSite: "none",
            });
        this.state = { darkMode: props.cookies.get("dark_mode") === "true" };
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }
    toggleDarkMode() {
        this.setState(prevState => ({ darkMode: !prevState.darkMode }));
        this.props.cookies.set("dark_mode", !this.state.darkMode, {
            path: "/",
            secure: true,
            sameSite: "none",
        });
        return undefined;
    }
    render() {
        return (
            <div
                className={`${
                    this.state.darkMode ? "dark bg-slate-800" : "bg-white"
                } h-fit min-h-screen`}
            >
                <Header toggleDarkMode={this.toggleDarkMode} />

                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="projects/:urlid" element={<Projects urlidPresent />} />
                </Routes>
            </div>
        );
    }
}

export default withCookies(App);

