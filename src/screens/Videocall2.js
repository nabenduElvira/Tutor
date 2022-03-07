import React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import axios from "axios";

const Videocall2 = () => {
  return (
    <div>
      <Formik
        initialValues={{
          profile: [],
        }}
        validationSchema={Yup.object({
          profile: Yup.array().min(1, "select at least 1 file"),
        })}
        onSubmit={(values, props) => {
          console.log(values);
          let data = new FormData();
          values.profile.forEach((photo, index) => {
            data.append(`photo${index}`, values.profile[index]);
          });

          console.log(data);
          // axios
          //   .post("you_api_for_file_upload", data, {
          //     headers: {
          //       "Content-Type": "multipart/form-data",
          //     },
          //   })
          //   .then((response) => {
          //     console.log(response);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        }}
      >
        {(formik) => {
          return (
            <>
              <Form>
                <input
                  id="file"
                  name="profile"
                  type="file"
                  accept=".pdf"
                  onChange={(event) => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    formik.setFieldValue("profile", myFiles);
                  }}
                  multiple
                />
                <ErrorMessage name="profile" />
                <button type="submit" disabled={formik.isSubmitting}>
                  Submit
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Videocall2;

// import React from "react";
// import "./videocall2.css";
// const Videocall2 = () => {
//   return (
//     <div>
//       <section className="chat_page_sec">
//         <div className="container">
//           <div className="chat_inner_sec">
//             <div className="chat_top_area">
//               <div className="row">
//                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
//                   <div className="chat_box_area">
//                     <div className="panel panel-default">
//                       <div className="panel-heading top-bar">
//                         <div className="col-md-8 col-xs-8">
//                           <h3 className="panel-title">Chat</h3>
//                         </div>
//                         {/* <div
//                           className="col-md-4 col-xs-4"
//                           style={{ textAlign: "right" }}
//                         >
//                           <a href="#">
//                             <span
//                               className="glyphicon glyphicon-remove icon_close"
//                               data-id="chat_window_1"
//                             />
//                           </a>
//                         </div> */}
//                       </div>
//                       <div className="panel-body msg_container_base">
//                         <div className="row msg_container base_sent">
//                           <div className="col-md-10 col-xs-10">
//                             <div className="messages msg_sent">
//                               <p>
//                                 that mongodb thing looks good, huh? tiny master
//                                 db, and huge document store
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_receive">
//                           <div className="col-md-10 col-xs-10">
//                             <div className="messages msg_receive">
//                               <p>
//                                 that mongodb thing looks good, huh? tiny master
//                                 db, and huge document store
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_receive">
//                           <div className="col-xs-10 col-md-10">
//                             <div className="messages msg_receive">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit, sed do eiusmod tempor
//                                 incididunt
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_sent">
//                           <div className="col-xs-10 col-md-10">
//                             <div className="messages msg_sent">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit, sed do eiusmod tempor
//                                 incididunt
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_sent">
//                           <div className="col-xs-10 col-md-10">
//                             <div className="messages msg_sent">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit.
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_receive">
//                           <div className="col-xs-10 col-md-10">
//                             <div className="messages msg_receive">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit, sed do eiusmod tempor
//                                 incididunt
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_sent">
//                           <div className="col-xs-10 col-md-10">
//                             <div className="messages msg_sent">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit.
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_receive">
//                           <div className="col-xs-10 col-md-10">
//                             <div className="messages msg_receive">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit, sed do eiusmod tempor
//                                 incididunt
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row msg_container base_receive">
//                           <div className="col-xs-10 col-md-10">
//                             <div className="messages msg_receive">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit, sed do eiusmod tempor
//                                 incididunt
//                               </p>
//                               <time datetime="2009-11-13T20:00">
//                                 Timothy • 51 min
//                               </time>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="panel-footer">
//                         <div className="chat_footer_area">
//                           <div className="chat_footer_input">
//                             <input
//                               id="btn-input"
//                               type="text"
//                               className="form-control chat_input"
//                               placeholder="Type a Message ..."
//                             />
//                             {/* <div className="footer_chat_attachment">
//                               <a href>
//                                 <i
//                                   className="fa fa-paperclip"
//                                   aria-hidden="true"
//                                 />
//                               </a>
//                             </div> */}
//                           </div>
//                           <div className="chat_footer_btn">
//                             <button className="btn btn_chat_send" id="btn-chat">
//                               <i
//                                 className="fa fa-paper-plane"
//                                 aria-hidden="true"
//                               />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 chat_content_area_main">
//                   <div className="chat_content_area">
//                     <div className="video_call_top">
//                       <div className="row">
//                         <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
//                           <div className="v_call_left">
//                             <h3>
//                               <span>
//                                 <i className="fa fa-phone" aria-hidden="true" />
//                               </span>{" "}
//                               Ongoing Call
//                             </h3>
//                           </div>
//                         </div>
//                         <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
//                           <div className="v_call_right">
//                             <a href>
//                               <img src="images/v_zoom_icon.png" alt="" />
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="video_call_area">
//                       <div className="video_call_img">
//                         <img src="images/v_call.jpg" alt="" />
//                       </div>
//                       <div className="video_call_sender">
//                         <img src="images/video_call_sender.jpg" alt="" />
//                       </div>
//                       <div className="call_manage_area">
//                         <div className="chat_btn_area">
//                           <ul>
//                             <li className="li_chat_mic">
//                               <a>
//                                 <i
//                                   className="fa fa-microphone"
//                                   aria-hidden="true"
//                                 ></i>
//                               </a>
//                             </li>
//                             <li className="li_chat_cam">
//                               <a href="">
//                                 <i className="fa fa-camera" aria-hidden="true"></i>
//                               </a>
//                             </li>
//                             {/* <li className="li_chat_search">
//                               <a href="">
//                                 <i
//                                   className="fa fa-search-plus"
//                                   aria-hidden="true"
//                                 ></i>
//                               </a>
//                             </li> */}
//                             <li className="li_chat_call">
//                               <a href="">
//                                 <i className="fa fa-phone" aria-hidden="true"></i>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="chat_bottom_area">
//               <div className="row">
//                 <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
//                   <div className="chat_img_shared">
//                     <h3>Image Shared</h3>
//                     <div className="shared_img_area">
//                       <ul>
//                         <li>
//                           <img src="images/video_call_sender.jpg" alt="" />
//                         </li>
//                         <li>
//                           <img src="images/video_call_sender.jpg" alt="" />
//                         </li>
//                         <li>
//                           <img src="images/video_call_sender.jpg" alt="" />
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
//                   <div className="chat_add_files">
//                     <h3>Add Files</h3>
//                     <div className="chat_add_btn_area">
//                       <ul>
//                         <li>
//                           <img src="images/add_file_btn.png" alt="" />
//                         </li>
//                         <li>
//                           <img src="images/add_file_btn.png" alt="" />
//                         </li>
//                         <li>
//                           <button type="button" className="file_send_btn">
//                             Send
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//         {/* new -*/}
//         {/* new end-*/}
//       </section>
//     </div>
//   );
// };

// export default Videocall2;
