import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import swal from 'sweetalert';



const Joblists = () => {

  const [Students, setStudent] = useState([]);
  const [request, setrequest] = useState("");
  const [request_id, setrequest_id] = useState([]);
  const [rids,setrid]=useState("");

  useEffect(() => {
    axios.get('https://kawotekbackend.elvirainfotech.org/request_teachers')
      .then(res => {
        // console.log(res)
        setStudent(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // function onSubmit(rid){
  //   console.log(request);
  //   console.log(rid);
  //   axios.post(`http://localhost:7200/jobrequests/add`, {
  //     request,
  //     teacher_id: JSON.parse(localStorage.getItem("userInfo")).id,
  //     request_id: rid,
  //   })
   
  // }
  const onSubmit = () => {
    // console.log(rd)

    // e.preventDefault();
    // console.log(request);
    // console.log(rids);
    axios.post(`https://kawotekbackend.elvirainfotech.org/jobrequests/add`, {
      request,
      teacher_id: JSON.parse(localStorage.getItem("userInfo")).id,
      request_id: rids,
      
    })
    swal({
      title: "Your Request has been Submitted in JOBs Page",
      text: "Wait for Teachers Response",
      icon: "success",
      timer: 1000,
    });

    // console.log(checkbox);
  }
  return (
    <div>
      <div className="container py-5">
        {
          Students.map((data) => {
            var modaltarget="#exampleModalCenter"+data.rid;
            var modalid="exampleModalCenter"+data.rid;

            return (
              <section key={data.rid}>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="jb-list-text">
                          <h5><strong>{data.subject}</strong></h5>
                          {/* <p>{data.description}</p> */}
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="btn-box">
                          <button type="button" className="btn btn-primary demo" data-toggle="modal" data-target={modaltarget}>Apply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
                <br />

                <div className="modal fade" id={modalid} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
                  <div className="modal-dialog modal-dialog-centered job-list-modal" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{data.subject}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>

                          <input type="hidden" name="request_id"className="form-control" value={data.rid} onChange={() => setrequest_id(data.rid)} />

                          <div className="form-group">
                            <textarea className="form-control" name="request" onChange={(e) => {setrequest(e.target.value);setrid(data.rid)}} rows="" cols="50" required />
                          </div>

                        </form>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={()=>{setrid(data.rid);onSubmit(data.rid);}} className="btn btn-primary demoo">Apply</button>

                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
          })
        }
      </div>
    </div>
  );
}

export default Joblists;
