import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title</label><br />
                        <input 
                            type="text" 
                            value={this.state.title}
                            onChange={(e) => this.handleChangeTitleJob(e)}
                        >
                        </input>
                        <br />
                    <label htmlFor="lname">Salary</label><br />
                        <input 
                            type="text" 
                            value={this.state.salary}
                            onChange={(e) => this.handleChangeSalary(e)}
                        >
                        </input>
                        <br />
                    <input type="submit" value="submit"
                    onClick={(e) => this.handleSubmit(e)}              
                    >
                    </input>
                </form>
            </>
        )
    }

}

export default AddComponent;