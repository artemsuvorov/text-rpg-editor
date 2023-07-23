function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-3">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Artem Suvorov</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="#">Twit</a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#">Inst</a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#">Fb</a></li>
      </ul>
    </footer>
  );
}

export default Footer;