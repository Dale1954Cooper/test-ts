import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

import {IUser} from '../types/types';

const UserItemsPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
            setUser(response.data)
        } catch (e) {
            alert(e);
        }
    }

    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={() => goBack()}>BACK</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemsPage;