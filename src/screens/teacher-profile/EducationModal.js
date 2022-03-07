import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const EducationModal = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const initialValues = {
    degree: "",
    name: "",
    to_year: "",
    from_year: "",
  };

  const validationSchema = Yup.object().shape({
    degree: Yup.string().required("Degree is required"),
    name: Yup.string().required("School/College/University is required"),
    to_year: Yup.string().required("To year is required"),
    from_year: Yup.string().required("From year is required"),
  });

  async function OnSubmit(values) {
    const formData = new FormData();
    formData.append("upload_doc", file);
    formData.append("fileName", fileName);
    formData.append("title", values.degree);
    formData.append("name", values.name);
    formData.append("from_year", values.from_year);
    formData.append("to_year", values.to_year);
    formData.append(
      "teacher_id",
      JSON.parse(localStorage.getItem("teacher_id"))
    );
    const res = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/educations/add",
      formData
    );
    console.log(res);
    window.location.reload();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={OnSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <div
          className="modal fade certificate-modal"
          id="certificateModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="certificateModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="certificateModalCenterTitle">
                  Education
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <Form className="add-certificate-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <h6>Degree/Major*</h6>

                        <Field
                          type="text"
                          className={
                            "form-control" +
                            (errors.degree && touched.degree
                              ? " is-invalid"
                              : "")
                          }
                          name="degree"
                          placeholder="Enter here"
                        />
                        <ErrorMessage
                          name="degree"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <h6>From School/College/University *</h6>

                        <Field
                          type="text"
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                          name="name"
                          placeholder="Enter here"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <h6>From year*</h6>

                        <Field
                          type="number"
                          className={
                            "form-control" +
                            (errors.from_year && touched.from_year
                              ? " is-invalid"
                              : "")
                          }
                          name="from_year"
                          placeholder="From year"
                        />
                        <ErrorMessage
                          name="from_year"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <h6>To year</h6>

                        <Field
                          type="number"
                          className={
                            "form-control" +
                            (errors.to_year && touched.to_year
                              ? " is-invalid"
                              : "")
                          }
                          name="to_year"
                          placeholder="To year"
                        />
                        <ErrorMessage
                          name="to_year"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <h6>
                          Document{" "}
                          <small>(Only accept .pdf,.docx,.doc types)</small>
                        </h6>
                        <div className="upload_zone">
                          <label
                            className="custom-file-upload"
                            htmlFor="id-introVideo"
                          >
                            <i
                              className="fa fa-cloud-upload"
                              aria-hidden="true"
                            />
                            <span translate>Drop or select file to here</span>
                          </label>
                          <input
                            type="file"
                            name="file"
                            className="custom-file-input"
                            accept=".pdf,.docx,.doc"
                            onChange={handleFileUpload}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-success mr-2"
                      >
                        {isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EducationModal;
