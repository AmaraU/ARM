import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Signin from './Pages/Onboarding/Signin';
import Signup from './Pages/Onboarding/Signup';

import { DashboardLayout } from './Pages/DashboardLayout';
import { Overview } from './Pages/DashboardPage/Overview';
import { BlankPage } from './Pages/BlankPage';
import { Transfers } from './Pages/Transfers/Transfers';



function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Signin /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    {
      path: '/overview', element: <DashboardLayout />,
      children: [

        { path: '/overview', element: <Navigate to="dashboard" /> },
        { path: 'dashboard', element: <Overview /> },
        { path: 'signin', element: <Signin /> },
        { path: 'signup', element: <Signup /> },
        { path: 'transfers', element: <Transfers /> },
        { path: 'airtime', element: <BlankPage /> },
        { path: 'loans', element: <BlankPage /> },
        { path: 'savings', element: <BlankPage /> },
        { path: 'cards', element: <BlankPage /> },
        { path: 'accounts', element: <BlankPage /> },
        { path: 'profile', element: <BlankPage /> }
      ]
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App
