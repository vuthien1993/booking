import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // lấy phần tủ chuyển đổi to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hiển thị khi click vào input
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  //  hiển thị khi kích bên ngoài calendar
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  return (
    <div className="borderHeaders">
      <div className="borderHeader">
        <h1>A lifetime of discounts? It's Genius</h1>

        <p>
          Get rewarded for your - unlock instant savings of 10% or more with a
          free account
        </p>
        <button>Sign in/Register</button>
        <form className="borderForm container-fluid">
          <div className="row">
            <div className="col-md-3">
              <span className="fa fa-bed" />
              <input type={"text"} placeholder="Where are you going?" />
            </div>
            {/* hiển thị calender để người dùng chọn giá trị date*/}
            <div className="col-md-4 calendarWrap">
              <span className="fa fa-calendar"></span>
              <input
                value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                  range[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                readOnly
                onClick={() => setOpen((open) => !open)}
              />

              <div ref={refOne} className="calenderButton">
                {open && (
                  <DateRange
                    onChange={(item) => setRange([item.selection])}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={1}
                    direction="horizontal"
                    className="calendarElement borderCalendar"
                  />
                )}
              </div>
            </div>
            <div className="col-md-4">
              <span className="fa fa-female" />
              <input type={"text"} placeholder="1 adult 0 children 1room" />
            </div>
            {/* dùng react router chuyển hướng đến trang Search */}
            <div className="col-md-1">
              <button className="borderFormbutton1">
                <Link to="/search" className="link">
                  Search
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Header;
