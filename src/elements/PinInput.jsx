/* eslint-disable react/prop-types */
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

function OtpInput({ length, size, width, setOtp }) {
  return (
    <HStack>
      <PinInput onChange={(e) => setOtp(e)} placeholder={""} size={size} otp>
        {Array.from({ length })
          .fill(null)
          .map((_, i) => (
            <PinInputField key={i} bg={"#F7F7F7"} width={width} />
          ))}
      </PinInput>
    </HStack>
  );
}

export default OtpInput;
