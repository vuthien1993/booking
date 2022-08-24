import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DetailItem.css";
function DetailItem(props) {
  const data = props.itemDetail;
  return (
    // sử dụng boostrap, css để định dạng lại bố cục trang web
    <div className="borderDetail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            {/* hiển thị dữ liệu nhận dc ra giao diện người dùng */}
            <h3>{data.name}</h3>
            <p id="p1">
              <span className="fa fa-map-marker" aria-hidden="true" />
              {data.address}
            </p>
            <p id="p2">{data.distance}</p>
            <p id="p3">{data.price}</p>
          </div>
          <div className="col-md-3">
            <button>Reserve or Book Now</button>
          </div>
        </div>
        <div className="row">
          {data.photos.map((ele, i) => {
            return (
              <div key={i} className="col-md-4">
                <img src={ele} alt="photodetai"></img>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-md-8 borderDetailFooter1">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          <div className="col-md-4 borderDetailFooter2">
            <div id="h1">
              <h4>Perfect for a 9-night stay!</h4>
              <p>
                Located in the real heart of Krakow this property has an
                excellent location score of 9.8!
              </p>
              <p id="p4">
                <span>${data.nine_night_price}</span> {"(9 nights)"}
              </p>
              <div>
                <button>Reserve or Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailItem;
