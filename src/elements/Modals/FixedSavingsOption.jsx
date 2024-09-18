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
  } from "@chakra-ui/react";
  
  import User from "../../../assets/icons/user.png";
  import UserMultiple from "../../../assets/icons/user-multiple-savings.png";
  import TargetUnlock from "../../../assets/icons/target-savings-unlock.png";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  
  function FixedSavingsOption({
    isOpen,
    close,
    personalSaving,
    privateSaving,
    targetSaving,
  }) {
    const OPTIONS = [
      {
        image: User,
        title: "Personal Fixed Savings ",
        description: "Start a personal fixed savings goal",
        action: personalSaving,
      },
      {
        image: UserMultiple,
        title: "Private Group Fixed Savings",
        description: "Create a private fixed savings group",
        action: privateSaving,
      },
      {
        image: TargetUnlock,
        title: "Public Group Fixed Savings",
        description: "Create a public fixed savings group",
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
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  
  export default FixedSavingsOption;
  