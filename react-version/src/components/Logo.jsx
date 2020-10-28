import React from "react";
import { Link } from "react-router-dom";

import "./../styles/logo.css";

export default function Logo({ brand }) {
  return (
    <Link to="/" id="logo">
      {brand || "Fake Shop"}
    </Link>
  );
}
