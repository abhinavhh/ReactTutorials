import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../forms/TextField';
import ButtonSubmit from '../assets/ButtonSubmit'
function CourseForm(props) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Course name should not be blank')
                })}
            >
                {(formikProps) => (
                    <Form>
                        

                        {/* <div className="mb-3">
                            <label htmlFor="name">Course Name</label>
                            <Field name="name" className="form-control" />
                            <ErrorMessage name="name">
                                {(msg) => <div className="text-danger">{msg}</div>}
                            </ErrorMessage>
                        </div> */}
                        <TextField field="name" displayName="Course Name"/>
                        <ButtonSubmit disabled={formikProps.isSubmitting}type="submit" className="btn btn-primary">Submit</ButtonSubmit>
                        <Link className="btn btn-secondary ms-3" to="/courses">Cancel</Link>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CourseForm;
