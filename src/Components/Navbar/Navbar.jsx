import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../../utils";

export const Navbar = () => {

  let currentPath = window.location.pathname;

  return (
    <div className={styles.theWhole}>

      <div className={styles.logo} >
        <a href="/overview"><img src={getImageUrl("logos/arm_logo.png")} alt="ARM" /></a>
      </div>

      <div className={styles.linkList}>

        <a href="/overview/dashboard" className={currentPath.includes("/overview/dashboard") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/dashboardGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/dashboardRed.png")} />
          Dashboard
        </a>
        <a href="/overview/transfers" className={currentPath.includes("/overview/transfers") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/transfersGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/transfersRed.png")} />
          Transfers
        </a>
        <a href="/overview/airtime" className={currentPath.includes("/overview/airtime") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/billsGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/billsRed.png")} />
          Airtime and Bills
        </a>
        <a href="/overview/loans" className={currentPath.includes("/overview/loans") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/loansGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/loansRed.png")} />
          Loans
        </a>
        <a href="/overview/savings" className={currentPath.includes("/overview/savings") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/savingsGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/savingsRed.png")} />
          Savings
        </a>
        <a href="/overview/cards" className={currentPath.includes("/overview/cards") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/cardsGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/cardsRed.png")} />
          Cards
        </a>
        <a href="/overview/accounts" className={currentPath.includes("/overview/accounts") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/accountsGrey.png")} alt="" />
          <img className={styles.red} src={getImageUrl("icons/nav/accountsRed.png")} alt="" />
          My Accounts
        </a>
        <a href="/overview/profile" className={currentPath.includes("/overview/profile") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/profileGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/profileRed.png")} />
          Profile
        </a>

      </div>

      <a href="" className={styles.logOut}>
        <img src={getImageUrl("icons/nav/logout.png")} />
        Log out
      </a>
    </div>
  )
}