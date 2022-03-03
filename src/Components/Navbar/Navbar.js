import React from "react";

class Navbar extends React.Component{

    render(){

        return <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed top-0 end-0 start-0 p-3">
        <div className="container">
        <a className="navbar-brand fw-bold" href="">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact" >Contact</a>
        </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        </>
    }

}

export default Navbar;