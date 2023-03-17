import { compose } from 'redux'
import { withRouter } from "./with-router";
import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <div>
//                 <h1>Hello World</h1>
//                 <Link to="about">About Us</Link>
//             </div>
//         ),
//     },
//     {
//         path: "about",
//         element: <div>About</div>,
//     },
// ])

export const withProviders = compose(withRouter);