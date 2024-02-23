import StudentMain from "./Student";
import style from "./Student_list.module.css";
import React from "react";
function Studlist(props) {
    if (!props.students) {
        return <>LOADING......</>;
    }
    else if (props.students.length === 0) {
        return <>Loading......</>;
    }
    else
    {
        return(
            <div className={style.mainmain}>
                {props.students.map((student)=>(
                    <StudentMain {...student} key={student.id}/>
                ))}
            </div>
        );
    }
}

Studlist.studentListProps = {
    students:[],
};
export default Studlist;