import React, { Component } from "react";
import SearchItem from "./SearchItem";
import SearchItemObject from "./SearchItemObject";

interface Props {
    items: SearchItemObject[];
    search: string;
    displayItems: boolean;
    selectItem: (item: SearchItemObject) => void;
}
interface State {
    hovering: boolean;
}

export default class SearchItemContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hovering: false };
    }
    onHover() {
        this.setState({ hovering: true });
    }
    offHover() {
        this.setState({ hovering: false });
    }
    insertLines(elements: JSX.Element[]) {
        let newArr: JSX.Element[] = [];
        elements.forEach((element, index) => {
            newArr.push(element);
            if (index !== elements.length - 1) {
                newArr.push(
                    <hr className="dark:border-slate-700 border-gray-200 dark:border-[0.5px] border-[1px]" />
                );
            }
        });
        return newArr;
    }
    render() {
        return (
            <div
                className={`${
                    (this.props.displayItems || this.state.hovering) &&
                    this.props.items.length !== 0
                        ? "visible"
                        : "hidden"
                } rounded-xl bg-gray-50 border-gray-200 border-[2px] dark:border-[1px] h-fit dark:bg-slate-900 dark:border-slate-700 my-5 overflow-hidden py-1`}
                onMouseEnter={() => {
                    this.onHover();
                }}
                onMouseLeave={() => {
                    this.offHover();
                }}
                onClick={() => {
                    this.offHover();
                }}
            >
                {this.insertLines(
                    this.props.items.map(item => (
                        <SearchItem
                            text={item.title}
                            onClick={() => {
                                this.props.selectItem(item);
                                return undefined;
                            }}
                        />
                    ))
                )}
            </div>
        );
    }
}
