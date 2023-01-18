import React from "react";

export default function EmailType() {
  return (
    <div className="header">
      <div className="filter">Filter By:</div>
      <div className="emailtype">
        <div className="emailtype_option">Unread</div>
        <div className="emailtype_option">Read</div>
        <div className="emailtype_option">Favorites</div>
      </div>
    </div>
  );
}
