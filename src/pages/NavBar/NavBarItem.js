import React from "react";
import "./NavBarItem.css";
import "bootstrap/dist/css/bootstrap.css";
function NavBarItem(props) {
  console.log(props);
  return (
    <div className="border container-fluid">
      <div className="marginLeft">
        <div className="row">
          <div className="col-md-9 ">
            <p className="p">Booking Website</p>
          </div>
          <div className="col-md-3">
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
        <div>
          {/* dùng pt map để render data nhận được ra giao diện người dùng */}
          {props.dataNavBar.map((ele, i) => {
            return (
              <div key={i} className="fll">
                <p className={`${ele.active && "isvalid"}`}>
                  <i className={` ${ele.icon}`} />
                  {ele.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default NavBarItem;
