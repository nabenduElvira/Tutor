import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const Requestteacher = () => {

    const [allSubject, setAllSubject] = useState([]);
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    // const [error, setError] = useState("");
    // const [success, setSuccess] = useState("");

    // const initialValues = {
    //     subject: "",
    //     description: "",
    //   };
       

    //   async function onSubmit(values) {
    //     // console.log(values);
    //     // console.log(teacher_id);
    //     const res = await axios.post(
    //       `http://localhost:7200/request_teachers/add`,
    //       {
    //         student_id: JSON.parse(localStorage.getItem("userInfo")).id,
    //         subject: values.Subject,
    //         description: values.Description,
    //       }
    //     );
    //     console.log(res);
    //     // localStorage.clear();
    //     window.location.href = "/";
    //   }  
   
    useEffect(() => {
        axios.get('https://kawotekbackend.elvirainfotech.org/teachers')
            .then(res => {
                console.log(res)
                setAllSubject(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://kawotekbackend.elvirainfotech.org/request_teachers/add/`,{
            subject,
            description,
            student_id: JSON.parse(localStorage.getItem("userInfo")).id,
        })
        swal({
            title: "Your Request has been Submitted in JOBs Page",
            text: "Wait for Teachers Response",
            icon: "success",
            timer: 3000,
           
          });
        // console.log(subject);
        // console.log(description);
        e.target.reset();

        
        
        // console.log(checkbox);
    }

    return (
        <div>
            <section className="dashboard-nav-area"><div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="dn-area">
                            <ul>
                                <li><a className="active" href="/dashboard"><span><img src="images/ic1.png" alt /></span>Dashboard</a></li>
                                <li><a href="/teachers"><span><img src="images/ic3.png" alt /></span>Teachers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <br />
            <section className='front'>
                <form onSubmit={onSubmit}>
                    <div className="form-group col-md-6">
                        <label><b>Subject / Topic</b></label>

                        <select id="inputState" name="subject" onChange={ (e)=>setSubject(e.target.value)} className="form-control" required>
                            <option>Choose...</option>
                            {
                                allSubject.map((data)=>{    
                                    return(
                                        <option key={data.subject} value={data.subject} >{data.subject}</option>
                                    )
                                })
                            } 
                        </select>

                    </div>
                    <div className="form-group col-md-6">
                        <label ><b>Description</b></label>
                        <textarea className="form-control" onChange={ (e)=>setDescription(e.target.value)} name="description" rows="3" required />
                    </div>

                    <button type="submit" className="btn btn-success buttn">Submit</button>
                </form>
            </section>
            <br />
        </div>
    );
}

export default Requestteacher;