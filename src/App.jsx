import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import EmailBody from "./Components/EmailBody";
import EmailList from "./Components/EmailList";
import EmailType from "./Components/EmailType";

function App() {
  return (
    <Router>
      <div className="App">
        <EmailType />
        <main className="main-wrapper">
          <Routes>
            <Route exact path="/" element={<EmailList type="all" />} />
            <Route path="/unread" element={<EmailList type="unread" />} />
            <Route path="/read" element={<EmailList type="read" />} />
            <Route path="/favorites" element={<EmailList type="favorite" />} />
          </Routes>
          <EmailBody />
        </main>
      </div>
    </Router>
  );
}

export default App;
