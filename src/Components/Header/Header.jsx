import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";


export const Header = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem('email')) {
            navigate('/');
        }
        const data = location.state;
    }, []);


    return (
        <div className={styles.header}>

            <div className={styles.whole}>

                <div className={styles.buttons}>
                    <button><img src={getImageUrl("icons/header/brightness.png")} alt="" /></button>
                    <button><img src={getImageUrl("icons/header/notif.png")} alt="" /></button>
                </div>
                
                <div className={styles.profile}>
                    <img src={getImageUrl("icons/header/avatar.png")} alt="" />
                    Adeola Obasanjo
                </div>
            </div>

            
        </div>
    )
}