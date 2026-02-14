import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        {path:"/login",element:<Login/>},
        {path:'/register',element:<Register/>},
        {path:"/dashboard",element:(
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
