import React from "react";
import AddToDoComponent from "./AddToDoComponent";
import ShowListToDoComponent from "./ShowListToDoComponent";

class ToDoListComponent extends React.Component {

    state = {
        toDoList: [
            {id: 'toDo1', time: '07h00', job: 'học React', description: 'làm To do list'},
            {id: 'toDo2', time: '09h15', job: 'giải trí', description: 'xem Youtube'},
            {id: 'toDo3', time: '10h00', job: 'nấu ăn', description: 'kho thịt, nấu canh bầu'},
        ]
    }

    addJob = (job) => {
        console.log('>>> check information of job: ', job);
        this.setState({
            toDoList: [...this.state.toDoList, job],
        })
    }

    deleteAJob = (job) => {
        let currentJobToDo = this.state.toDoList;
        currentJobToDo = currentJobToDo.filter((item) => item.id !== job.id);
        this.setState({
            toDoList: currentJobToDo,
        })
    }

    render() {
        return (
            <>
                <div>To do list app</div>
                <AddToDoComponent addJob={ this.addJob } />
                <ShowListToDoComponent 
                toDoList={ this.state.toDoList }
                deleteAJob={ this.deleteAJob }
                />
            </>
        )
    }
}

export default ToDoListComponent;