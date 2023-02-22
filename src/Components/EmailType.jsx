import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmailType() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="filter">Filter By:</div>
      <div className="emailtype">
        <div className="emailtype_option" onClick={() => navigate("/unread")}>
          Unread
        </div>
        <div className="emailtype_option" onClick={() => navigate("/read")}>
          Read
        </div>
        <div
          className="emailtype_option"
          onClick={() => navigate("/favorites")}
        >
          Favorites
        </div>
      </div>
    </div>
  );
}
