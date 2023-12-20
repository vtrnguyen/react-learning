import React from "react";

class ShowListToDoComponent extends React.Component {
    
    state = {
        isShowed: false,
    }

    handleShowHide = () => {
        this.setState({
            isShowed: !this.state.isShowed,
        })
    }

    handleDeleteClicked = (job) => {
        this.props.deleteAJob(job);
    }

    render() {
        let { toDoList } = this.props;
        let { isShowed } = this.state;
        return (
            <>
                {
                    isShowed === false ?
                        <div>
                            <button onClick={() => this.handleShowHide()}>Show</button>
                        </div>
                        :
                        <>
                            <div className="toDoList">
                        {
                            toDoList.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                       - Vào lúc {item.time} tôi sẽ {item.job} ({item.description}) - <><span onClick={() => this.handleDeleteClicked(item)}>xóa</span></>
                                    </div>
                                )
                            })
                        }
                            </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                        </>
                }
            </>           
        )
    }

}

export default ShowListToDoComponent;