import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="d-flex flex-column h-100 justify-content-center align-items-center">
      <h1 className="display-1 my-5">Text RPG Editor</h1>
      <NavLink to="/editor">
        <button className="btn btn-primary display-1">
          <h3 className="my-1">Get Started</h3>
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
