import headerIcon from '../../assets/header-icon.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className={'container d-flex justify-content-between align-items-center'}
    >
      <img src={headerIcon} alt="A blog icon" />
      <nav>
        <ul className="d-flex justify-content-between align-items-center gap-5">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/pages'} className="nav-link">
              Pages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/contact'} className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <label>
        <input type="text" name="" id="" placeholder={'Search'} />
      </label>
    </header>
  );
};

export default Header;
