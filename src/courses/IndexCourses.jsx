import { NavLink } from "react-router-dom";
function IndexCourse() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>All Courses</h3>
                    <NavLink ClassName="active" to="./CreateCourses">
                        <button type="button" class="btn btn-primary">Create Course</button>
                    </NavLink>
                    <br />
                    <NavLink ClassName="active" to="./EditCourses">
                        <button type="button" class="btn btn-primary">Edit Course</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default IndexCourse;
