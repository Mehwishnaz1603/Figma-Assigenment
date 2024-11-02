export default function Navbar(){
    return (
        <div className="navbar-body">
            <nav className="navbar">
    <div className="logo">cyber</div>

    <div className="search-bar">
      <input type="text" placeholder="Search" />
    </div>

    <ul className="nav-links">
     <li><a href="#" className="active">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Blog</a></li>
    </ul>

    <div className="icons">
      <a href="#"><span> &#9825; </span> </a> 
      <a href="#"><span> &#128722; </span></a>
      <a href="#"><span> &#128100; </span></a>
    </div>
  </nav>
  </div>

 )
}