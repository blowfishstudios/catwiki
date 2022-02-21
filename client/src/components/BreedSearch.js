import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDropdownOutsideClick } from "./useDropdownOutsideClick";

const BreedSearch = (names) => {
  const breeds = names.names;

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDropdownOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <div className="drop-container">
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <img
              src="../assets/cat-silhouette-vector-10.png"
              className="menu-image"
              alt="cat silouette"
            />
            Cat Breed Menu
          </button>

          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              {breeds.map((breed, index) => (
                <li key={index}>
                  <Link to={`api/${breed}`}>{breed}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BreedSearch;
