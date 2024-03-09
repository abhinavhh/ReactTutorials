import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container">
                <NavLink className="navbar-brand" to="/">
                {/* NavLink is used to avoid the flickering of the website */}
                {/* <a class="navbar-brand" href="/"> */}
                    Student Catalogue
                {/* </a> */}
                </NavLink>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link active" to="/courses">
                            {/* <a class="nav-link active" href="/courses" aria-current="page"> */}
                                Courses
                                <span class="visually-hidden">(current)</span>
                            {/* </a> */}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}export default Menu;