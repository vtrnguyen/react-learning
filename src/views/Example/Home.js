import React from "react";
import Color from "../HOC/Color";

class Home extends React.Component {

    render() {
        return (
            <div>
                Hello World from Homepage
            </div>
        )
    }
}

export default Color(Home);
