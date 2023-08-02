function EditorButtons() {
    return (
      <ul className="navbar-nav">
        {/* File Dropdown Menu */}

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            File
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">New</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Save</a></li>
            <li><a className="dropdown-item" href="#">Save All</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
          </ul>
        </li>

        {/* Edit Dropdown Menu */}
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Edit
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Undo</a></li>
            <li><a className="dropdown-item" href="#">Redo</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Copy</a></li>
            <li><a className="dropdown-item" href="#">Cut</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Find</a></li>
            <li><a className="dropdown-item" href="#">Replace</a></li>
          </ul>
        </li>

        {/* View Dropdown Menu */}

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Explorer</a></li>
            <li><a className="dropdown-item" href="#">Code Editor</a></li>
          </ul>
        </li>
      </ul>
    );
}

export default EditorButtons;