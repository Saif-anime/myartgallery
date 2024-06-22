import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './Product';
import Banner from './Banner';
import Category from './Category';
import SubCategory from './SubCategory';
import Fabric from './Fabric';
import Colors from './Colors';
import Occasion from './Occasion';
import Offer from './Offer';
import Discount from './Discount';
import Uniform from './Uniform';
import Blouse from './Blouse';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/></>,
  },
  {
    path: "/Product",
    element: <><Product/></>,
  },
  {
    path: "/Banner",
    element: <><Banner/></>,
  },
  {
    path: "/User",
    element: <><Banner/></>,
  },
  {
    path: "/Category",
    element: <><Category/></>,
  },
  {
    path: "/SubCategory",
    element: <><SubCategory/></>,
  },
  {
    path: "/Fabric",
    element: <><Fabric/></>,
  },
  {
    path: "/Colors",
    element: <><Colors/></>,
  },
  {
    path: "/Occasion",
    element: <><Occasion/></>,
  },
  {
    path: "/Offer",
    element: <><Offer/></>,
  },
  {
    path: "/Discount",
    element: <><Discount/></>,
  },
  {
    path: "/Uniform",
    element: <><Uniform/></>,
  },
  {
    path: "/Blouse",
    element: <><Blouse/></>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

