import React from "react";
import Color from "../HOC/Color";
import Background from "../../assets/images/test.png";

class Home extends React.Component {

    render() {
        return (
            <>
                <div>
                    Hello World from Homepage
                </div>
                <div>
                    <img 
                        src={ Background }
                        style={{ width: '200px', height: '200px', marginTop: '20px', borderRadius: '50%' }}
                    />
                </div>
            </>
        )
    }
}

export default Color(Home);
