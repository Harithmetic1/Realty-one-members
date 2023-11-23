import { Link, Head } from '@inertiajs/react';

import EmployeeCard from '@/Components/EmployeeCard';
import { useEffect, useState } from 'react';
import { all } from 'axios';
import Navbar from '@/Components/Navbar';

export default function Welcome({ auth, users, laravelVersion, phpVersion }) {

    const [filterBy, setFilterBy] = useState('all');
    const [filteredUsers, setFilteredUsers] = useState(users);


    useEffect(() => {
        async function fetchUsers() {
        try {
            let allUsers = await fetch('/api/users');
            allUsers = allUsers.json();
            console.log(allUsers, users, auth, laravelVersion);
        } catch (error) {
            console.log(error);
        }
    }
       fetchUsers();
    }, []);

    const handleFilterUsers = () => {
        if (filterBy === 'all') {
            setFilteredUsers(users);
        } else {
            setFilteredUsers(users.filter((user) => user.division === filterBy));
        }

        console.log(filteredUsers);
    }

    useEffect(() => {
        handleFilterUsers();
    }, [filterBy]);

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center selection:bg-red-500 selection:text-white">
                <div className="mx-auto w-full flex flex-col justify-center items-center">
                    <section className='page-header bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 w-full pt-20 p-14'>
                <Navbar auth={auth} />

                      <div className="header w-full text-left">
                        <h1 className='text-3xl font-bold'>
                            Meet The Team<span className="text-red-500">.</span>
                        </h1>
                        <p>Get to know Key One Reality</p>
                    </div>  
                    </section>
                    
                    <section className='the-team max-w-7xl w-full py-12 lg:p-8'>
                        <div className="meet-the-team w-full flex flex-col">
                            <div className="filters px-4 sm:px-0">
                                <div className="filter flex flex-wrap flex-row gap-4">
                                    <button className="filter-btn" onClick={() => setFilterBy('all')}>All</button>
                                    <button className="filter-btn" onClick={() => setFilterBy('Management')} >Management</button>
                                    <button className="filter-btn" onClick={() => setFilterBy('Interior Design')} >Interior Design</button>
                                    <button className="filter-btn" onClick={() => setFilterBy('Property Management')}>Property Management</button>
                                </div>
                            </div>

                            <div className="employee-cards grid gap-4 pt-10 px-4 sm:px-0">
                                {
                                    filteredUsers.map((user) => {
                                        return (
                                            <EmployeeCard key={user.id} {...user} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    
                </div>
            </div>

        </>
    );
}