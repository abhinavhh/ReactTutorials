import { Field, useFormikContext } from "formik"
import ReactMarkdown from "react-markdown"
import { PropTypes } from "prop-types"
import "./MarkdownField.css"

export default function MarkdownField(props){
    const {values}=useFormikContext();
    return(
        <div className="mb-3 form-markdown">
            <div>
                <label>{props.displayName}</label>
                <div>
                    <Field name={props.field} as="textarea" className="form-textarea"/>
                </div>
            </div>
            <div>
                <label>{props.displayName}</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.field]}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

MarkdownField.propTypes={
    displayName:"",
    field:"",
};