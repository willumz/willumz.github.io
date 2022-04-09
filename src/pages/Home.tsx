import React, { Component } from "react";
import SummaryCard from "../components/SummaryCard";

import pseudoCodeLogo from "../assets/pseudocode-logo.png";
import cellbotLogo from "../assets/cellbot-logo.png";
import keybscriptLogo from "../assets/keybscript-logo.png";
import profilePic from "../assets/profilepic.jpg";
import {
    Animator,
    batch,
    Fade,
    FadeIn,
    MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
} from "react-scroll-motion";

export default class Home extends Component {
    render() {
        return (
            <ScrollContainer>
                <ScrollPage page={0}>
                    <div className="absolute top-24 md:top-0 md:w-screen md:h-screen">
                        <div className="relative md:absolute md:w-fit md:h-fit md:top-[20vh] md:left-[15%] my-7 md:my-0">
                            <Animator animation={batch(Fade(), MoveOut(0, 300))}>
                                <div className="md:top-[20vh] md:left-[15%] transition-transform hover:scale-110">
                                    <SummaryCard
                                        img={pseudoCodeLogo}
                                        text="A simple extension for syntax highlighting of generic pseudocode."
                                        readMoreLink="/projects"
                                        heightClass="h-[12rem] md:h-[9rem]"
                                        widthClass="w-[26rem] md:w-[24rem]"
                                        disableMobileView={true}
                                    />
                                </div>
                            </Animator>
                        </div>
                        <div className="relative md:absolute md:w-fit md:h-fit md:top-[35vh] md:right-[20%] my-7 md:my-0">
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className="transition-transform hover:scale-110">
                                    <SummaryCard
                                        img={cellbotLogo}
                                        text="A command parser designed for CellBot."
                                        readMoreLink="/projects"
                                        heightClass="h-[12rem] md:h-[9rem]"
                                        widthClass="w-[26rem] md:w-[22rem]"
                                        disableMobileView={true}
                                    />
                                </div>
                            </Animator>
                        </div>
                        <div className="relative md:absolute md:w-fit md:h-fit md:top-[55vh] md:right-[50%] my-7 md:my-0">
                            <Animator animation={batch(Fade(), MoveOut(0, 100))}>
                                <div className="transition-transform hover:scale-110">
                                    <SummaryCard
                                        img={keybscriptLogo}
                                        text="A scripting language for keyboard input which aims to build some complexity upon the simplicity of DuckyScript."
                                        readMoreLink="/projects"
                                        heightClass="h-[12rem] md:h-[12rem]"
                                        widthClass="w-[26rem] md:w-[26rem]"
                                        disableMobileView={true}
                                    />
                                </div>
                            </Animator>
                        </div>
                    </div>
                </ScrollPage>
                <ScrollPage page={1}>
                    <div className="flex items-center justify-center h-full">
                        <Animator animation={batch(Fade(), MoveIn(0, 700), Sticky())}>
                            <SummaryCard
                                img={profilePic}
                                text="About me...helloxity upon the simplicity of DuckyScript.A scripting language for keyboard input which aims to build some complexity upon the simplicity of DuckyScript."
                                readMoreLink="/about"
                            />
                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        );
    }
}
