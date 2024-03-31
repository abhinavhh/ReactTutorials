import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import TextField from '../forms/TextField'
import DateField from '../forms/DateField'
import ImageField from '../forms/ImageField'
import MarkdownField from '../forms/MarkdownField'
import ButtonSubmit from '../assets/ButtonSubmit'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function InstructorForm(props) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Instructor Name should not be blank")
                    .matches(/^[A-Z].*$/, "Name should start with an uppercase letter"),
                dateOfBirth: Yup.date().nullable().required("Date should not be blank"),
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Instructor Name" />
                    <DateField displayName="Date of Birth" field="dateOfBirth" />
                    <ImageField
                        displayName="Image"
                        field="image"
                        imageURL={props.model.imageURL}
                    />
                    <MarkdownField displayName="Career" field="career" />
                    <ButtonSubmit disabled={formikProps.isSubmitting} type="submit" className="btn btn-primary">
                        Submit
                    </ButtonSubmit>
                    <Link className="btn btn-secondary" to="/instructors">
                        Cancel
                    </Link>
                </Form>
            )}
        </Formik>
    );
}


InstructorForm.propTypes = {
    model: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
export default InstructorForm;
