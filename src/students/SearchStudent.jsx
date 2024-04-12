import React from 'react';
import { Formik, Form, Field } from 'formik';
import ButtonSubmit from '../assets/ButtonSubmit';
import { Link } from 'react-router-dom';

function SearchStud() {
    const initValues = {
        name: "",
        courseId: 0,
        activeList: false,
        topperList: false,
    };

    const courses = [
        { id: 1, name: "Full Stack Development" },
        { id: 2, name: "Core Java Development" },
    ];

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3>All Students</h3>
                    <Formik
                        initialValues={initValues}
                        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    >
                        {(formikProps) => (
                            <Form>
                                <div className="row gx-3 align-items-center">
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Name of the Student"
                                            {...formikProps.getFieldProps("name")}
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <select
                                            className="form-select"
                                            {...formikProps.getFieldProps("courseId")}
                                        >
                                            <option value="0">--Select the Course--</option>
                                            {courses.map((course) => (
                                                <option key={course.id} value={course.id}>
                                                    {course.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                id="activeList"
                                                name="activeList"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label" htmlFor="activeList">
                                                Students List
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check">
                                            <Field
                                                className="form-check-input"
                                                id="toppersList"
                                                name="toppersList"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label" htmlFor="toppersList">
                                                Toppers List
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <ButtonSubmit
                                            className="btn btn-primary"
                                            onClick={() => formikProps.submitForm()}
                                        >
                                            Search
                                        </ButtonSubmit>
                                        <ButtonSubmit
                                            className="btn btn-danger ms-3"
                                            onClick={() => formikProps.setValues(initValues)}
                                        >
                                            Clear Search
                                        </ButtonSubmit>
                                        <Link className="btn btn-secondary ms-3" to="/student/CreateStudent">Add Student</Link>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    {/* <button type="button" className="btn btn-primary">Select Student</button> */}
                </div>
            </div>
        </>
    );
}

export default SearchStud;
