import {
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../../utils";
import { VerifyIdentity } from "./VerifyIdentity";
import { useDispatch, useSelector } from "react-redux";
import { loadDetailsFromStorage } from "../../store/auth/auth.slice";
import OtpInput from "../../elements/PinInput";
import { formatNumberStar } from "../../utils/formatter";
import authService from "../../services/authService";
import { handleErrors, handleSuccess } from "../../utils/handleResponse";

export const VerifyReset = () => {
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const [timeLeft, setTimeLeft] = useState(30);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [method, setMethod] = useState('phone number');

  useEffect(() => {
    dispatch(loadDetailsFromStorage());
  }, [dispatch]);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      console.log("Countdown finished");
    }
  }, [timeLeft]);

  const processOTP = async () => {
    window.location.href = "/reset-password";

    // setLoading(true);
    // try {
    //    await authService.verifyOtp({
    //     otp: otp,
    //     phoneNumber: auth?.phoneNumber,
    //   });

    //   onOpenConfirm();
    //   setLoading(true);
    // } catch (error) {
    //   setLoading(false);
    //   console.log(error);
    // }
  };

  const resendOtp = async () => {
    try {
      setTimeLeft(30);
      await authService.sendOtp({
        phoneOrAccountnumber: auth?.phoneNumber,
        email: auth?.email,
      });
      handleSuccess("Otp resent successfully");
    } catch (error) {
      handleErrors(error.message);
    }
  };

  return (
    <>
      <Stack
        alignItems={"center"}
        h={"100vh"}
        spacing={5}
        py={"6%"}
        px={"25%"}
        bgImage={getImageUrl("onboardingBackground.png")}
        bgSize={"100% 100%"}
      >
        <img
          style={{ width: "140px", height: "auto" }}
          src={getImageUrl("logos/arm_logo.png")}
          alt="ARM"
        />
        <Flex justifyContent={"space-between"} w={"100%"}>
          <a href="/forgot-password">
            <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
          </a>
          {/* <CircularProgress value={30} size={"32px"} color={"#A41857"}>
            <CircularProgressLabel fontWeight={700} fontSize={"9px"}>
              30%
            </CircularProgressLabel>
          </CircularProgress> */}
        </Flex>
        <Text fontSize={"48px"} fontWeight={700} color={"#14142A"}>
          Verify your {method}
        </Text>
        <Text fontSize={"18px"} fontWeight={400} color={"#667085"}>
          Kindly enter the 6-digits OTP we sent to{" "}
          <b>{formatNumberStar(auth?.phoneNumber)}</b>
        </Text>

        <Stack>
          <Text fontSize={"14px"} fontWeight={400} color={"#394455"}>
            PIN
          </Text>
          <OtpInput length={6} size={"lg"} width={99} setOtp={setOtp} />
          <Text fontSize={"14px"} fontWeight={400} color={"#394455"}>
            Didn&apos;t receive OTP?
          </Text>
          <HStack spacing={3}>
            <Text fontSize={"16px"} fontWeight={500} color={"#DB9308"}>
              00:{timeLeft < 10 ? `0` : ``}
              {timeLeft}
            </Text>
            <Text
              cursor={timeLeft === 0 ? "pointer" : ""}
              onClick={timeLeft === 0 ? () => resendOtp() : ""}
              fontSize={"16px"}
              fontWeight={600}
              color={timeLeft === 0 ? "#667085" : "#EAECF0"}
            >
              Resend
            </Text>
          </HStack>
        </Stack>
        <Button
          onClick={processOTP}
          isDisabled={otp.length !== 6}
          id="continue"
          bg={"#A41857"}
          _hover={{ bg: "#A41857" }}
          fontSize={"18px"}
          fontWeight={600}
          color={"#FFFFFF"}
          py={"12px"}
          w={"100%"}
          h={"fit-content"}
          isLoading={loading}
        >
          Continue
        </Button>
      </Stack>

      <VerifyIdentity isOpen={isOpenConfirm} onClose={onCloseConfirm} />
    </>
  );
};