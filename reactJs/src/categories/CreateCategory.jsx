import CategoryForm from "./CategoryForm";

export default function CreateCateg() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Create Category</h3>
                    <CategoryForm
                        model={{name: ""}}
                        onSubmit={async (values)=>{
                            await new Promise((r)=>setTimeout(r,1000));
                            alert(JSON.stringify(values,null,2));
                        }}/>
                </div>
            </div>
        </>
    )
}