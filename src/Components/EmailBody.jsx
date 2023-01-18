import React, { useEffect, useState } from "react";
import EmailList from "./EmailList";

function EmailBody() {
  const [emailBody, setEmailBody] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://flipkart-email-mock.now.sh/?id=3")
        .then((res) => res.json())
        .then((data) => {
          setEmailBody(data);
        });
    }
    fetchData();
  }, []);

  console.log(emailBody);

  return (
    <div className="mail">
      <div className="list">
        <EmailList />
      </div>
      <div className="email_body">
        <aside className="email_body_aside">
          <img
            className="email_body_image"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Eo_circle_pink_white_letter-f.svg"
          />
        </aside>
        <main className="email_body_main">
          <section className="email_body_header">
            <strong className="email_body_subject">Lorem Ipsum</strong>
            <button>Mark as Favorite</button>
          </section>
          <div className="email_body_date">26/02/2020, 08:35</div>
          <article className="email_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus iusto autem repellat totam tempore amet similique saepe? Molestiae magnam quisquam eaque dolorem doloremque exercitationem dolorum voluptas, ducimus est alias.</article>
        </main>
      </div>
    </div>
  );
}

export default EmailBody;
