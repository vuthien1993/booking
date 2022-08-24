import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FooterItem.css";
function FooterItem(props) {
  const dataFooter = props.itemFooter.map((ele) => {
    return ele.col_values.join("\n");
  });
  console.log(dataFooter);
  return (
    <div className="borderFooter container-fluid">
      <div className="row">
        {/* render footer ra giao diện người dùng */}
        {props.itemFooter.map((ele, i) => {
          return (
            <div key={i} className="col-md-2">
              {ele.col_values.map((ele) => {
                return (
                  <div key={ele}>
                    <p>{ele}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FooterItem;
