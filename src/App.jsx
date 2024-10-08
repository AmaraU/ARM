import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Signin from "./Pages/Onboarding/Signin";
import Signup from "./Pages/Onboarding/Signup";
import { VerifyNumber } from "./Pages/Onboarding/VerifyNumber";
import { TakeSelfie } from "./Pages/Onboarding/TakeSelfie";
import { ConfirmSelfie } from "./Pages/Onboarding/ConfirmSelfie";
import { UserInfo } from "./Pages/Onboarding/UserInfo";
import { CreateProfile } from "./Pages/Onboarding/CreateProfile";
import { Welcome } from "./Pages/Onboarding/Welcome";
import { Overview } from "./Pages/DashboardPage/Overview";
import { Transfers } from "./Pages/Transfers/Transfers";
import { TransactionReceipt } from "./Components/TransactionReciept";
import { AirtimeBills } from "./Pages/AirtimeBills/AirtimeBills";
import LoanPage from "./Pages/LoanPage/LoanPage";
import { MyAccountPage } from "./Pages/MyAccountPage/MyAccountPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { DashboardLayout } from "./Pages/DashboardLayout";
import { BlankPage } from "./Pages/BlankPage";
import { AccountStatement } from "./Components/AccountStatement.jsx";
import { CompleteOnboarding } from "./Pages/Onboarding/CompleteOnboarding.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
import SavingsPage from "./Pages/SavingsPage/SavingsPage.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="signin" /> },
    { path: "/signin", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/verify-number", element: <VerifyNumber /> },
    { path: "/capture", element: <TakeSelfie /> },
    { path: "/confirm-picture", element: <ConfirmSelfie /> },
    { path: "/user-info", element: <UserInfo /> },
    { path: "/create-profile", element: <CreateProfile /> },
    { path: "/complete-registration", element: <CompleteOnboarding />},
    { path: "/welcome", element: <Welcome /> },
    { path: "/receipt", element: <TransactionReceipt /> },
    { path: "/statement", element: <AccountStatement /> },
    {
      path: "/overview",
      element: <DashboardLayout />,
      children: [

        { path: '/overview', element: <Navigate to="dashboard" /> },
        { path: 'dashboard', element: <Overview /> },
        { path: 'transfers', element: <Transfers /> },
        { path: 'airtime', element: <AirtimeBills /> },
        { path: 'loans', element: <LoanPage /> },
        { path: 'savings', element: <SavingsPage /> },
        { path: 'cards', element: <BlankPage /> },
        { path: 'accounts', element: <MyAccountPage /> },
        { path: 'profile', element: <ProfilePage /> },
      ]
    },
  ]);

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
