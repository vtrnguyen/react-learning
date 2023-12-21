import React from "react";
import "./ListToDo.scss";
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        listToDo: [
            { id: 'todo1', title: 'Coding time' },
            { id: 'todo2', title: 'Watching Youtube' },
            { id: 'todo3', title: 'Cooking lunch' },
        ],
        editToDo: {},
    }

    addToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo],
        })
        toast.success(`Đã thêm ${todo.title}`);
    }

    handleDeleteBtn = (todo) => {
        let currentToDo = this.state.listToDo;
        currentToDo = currentToDo.filter(item => item.id !== todo.id);
        this.setState({
            listToDo: currentToDo,
        }) 
        toast.info(`Đã xóa ${todo.title}`);
    }

    handleEditBtn = (todo) => {
        let { editToDo, listToDo } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;

        // case save
        if (isEmptyObj === false && editToDo.id === todo.id) {
            let listToDoCopy = [...listToDo];
            let objIndex = listToDoCopy.findIndex((item => item.id === todo.id));
            listToDoCopy[objIndex].title = editToDo.title;
            this.setState({
                listToDo: listToDoCopy,
                editToDo: {}
            })
            toast.success(`Đã cập nhật thành ${editToDo.title}`)
            return;
        }

        // case edit
        this.setState({
            editToDo: todo,
        })
    }

    handleChangeEditTitle = (e) => {
        let editToDoCopy = { ...this.state.editToDo };
        editToDoCopy.title = e.target.value;
        this.setState({
            editToDo: editToDoCopy,
        })
    }

    render() {
        let { listToDo, editToDo } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;

        return (
            <>
                <p>
                    Simple To do app with origin dev
                </p>
                <div className="list-to-do-container">
                <AddToDo 
                    addToDo={ this.addToDo }    
                />
                <div className="list-to-do-content">
                    {

                        listToDo && listToDo.length > 0 &&
                            listToDo.map((item, index) => {
                                return (
                                    <div className="to-do-child" key={item.id}>
                                        { 
                                            isEmptyObj === true ? 
                                                <span>{index + 1} - {item.title} </span>
                                            :
                                                <>
                                                    {
                                                        editToDo.id === item.id ?
                                                            <span>
                                                                {index + 1} - <input value={editToDo.title} onChange={(e) => this.handleChangeEditTitle(e)}/>
                                                            </span>
                                                        :
                                                            <span>
                                                                {index + 1} - {item.title}
                                                            </span>
                                                    }
                                                </>
                                        }
                                        <button 
                                            className="edit"
                                            onClick={() => this.handleEditBtn(item)}
                                            >
                                            {
                                                isEmptyObj === false && editToDo.id === item.id ?
                                                "Save" : "Edit"
                                            }    
                                        </button>
                                        <button 
                                            className="delete" 
                                            onClick={() => this.handleDeleteBtn(item)}
                                            >Delete
                                        </button>
                                    </div>
                                )
                            })
                    }
                </div>
                </div>
            </>
        )
    }
}

export default ListToDo;