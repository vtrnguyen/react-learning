import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: 'job1', title: 'Developers', salary: '500 $'},
            {id: 'job2', title: 'Testers', salary: '400 $'},
            {id: 'job3', title: 'Project Managers', salary: '1000 $'},
        ]
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
                <ChildComponent 
                    name={ this.state.firstName + ' ' + this.state.lastName } 
                    arrJobs={ this.state.arrJobs }
                />
            </>
        )
    }

}

export default MyComponent;
