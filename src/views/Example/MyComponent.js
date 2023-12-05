import React from 'react'
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    };

    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('>>> check data ', this.state);
    }
 
    render() {
        console.log('>>> call render: ', this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                        <input 
                            type="text" 
                            value={this.state.firstName}
                            onChange={(e) => this.handleChangeFirstName(e)}
                        >
                        </input>
                        <br />
                    <label htmlFor="lname">Last name:</label><br />
                        <input 
                            type="text" 
                            value={this.state.lastName}
                            onChange={(e) => this.handleChangeLastName(e)}
                        >
                        </input><br />
                    <input type="submit" value="submit"
                    onClick={(e) => this.handleSubmit(e)}              
                    >
                    </input>
                </form>
                <p>Tên của tôi là: {this.state.firstName}</p>
                <p>Năm nay tôi được: {this.state.lastName} tuổi</p>
                <ChildComponent name="name 1"/>
                <ChildComponent name="name 2"/>
                <ChildComponent name="name 3"/>
            </>
        )
    }

}

export default MyComponent;
