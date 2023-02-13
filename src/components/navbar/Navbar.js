import { FaHome } from "react-icons/fa";
import { MdAssignment } from "react-icons/md"
import { SiGotomeeting } from "react-icons/si"
import './navbar.css'

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#"><FaHome  className="icon"/>Home</a></li>
                    <li><a href="#"><MdAssignment  className="icon"/>Assignment</a></li>
                    <li><a href="#"><SiGotomeeting className="icon"/>Meeting</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;