import "./App.css";
import EmailBody from "./Components/EmailBody";
import EmailList from "./Components/EmailList";
import EmailType from "./Components/EmailType";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Unread from "./Components/Unread";
import Read from "./Components/Read";
import Favorites from "./Components/Favorites";

function App() {
  return (
    <Router>
      <div className="App">
        <EmailType />
        <Routes>
          <Route exact path="/" element={<EmailList />}></Route>
          <Route path="mail" element={<EmailBody />} />
          <Route path="/unread" element={<Unread />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
