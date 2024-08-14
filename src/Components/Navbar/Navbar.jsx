import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../../utils";

export const Navbar = () => {

  let currentPath = window.location.pathname;

  return (
    <div className={styles.theWhole}>

      <div className={styles.logo} >
          <a href="/dashboard"><img src={getImageUrl("logos/arm_logo.png")} alt="ARM" /></a>
      </div>

      <div className={styles.linkList}>

        <a href="/dashboard" className={currentPath === "/dashboard" ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/dashboardGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/dashboardRed.png")} />
          Dashboard
        </a>
        <a href="/transfers" className={currentPath.includes("/transfers") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/transfersGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/transfersRed.png")} />
          Transfers
        </a>
        <a href="/airtime" className={currentPath.includes("/airtime") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/billsGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/billsRed.png")} />
          Airtime and Bills
        </a>
        <a href="/dashboard/loans" className={currentPath.includes("/dashboard/loans") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/loansGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/loandsRed.png")} />
          Loans
        </a>
        <a href="/dashboard/savings" className={currentPath.includes("/dashboard/savings") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/savingsGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/savingsRed.png")} />
          Savings
        </a>
        <a href="/dashboard/cards" className={currentPath.includes("/dashboard/cards") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/cardsGrey.png")} />
          <img className={styles.red} src={getImageUrl("icons/nav/cardsRed.png")} />
          Cards
        </a>
        <a href="/dashboard/accounts" className={currentPath.includes("/dashboard/accounts") ? styles.active : ""}>
          <img className={styles.grey} src={getImageUrl("icons/nav/accountsGrey.png")} alt="" />
          <img className={styles.red} src={getImageUrl("icons/nav/accountsRed.png")} alt="" />
          My Accounts
        </a>
        <a href="/dashboard/profile" className={currentPath.includes("/dashboard/profile") ? styles.active : ""}>
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