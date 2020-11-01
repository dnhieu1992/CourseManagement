import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import user from './user.jpg';
import AdminLTELogo from './AdminLTELogo.png';

function Sidebar() {
    const adminNav = [
        { name: "Dashboard", link: "/", icon: "nav-icon fa fa-tachometer" },
        { name: "Courses", link: "/admin/courses", icon: "nav-icon fa fa-book" },
        { name: "Exams", link: "/admin/exams", icon: "nav-icon fa fa-book" },
        { name: "Questions", link: "/admin/questions", icon: "nav-icon fa fa-book" },
    ];
    const [adminNavigation, setAdminNavigation] = useState(adminNav);
    const navRender = adminNavigation.map((item) => {
        return (
            <li className="nav-item" key={item.name}>
                <Link to={item.link} className="nav-link" >
                    <i className={item.icon}></i>
                    <p>
                        {item.name}
                    </p>
                </Link>
            </li>
        );
    });
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src={AdminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style={{ "opacity": "0.8" }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={user} width="100" height="100" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {navRender}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
export default Sidebar;