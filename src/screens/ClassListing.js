import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import moment from "moment";
// import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Classlisting = () => {
  // Upcomming Classes Part Start
  const [upcommingClassesData, setUpcommingClassesData] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://kawotekbackend.elvirainfotech.org/schedule-booking/student/${
        JSON.parse(localStorage.getItem("userInfo")).id
      }`
    )
      .then((res) => setUpcommingClassesData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [upcommingPageNumber, setUpcommingPageNumber] = useState(0);

  const upcommingPerPage = 3;
  const upcommingPagesVisited = upcommingPageNumber * upcommingPerPage;

  const upcommingPageCount = Math.ceil(
    upcommingClassesData.length / upcommingPerPage
  );

  const upcommingChangePage = ({ selected }) => {
    setUpcommingPageNumber(selected);
  };

  const upcommingClasses = upcommingClassesData
    .slice(upcommingPagesVisited, upcommingPagesVisited + upcommingPerPage)
    .map((data) => {
      return (
        <>
          <div className="col-sm-6 col-md-4 v my-2">
            <div
              className="card-shadow-sm w-100 border border-dark"
              style={{ minHeight: 225 }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  Teacher: <b>{data.first_name + " " + data.last_name}</b>
                </h5>
                <p className="card-text">Class Details:{data.title}</p>
                <p className="card-text">
                  Class Time:
                  {moment(data.start).format(" h:mm a") +
                    "-" +
                    moment(data.end).format(" h:mm a")}
                </p>
                <p className="card-text">
                  {moment(new Date()).format("YYYY-MM-DD h:mm:ss a") <=
                  data.end ? (
                    <>
                      {moment(new Date()).format("YYYY-MM-DD h:mm:ss a") >=
                      data.start ? (
                        <Link to={`/video?id=${data.linkid}`}>Class Link</Link>
                      ) : (
                        <>
                          <div>
                            Class Link :{" "}
                            <Link to="#">
                              open at
                              {moment(data.start).format(" h:mm a")}
                            </Link>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div>
        </>
      );
    });
  // Upcomming Classes Part End

  // Attended Classes Part Start
  const AttendedClass = [
    {
      id: "1",
      name: "Rahul Dey",
      class: "Demo1",
      time: "4:30 pm- 5:00 pm",
    },
    {
      id: "2",
      name: "Rahul Dey",
      class: "Demo2",
      time: "10:00 am- 11:00 am",
    },
    {
      id: "3",
      name: "Rahul Dey",
      class: "Demo3",
      time: "1:00 pm- 2:00 pm",
    },
    {
      id: "4",
      name: "Rahul Dey",
      class: "Demo4",
      time: "8:00 am- 9:00 am",
    },
  ];

  const [attendedPageNumber, setAttendedPageNumber] = useState(0);

  const attendedPerPage = 3;
  const attendedPagesVisited = attendedPageNumber * attendedPerPage;

  const attendedPageCount = Math.ceil(AttendedClass.length / attendedPerPage);

  const attendedChangePage = ({ selected }) => {
    setAttendedPageNumber(selected);
  };

  const attendedClasses = AttendedClass.slice(
    attendedPagesVisited,
    attendedPagesVisited + attendedPerPage
  ).map((data) => {
    return (
      <div className="col-sm-6 col-md-4 v my-2">
        <div
          className="card-shadow-sm w-100 border border-dark"
          style={{ minHeight: 225 }}
        >
          <div className="card-body" key={data.id}>
            <h5 className="card-title">
              Teacher: <b>{data.name}</b>
            </h5>
            <p className="card-text">Class Details: {data.class}</p>
            <p className="card-text">Class Time: {data.time}</p>
          </div>
        </div>
      </div>
    );
  });
  // Attended Class Part End

  //Missed Class Part Start
  const MisstedClass = [
    {
      id: "1",
      name: "Rahul Dey",
      class: "Demo1",
      time: "7:00 pm- 8:00 pm",
    },
    {
      id: "2",
      name: "Rahul Dey",
      class: "Demo2",
      time: "9:00 am- 10:00 am",
    },
    {
      id: "3",
      name: "Rahul Dey",
      class: "Demo3",
      time: "2:00 pm- 3:00 pm",
    },
    {
      id: "4",
      name: "Raven Rajput",
      class: "Demo4",
      time: "10:00 am- 11:00 am",
    },
  ];

  const [missedPageNumber, setMissedPageNumber] = useState(0);

  const missedPerPage = 3;
  const missedPagesVisited = missedPageNumber * missedPerPage;

  const missedPageCount = Math.ceil(MisstedClass.length / missedPerPage);

  const missedChangePage = ({ selected }) => {
    setMissedPageNumber(selected);
  };

  const missedClasses = MisstedClass.slice(
    missedPagesVisited,
    missedPagesVisited + missedPerPage
  ).map((data) => {
    return (
      <div className="col-sm-6 col-md-4 v my-2">
        <div
          className="card-shadow-sm w-100 border border-dark"
          style={{ minHeight: 225 }}
        >
          <div className="card-body">
            <h5 className="card-title">
              Teacher: <b>{data.name}</b>
            </h5>
            <p className="card-text">Class Details: {data.class}</p>
            <p className="card-text">Class Time: {data.time}</p>
          </div>
        </div>
      </div>
    );
  });
  //Missed Class Part End

  return (
    <div>
      <section className="class_page_sec py-5">
        <div className="container">
          <div className="heading_box">
            <h2>Upcomming Class</h2>
          </div>

          <div className="row">
            {upcommingClasses}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={upcommingPageCount}
              onPageChange={upcommingChangePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="heading_box">
            <h2>Attended Class</h2>
          </div>
          <div className="row">
            {attendedClasses}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={attendedPageCount}
              onPageChange={attendedChangePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="heading_box">
            <h2>Missed Class</h2>
          </div>
          <div className="row">
            {missedClasses}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={missedPageCount}
              onPageChange={missedChangePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classlisting;
