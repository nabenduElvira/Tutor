import React,{useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const Privatelessons = () => {

    const [Teachersubject, setTeachersubject] = useState([]);
    const [lessons, setlessons] = useState([]);
    const [amount, setamount] = useState([]);
    const [subject, setsubject] = useState([]);


    useEffect(() => {
        const getTeacherSubject = async () => {
            const response = await axios.get(
                `https://kawotekbackend.elvirainfotech.org/teachersubject/${JSON.parse(localStorage.getItem("userInfo")).id
                }`
            );
            setTeachersubject(response.data);
            console.log(response)
        };
        getTeacherSubject();
    }, []);


    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://kawotekbackend.elvirainfotech.org/private_lesson/add`,{
            subject:Teachersubject.subject,
            lessons,
            amount,
            // teacher_id: JSON.parse(localStorage.getItem("userInfo")).id,
            teacher_id:localStorage.getItem("teacher_id"),
        })
        swal({
            title: "Your Private Lesson has been Submitted in Your Profile Page",
            text: "",
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
                <h4>Create Private Lessons</h4>
                <form onSubmit={onSubmit}>
                    <div className="form-group col-md-6">
                        <label><b>Subject / Topic</b></label>
                        <input type="text" name="subject" value={Teachersubject.subject} onChange={ (e)=>setsubject(e.target.value)} className='form-control'disabled/>     
                    </div>

                    <div className="form-group col-md-6">
                        <label><b>Number of Lessons</b></label>
                        <input type="number" name="lessons" onChange={ (e)=>setlessons(e.target.value)} className='form-control' required/>     
                    </div>

                    <div className="form-group col-md-6">
                        <label><b>Amount</b></label>
                        <input type="number" name="amount" onChange={ (e)=>setamount(e.target.value)} className='form-control' required/>     
                    </div>    
                   
                    <button type="submit" className="btn btn-success buttn">Submit</button>
                </form>
            </section>
            <br />
        </div>
    );
}

export default Privatelessons;
