import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  markAsFavorite,
  markAsRead,
  selectEmailById,
} from "../features/allMailsSlice";
import { selectedMail } from "../features/mailSlice";

function EmailBody() {
  const mail = useSelector(selectedMail);
  const [emailBody, setEmailBody] = useState(null);
  const email = useSelector((state) => selectEmailById(state, mail?.id));

  const dispatch = useDispatch();

  const handleMarkAsFavorite = () => {
    dispatch(markAsFavorite(mail?.id));
  };

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://flipkart-email-mock.now.sh/?id=${mail?.id}`)
        .then((res) => res.json())
        .then((data) => {
          setEmailBody(data);
          dispatch(markAsRead(mail?.id));
        });
    }
    fetchData();
  }, [mail]);

  return (
    mail && (
      <div className="email_body">
        <aside>
          <div className="profileImage">
            {mail?.from?.name.charAt(0).toUpperCase()}
          </div>
        </aside>
        <main className="email_body_main">
          <section className="email_body_header">
            <strong className="email_body_subject">{mail?.subject}</strong>
            <button
              onClick={handleMarkAsFavorite}
              className={email?.status.isFavorite ? "favorite" : ""}
            >
              Mark as Favorite
            </button>
          </section>
          <div className="email_body_date">
            {new Date(mail?.date).toLocaleString("en-GB", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
          <article
            className="email_content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(emailBody?.body),
            }}
          ></article>
        </main>
      </div>
    )
  );
}

export default EmailBody;
