/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Stack,
  Input,
  Select,
  InputLeftElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import styles from "../../Pages/SavingsPage/Savings.module.css";
import { useState } from "react";
import FinalizeSavings from "../../elements/Modals/FinalizeSavings";

function PersonalSavings({ moveToOptions }) {
  const CATEGORIES = [
    "Rent/Accomodation",
    "Travel/Vacation",
    "Education/Study",
    "Fees/Debt",
    "Starting/Growing a business",
    "Birthday",
    "Gadgets",
    "Home appliances",
    "Investment",
  ];

  const FREQUENCY = ["Daily", "Weekly", "Monthly", "Manual"];

  const DURATION = ["1 Month", "2 Months", "3 Months", "4 Months"];
  const [frequency, setFrequency] = useState("");

  const [open, setOpen] = useState(false);

  return (
    <Stack maxWidth={"500px"} width={"100%"}>
      <FormControl className={styles["personal-saving-form"]}>
        <div>
          <FormLabel>What are you saving for?</FormLabel>
          <Input />
        </div>

        <div>
          <FormLabel>Category</FormLabel>
          <Select>
            {CATEGORIES.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </Select>
        </div>

        <div>
          <FormLabel>What is your target amount?</FormLabel>
          <InputGroup>
            <InputLeftElement>₦</InputLeftElement>
            <Input inputMode={"numeric"} type={"number"} />
          </InputGroup>
        </div>

        <div>
          <FormLabel>How often do you want to save?</FormLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            {FREQUENCY.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </Select>
        </div>

        <div>
          <FormLabel>How long do you want to save for?</FormLabel>
          <Select>
            {DURATION.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </Select>
        </div>

        <div>
          <FormLabel>Start Date</FormLabel>
          <Input type="date" />
        </div>

        <div>
          <FormLabel>Preferred Time</FormLabel>
          <Input type="time" />
        </div>

        <div>
          <div>
            <FormLabel>How much do you want to save {frequency} </FormLabel>
            <InputGroup>
              <InputLeftElement>₦</InputLeftElement>
              <Input inputMode={"numeric"} type={"number"} />
            </InputGroup>
          </div>
        </div>
      </FormControl>

      <Button
        onClick={() => setOpen(true)}
        my={"4"}
        w={"100%"}
        size={"lg"}
        color={"white"}
        bg={"#A41856"}
      >
        {" "}
        Continue
      </Button>

      <FinalizeSavings
        isOpen={open}
        close={() => setOpen(false)}
        showSuccess={() => moveToOptions(3)}
      />
    </Stack>
  );
}

export default PersonalSavings;
