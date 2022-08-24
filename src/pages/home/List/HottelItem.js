import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./HottelItem.css";
function HottelItem(props) {
  return (
    <div className="container-fluid borderHottel">
      <h3>Browse by property type</h3>
      <div className="row">
        {/* render giao diện người dùng */}
        {props.itemHottel.map((ele, i) => {
          return (
            <div key={i} className="col-md-2">
              <img
                src={process.env.PUBLIC_URL + `${ele.image}`}
                alt={`Hottel_${i + 1}`}
              />
              <h3>{ele.name}</h3>
              <p>{ele.count} hottels</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HottelItem;
