import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Trung Nguyen',
        age: 19,
    };
    
    render() {
        return (
            <div>
                hello guys, my name is {this.state.name} and now i am {this.state.age} years old
            </div>
        )
    }

}

export default MyComponent;
