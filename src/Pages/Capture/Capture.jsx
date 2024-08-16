import React, { useCallback, useRef, useState } from "react";
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import styles from './Capture.module.css';
import { getImageUrl } from "../../utils";

const initialConstraints = {
    width: 540,
    facingMode: 'user'
}

export const Capture = () => {

    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
    const [videoConstraints, setVideoConstraints] = useState(initialConstraints);
    const navigate = useNavigate();

    const capturePhoto = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // const croppedImage = await cropImage(imageSrc, 450, 450);
        // navigate('/checkPhoto', { state: { croppedImage } });
        navigate('/checkPhoto', { state: { imageSrc } });
    }, [webcamRef, navigate]);

    const onUserMedia = (e) => {
        console.log(e);
    }

    const cropImage = (src, width, height) => {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = src;
            image.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');

                const startX = (image.width - width) / 2;
                const startY = (image.height - height) / 2;

                ctx.drawImage(image, startX, startY, width, height, 0, 0, width, height);
                resolve(canvas.toDataURL('image/png'));
            }
        });
    }

    // const toggleFacingMode = () => {
    //     setVideoConstraints(prevConstraints => ({
    //         ...prevConstraints,
    //         facingMode: prevConstraints.facingMode === 'environment' ? 'user' : 'environment'
    //     }));
    // }
    
    return (
        <>
        <div className={styles.theWhole}>
            <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
                mirrored={videoConstraints.facingMode === 'user'}
                className={styles.webcam}
            />

            <button className={styles.close}><img src={getImageUrl("icons/greyClose.png")} alt="" /></button>

            <p className={styles.text}>Ensure your face is in the frame</p>
            <img className={styles.frame} src={getImageUrl("faceFrame.png")} alt="" />

            <div className={styles.controls}>
                <button className={styles.snap} onClick={capturePhoto}><img src={getImageUrl("icons/snap.png")} alt="" /></button>
                {/* <button onClick={toggleFacingMode}>
                    Switch to {videoConstraints.facingMode === 'user' ? 'Back' : 'Front'} Camera
                </button> */}
            </div>

            

            {/* {url && (
                <div className={styles.thePic}>
                    <img src={url} alt="Screenshot" />
                    <button onClick={() => setUrl(null)}>Refresh</button>
                </div>
            )} */}

        </div>
        
        </>
    )
}


