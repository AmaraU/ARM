import React from "react";
import styles from "./Header.module.css";
import { getImageUrl } from "../../../utils";


export const Header = () => {

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