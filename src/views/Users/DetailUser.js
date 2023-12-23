import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DetailUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(res.data.data || {});
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu người dùng:", error);
      }
    };

    fetchData();
  }, [id]);

  const isEmptyObj = Object.keys(user).length === 0;

  const handleBackButton = () => {
    navigate('/users');
  }

  return (
    <>
      {!isEmptyObj && (
        <>
          <div>Tên người dùng: {user.first_name} {user.last_name}</div>
          <div>Email người dùng: {user.email}</div>
          <div>
            <img src={user.avatar} alt={`Ảnh đại diện của ${user.first_name} ${user.last_name}`} />
          </div>
          <div>
            <button
                type="button"
                onClick={() => handleBackButton()}>
                Back
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default DetailUser;
