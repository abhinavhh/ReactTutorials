import CategoryForm from "./CategoryForm";
import { useParams } from "react-router-dom";
export default function EditCateg() {
    const { id } = useParams(9);

    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Edit Category</h3>
                    <CategoryForm
                        model={{ id: id, name: "Initial Course Name"  }}
                        onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(id, null, 2));
                        alert(JSON.stringify(values, null, 2));
                        }}
                    />
                </div>
            </div>
        </>
    )
}
