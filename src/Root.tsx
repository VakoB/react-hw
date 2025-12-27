import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";



export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}