import { Box, Flex, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Webcam from 'react-webcam';
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import styles from './Onboarding.module.css';

const initialConstraints = {
    width: 1000,
    facingMode: 'user'
}


export const TakeSelfie = () => {

    const webcamRef = useRef(null);
    const [videoConstraints, setVideoConstraints] = useState(initialConstraints);
    const navigate = useNavigate();


    const capturePhoto = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        
        if (!imageSrc) {
            console.error("No image captured from webcam");
            return;
        }
        try {
            const croppedImage = await cropImage(imageSrc, 322, 322);
            navigate('/confirm-picture', { state: { croppedImage } });
        } catch (error) {
            console.error("Error: ", error)
        }
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
                
                ctx.globalCompositeOperation = 'destination-in';
                ctx.beginPath();
                ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                
                resolve(canvas.toDataURL('image/png'));
            }
        });
    }


    
    return (
        <>
        <Stack alignItems={'center'} spacing={5} py={'6%'} px={'25%'} bgImage={getImageUrl('onboardingBackground.png')} bgSize={'100% 100%'}>
            <img style={{width: '140px', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <Flex justifyContent={'space-between'} w={'100%'}>
                <a href='/verify-number'><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></a>
                
                <div className={styles.circleWrap}>
                    <div className={styles.circle}>
                        <div className={`${styles.mask} ${styles.fullFour}`}>
                            <div className={styles.fill}></div>
                        </div>
                        <div className={`${styles.mask} ${styles.half}`}>
                            <div className={styles.fill}></div>
                        </div>
                        <div className={styles.insideCircle}>
                            40%
                        </div>
                    </div>
                </div>

            </Flex>

            <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
                mirrored={videoConstraints.facingMode === 'user'}
                className={styles.webcam}
                style={{borderRadius: '12px'}}
            />

            <Stack alignItems={'center'} spacing={2} bg={'#000000'} borderRadius={'11px 11px 0 0'} w={'100%'} p={'10px'} pb={'24px'}>
                <Text fontSize={'16px'} fontWeight={500} color={'#FFFFFF'} >Keep your head inside the circle</Text>
                <button onClick={capturePhoto}><img style={{width: '80px', height: '80px'}} src={getImageUrl('icons/capture.png')} alt="capture" /></button>
            </Stack>
        </Stack>
        </>
    )
}