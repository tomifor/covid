import React from "react";

export default class DarkModeSwitch extends React.Component {


    render() {
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" checked/>
                    <span>
                        <em/>
                        <strong/>
                    </span>
                </label>
            </div>
        )
    }
}
