import React from 'react'
import '../styles/Bsstyle.css'

const Footer = () => {
  return (
    <div>
        
        <div className="container-fluid bblury">
          <footer className="d-flex flex-wrap justify-content-between align-items-center mx-3">
            <p className="col-md-4 mb-0 text-white">&copy; 2023 berksarimese</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
            </a>

            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item"><a href="https://www.linkedin.com/in/berk-sar%C4%B1me%C5%9Fe-8b4a9a234/" className="nav-link px-2 text-white">LinkedIn</a></li>
              <li className="nav-item"><a href="https://github.com/berksarimese" className="nav-link px-2 text-white">GitHub</a></li>
              <li className="nav-item"><a href="https://www.instagram.com/berksarimese/" className="nav-link px-2 text-white">Instagram</a></li>
            </ul>
          </footer>
        </div>

    </div>
  )
}

export default Footer;