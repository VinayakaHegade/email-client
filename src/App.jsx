import "./App.css";
import EmailBody from "./Components/EmailBody";
import EmailList from "./Components/EmailList";
import EmailType from "./Components/EmailType";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <EmailType />
        <Routes>
          <Route exact path="/" element={<EmailList />}></Route>
        </Routes>
        <Routes>
          <Route path="/mail" element={<EmailBody />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
