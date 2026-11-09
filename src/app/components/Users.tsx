import React, { use } from 'react';




const Users = ({usersPromise}) => {
    const users = use(usersPromise())
    return (
        <div>
            <h1>users in the component : {users.length}</h1>
            {
                users.map ((user => <li key={user.id}>{user.name}:{user.email}</li>))
            }
        </div>
    );
};

export default Users;