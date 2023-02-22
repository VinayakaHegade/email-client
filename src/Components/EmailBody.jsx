import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmailList from "./EmailList";
import { selectedMail } from "../features/mailSlice";
import DOMPurify from "dompurify";

function EmailBody() {
  const mail = useSelector(selectedMail);
  const [emailBody, setEmailBody] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://flipkart-email-mock.now.sh/?id=${mail?.id}`)
        .then((res) => res.json())
        .then((data) => {
          setEmailBody(data);
        });
    }
    fetchData();
  }, [mail]);

  console.log(emailBody);

  return (
    <div className="mail">
      <div className="list">
        <EmailList />
      </div>
      <div className="email_body">
        <aside>
          {/* <img
            className="email_body_image"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Eo_circle_pink_white_letter-f.svg"
          /> */}
          <div className="profileImage">
            {mail?.from?.name.charAt(0).toUpperCase()}
          </div>
        </aside>
        <main className="email_body_main">
          <section className="email_body_header">
            <strong className="email_body_subject">{mail?.subject}</strong>
            <button>Mark as Favorite</button>
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
    </div>
  );
}

export default EmailBody;
