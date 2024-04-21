import { Link, NavLink } from "react-router-dom";
function IndexCourse() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>All Courses</h3>
                    <Link type="button" class="btn btn-primary" to="/courses/CreateCourses">Create Course</Link>
                    
                    <Link type="button" class="btn btn-primary ms-3" to="/courses/EditCourses">Edit Course</Link>
                    
                </div>
            </div>
        </>
    )
}
export default IndexCourse;