import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        title: '',
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value,
        })
    }
    
    handleClickAddBtn = (e) => {
        if (!this.state.title) {
            toast.warning("Không được để trống thông tin");
            return;
        }
        this.props.addToDo({
            id: Math.floor(Math.random() * 10),
            title: this.state.title,
        })
        this.setState({
            title: '',
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-to-do">
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => this.handleChangeTitle(e)}
                    />
                    <button 
                        type="button" 
                        className="add"
                        onClick={(e) => this.handleClickAddBtn(e)}
                        >Add
                    </button>
            </div>
        )
    }

}

export default AddToDo;