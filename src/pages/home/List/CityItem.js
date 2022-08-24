import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CityItem.css";
function CityItem(props) {
  return (
    <div className="container-fluid borderCity">
      <div className="row margin">
        {/* pt map render giao diện người dùng */}
        {props.itemCity.map((ele, i) => {
          return (
            <div key={i} className="col-md-4">
              <div>
                <img
                  src={process.env.PUBLIC_URL + `${ele.image}`}
                  alt={`city_${i + 1}`}
                />
              </div>
              <div
                className={`${i === 0 && "content"} ${i === 1 && "content1"}
                ${i === 2 && "content2"}`}
              >
                <h3>{ele.name}</h3>
                <p>{ele.subText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CityItem;
