import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appliedjobs from "./components/Appliedjobs/Appliedjobs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "applied-jobs",
                element: <Appliedjobs></Appliedjobs>,
            },
            {
                path: "statistics",
                element: <Statistics />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
