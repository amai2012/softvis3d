import * as React from "react";
import { observer } from "mobx-react";
import SideBarNodeInfo from "./SideBarNodeInfo";
import SideBarLeafInfo from "./SideBarLeafInfo";
import SideBarSelectParent from "./SideBarSelectParent";
import { SceneStore } from "../../stores/SceneStore";

@observer
export default class SideBar extends React.Component<
        { sceneStore: SceneStore; selectedElement: TreeElement | null; parentElement: TreeElement | null}, any> {

    public render() {
        if (this.props.selectedElement === null) {
            return <div></div>;
        } else if (this.props.selectedElement.isNode) {
            return <div className="side-bar">
                <SideBarSelectParent sceneStore={this.props.sceneStore} parentElement={this.props.parentElement}/>
                <SideBarNodeInfo sceneStore={this.props.sceneStore} selectedElement={this.props.selectedElement}/>
            </div>;
        } else {
            return <div className="side-bar">
                <SideBarSelectParent sceneStore={this.props.sceneStore} parentElement={this.props.parentElement}/>
                <SideBarLeafInfo selectedElement={this.props.selectedElement} parentElement={this.props.parentElement}
                                 sceneStore={this.props.sceneStore}/>
            </div>;
        }
    }

}
