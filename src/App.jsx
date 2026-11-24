import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">ahlanav</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">prod</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">prod2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  test
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  test
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  test
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header id="home" className="hero">
  <div className="container hero-content">
    <div className="col-12 col-md-6 text-start">
      <h1 className="display-3 fw-bold">Welcome to sahra </h1>
      <p className="lead my-4">
       
      </p>
      <a href="#features" className="btn btn-primary btn-lg">
        Get Started
      </a>
    </div>
  </div>
</header>

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Fast</h5>
                  <p className="card-text">
                    Built with Vite, so your app starts and updates almost
                    instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Responsive</h5>
                  <p className="card-text">
                    Bootstrap's grid makes the layout look great on any screen
                    size.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Reusable</h5>
                  <p className="card-text">
                    React components keep your code clean and easy to maintain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-dark text-light text-center py-3">
        <div className="container">
          <small>© 2026 MyLanding. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default App;
