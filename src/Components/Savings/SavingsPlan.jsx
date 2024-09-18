/* eslint-disable react/prop-types */

import { Box, Text, Card, Grid } from "@chakra-ui/react";
import Target from "../../../assets/icons/target-02.svg";
import MultipleUser from "../../../assets/icons/user-multiple-02.svg";
import styles from "../../Pages/SavingsPage/Savings.module.css";
import { ViewOffIcon } from "@chakra-ui/icons";
import TargetSavingsOption from "../../elements/Modals/TargetSavingsOption";
import { useState } from "react";
import FixedSavingsOption from "../../elements/Modals/FixedSavingsOption";

function SavingsPlan({ moveToOptions }) {
  const [modalopen, setModalOpen] = useState(false);
  const [fixedmodalopen, setFixedModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const showFixedModal = () => {
    setFixedModalOpen(true);
  };

  const OPTIONS = [
    {
      image: Target,
      title: "Target Savings",
      description:
        "Reach your savings goal either as an individual or as a group. Earn up to 8% per annum",
      action: showModal,
    },
    {
      image: MultipleUser,
      title: "Fixed Savings",
      description:
        "Lock up savings to avoid temptations as an individual or as a group . Earn up to 8% per annum",
      action: showFixedModal,
    },
  ];

  return (
    <Box>
      <Text fontSize={"18px"} fontWeight={600} color={"#101828"}></Text>
      <Card
        className={styles["savings-card"]}
        width={"100%"}
        maxWidth={"640px"}
        height={"92px"}
        my={"20px"}
      >
        <p>Total Savings</p>
        <h2>
          ₦13,000,000.00 <ViewOffIcon />{" "}
        </h2>
      </Card>
      <Text my={"10px"} align={"center"}>
        Select a savings plan
      </Text>

      <Grid
        templateColumns={"repeat(3,auto)"}
        gap={5}
        margin={"auto"}
        maxW={660}
      >
        {OPTIONS.map((card, i) => (
          <Card
            onClick={card.action}
            cursor={"pointer"}
            pt={5}
            px={9}
            pb={8}
            key={i}
          >
            <img src={card.image} style={{ marginTop: "30px" }} />
            <Text fontWeight={500} fontSize={"14px"}>
              {card.title}{" "}
            </Text>
            <Text fontWeight={400} fontSize={"12px"}>
              {card.description}
            </Text>
          </Card>
        ))}
      </Grid>
      <TargetSavingsOption
        isOpen={modalopen}
        personalSaving={() => moveToOptions(2)}
        privateSaving={() => moveToOptions(4)}
        targetSaving={() => moveToOptions(5)}
        close={() => setModalOpen(false)}
      />

      <FixedSavingsOption
        isOpen={fixedmodalopen}
        personalSaving={() => moveToOptions(2)}
        privateSaving={() => moveToOptions(4)}
        targetSaving={() => moveToOptions(5)}
        close={() => setFixedModalOpen(false)}
      />
    </Box>
  );
}

export default SavingsPlan;
