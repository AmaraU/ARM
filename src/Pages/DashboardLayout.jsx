import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer";
import { Box } from "@chakra-ui/react";
import styles from "../App.module.css";

export const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if authToken is present in session storage
    const authToken = sessionStorage.getItem("authToken");

    // If authToken is not present, redirect to sign-in page
    // if (!authToken) {
    //   navigate("/signin");
    // }
  }, [navigate]);

  return (
    <>
      <Header />

      <div className={styles.withNav}>
        <Navbar />
        <Box width={"100%"} bgColor={"#FCFCFC"}>
          <Outlet />
          <Footer />
        </Box>
      </div>
    </>
  );
};
