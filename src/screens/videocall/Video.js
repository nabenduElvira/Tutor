import { AgoraVideoPlayer } from "agora-rtc-react";
import { useState, useEffect } from "react";
import "../videocall2.css";
import { useClient } from "./Settings";
import { Grid, Button } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";
import React, { Component } from 'react';

export default function Video(props) {
  // videocall test btn
  const client = useClient();
  const { users, tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const [chats, setChats] = useState("");
  const [from_id, setForm_id] = useState("");
  const [to_id, setTo_id] = useState("");
  const [getChats, setGetChats] = useState("");
  const [chatCount, setChatCount] = useState(0);
  const [gridSpacing, setGridSpacing] = useState(12);

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    // setStart(false);
    // setInCall(false);
    window.location.href = "/tutor-list";
  };
  // videocall test bth
  // const { users, tracks } = props;

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  const link_id = new URLSearchParams(window.location.search).get("id");
  // console.log(link_id);

  const addChats = async () => {
    setChats("");
    document.querySelector("input").defaultValue = "";
    if (chats.match(/\w/)) {
      // console.log(from_id);
      // console.log(to_id);
      // console.log(chats);
      const response = await axios.post(
        "https://kawotekbackend.elvirainfotech.org/chat/add",
        {
          from_id: from_id,
          to_id: to_id,
          msg: chats,
        }
      );
      // console.log(response);
    }
  };

  const chatKey = (el) => {
    if (el.key === "Enter") {
      addChats();
    }
  };

  const fetchChats = async () => {
    if (from_id != "" && to_id != "") {
      const response = await axios.post(
        "https://kawotekbackend.elvirainfotech.org/chats",
        {
          from_id: from_id,
          to_id: to_id,
        }
      );

      // console.log(response);

      // console.log(response.data.result.length);

      if (chatCount < response.data.result.length) {
        setChatCount(response.data.result.length);
        window.document.getElementById("scroll_msg").scrollTop = 10000;
      }
      setGetChats(response.data.result);

      // console.log(response.data.result);
    }
  };

  useEffect(() => {
    const Details = async () => {
      const getIds = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/schedule-booking/link/${link_id}`
      );
      // console.log("getIds", getIds.data.data[0]);

      // const getTeacherId = await axios.get(
      //   `https://kawotekbackend.elvirainfotech.org/teachers/user/${
      //     JSON.parse(localStorage.getItem("userInfo")).id
      //   }`
      // );
      // console.log(getTeacherId);

      if (
        getIds.data.data[0].teacher_id ===
        JSON.parse(localStorage.getItem("userInfo")).id
      ) {
        // console.log("teacher", getIds.data.teacher_id);
        // console.log("teacher", getIds.data.student_id);
        setForm_id(getIds.data.data[0].teacher_id);
        setTo_id(getIds.data.data[0].student_id);
      } else {
        // console.log("student", getIds.data.data[0].student_id);
        // console.log("student", getIds.data.data[0].teacher_id);
        setForm_id(getIds.data.data[0].student_id);
        setTo_id(getIds.data.data[0].teacher_id);
      }
    };
    Details();

    fetchChats();
    // console.log(chatCount);
  });

  // console.log(getChats);
  return (
    <section className="chat_page_sec">
      <div className="container">
        <div className="chat_inner_sec">
          <div className="chat_top_area">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="chat_box_area">
                  <div className="panel panel-default">
                    <div className="panel-heading top-bar">
                      <div className="col-md-8 col-xs-8">
                        <h3 className="panel-title">Chat</h3>
                      </div>
                    </div>
                    <div
                      className="panel-body msg_container_base"
                      id="scroll_msg"
                    >
                      {/* <div className="panel-body msg_container_base"> */}
                      {getChats.length > 0
                        ? getChats.map((items) => {
                            // console.log(items);

                            return (
                              <>
                                {items.from_id ===
                                JSON.parse(localStorage.getItem("userInfo"))
                                  .id ? (
                                  <div className="row msg_container base_sent">
                                    <div className="col-md-10 col-xs-10">
                                      <div className="messages msg_sent">
                                        <p>{items.msg}</p>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="row msg_container base_receive">
                                    <div className="col-md-10 col-xs-10">
                                      <div className="messages msg_receive">
                                        <p>{items.msg}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })
                        : ""}
                      {/* </div> */}
                    </div>
                    {/* <div className="panel-body msg_container_base">
                      <div className="row msg_container base_sent">
                        <div className="col-md-10 col-xs-10">
                          <div className="messages msg_sent">
                            <p>
                              that mongodb thing looks good, huh? tiny master
                              db, and huge document store
                            </p>
                            <time datetime="2009-11-13T20:00">
                              Timothy • 51 min
                            </time>
                          </div>
                        </div>
                      </div>
                      <div className="row msg_container base_receive">
                        <div className="col-md-10 col-xs-10">
                          <div className="messages msg_receive">
                            <p>
                              that mongodb thing looks good, huh? tiny master
                              db, and huge document store
                            </p>
                            <time datetime="2009-11-13T20:00">
                              Timothy • 51 min
                            </time>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="panel-footer">
                      <div className="chat_footer_area">
                        <div className="chat_footer_input">
                          <input
                            id="btn-input"
                            type="text"
                            className="form-control chat_input"
                            placeholder="Type a Message ..."
                            onChange={(event) => setChats(event.target.value)}
                            onKeyPress={chatKey}
                            value={chats}
                          />
                        </div>
                        <div className="chat_footer_btn">
                          <button
                            className="btn btn_chat_send"
                            id="btn-chat"
                            onClick={addChats}
                          >
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 chat_content_area_main">
                <div className="chat_content_area">
                  <div className="video_call_top">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                        <div className="v_call_left">
                          <h3>
                            <span>
                              <i className="fa fa-phone" aria-hidden="true" />
                            </span>{" "}
                            Ongoing Call
                          </h3>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <div className="v_call_right">
                          <a href>
                            <img src="images/v_zoom_icon.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video_call_area">
                    <div className="video_call_img">
                      {users.length > 0 &&
                        users.map((user) => {
                          if (user.videoTrack) {
                            return (
                              <AgoraVideoPlayer
                                className="abc2"
                                videoTrack={user.videoTrack}
                                key={user.uid}
                                style={{ height: "100%", width: "100%" }}
                              />
                            );
                          } else return null;
                        })}
                      <>
                        {users.length > 0 ? (
                          ""
                        ) : (
                          <img
                            src="images/v_call.jpg"
                            alt=""
                            className="videocall_img"
                          />
                        )}
                      </>
                    </div>
                    <div className="video_call_sender">
                      <AgoraVideoPlayer
                        className="abc"
                        videoTrack={tracks[1]}
                        style={{ height: "100%", width: "100%" }}
                      />
                      {/* <img src="images/video_call_sender.jpg" alt="" /> */}
                    </div>
                    <div className="call_manage_area">
                      {/* videocall test btn */}
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Button
                            variant="contained"
                            color={trackState.audio ? "primary" : "secondary"}
                            onClick={() => mute("audio")}
                          >
                            {trackState.audio ? <MicIcon /> : <MicOffIcon />}
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color={trackState.video ? "primary" : "secondary"}
                            onClick={() => mute("video")}
                          >
                            {trackState.video ? (
                              <VideocamIcon />
                            ) : (
                              <VideocamOffIcon />
                            )}
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="default"
                            onClick={() => leaveChannel()}
                          >
                            Leave
                            <ExitToAppIcon />
                          </Button>
                        </Grid>
                      </Grid>
                      {/* videocall test btn */}

                      {/* <div className="chat_btn_area">
                        <ul>
                          <li className="li_chat_mic">
                            <a>
                              <i
                                className="fa fa-microphone"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="li_chat_cam">
                            <a href="">
                              <i className="fa fa-camera" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="li_chat_search">
                          <a href="">
                            <i
                              className="fa fa-search-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                          <li className="li_chat_call">
                            <a href="">
                              <i className="fa fa-phone" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="chat_bottom_area">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
              <div className="chat_img_shared">
                <h3>Image Shared</h3>
                <div className="shared_img_area">
                  <ul>
                    <li>
                      <img src="images/video_call_sender.jpg" alt="" />
                    </li>
                    <li>
                      <img src="images/video_call_sender.jpg" alt="" />
                    </li>
                    <li>
                      <img src="images/video_call_sender.jpg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="chat_add_files">
                <h3>Add Files</h3>
                <div className="chat_add_btn_area">
                  <ul>
                    <li>
                      <img src="images/add_file_btn.png" alt="" />
                    </li>
                    <li>
                      <img src="images/add_file_btn.png" alt="" />
                    </li>
                    <li>
                      <button type="button" className="file_send_btn">
                        Send
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      {/* new -*/}
      {/* new end-*/}
    </section>

    // Orginal Code

    // <Grid container style={{ height: "100%" }}>
    //   <Grid item xs={gridSpacing}>
    // <AgoraVideoPlayer
    //   className="abc"
    //   videoTrack={tracks[1]}
    //   style={{ height: "100%", width: "100%" }}
    // />
    //   </Grid>
    // {users.length > 0 &&
    //   users.map((user) => {
    //     if (user.videoTrack) {
    //       return (
    //         <Grid item xs={gridSpacing}>
    //           <AgoraVideoPlayer
    //             className="abc2"
    //             videoTrack={user.videoTrack}
    //             key={user.uid}
    //             style={{ height: "100%", width: "100%" }}
    //           />
    //         </Grid>
    //       );
    //     } else return null;
    //   })}
    // </Grid>
  );
}
