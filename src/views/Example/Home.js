import React from "react";
import Color from "../HOC/Color";
import Background from "../../assets/images/test.png";
import { connect } from "react-redux";

class Home extends React.Component {

    handleDeleteUser = (user) => {
        console.log('>>> check delete: ', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props: ', this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello World from Homepage
                </div>
                <div>
                    <img 
                        src={ Background }
                        style={{ width: '200px', height: '200px', marginTop: '20px', borderRadius: '50%' }}
                    />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                    
                        listUsers.map((item, index) => {
                            return (
                                <div key={ item.id }>
                                    { index + 1 } - { item.name } 
                                    &nbsp; <button onClick={ () => this.handleDeleteUser(item) }>delete</button>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>add</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        dataRedux: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
