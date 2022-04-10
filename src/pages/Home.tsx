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
            // <ScrollContainer>
            <div className="block overflow-x-hidden relative min-h-fit">
                <div className="relative items-center my-24 lg:my-0 lg:top-0 lg:w-screen lg:min-h-screen min-h-fit">
                    <div className="relative lg:absolute lg:w-fit h-fit lg:top-[20vh] lg:left-[15%] my-7 lg:my-0">
                        {/* <Animator animation={batch(Fade(), MoveOut(0, 300))}> */}
                        <div className="transition-transform hover:scale-110">
                            <SummaryCard
                                img={pseudoCodeLogo}
                                text="A simple extension for syntax highlighting of generic pseudocode."
                                readMoreLink="/projects"
                                heightClass="h-[22rem] lg:h-[9rem]"
                                widthClass="w-[20rem] lg:w-[24rem]"
                                imgHeightClass="h-[10rem] lg:h-[65%]"
                                // disableMobileView={true}
                            />
                        </div>
                        {/* </Animator> */}
                    </div>
                    <div className="relative lg:absolute lg:w-fit h-fit lg:top-[35vh] lg:right-[20%] my-7 lg:my-0">
                        {/* <Animator animation={batch(Fade(), MoveOut(0, 200))}> */}
                        <div className="transition-transform hover:scale-110">
                            <SummaryCard
                                img={cellbotLogo}
                                text="A command parser designed for CellBot."
                                readMoreLink="/projects"
                                heightClass="h-[21rem] lg:h-[9rem]"
                                widthClass="w-[20rem] lg:w-[22rem]"
                                imgHeightClass="h-[10rem] lg:h-[65%]"
                                // disableMobileView={true}
                            />
                        </div>
                        {/* </Animator> */}
                    </div>
                    <div className="relative lg:absolute lg:w-fit h-fit lg:top-[55vh] lg:right-[50%] my-7 lg:my-0">
                        {/* <Animator animation=batch(Fade(), MoveOut(0, 100))> */}
                        <div className="transition-transform hover:scale-110">
                            <SummaryCard
                                img={keybscriptLogo}
                                text="A scripting language for keyboard input which aims to build some complexity upon the simplicity of DuckyScript."
                                readMoreLink="/projects"
                                heightClass="h-[26rem] lg:h-[12rem]"
                                widthClass="w-[20rem] lg:w-[26rem]"
                                imgHeightClass="h-[10rem] lg:h-[65%]"
                                // disableMobileView={true}
                            />
                        </div>
                        {/* </Animator> */}
                    </div>
                </div>
                {/* </ScrollPage> */}
                {/* <ScrollPage page={1}> */}
                <div className="my-48 lg:my-0 relative min-h-fit lg:min-h-screen">
                    <div className="flex items-center justify-center h-full lg:min-h-screen">
                        {/* <Animator animation={batch(Fade(), MoveIn(0, 700), Sticky())}> */}
                        <SummaryCard
                            img={profilePic}
                            text="About me...helloxity upon the simplicity of DuckyScript.A scripting language for keyboard input which aims to build some complexity upon the simplicity of DuckyScript."
                            readMoreLink="/about"
                        />
                        {/* </Animator> */}
                    </div>
                </div>
                {/* </ScrollPage> */}
            </div>
        );
    }
}
