import { Link, NavLink } from "react-router-dom";
function IndexCateg() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>All Category</h3>
                    <Link type="button" class="btn btn-primary" to="/categories/CreateCategory">Create Category</Link>
                    <Link type="button" class="btn btn-primary ms-3" to="/categories/EditCategory">Edit Category</Link>
                </div>
            </div>
        </>
    )
}
export default IndexCateg;