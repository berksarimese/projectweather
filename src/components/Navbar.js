import React, { useEffect } from 'react'
import Cloud from  '../images/Cloud.svg'
import '../styles/Bsstyle.css'



function Navbar(props) {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.setSearch(props.location);
    }
  };

  //LOCAL SEARCH
  useEffect(() => {
    const srcData = localStorage.getItem('srcData');
    props.setSearch(srcData);
    console.log(props.search);
  },[])

  useEffect (() => {
    localStorage.setItem('srcData', props.search);
  },[props.search])


  return ( 
   
<nav className="navbar navbar-expand-lg py-0 shadow bblury">
<div className="container-fluid">
  <label className="navbar-brand d-flex align-items-center my-2 py-0 h1">
    <img src={Cloud} alt="Logo" width="40" height="40" className="d-inline-block align-text-top mx-3"/>
    <small className='align-middle text-light'>Project Weather</small></label>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end my-2" id="navbarSupportedContent">
    <div></div>
    <form className="d-flex" onSubmit={e => e.preventDefault()}>
      <input className="form-control me-2  bblury-input" style={{height:'30px'}} value={props.location} type="text" placeholder="Bölge İsmi" aria-label="Search" onKeyDown={handleKeyDown} onChange={e => props.setLocation(e.target.value)}/>
      <button className="btn btn-light py-0 btn-sm" style={{height:'30px'}} type="button" onClick={() => props.setSearch(props.location)}>Ara</button>
    </form>
  </div>
</div>
</nav>
  
  )
}

export default Navbar;