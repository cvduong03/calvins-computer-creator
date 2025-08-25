import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PartsTable } from "./PartsTable";

export function HomePage() {
  return (
    <>
      <Header />

      <PartsTable />
    </>
  );
}
