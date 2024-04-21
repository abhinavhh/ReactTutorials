import { NavLink } from "react-router-dom";

export default function IndexInstr() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>All Instructor</h3>
                    <NavLink ClassName="active" to="./CreateInstructor">
                        <button type="button" class="btn btn-primary">Create Instructor</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}