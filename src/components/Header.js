import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header className="panel-bg">
      <div>
        <h1 className="Bookstore-CMS Text-Style-3"> Book Store </h1>

      </div>
      <nav className="nav-links-container">
        <NavLink to="/" className="BOOKS Text-Style-6">Home</NavLink>
        <NavLink to="categories" className="CATEGORIES Text-Style-6">Categories</NavLink>

      </nav>
    </header>
  );
}
