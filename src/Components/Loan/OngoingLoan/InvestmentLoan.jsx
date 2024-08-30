/* eslint-disable react/prop-types */
import CardContainer from "../../../elements/CardContainer";
import LoanOfferCard from "../../../elements/LoanOfferCard";

function InvestmentLoan({ title, moveToOne, moveNext}) {
  return (
    <CardContainer title={title} moveToOne={moveToOne}>
      <LoanOfferCard
        title={"Pre-approved loan offer"}
        amount={"1,500,000"}
        buttonTitle={"Take Loan"}
        description={"You are currently qualified for this loan amount"}
        moveNext={moveNext}
      />
    </CardContainer>
  );
}

export default InvestmentLoan;
