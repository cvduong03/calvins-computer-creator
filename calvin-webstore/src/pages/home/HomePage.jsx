import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PartsTable } from "./PartsTable";

export function HomePage() {
  return (
    <>
      <title>Calvin's Computer Creator</title>
      <h1 className="title-note">Choose your parts</h1>
      <Header />
      <PartsTable />
    </>
  );
}
