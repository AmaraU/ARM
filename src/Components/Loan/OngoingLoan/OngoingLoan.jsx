import { useState, useRef, useEffect } from "react";
// import { CompleteTransaction } from '../../Components/CompleteTrans';
import EmptyLoan from "./EmptyLoan";
import LoanType from "./LoanType";
import PayDayLoan from "./PayDayLoan";
import ConfirmScreen from "./ConfirmScreen";
import LoanDetails from "./LoanDetails";
import TwoAccounts from "./TwoAccounts";
import LoanOffer from "./LoanOffer";
import StaffLoan from "./StaffLoan";
import VerifyEmail from "./VerifyEmail";
import InvestmentLoan from "./InvestmentLoan";
import { CurrentLoans } from "./CurrentLoans";

export const OngoingLoan = () => {
  
  const [showOptions, setShowOptions] = useState(true);
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showStaff, setShowStaffLoan] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const [showInvestment, setShowInvestment] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);
  const [showSix, setShowSix] = useState(false);

  const currentLoans = [
    {
      type: 'Pay Day',
      amount: 1500000,
      repay_amount: 1500000,
      next_repayment: 1500000,
      tenure: '1 month',
      date: '24/08/2024',
      status: 'Approved'
    },
    {
      type: 'Staff',
      amount: 1500000,
      repay_amount: 1800000,
      tenure: '1 month',
      status: 'Pending'
    },
    {
      type: 'Investment Backed',
      amount: 1500000,
      repay_amount: 1500000,
      next_repayment: 1500000,
      tenure: '1 month',
      date: '24/08/2024',
      status: 'Approved'
    }
  ];


  const moveToOptions = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(true);
  };
  const moveToOne = () => {
    setShowOne(true);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(false);
  };
  const moveToTwo = () => {
    setShowOne(false);
    setShowTwo(true);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(false);
  };
  const moveToThree = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(true);
    setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(false);
  };
  const moveToFour = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(true);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(false);
  };
  const moveToFive = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(true);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(false);
  };
  const moveToSix = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
    setShowSix(true);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(false);
  };
  const moveToVerifyEmail = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(true);
    setShowInvestment(false);
    setShowOptions(false);
  };
  function showPayLoan() {
    setShowOne(false);
    setShowTwo(true);
  }
  function showStaffLoan() {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(true);
    setShowVerifyEmail(false);
    setShowInvestment(false);
    setShowOptions(false);
  }
  const showInvestmentLoan = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
    setShowFive(false);
    setShowSix(false);
    setShowStaffLoan(false);
    setShowVerifyEmail(false);
    setShowInvestment(true);
    setShowOptions(false);
  };

  return (
    <>
      {showOptions && currentLoans.length > 0 ? <CurrentLoans currentLoans={currentLoans} /> : <EmptyLoan moveToOne={moveToOne} />}

      {showOne && (
        <LoanType
          moveToTwo={moveToTwo}
          moveToOptions={moveToOptions}
          showStaffLoan={showStaffLoan}
          showPayLoan={showPayLoan}
          showInvestmentLoan={showInvestmentLoan}
        />
      )}

      {showTwo && (
        <PayDayLoan moveToOne={moveToOne} moveToThree={moveToThree} />
      )}

      {showStaff && (
        <StaffLoan
          title={"Staff Loan"}
          moveToOne={moveToOne}
          moveToThree={moveToVerifyEmail}
        />
      )}

      {showInvestment && (
        <InvestmentLoan
          title={"Ongoing Loan"}
          moveToOne={moveToOne}
          moveNext={moveToThree}
          showStaffLoan={showStaffLoan}
          showPayLoan={showPayLoan}
          showInvestmentLoan={showInvestmentLoan}
        />
      )}

      {showThree && (
        <ConfirmScreen
          title={"Maximum Loan Eligibility"}
          moveToOne={moveToOne}
          moveToFour={moveToFour}
        />
      )}

      {showFour && (
        <LoanDetails
          moveToOne={moveToOne}
          title={"Loan Details"}
          moveNext={moveToFive}
        />
      )}

      {showFive && (
        <TwoAccounts
          moveToOne={moveToOne}
          title={"Please add two Bank Accounts"}
          moveNext={moveToSix}
        />
      )}

      {showSix && (
        <LoanOffer
          moveToOne={moveToOne}
          title={"Please add two Bank Accounts"}
          moveNext={moveToFive}
        />
      )}

      {showVerifyEmail && (
        <VerifyEmail
          title={"Verify your email"}
          moveToOne={moveToOne}
          moveNext={moveToThree}
        />
      )}
    </>
  );
};
