import {Link} from 'react-router-dom';

function Navbar(){
return(
    <>
    <ul>
        <li>
                <Link to="/">Home</Link>
        </li>

        <li>
                <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
                <Link to="/resume">Resume</Link>
        </li>

        <li>
                <Link to="/contact">Contact</Link>
        </li>
    </ul>




    </>
)
}
export default Navbar