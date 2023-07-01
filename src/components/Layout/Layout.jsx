import { Container } from "components/App.styled";
import AppBar from "components/AppBar/AppBar";
import { Loader } from "components/Loader/Loader";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer position="top-center" />
    </Container>
  );
};
