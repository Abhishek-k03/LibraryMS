const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light px-3 py-2 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="../src/assets/library.jpg"
              alt="Logo"
              className="img-fluid"
              style={{ width: "100px", height: "80px" }}
            />
            <span className="fw-bold fs-3">LIBRARY SYSTEM</span>
          </a>
          <div className="nav-buttons d-flex">
            <button className="btn btn-outline-success me-2">Library</button>
            <button className="btn btn-outline-success me-2">Borrower</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
