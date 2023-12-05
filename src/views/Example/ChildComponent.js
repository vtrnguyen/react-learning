import React from 'react'

class ChildComponent extends React.Component {

    render() {
        return (
            <>
                <div>My name is: {this.props.name}</div>
            </>
        )
    }

}

export default ChildComponent;
