/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component, ReactElement } from "react";
import Cmdcell from "../components/projects/Cmdcell";
import Keybscript from "../components/projects/Keybscript";
import Pseudocode from "../components/projects/Pseudocode";
import Search, { ItemIdTitle, SearchItemCollection, SearchItemObject } from "../components/Search";

interface Props {
    urlidPresent?: boolean;
}
interface State {
    selectedProject: SearchItemObject<ItemData>;
}

interface ItemData {
    urlid: string;
    component: React.ReactElement;
}

export default class Projects extends Component<Props, State> {
    projectItems = new SearchItemCollection<ItemData>();
    constructor(props: Props) {
        super(props);
        // Add items to the search collection
        this.projectItems.newItem("cmdcell", { urlid: "cmdcell", component: <Cmdcell /> });
        this.projectItems.newItem("Generic Pseudocode", {
            urlid: "pseudocode",
            component: <Pseudocode />,
        });
        this.projectItems.newItem("keybscript", { urlid: "keybscript", component: <Keybscript /> });
        //
        this.selectItem = this.selectItem.bind(this);
        let selectedProject = this.projectItems.items[0];
        if (this.props.urlidPresent) {
            selectedProject =
                this.projectItems.items.find(item => {
                    console.log(item.data ? item.data.urlid : "no urlid");
                    if (item.data !== undefined) {
                        console.log(item.data.urlid);
                        return window.location.hash.split("/")[2] === item.data.urlid;
                    }
                    return true;
                }) || this.projectItems.items[0];
        }
        this.state = { selectedProject };
    }
    selectItem(item: ItemIdTitle) {
        let selected = this.projectItems.getById(item.id);
        if (selected !== undefined) this.setState({ selectedProject: selected });
    }
    render() {
        return (
            <div className="my-12 mx-auto px-10 w-screen max-w-[60rem]">
                <Search items={this.projectItems.getAllIdTitle()} selectItem={this.selectItem} />
                <div className="my-10">{this.state.selectedProject.data.component}</div>
            </div>
        );
    }
}
