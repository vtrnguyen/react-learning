import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: 'job1', title: 'Developers', salary: '500 $'},
            {id: 'job2', title: 'Testers', salary: '400 $'},
            {id: 'job3', title: 'Project Managers', salary: '1000 $'},
        ]
    };

    addNewJob = (job) => {
        console.log('>>> check job from parent: ', job);
        // toán tử [...arr, a] dùng để nối mảng arr với phần tử a 
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
 
    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob}/>
                <ChildComponent 
                    arrJobs={ this.state.arrJobs }
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )
    }

}

export default MyComponent;
