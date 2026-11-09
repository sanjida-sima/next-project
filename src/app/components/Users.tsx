import React, { use } from 'react';

type User = {
    id: number;
    name: string;
    email: string;
};

type UsersProps = {
    usersPromise: Promise<User[]>;
};

const Users = ({ usersPromise }: UsersProps) => {

    const users = use(usersPromise);

    return (
        <div>
            <h1>Users in the component: {users.length}</h1>

            {
                users.map(user => (
                    <li key={user.id}>
                        {user.name}: {user.email}
                    </li>
                ))
            }
        </div>
    );
};

export default Users;