import { CiSearch } from "react-icons/ci"; 
import { IoHome } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import PropTypes from 'prop-types';
import "./Nav.css";

const Nav = ({ handleinputchange, query, size, setShow }) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="search-container">
            <label className="label-container">
              <CiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleinputchange}
              />
            </label>
          </div>

          <div className="lang-container">
            <p onClick={() => setShow(true)}>HOME</p>
            <IoHome className="globe-icon" onClick={() => setShow(true)} />
          </div>

          <div className="btn-wishlist-container">
            <button className="wishlist-btn">
              Wishlist
              <CiHeart className="heart-icon" />
            </button>
          </div>

          <div className="btn-cart-container">
            <button className="cart-btnn" onClick={() => setShow(false)}>
              cart
              <CiShoppingCart className="cart-iconn" />
            </button>
            {size > 0 && (
              <span className="cart-total-item">{size}</span>
            )}
          </div>

          <div className="bitmoji-container">
            <img
              src="https://wp.wwu.edu/art109studioprojects/files/2022/09/20048676-218097948_22-s4-v1.png"
              alt="Bitmoji"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
Nav.propTypes = {
  handleinputchange: PropTypes.func.isRequired, // function prop, required
  query: PropTypes.string.isRequired,          // string prop, required
  size: PropTypes.number.isRequired,           // number prop, required
  setShow: PropTypes.func.isRequired           // function prop, required
};

export default Nav;
