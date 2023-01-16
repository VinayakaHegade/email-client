import React from "react";

export default function EmailType() {
  return (
    <div className="header">
      <div className="filter">
        <div>Filter By:</div>
      </div>
      <div className="emailtype">
        <div className="emailtype_option">
          <span>Unread</span>
        </div>
        <div className="emailtype_option">
          <span>Read</span>
        </div>
        <div className="emailtype_option">
          <span>Favorites</span>
        </div>
      </div>
    </div>
  );
}
