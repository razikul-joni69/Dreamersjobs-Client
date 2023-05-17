import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appliedjobs from "./components/Appliedjobs/Appliedjobs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Home from "./components/Home/Home.jsx";
import JobDescription from "./components/JobDescription/JobDescription.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import "./index.css";
import allJobsLoader from "./loaders/allJobsLoader.js";
import appliedJobsLoader from "./loaders/appliedJobsLoader.js";
import loadJobById from "./loaders/loadJobById.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: allJobsLoader,
            },
            {
                path: "applied-jobs",
                element: <Appliedjobs></Appliedjobs>,
                loader: appliedJobsLoader,
            },
            {
                path: "statistics",
                element: <Statistics />,
                loader: appliedJobsLoader,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "job/:id",
                element: <JobDescription></JobDescription>,
                loader: ({ params }) => loadJobById(params.id),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
