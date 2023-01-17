import React, { useEffect, useState } from "react";

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://flipkart-email-mock.now.sh/")
        .then((res) => res.json())
        .then((data) => {
          setEmails(data.list);
        });
    }
    fetchData();
  }, []);

  console.log(emails);

  return emails?.map((email) => {
    return (
      <div key={email.id} className="email_list">
        <div>
          <img
            className="email_display_image"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Eo_circle_pink_white_letter-f.svg"
          />
        </div>
        <div className="email_fields">
          <p className="email_field_from">
            From:{" "}
            <span>
              {email?.from?.name} {`<${email?.from?.email}>`}
            </span>
          </p>
          <p className="email_field_subject">
            Subject: <span>{email.subject}</span>
          </p>
          <p className="email_description">{email.short_description}</p>
          <div className="email_field_date">
            <span>
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
        </div>
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
