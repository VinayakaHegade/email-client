import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openedMail } from "../features/mailSlice";
import { fetchEmails } from "../features/allMailsSlice";
import { useSelector } from "react-redux";

export default function EmailList() {
  // const [emails, setEmails] = useState([]);
  const emails = useSelector((state) => state.allMails.emails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!emails?.length) {
    dispatch(fetchEmails());
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch("https://flipkart-email-mock.now.sh/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setEmails(data.list);
  //       });
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchEmails());
  // }, []);

  // const {emails: emails, loading } = state ?? {};

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
          {/* <img
            className="email_display_image"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Eo_circle_pink_white_letter-f.svg"
          /> */}
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

// import React, { useState, useEffect } from "react";

// const EmailList = () => {
//   const [{emails}, setEmails] = useState([]);
//   const [selectedEmail, setSelectedEmail] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);

//     fetch("https://flipkart-email-mock.now.sh/")
//       .then((response) => response.json())
//       .then((data) => {
//         setEmails(data);
//         setIsLoading(false);
//         console.log(emails);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(false);
//       });

//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error.message}</p>;
//   }

//   return (
//     <div>
//       <ul>
//         {[emails].map((email) => (
//           <li key={email.id}>
//             <p>From: {email.from}</p>
//             <p>Subject: {email.subject}</p>
//             <p>Description: {email.description}</p>
//             <button onClick={() => setSelectedEmail(email)}>View</button>
//           </li>
//         ))}
//       </ul>
//       {selectedEmail && <EmailBody email={selectedEmail} />}
//     </div>
//   );
// };

// export default EmailList
