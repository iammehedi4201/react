import { createBrowserRouter } from "react-router-dom";
import FormLayout from "../Layout/FormLayout/FormLayout";
import Main from "../Layout/MainLayout/Main";
import BookingProcess from "../Pages/BookingProcess/BookingProcess";
import CarsDetails from "../Pages/CarsDetails/CarsDetails";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import OurCars from "../Pages/OurCars/OurCars";
import ProfileDetails from "../Pages/ProfileDetails/ProfileDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PhoneNumberLogin from "../Pages/PhoneNumberLogin/PhoneNumberLogin";

export const router = createBrowserRouter([
  //MainLayout routes
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cars",
        element: <OurCars></OurCars>,
      },
      {
        path: "/carDetails/:carId",
        loader: ({ params }) => {
          const id = params.carId;
          return fetch(`http://localhost:5000/cars/${id}`);
        },
        element: (
          <PrivateRoutes>
            <CarsDetails></CarsDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bookingProcess",
        element: <BookingProcess></BookingProcess>,
      },
      {
        path: "/termsAndConditons",
        element: (
          <PrivateRoutes>
            <TermsAndConditions></TermsAndConditions>
          </PrivateRoutes>
        ),
      },
    ],
  },
  //FormLayout routes
  {
    path: "",
    element: <FormLayout></FormLayout>,
    children: [
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/numberLogin",
        element: <PhoneNumberLogin></PhoneNumberLogin>,
      },
      {
        path: "/profile",
        element: <ProfileDetails></ProfileDetails>,
      },
    ],
  },
]);
