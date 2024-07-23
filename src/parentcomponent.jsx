import React,{ Component } from "react";
import PureComp from "./purecomponent";

class ParentCompo extends Component{
    render(){
        return(
            <div className="container">
                <PureComp />
            </div>
        )
    }
}
export default ParentCompo;