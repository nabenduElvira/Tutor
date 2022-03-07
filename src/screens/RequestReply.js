import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Requestreply = () => {

    const [requestReply, setrequestReply] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7200/jobrequests')
            .then(res => {
                console.log(res)
                setrequestReply(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='container'>
            <div className="card text">
                {
                    requestReply.map((reply) => {
                        return (
                            <div className="card-header">
                                {reply.subject}
                            </div>
                        )
                    })
                }

                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>

        </div>
    );
}

export default Requestreply;
