import StudentForm from "./StudentForm";

function CreateStud() {
    return(
        <>
            <div className="card">
            <div className="card-body">
                <h3>Create Student</h3>
                <StudentForm
                    model={{
                        name:"",
                        rollno:"",
                        isActive:false,
                        dateofBirth:undefined,
                    }}
                    onSubmit={async (values)=>{
                        await new Promise((r)=>setTimeout(r,1000));
                        alert(JSON.stringify(values,null,2));
                    }}
                />
            </div>
        </div>
        </>
    )
}export default CreateStud;
