import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./CheckPhoto.module.css";
import { getImageUrl } from "../../utils";

export const CheckPhoto = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { imageSrc } = location.state || {};

    if (!imageSrc) {
        return (
            <div>
                <h1>No Image Captured</h1>
                <button onClick={() => navigate('/capture')}>Go Back</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Captured Image</h1>
            <img src={imageSrc} alt="Captured" />
            <button onClick={() => navigate('/capture')}>Retake Photo</button>
            <button>Upload</button>
        </div>
    );
}
