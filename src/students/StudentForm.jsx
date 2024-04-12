import { Formik , Form} from "formik";
import * as Yup from 'yup';
import ButtonSubmit from "../assets/ButtonSubmit";
import PropTypes from 'prop-types';
import TextField from "../forms/TextField";
import ImageField from "../forms/ImageField";
import DateField from "../forms/DateField";
import CheckboxField from "../forms/CheckboxField";
import { Link } from "react-router-dom";
export default function StudentForm(props){
    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name:Yup.string()
                    .required('Category Name should not be blank')
                    .matches(/^[A-Z].*$/, 'Category Name should start with an uppercase letter'),
                rollno:Yup.string()
                    .required("Roll Number should not be blank"),
                dateofBirth:Yup.date().nullable().required("Date should not be blank"),
            })}
        >
            {(formikProps) => (
                <Form>
                <TextField field="name" displayName="Student Name" />
                <TextField field="rollno" displayName="Roll Number" />
                <DateField field="dateOfBirth" displayName="Date of Birth" />
                <CheckboxField field="isActive" displayName="Active"/>
                <ImageField
                    displayName="Photograph"
                    field="image"
                    imageURL={props.model.photoURL}
                />
                <ButtonSubmit disabled={formikProps.isSubmitting} type="submit" className="btn btn-primary">
                    Submit
                </ButtonSubmit>
                <Link className="btn btn-secondary ms-3" to="/student/SearchStudent">
                    Cancel
                </Link>
                </Form>
            )}
        </Formik>
    )
}
StudentForm.propTypes={
    model: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      onSubmit: PropTypes.func.isRequired,
}