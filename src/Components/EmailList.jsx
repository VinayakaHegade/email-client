import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmails, markAsFavorite } from "../features/allMailsSlice";
import { openedMail, selectedMail } from "../features/mailSlice";

export default function EmailList({ type }) {
  let emails;
  const allEmails = useSelector((state) => state.allMails.emails);
  const dispatch = useDispatch();

  const selectedEmail = useSelector(selectedMail);

  useEffect(() => {
    if (!allEmails?.length) {
      dispatch(fetchEmails());
    }
  }, [dispatch, allEmails]);

  switch (type) {
    case "read":
      emails = allEmails.filter((email) => email.status.isRead);
      break;
    case "unread":
      emails = allEmails.filter((email) => !email.status.isRead);
      break;
    case "favorite":
      emails = allEmails.filter((email) => email.status.isFavorite);
      break;
    default:
      emails = allEmails;
  }

  const setMail = (email) => {
    dispatch(openedMail(email));
  };

  const handleMarkAsFavorite = (e, emailId) => {
    e.stopPropagation();
    dispatch(markAsFavorite(emailId));
  };

  return (
    <section className="email-list-container">
      {emails?.map((email) => {
        const isSelected = email.id === selectedEmail?.id;
        return (
          <div
            key={email.id}
            className={`email_list ${isSelected ? "selected" : ""}`}
            onClick={() => setMail(email)}
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
                <button
                  onClick={(e) => handleMarkAsFavorite(e, email.id)}
                  className={email.status.isFavorite ? "favorite" : ""}
                >
                  Favorite
                </button>
              </div>
            </main>
          </div>
        );
      })}
    </section>
  );
}
