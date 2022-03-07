import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

const ImageUpload = () => {
  const inputFile = useRef(null);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onButtonClick = async () => {
    inputFile.current.click();
  };

  useEffect(() => {
    // console.log("api called");
    const changeImage = async () => {
      if (file !== undefined && fileName !== "") {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("fileName", fileName);
        const res = await axios.put(
          `https://kawotekbackend.elvirainfotech.org/users/image/${
            JSON.parse(localStorage.getItem("userInfo")).id
          }`,
          formData
        );
        console.log(res);
        // file(undefined);
        // fileName("");
      }
    };
    changeImage();
  }, [file, fileName]);

  // useEffect(() => {
  //   const addImage = async () => {
  //     const getSid = await axios.get(
  //       `https://kawotekbackend.elvirainfotech.org/students/user/${
  //         JSON.parse(localStorage.getItem("userInfo")).id
  //       }`
  //     );
  //     console.log(getSid.data.sid);

  //     const res = await axios.put(
  //       `https://kawotekbackend.elvirainfotech.org/students/${getSid.data.sid}`,
  //       {
  //         image: image,
  //       }
  //     );

  //     console.log("hhhh", res);
  //   };
  //   addImage();
  // }, [image]);

  return (
    <div>
      <input
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <div className="button" onClick={onButtonClick}>
        Upload
      </div>
    </div>
  );
};

export default ImageUpload;
