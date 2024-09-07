import React from 'react'

const Navbar = () => {
  return (
    <div className='row'>
    <div className='col-md-12'>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My project</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Add Employee</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/showall'>view Employee</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Navbar