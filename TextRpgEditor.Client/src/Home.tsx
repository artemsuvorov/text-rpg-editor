import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h1 className="display-1 my-5">Text RPG Editor</h1>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
      <NavLink to="/editor">
        <button className="btn btn-primary display-1">
          <h3 className="my-1">Get Started</h3>
        </button>
      </NavLink>
    </div>
  );
}

export default App;
