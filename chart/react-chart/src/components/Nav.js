import React from 'react';

const Nav = () => {
  return (
    <nav className="app_nav">
      <ul className="nav_item_list">
        <li className="nav_item">
          <div className="nav_icon_wrapper">
            <i class="fas fa-search" />
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_icon_wrapper">
            <i class="fas fa-filter" />
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_icon_wrapper nav_icon_selected">
            <i class="fas fa-dot-circle" />
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_icon_wrapper">
            <i class="fas fa-barcode" />
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_icon_wrapper">
            <i class="fas fa-book" />
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_icon_wrapper">
            <i class="fas fa-file-powerpoint" />
          </div>
        </li>
        <li className="nav_item">
          <div className="nav_icon_wrapper">
            <i class="fas fa-edit" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
