import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './ListUser.scss';

const ListUser = () => {
    const [listUsers, setListUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                setListUsers(res && res.data && res.data.data ? res.data.data : []);
            });
    }, []);

    // xử lý sự kiện click để render ra Detail User
    const handleViewDetailUser = (user) => {
        navigate(`/users/${user.id}`);
    }

    return (
        <div className="list-user-container">
            <div className="title">
                Fetch all list users
            </div>
            <div className="list-user-content">
                {
                    listUsers && listUsers.length > 0 &&
                    listUsers.map((user, index) => (
                        <div
                            className="child"
                            onClick={() => handleViewDetailUser(user)}
                            key={user.id}
                        >
                            {index + 1} - {user.first_name} {user.last_name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ListUser;
