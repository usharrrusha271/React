import { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h2 className="navbar-logo">SIET</h2>

                <ul className="nav-menu">
              <li>
              <Link to="/" className='nav-links'>Home</Link>
              <Link to="/about" className='nav-links'>About</Link>
               <Link to="/departments" className='nav-links'>Departments</Link>
              <Link to="/studentdata" className='nav-links'>Studentdata</Link>
              <Link to="/contact" className='nav-links'>Contact</Link> 
              <Link to="/login"  className='nav-links'>Login</Link>
               </li>
                </ul>
            </nav>
            
        )
    }
}
export default Navbar;