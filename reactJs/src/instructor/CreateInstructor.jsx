import InstructorForm from "./InstructorForm";

export default function CreateInstr() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Create Instructor</h3>
                    <InstructorForm
                        model={{ name:"", dateOfBirth:undefined}}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r,1000));
                            alert(JSON.stringify(values,null,2));
                        }}
                    />
                </div>
            </div>
        </>
    )
}