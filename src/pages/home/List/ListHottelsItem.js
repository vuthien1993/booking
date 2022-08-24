import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./ListHottelsItem.css";
function ListHottelSItem(props) {
  return (
    <div className="container-fluid borderList">
      <h3>Homes guests love</h3>
      <div className="row margin">
        {/* render giao diện người dùng */}
        {props.itemListHottels.map((ele, i) => {
          return (
            <div key={i} className="col-md-3">
              <img
                src={process.env.PUBLIC_URL + `${ele.image_url}`}
                alt={`List hottels_${i + 1}`}
              />
              {/* dùng react router chuyển hướng trang detail */}
              <h3>
                <Link to="/detail" target={"_blank"}>
                  {ele.name}
                </Link>
              </h3>
              <p>{ele.city}</p>
              <p id="p_dam">Starting From ${ele.price}</p>
              <p>
                <span>{ele.rate}</span>
                {ele.type}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ListHottelSItem;
