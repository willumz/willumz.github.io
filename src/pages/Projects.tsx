/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from "react";
import Search, { SearchItemObject } from "../components/Search";

interface Props {}
interface State {
    selectedProject: SearchItemObject;
}

export default class Projects extends Component<Props, State> {
    projectItems = [
        new SearchItemObject("CellBot"),
        new SearchItemObject("Generic Pseudocode"),
        new SearchItemObject("Keybscript"),
    ];
    constructor(props: Props) {
        super(props);
        this.selectItem = this.selectItem.bind(this);
        this.state = { selectedProject: this.projectItems[0] };
    }
    selectItem(item: SearchItemObject) {
        this.setState({ selectedProject: item });
    }
    render() {
        return (
            <div className="my-12 mx-auto px-10 w-screen max-w-[60rem]">
                <Search items={this.projectItems} selectItem={this.selectItem} />
                <div>{this.state.selectedProject.title}</div>
            </div>
        );
    }
}
