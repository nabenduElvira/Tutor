import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";
import swal from "sweetalert";

const SchedulerScreen = () => {
  const [calenderDetails, setCalenderDetails] = useState([]);
  const [start_date_err, setStart_date_err] = useState([]);
  const [end_date_err, setEnd_date_err] = useState([]);
  const [title_err, setTitle_err] = useState([]);

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const getTeacherByUserApi= ()=>{
    return new Promise((resolve, reject) => {
      fetch('https://kawotekbackend.elvirainfotech.org/teachers/user/'+JSON.parse(localStorage.getItem("userInfo")).id, {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      }).then((res) => res.json())
        .then(data => {
          if (data) {
            resolve({ success: true, data: data })
            // swal({
            //   title: "Your Free Trail Lesson Booked",
            //   text: "",
            //   icon: "success",
            //   timer: 3000,
             
            // });
          }
          else {
            resolve({ success: false, data: [] })
          }
        })
        .catch(err => {
          resolve({ success: false, err: err })
        })
    })
  }


  const shceduleAddApi= (post_data)=>{
    return new Promise((resolve, reject) => {
      fetch('https://kawotekbackend.elvirainfotech.org/schedule/add', {
        method: 'post',
        body: JSON.stringify(post_data),
        headers: {
          'content-type': 'application/json'
        }
      }).then((res) => res.json())
        .then(data => {
          if (data) {
            resolve({ success: true, data: data })
            // swal({
            //   title: "Your Free Trail Lesson Booked",
            //   text: "",
            //   icon: "success",
            //   timer: 3000,
             
            // });
          }
          else {
            resolve({ success: false, data: [] })
          }
        })
        .catch(err => {
          resolve({ success: false, err: err })
        })
    })
  }

  async function handleAddEvent() {
    // console.log(newEvent);
    let teacher_id=0;
    let startDate = moment(newEvent.start).format("YYYY-MM-DD h:mm:ss a");
    let endDate = moment(newEvent.end).format("YYYY-MM-DD h:mm:ss a");
    getTeacherByUserApi().then(data => {
      if(data.data){
        teacher_id=data.data.id;
        if(teacher_id>0){
          if (newEvent.start !== "") {
            if (newEvent.end !== "") {
              if (newEvent.title !== "") {
                let api_data={
                  'title': newEvent.title,
                  'start': startDate,
                  'end': endDate,
                  'teacher_id': teacher_id
                };
                shceduleAddApi(api_data).then(data2 =>{
                  if(data2.data){
                    swal("Scheduled time slot for classes added successfully.");
                  }
                });

              } else {
                setTitle_err("Class Title is required.");
              }
            } else {
              setEnd_date_err("End Date and End Time is required.");
            }
          } else {
            setStart_date_err("Start Date and Time is required.");
          }
        }
      }
    });
    
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle_err("");
      setEnd_date_err("");
      setStart_date_err("");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
  const getSchedule = async () => {
    const response = await axios.get(
      `https://kawotekbackend.elvirainfotech.org/schedule/teacher/${JSON.parse(localStorage.getItem("userInfo")).id}`
    );
    // console.log(response.data.data);
    const schedules = [];
    for (var i = 0; i < response.data.data.length; i++) {
      // console.log(response.data.data[i]);
      schedules.push({
        title: response.data.data[i].title,
        start: new Date(response.data.data[i].start),
        end: new Date(response.data.data[i].end),
      });
    }

    setCalenderDetails(schedules);
  };

  useEffect(() => {
    getSchedule();
  });

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 Teachers_Profile_main">
      <div className="mt-4 mb-4 text-center">
        <h2>Schedule Class</h2>
      </div>

      <div className="form-group">
        <div className="row align-items-end">
          <div className="col-lg-3 mb-4">
            <h6>Start Date and Start Time *</h6>
            <DatePicker
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Start Date , Start Time"
              className="form-control"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <p
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 12,
                marginBottom: 0,
                position: "absolute",
                left: 15,
                top: "100%",
              }}
            >
              {start_date_err}
            </p>
          </div>

          <div className="col-lg-3 mb-4">
            <h6>End Date and End Time *</h6>
            <DatePicker
              showTimeSelect
              dateFormat="Pp"
              placeholderText="End Date , End Time"
              className="form-control"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            <p
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 12,
                marginBottom: 0,
                position: "absolute",
                left: 15,
                top: "100%",
              }}
            >
              {end_date_err}
            </p>
          </div>
          <div className="col-lg-3 mb-4">
            <h6>Class Title *</h6>
            <input
              placeholder="Class Title"
              className="form-control"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <p
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 12,
                marginBottom: 0,
                position: "absolute",
                left: 15,
                top: "100%",
              }}
            >
              {title_err}
            </p>
          </div>
          <div className="col-lg-3 mb-4">
            <button onClick={handleAddEvent} className="btn btn-success w-100">
              Schedule Class
            </button>
          </div>
        </div>
        <Calendar
          // selectable
          step={15}
          localizer={localizer}
          events={calenderDetails}
          startAccessor="start"
          defaultView="week"
          views={["week"]}
          endAccessor="end"
          // scrollToTime={new Date()}
          // defaultDate={new Date()}
          onSelectEvent={(event) => alert(event.title)}
          // onSelectSlot={handleSelect}
          style={{ height: 450 }}
        />
      </div>
    </div>
  );
};

export default SchedulerScreen;
