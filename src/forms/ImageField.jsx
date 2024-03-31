import React, { useState } from 'react';
import { useFormikContext } from "formik";
import {PropTypes} from 'prop-types';

export default function ImageField(props){
    const [imageBase64, setImageBase64] = useState("");
    const [imageURL, setImageURL] = useState(props.imageURL);
    const { values } = useFormikContext();

    const divStyle = { marginTop: "10px" };
    const imgStyle = { width: "480px" };

    const handleChange = (eventArgs) => {
        if(eventArgs.currentTarget.files){
            const file = eventArgs.currentTarget.files[0];
            if(file){
                toBase64(file)
                .then((base64Representation) => setImageBase64(base64Representation))
                .catch((error) => alert(error));
                values[props.field] = file;
                setImageURL("");
            } else {
                setImageBase64("");
            }
        }
    };

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={handleChange} />
            </div>
            {imageBase64 ? (
                <div>
                    <div style={divStyle}>
                        <img src={imageBase64} alt="selected Image" style={imgStyle} />
                    </div>
                </div>
            ) : null}
            {imageURL ?(
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imageURL} alt="selected image"  />
                    </div>
                </div>
            ):null}
        </div>
    );
}

ImageField.propTypes = {
    displayName: PropTypes.string,
    imageURL: PropTypes.string,
    field: PropTypes.string,
};

ImageField.defaultProps = {
    imageURL: "",
};
