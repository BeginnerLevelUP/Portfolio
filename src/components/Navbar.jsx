import {Link} from 'react-router-dom';

function Navbar(){
return(
    <>


  <nav>
                <ul>
                    <li>
                        <a href="#about" >
            <Link to="/">About Me </Link>
                        </a>
                    </li>
                    <li> 
                        <a href="#work">
 <Link to="/portfolio">Portfolio</Link>
                           </a>
                    </li>
                    <li> 
                        <a href="#contact">
                <Link to="/contact">Contact</Link>
                           </a>
                    </li>
                    <li> 
                <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>



    </>
)
}
export default Navbar