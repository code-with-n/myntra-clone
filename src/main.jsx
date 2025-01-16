import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import {Provider} from 'react-redux'
import store from "./store/index.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Container from "./container.jsx";
import Bag from "./components/bag/bag.jsx";
import Bag_Total from "./components/bag/bag_total.jsx";
import Wishlist from "./components/wishList/wishlist.jsx";
import Profile from "./components/profile/profile.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Container/>
      },
      {
        path:"/bag",
        element:<Bag_Total/>,
        
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"/profile",
        element:<Profile/>
      }

    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router= {router} />  
    </Provider>
  </StrictMode>
);
