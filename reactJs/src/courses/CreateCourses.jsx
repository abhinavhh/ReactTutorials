import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import ButtonSubmit from '../assets/ButtonSubmit';
// import TextField from '../forms/TextFiled';
import CourseForm from './CourseForm';

function CreateCourse() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Create Course</h3>
                    <CourseForm
                        model={{name: ""}}
                        onSubmit={async (values)=>{
                            await new Promise((r)=>setTimeout(r,1000));
                            alert(JSON.stringify(values,null,2));
                        }}/>
                    {/* <Formik
                        initialValues={{
                            name: '',
                        }}
                        onSubmit={async(values) => {
                            await new Promise((r)=> setTimeout(r,1000));
                            alert(JSON.stringify(values, null, 2));
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Course name should not be blank')
                                // we can create ou own function example is below (Uppercase)
                                // .startWithUppercase(),
                        
                        })}
                    >
                        {(formikProps)=>(
                                <Form>
                                <div className="mb-3">
                                    <label htmlFor="name">Course Name</label>
                                    <Field name="name" className="form-control" />
                                    <ErrorMessage name="name">
                                        {(msg) => <div className="text-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <TextField field="name" displayName="Course Name"/>
                                <ButtonSubmit disabled={formikProps.isSubmitting}type="submit">Submit</ButtonSubmit>
                                <Link className="btn btn-secondary" to="/courses">Cancel</Link>
                            </Form>
                        )}
                        
                    </Formik> */}
                </div>
            </div>
        </>
    )
}

export default CreateCourse;
