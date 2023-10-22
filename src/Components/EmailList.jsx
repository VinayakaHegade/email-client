import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openedMail } from "../features/mailSlice";
import { fetchEmails } from "../features/allMailsSlice";
import { useSelector } from "react-redux";

export default function EmailList({type}) {
let emails;

const allEmails = useSelector((state) => state.allMails.emails);
const navigate = useNavigate();
const dispatch = useDispatch();

useEffect(() => {
  if (!allEmails?.length) {
    dispatch(fetchEmails());
  }
}, [dispatch, allEmails]);


switch (type) {
  case "read":
    emails = allEmails.filter((email) => email.status === "read");
    break;
  case "unread":
    emails = allEmails.filter((email) => email.status === "unread");
    break;
  case "favorite":
    emails = allEmails.filter((email) => email.status === "favorite");
    break;
  default:
    emails = allEmails;
}

  const setMail = (email) => {
    dispatch(openedMail(email));
    navigate("/mail");
  };

  return emails?.map((email) => {
    return (
      <div
        key={email.id}
        className="email_list"
        onClick={(e) => setMail(email)}
      >
        <aside>
          <div className="profileImage">
            {email?.from?.name.charAt(0).toUpperCase()}
          </div>
        </aside>
        <main className="email_fields">
          <section className="email_field_from">
            From:
            <span>
              {" "}
              {email?.from?.name} {`<${email?.from?.email}>`}
            </span>
          </section>
          <section className="email_field_subject">
            Subject: <span>{email.subject}</span>
          </section>
          <section className="email_description">
            {email.short_description}
          </section>
          <div>
            <span className="email_field_date">
              {new Date(email.date).toLocaleString("en-GB", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
            <button>Favorite</button>
          </div>
        </main>
      </div>
    );
  });
}
