import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="main-header"> Book Store </h1>

      </div>
      <nav className="nav=links-container">
        <NavLink to="/" className="nav">Home</NavLink>
        <NavLink to="categories" className="nav">Categories</NavLink>

      </nav>
    </header>
  );
}
