import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/Auth/operationsAuth";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={RegisterPage}
              redirectTo="/contacts"
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute 
            component={LoginPage} 
            redirectTo="/contacts" />
          }
        ></Route>
        <Route path="/contacts" element={
          <PrivateRoute component={ContactsPage}
          redirectTo="/login/" />}></Route>
      </Route>
    </Routes>
  );
};

// import { Container, MainTitle, ContactsTitle, Message } from "./App.styled";
// import { FormContact } from "./FormContact/FormContact";
// import { Contacts } from "./Contacts/Contacts";
// import { FormFilter } from "./Filter/Filter";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from "../redux/selectors";
// import { lazy, useEffect } from "react";
// import { fetchContacts } from "redux/operations";
// import { Loader } from "./Loader/Loader";
// import { Route, Routes } from "react-router-dom";
// import { Layout } from "./Layout/Layout";

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register/Register'));
// const LoginPage = lazy(() => import('../pages/Login/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
// // import { Contacts } from "pages/Contacts/Contacts";

// export const App = () => {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (

//     <Container>
//       <div>
//       <Routes>
//         <Route path="/" element={Layout}>
//           <Route index element={<HomePage />}></Route>
//           <Route path="/register" element={<RegisterPage/>}></Route>
//           <Route path="/login" element={<LoginPage/>}></Route>
//           <Route path="/contacts" element={<ContactsPage/>}></Route>

//         </Route>
//       </Routes>
//     </div>
//       <MainTitle>Phonebook</MainTitle>
//       <FormContact />
//       {isLoading && !error && <Loader />}
//       <ContactsTitle>Contacts</ContactsTitle>
//       <FormFilter label="Find contacts by name" />
//       {contacts.length === 0 ? (
//         <Message>You don't have contacts yet</Message>
//       ) : (
//         <Contacts />
//       )}
//     </Container>
//   );
// };
