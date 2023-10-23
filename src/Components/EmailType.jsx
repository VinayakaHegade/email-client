import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetSelectedMail } from "../features/mailSlice";

export default function EmailType() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="filter">Filter By:</div>
      <div className="emailtype">
        <div
          className={`emailtype_option ${
            location.pathname === "/unread" ? "active" : ""
          }`}
          onClick={() => {
            dispatch(resetSelectedMail());
            navigate("/unread");
          }}
        >
          Unread
        </div>
        <div
          className={`emailtype_option ${
            location.pathname === "/read" ? "active" : ""
          }`}
          onClick={() => {
            dispatch(resetSelectedMail());
            navigate("/read");
          }}
        >
          Read
        </div>
        <div
          className={`emailtype_option ${
            location.pathname === "/favorites" ? "active" : ""
          }`}
          onClick={() => {
            dispatch(resetSelectedMail());
            navigate("/favorites");
          }}
        >
          Favorites
        </div>
      </div>
    </div>
  );
}
