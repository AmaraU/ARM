/* eslint-disable react/prop-types */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Stack,
  Box,
  Flex,
  Image,
  Select,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import User from "../../../assets/icons/user.png";
import UserMultiple from "../../../assets/icons/user-multiple-savings.png";
import TargetUnlock from "../../../assets/icons/target-savings-unlock.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

function TargetSavingsOption({
  isOpen,
  close,
  personalSaving,
  privateSaving,
  targetSaving,
}) {
  const [step, setStep] = useState(1);

  const selectPrivateSaving = () => {
    setStep(2);
    // privateSaving();
  };

  const OPTIONS = [
    {
      image: User,
      title: "Personal Target Savings ",
      description: "Start a personal target savings goal",
      action: personalSaving,
    },
    {
      image: UserMultiple,
      title: "Private Group Target Savings",
      description: "Create a private target savings group",
      action: selectPrivateSaving,
    },
    {
      image: TargetUnlock,
      title: "Public Group Target Savings",
      description: "Create a public target savings group",
      action: targetSaving,
    },
  ];

  return (
    <Modal
      isCentered
      size={"xl"}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      maxHeight={"70%"}
      onClose={close}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClick={close}></ModalCloseButton>
        <ModalBody>
          {step === 1 && (
            <Stack py={"10"}>
              <Text fontWeight={"600"} textAlign={"center"}>
                {" "}
                Choose Preferred Option
              </Text>

              {OPTIONS.map((option, i) => (
                <Box
                  cursor={"pointer"}
                  my={"1"}
                  _hover={{ border: "1px solid #A41857" }}
                  p={4}
                  rounded={"xl"}
                  bg={"#F7F7F7"}
                  display={"flex"}
                  key={i}
                  onClick={option.action}
                >
                  <Image width={"40px"} height={"40px"} src={option.image} />

                  <Flex ml={3} w={"100%"} justifyContent={"space-between"}>
                    <div>
                      <Text fontFamily={"20px"} fontWeight={"bold"}>
                        {option.title}{" "}
                      </Text>
                      <Text>{option.description}</Text>
                    </div>
                    <ChevronRightIcon mt={"8px"} />
                  </Flex>
                </Box>
              ))}
            </Stack>
          )}

          {step === 2 && (
            <Stack my={"6"}>
              <Text fontWeight={"600"} textAlign={"center"}>
                Create a Target Savings for Group
              </Text>

              <div>
                <FormLabel>Is savings group public or private?</FormLabel>
                <Select>
                  <option>Public</option>
                  <option>Private</option>
                </Select>
              </div>

              <div>
                <FormLabel>Who can invite members?</FormLabel>
                <Select>
                  <option>Any member can invite others</option>
                </Select>
              </div>

              <Button
                onClick={privateSaving}
                my={"3"}
                w={"100%"}
                bg={"#A41856"}
                color={"white"}
              >
                Continue
              </Button>
            </Stack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default TargetSavingsOption;
