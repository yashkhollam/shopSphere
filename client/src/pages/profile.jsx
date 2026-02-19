// import React from 'react'

// function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile



import React from "react";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="container-fluid ">

      {/* 🔹 Mobile Header */}
      <div className="d-lg-none ">
        <button
          className="btn btn-outline-dark"
          data-bs-toggle="offcanvas"
          data-bs-target="#accountSidebar"
        >
          ☰ Menu
        </button>
      </div>

      <div className="row">

        {/* 🔹 Desktop Sidebar */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="list-group">
            <a href="/account/profile" className="list-group-item">
              Profile
            </a>
            <a href="/account/orders" className="list-group-item">
              Orders
            </a>
            <a href="/account/address" className="list-group-item">
              Address
            </a>
            <a href="/account/settings" className="list-group-item">
              Settings
            </a>
          </div>
        </div>

        {/* 🔹 Main Content */}
        <div className="col-12 col-lg-9">
          <Outlet />
        </div>
      </div>

      {/* 🔹 Mobile Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="accountSidebar"
      >
        <div className="offcanvas-header">
          <h5>My Account</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="list-group">
            <a
              href="/account/profile"
              className="list-group-item"
              data-bs-dismiss="offcanvas"
            >
              Profile
            </a>
            <a
              href="/account/orders"
              className="list-group-item"
              data-bs-dismiss="offcanvas"
            >
              Orders
            </a>
            <a
              href="/account/address"
              className="list-group-item"
              data-bs-dismiss="offcanvas"
            >
              Address
            </a>
            <a
              href="/account/settings"
              className="list-group-item"
              data-bs-dismiss="offcanvas"
            >
              Settings
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
//  `data:${req.file.mimetype};
//  base64,${req.file.buffer.toString("base64")}`,