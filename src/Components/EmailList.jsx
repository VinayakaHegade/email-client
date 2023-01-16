import React, { useState, useEffect } from "react";

const EmailList = () => {
  const [{emails}, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://flipkart-email-mock.now.sh/")
      .then((response) => response.json())
      .then((data) => {
        setEmails(data);
        setIsLoading(false);
        console.log(emails);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
      
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <ul>
        {[emails].map((email) => (
          <li key={email.id}>
            <p>From: {email.from}</p>
            <p>Subject: {email.subject}</p>
            <p>Description: {email.description}</p>
            <button onClick={() => setSelectedEmail(email)}>View</button>
          </li>
        ))}
      </ul>
      {selectedEmail && <EmailBody email={selectedEmail} />}
    </div>
  );
};

export default EmailList