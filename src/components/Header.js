import { Close, MenuOutlined } from "@material-ui/icons";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {

  const [active,setActive] = useState(false)

  const showMenu = () =>{
    setActive(!active)
  }


  return (
    <div className="header">

      <div className="menu-icon">
        <MenuOutlined className='menu' onClick={showMenu} />
      </div>
      <nav className={active ? 'slider active' : 'slider'}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <Link to='/home'>Home</Link>
          </li>

          <li>
            <Link to='/pricing'>Pricing</Link>
          </li>

          <li>
            <Link to='/testimonials'>Testimonials</Link>
          </li>

          <li>
            <Link to='/about'>About us</Link>
          </li>

          <li>
            <Link to='/contact'>Contact</Link>
          </li>

          <li className="green">
            <Link to='/login'>Log in</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
