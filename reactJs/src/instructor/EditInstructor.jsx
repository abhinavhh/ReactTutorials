import InstructorForm from "./InstructorForm";

export default function EditInstr() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Edit Instructor</h3>
                    <InstructorForm
                        model={{
                            name:"Adarsh",
                            dateOfBirth:new Date("2003-12-18"),
                            imageURL:
                            "/home/ponnu/Pictures/january 24/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg",
                            career:`# Achievements
                            More than 20 years of Experience in the IT Industry`,
                        }}
                        onSubmit={async(values)=>{
                            await new Promise((r)=>setTimeout(r,1000));
                            alert(JSON.stringify(id,null,2));
                            alert(JSON.stringify(values,null,2));
                        }}
                    />
                </div>
            </div>
        </>
    )
}