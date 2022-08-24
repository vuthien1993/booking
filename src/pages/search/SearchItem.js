import React from "react";
import SearchDate from "./SearchDate";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchItem.css";
function SearchItem(props) {
  return (
    <div className="container-fluid borderSearch">
      <div className="row">
        <div className="col-md-3 borderSearch1">
          <div className="marginT">
            <h3 className="indam">Search</h3>
            <p className="indam">Destination</p>
            <form className="marginR">
              <input className="input1"></input>
            </form>
            <p className="indam marginT">Check-in Date</p>
            <form className="marginR">
              <SearchDate />
            </form>
            <p className="indam marginT">Options</p>
            <div className="borderOption">
              <p>
                <span>Min price per night</span>
                <span>
                  <input className="input2"></input>
                </span>
              </p>
              <p>
                <span>Max price per night</span>
                <span>
                  <input className="input3"></input>
                </span>
              </p>
              <p>
                <span>Adult</span>
                <span>
                  <input className="input4" placeholder="1"></input>
                </span>
              </p>
              <p>
                <span>Children</span>
                <span>
                  <input className="input5" placeholder="0"></input>
                </span>
              </p>
              <p>
                <span>rom</span>
                <span>
                  <input className="input6" placeholder="1"></input>
                </span>
              </p>
            </div>
            <div id="buttonS">
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="marginR2">
            {props.itemSearch.map((ele, i) => {
              return (
                <div key={i} className="row borderSearch2">
                  <div className="col-md-5">
                    <div className="margint">
                      <img
                        src={process.env.PUBLIC_URL + `${ele.image_url}`}
                        alt={`Search_${i + 1}`}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="margint">
                      <h3>{ele.name}</h3>
                      <p>{ele.distance} from center</p>
                      <p className="borderTag">
                        <span>{ele.tag}</span>
                      </p>
                      <p className="indam">{ele.description}</p>
                      <p>{ele.type}</p>
                      {ele.free_cancel && (
                        <p className="indam changeColor">Free Cancellation</p>
                      )}
                      {ele.free_cancel && (
                        <p className="changeColor">
                          You can cancel later, so lock in this great price
                          today!
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="margint">
                      <div>
                        <p>
                          <span className="indam">{ele.rate_text}</span>
                          <span className="borderRate">{ele.rate}</span>
                        </p>
                      </div>
                      <div className="borderPrice">
                        <p id="changeSize">${ele.price}</p>
                        <p>includes taxes and fees</p>
                        <div>
                          <button>See availabillity</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchItem;
