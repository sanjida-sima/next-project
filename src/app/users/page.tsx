import React, { Suspense } from 'react';
import Users from '../components/Users';


const usersPromise = async() => {
    const data = await fetch('http://localhost:5000/users');
    return data.json();
}

const UsersPage =async () => {
    
    return (
        <div>
            <h1>users data coming soon : </h1>
            <Suspense fallback = {<h2>Loading...</h2>}>
            <Users usersPromise ={usersPromise} ></Users>
            </Suspense>
        </div>
    );
};

export default UsersPage;