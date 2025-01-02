import React from 'react';
import { NavLink, Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <>
        <header>
            <nav className='admin__nav'>
                <div className="container">
                    <div className="admin__nav__wrapper p-4">
                        <ul className='flex gap-5'>
                            <li>
                                <NavLink to="/">
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin">
                                    <span>Admin Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="addproducts">
                                    <span>Add products</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <Outlet />
        </>
    );
}

export default AdminLayout;
