// StudentComponent.jsx

import React, { useState, useEffect } from "react";
import Studlist from "./Stud_List2";

export default function StudentComponent() {
    const [students, setStudents] = useState({
        liststudents: [],
        listtoppers: [],
    });

    useEffect(() => {
        const timerId = setTimeout(() => {
            setStudents({
                liststudents: [
                    {
                        id: 1,
                        rollno: "$100",
                        name: "Adarsh",
                        photo: "https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    },
                    {
                        id: 2,
                        rollno: "$101",
                        name: "Abhinav",
                        photo: "https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    },
                ],
                listtoppers: [
                    {
                        id: 1,
                        rollno: "$100",
                        name: "Adarsh",
                        photo: "https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    },
                ],
            });
        }, 1000);
        return () => clearTimeout(timerId);
    }, []);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Students List</h3>
                    <Studlist students={students.liststudents} />

                    <h3>Toppers List</h3>
                    <Studlist students={students.listtoppers} />
                </div>
            </div>
        </>
    );
}
