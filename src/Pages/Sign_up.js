import React, { useState } from "react";
import Layouts from "../Components/Layouts";
import Image from "../Assets/images.jpg";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";

// using useState() to create States in the functional component
function Sign_up() {
  const [firstName, setfirstName] = useState(); 
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [contact, setContact] = useState();
  const [parentName, setparentName] = useState();
  const [parentContact, setparentContact] = useState();

  //function to handle submit
  let handleSubmit = (event) => {
    //creating an object to store the specified data
    const studentObj = {
      firstName,
      lastName,
      email,
      contact,
      parentName,
      parentContact,
    };
    // console.log(studentObj); this dislays the object
    ////////Creating (post function)///////////
    const url = "https://studentbackend-acm7.onrender.com/students/create-student";
    axios
      .post(url, studentObj)
      .then((res) => {
        if (res.status === 200) {
          alert("student aded successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layouts>
      <h1
        style={{
          textAlign: "center",
          padding: "15px",
          marginBottom: "15px",
        }}
      >
        Student Registration form
      </h1>
      <Container>
        <Row>
          <Col>
            <img src={Image} alt="School_Image" />{" "}
          </Col>
          <Col>
            <form onSubmit={handleSubmit}>
              <label for="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                onChange={(e) => {
                  setfirstName(e.target.value);
                  // e is the event happening ,target is targeting the occured event,value is capturing the value that occured when an event happens.
                  //this line is basically capturing the data
                }}
              />
              <label for="lastName">LastName:</label>
              <input
                type="text"
                id="lastName"
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <label for="Contact">Contact:</label>
              <input
                type="number"
                id="Contact"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
              <label for="parentName">ParentName:</label>
              <input
                type="text"
                id="parentName"
                onChange={(e) => {
                  setparentName(e.target.value);
                }}
              />
              <label for="parentContact">ParentContact:</label>
              <input
                type="number"
                id="parentContact"
                onChange={(e) => {
                  setparentContact(e.target.value);
                }}
              />

              <input type="submit" id="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </Layouts>
  );
}

export default Sign_up;
