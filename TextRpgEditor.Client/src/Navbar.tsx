import EditorButtons from "./EditorButtons";
import { Routes, Route } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark justify-content-between p-3">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/editor">Editor</a>
          </li>
        </ul>
        <Routes>
          <Route path="/editor" element={<EditorButtons />}/>
        </Routes>
      </div>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <a className="nav-link" href="/editor">Sign in</a>
      </div>
    </nav>
  );
}

export default Navbar;