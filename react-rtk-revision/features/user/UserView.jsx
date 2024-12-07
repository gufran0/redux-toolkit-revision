import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div> : null}
            {!loading && users.length ? (
                <ul>
                    {users.map((user, index) => (
                        <li key={user.id}>{user?.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default UserView;
