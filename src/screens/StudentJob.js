import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Studentjob = () => {

    const [StudentJob, setStudentJob] = useState([]);
    const [JobRequest, setJobRequest] = useState([]);

    //  useEffect(() => {
    //     const getStudentJobById = async () => {
    //         const response = await axios.get(
    //             `http://localhost:7200/request_teacher/${JSON.parse(localStorage.getItem("userInfo")).id
    //             }`
    //         );
    //         setStudentJob(response.data);
    //         console.log(response)
    //     };
    //     getStudentJobById();
    // }, []);

    // useEffect(() => {
    //     fetch(`http://localhost:7200/request_teacher/${JSON.parse(localStorage.getItem("userInfo")).id
    //         }`)
    //         .then(response => response.json())
    //         .then(json => {
    //             // console.log(json);
    //             setStudentJob([json]);
    //         })
    //     //  setPostArray([{name: 'a'}, {name: 'b'},{name: 'c'}])
    // }, [])


    useEffect(() => {
        const getStudentJob = async () => {
            const response = await axios.get(
                `https://kawotekbackend.elvirainfotech.org/request_teacher/${JSON.parse(localStorage.getItem("userInfo")).id
                }`
            );
            setStudentJob(response.data);
            // console.log(response)
        };
        getStudentJob();
    }, []);


    useEffect(() => {
        const getStudentDetails = async () => {
            const response = await axios.get(
                `https://kawotekbackend.elvirainfotech.org/request_teachers/${JSON.parse(localStorage.getItem("userInfo")).id
                }`
            );
            setJobRequest(response.data);
            // console.log(response)
            const d = response.data.length;
            console.log(d);

        };
        getStudentDetails();
    }, []);

    return (
        <div>

            {/* <div className='container py-5'>

        {
            StudentJob.map((item, index) => {
                return (

                    <div>
                        <div className="card shadow bg">
                            <div className="card-body">
                                {item.subject}{item.d}
                            </div>
                        </div>
                        <br />
                        {
                            JobRequest.map((data, i) => {
                                if (item.request_id == data.request_id) {
                                    return (
                                        <>
                                            <div className='container'>
                                                <div className="card shadow">
                                                    <div className="card-body">
                                                        {data.request}
                                                        <Link className='btn btn-primary' to={`/tutor-details?d=${data.teacher_id}`}>View More</Link>
                                                        <br />
                                                    </div>
                                                </div>

                                            </div>
                                            <br />

                                        </>
                                    )
                                }
                            })
                        }

                    </div>
                )

            })
        }

    </div> */}


            {/* design */}

            <div className='comment-rply py-5'>
                {
                    StudentJob.map((item, index) => {
                        return (
                            <div class="d-flex align-items-center justify-content-center">
                                <div className="container">
                                    <div className="row justify-content-center mb-4">
                                        <div className="col-lg-12">
                                            <div className="comments">
                                                <div className="comment d-flex mb-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm rounded-circle">
                                                            <img classname="avatar-img" src={`https://images.unsplash.com/photo-1501325087108-ae3ee3fad52f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f7f448c2a70154ef85786cf3e4581e4b`} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 ms-sm-3">
                                                        <div className="comment-meta d-flex align-items-baseline">
                                                            <h6 className="me-2">{item.first_name} {item.last_name}</h6>
                                                            {/* <span className="text-muted">2d</span> */}
                                                        </div>
                                                        <div className="comment-body">
                                                            <p>{item.description}</p>
                                                        </div>
                                                        {
                                                            JobRequest.map((data, i) => {
                                                                if (item.request_id == data.request_id) {
                                                                    return (
                                                                        <>
                                                                            <div className="comment-replies bg-light p-3 mt-3 rounded">
                                                                                {/* <h6 className="comment-replies-title mb-4 text-muted text-uppercase">2 replies</h6> */}
                                                                                <div className="reply d-flex mb-4">
                                                                                    <div className="flex-shrink-0">
                                                                                        <div className="avatar avatar-sm rounded-circle">
                                                                                            <img classname="avatar-img" src={`https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200`} alt="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex-grow-1 ms-2 ms-sm-3">
                                                                                        <div className="reply-meta d-flex align-items-baseline">
                                                                                            <h6 className="mb-0 me-2 text-primary">{data.teacher_id.first_name}</h6>
                                                                                            {/* <span className="text-muted">2d</span> */}
                                                                                        </div>
                                                                                        <div className="reply-body">
                                                                                            {data.request}
                                                                                        </div>
                                                                                        <br/>
                                                                                        <Link className='text-success' to={`/tutor-details?d=${data.teacher_id}`}>View Profile</Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }

                                                            })
                                                        }




                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }

            </div>

        </div>
    );
}

export default Studentjob;
