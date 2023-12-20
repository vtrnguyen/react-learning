import React from "react";

class AddToDoComponent extends React.Component {

    state = {
        time: '',
        job: '',
        description: ''
    }

    handleChangeTime = (e) => {
        this.setState({
            time: e.target.value
        })
    }

    handleChangeJob = (e) => {
        this.setState({
            job: e.target.value
        })
    }

    handleChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.time || !this.state.job || !this.state.description) {
            alert('Không được bỏ trống bất kỳ thông tin nào!');
            return;
        }
        this.props.addJob({
            id: 'toDo' + Math.floor(Math.random() * 10),
            time: this.state.time,
            job: this.state.job,
            description: this.state.description
        })
        this.setState({
            time: '',
            job: '',
            description: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="time">Giờ</label><br/>
                        <input
                        type="text"
                        value={this.state.time}
                        onChange={(e) => this.handleChangeTime(e)}
                        >
                        </input>
                        <br/>
                    <label htmlFor="job">Việc cần làm</label><br/>
                        <input
                        type="text"
                        value={this.state.job}
                        onChange={(e) => this.handleChangeJob(e)}
                        >
                        </input>
                        <br/>
                    <label htmlFor="description">Mô tả công việc</label><br/>
                        <input
                        type="text"
                        value={this.state.description}
                        onChange={(e) => this.handleChangeDescription(e)}
                        >
                        </input>
                        <br/>
                        <input type="submit" value="submit"
                        onClick={(e) => this.handleSubmit(e)}
                        >
                        </input>
                </form>
            </>
        )
    }
}

export default AddToDoComponent;