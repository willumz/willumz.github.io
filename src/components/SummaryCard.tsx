import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {
    img: string;
    text: string;
    readMoreLink?: string;
    readMoreLinkExternal?: string;
    heightClass?: string;
    widthClass?: string;
    disableMobileView?: boolean;
    imgHeightClass?: string;
}

/**
 * SummaryCard
 *
 * @description a card that displays a summary of some content, with a picture and body, along with optional read more link
 *
 * @prop img - the image to be displayed
 * @prop text - the body to be displayed
 * @prop readMoreLink - (optional) the internal link to direct to
 * @prop readMoreLinkExternal - (optional) the external link to direct to
 * @prop heightClass - (optional) the tailwind height class to be applied to the card (include conditions)
 * @prop widthClass - (optional) the tailwind width class to be applied to the card (include conditions)
 * @prop disableMobileView - (optional) if true, the card will look the same on desktop as on mobile
 */
export default class SummaryCard extends Component<Props> {
    render() {
        return (
            <div
                className={
                    this.props.disableMobileView
                        ? `flex justify-center lg:justify-start w-screen md:w-auto`
                        : `flex w-screen md:w-auto justify-center lg:justify-start`
                }
            >
                <div
                    className={
                        (this.props.disableMobileView
                            ? `bg-blue-100 dark:bg-gray-900 shadow-xl rounded-xl h-fit mx-10`
                            : `bg-blue-100 dark:bg-gray-900 shadow-xl rounded-xl w-3/4 md:w-[25rem] mx-10 h-fit`) +
                        ` ${this.props.widthClass || "lg:w-[50rem]"} ${
                            this.props.heightClass || "lg:h-[25rem]"
                        }`
                    }
                >
                    <div
                        className={
                            this.props.disableMobileView
                                ? `float-left h-full`
                                : `float-top lg:float-left w-full lg:w-auto lg:h-full`
                        }
                    >
                        <div
                            className={
                                this.props.disableMobileView
                                    ? `flex items-center justify-center h-full ml-7`
                                    : `flex items-center justify-center w-full lg:w-auto lg:h-full mt-7 lg:mt-0 lg:ml-7`
                            }
                        >
                            <img
                                className={
                                    this.props.disableMobileView
                                        ? `rounded-full ${this.props.imgHeightClass || "h-[65%]"}`
                                        : `rounded-full lg:w-auto ${
                                              this.props.imgHeightClass || "w-[65%] lg:h-[65%]"
                                          }`
                                }
                                src={this.props.img}
                                alt=""
                            />
                        </div>
                    </div>
                    <div
                        className={
                            this.props.disableMobileView ? `h-full` : `w-full lg:w-auto lg:h-full`
                        }
                    >
                        <div
                            className={
                                this.props.disableMobileView
                                    ? `flex justify-center h-full items-center px-10 py-16 text-black dark:text-white`
                                    : `flex justify-center w-full lg:w-auto lg:h-full items-center px-16 py-10 lg:px-10 lg:py-16 text-black dark:text-white`
                            }
                        >
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
