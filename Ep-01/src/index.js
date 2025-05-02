import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
import Team from "./components/Team/Team";
import Demo from "./components/Demo";
import GroceryShimmer from "./components/ShimmerUI/ShimmerGroceryPage/GroceryShimmer";
// import GroceryPage from "./components/GroceryPage/GroceryPage";

const GroceryPage = lazy(() => import("./components/GroceryPage/GroceryPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/demo",
        element: (
          <Demo
            name="manthan"
            location="bangalore"
            contact="manthan123@gmail.com"
          />
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<GroceryShimmer />}>
            <GroceryPage />
          </Suspense>
        ),
      },
      {
        path: "*", // <- catch-all route
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
