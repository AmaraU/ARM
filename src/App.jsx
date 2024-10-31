import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Signin from "./Pages/Onboarding/Signin.jsx";
import Signup from "./Pages/Onboarding/Signup.jsx";
import { VerifyNumber } from "./Pages/Onboarding/VerifyNumber.jsx";
import { TakeSelfie } from "./Pages/Onboarding/TakeSelfie.jsx";
import { ConfirmSelfie } from "./Pages/Onboarding/ConfirmSelfie.jsx";
import { UserInfo } from "./Pages/Onboarding/UserInfo.jsx";
import { CreateProfile } from "./Pages/Onboarding/CreateProfile.jsx";
import { Welcome } from "./Pages/Onboarding/Welcome.jsx";
import { Overview } from "./Pages/DashboardPage/Overview.jsx";
import { Transfers } from "./Pages/Transfers/Transfers.jsx";
import { TransactionReceipt } from "./Components/TransactionReciept.jsx";
import { AirtimeBills } from "./Pages/AirtimeBills/AirtimeBills.jsx";
import LoanPage from "./Pages/LoanPage/LoanPage.jsx";
import { MyAccountPage } from "./Pages/MyAccountPage/MyAccountPage.jsx";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage.jsx";
import { DashboardLayout } from "./Pages/DashboardLayout.jsx";
import { BlankPage } from "./Pages/BlankPage.jsx";
import { AccountStatement } from "./Components/AccountStatement.jsx";
import { CompleteOnboarding } from "./Pages/Onboarding/CompleteOnboarding.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import SavingsPage from "./Pages/SavingsPage/SavingsPage.jsx";
import TargetSavings from "./Components/Savings/TargetSavings.jsx";
import FixedSavings from "./Components/Savings/FixedSavings.jsx";
import ForgotPassword from "./Pages/Onboarding/ForgotPassword.jsx";
import { AccountSetup } from "./Pages/DashboardPage/AccountSetup.jsx";
import { VerifyReset } from "./Pages/Onboarding/VerifyReset.jsx";
import { ResetPassword } from "./Pages/Onboarding/ResetPassword.jsx";
import { Success } from "./Pages/Onboarding/Success.jsx";
import GroupSavings from "./Components/Savings/GroupSavings.jsx";
import useSessionTimeout from "./hooks/useSessionTimeout.js";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";
import { UpgradeAccount } from "./Pages/MyAccountPage/UpgradeAccount.jsx";
import { NotificationsPage } from "./Pages/DashboardPage/NotificationsPage.jsx";
import { TransactionHistory } from "./Pages/DashboardPage/TransactionHistory.jsx";

function App() {
  useSessionTimeout();

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="signin" /> },
    { path: "/signin", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/verify-reset", element: <VerifyReset /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/success", element: <Success /> },
    { path: "/verify-number", element: <VerifyNumber /> },
    { path: "/capture", element: <TakeSelfie /> },
    { path: "/confirm-picture", element: <ConfirmSelfie /> },
    { path: "/user-info", element: <UserInfo /> },
    { path: "/create-profile", element: <CreateProfile /> },
    { path: "/complete-registration", element: <CompleteOnboarding /> },
    { path: "/welcome", element: <Welcome /> },
    { path: "/receipt", element: <TransactionReceipt /> },
    { path: "/statement", element: <AccountStatement /> },
    {
      path: "/overview",
      element: (
        // <ProtectedRoute>
          <DashboardLayout />
        // </ProtectedRoute>
      ),
      children: [
        { path: "/overview", element: <Navigate to="dashboard" /> },
        { path: "account-setup", element: <AccountSetup /> },
        { path: "dashboard", element: <Overview /> },
        { path: "dashboard/notifications", element: <NotificationsPage /> },
        { path: "dashboard/history", element: <TransactionHistory /> },
        { path: "transfers", element: <Transfers /> },
        { path: "airtime", element: <AirtimeBills /> },
        { path: "loans", element: <LoanPage /> },
        { path: "savings", element: <SavingsPage /> },
        { path: "savings/target", element: <TargetSavings /> },
        { path: "savings/fixed", element: <FixedSavings /> },
        { path: "savings/group", element: <GroupSavings /> },
        { path: "cards", element: <BlankPage /> },
        { path: "accounts", element: <MyAccountPage /> },
        { path: "accounts/upgrade", element: <UpgradeAccount /> },
        { path: "profile", element: <ProfilePage /> },
      ],
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
