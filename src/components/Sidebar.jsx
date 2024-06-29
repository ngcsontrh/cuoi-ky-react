const Sidebar = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white"
        style={{ width: "250px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">ADMIN AREA</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Inmate Management
            </a>
          </li>
          <li>
            <a href="#" className="nav-link active bg-primary text-white">
              Call Management
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Visitor Management
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Staff Management
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <b>User:</b> admin
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
