import Logo from "components/Logo";
import { MouseEventHandler } from "react";
import { useAppDispatch } from "store/hooks";
import { toggleModal } from "store/place";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const onAddPlaceClick: MouseEventHandler = (e) => {
    e.preventDefault();

    dispatch(toggleModal(true));
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Logo size={2} />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Lorem</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Ipsum</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button">Log in</a>

              <a
                className="button is-primary"
                onClick={onAddPlaceClick}
                href="#"
              >
                <strong>Add Places</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
