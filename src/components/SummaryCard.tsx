import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {
    img: string;
    text: string;
    readMoreLink?: string;
    readMoreLinkExternal?: string;
}

export default class SummaryCard extends Component<Props> {
    render() {
        return (
            <div className="flex w-screen justify-center md:justify-start">
                <div className="bg-blue-100 dark:bg-gray-900 shadow-xl rounded-xl w-3/4 md:w-[25rem] mx-10 h-fit lg:w-[50rem] lg:h-[25rem]">
                    <div className="float-top lg:float-left w-full lg:w-auto lg:h-full">
                        <div className="flex items-center justify-center w-full lg:w-auto lg:h-full mt-7 lg:mt-0 lg:ml-7">
                            <img
                                className="rounded-full w-[65%] lg:w-auto lg:h-[65%]"
                                src={this.props.img}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-auto lg:h-full">
                        <div className="flex justify-center w-full lg:w-auto lg:h-full items-center px-15 py-10 lg:px-10 lg:py-15 text-black dark:text-white">
                            <p>
                                {this.props.text}
                                <br />
                                {this.props.readMoreLink !== undefined ? (
                                    <Link
                                        className="text-blue-600 dark:text-blue-400"
                                        to={this.props.readMoreLink}
                                    >
                                        Read more...
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {this.props.readMoreLinkExternal !== undefined ? (
                                    <a
                                        className="text-blue-600 dark:text-blue-400"
                                        href={this.props.readMoreLinkExternal}
                                    >
                                        Read more...
                                    </a>
                                ) : (
                                    ""
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
