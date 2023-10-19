import React from "react";
import DisplayAllExpenses from "./DisplayAllExpenses";
import Add from "./Add";

const Main = (props) => {
    return (
        <div className="row">
            <div className="col-9">
                <DisplayAllExpenses></DisplayAllExpenses>
            </div>
            <div className="col-3">
                <Add></Add>
            </div>
        </div>
    )
}

export default Main;