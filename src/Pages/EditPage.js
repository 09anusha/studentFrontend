import React, { useEffect, useState } from "react";
import Layouts from "../Components/Layouts";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditPage() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [contact, setContact] = useState();
  const [parentName, setparentName] = useState();
  const [parentContact, setparentContact] = useState();

  const obj1 = useParams();

  useEffect(() => {
    axios
      .get("https://studentbackend-acm7.onrender.com/students/update-student/" + obj1.id)
      .then((res) => {
        if (res.status === 200) {
          setfirstName(res.data.firstName);
          setlastName(res.data.lastName);
          setemail(res.data.email);
          setContact(res.data.contact);
          setparentName(res.data.parentName);
          setparentContact(res.data.parentContact);
        }
      });
  }, [obj1.id]);
  const handleSubmit = (event) => {
    const newData = {
      firstName,
      lastName,
      email,
      contact,
      parentName,
      parentContact,
    };
    let url =
      "https://studentbackend-acm7.onrender.com/students/update-student/" +
      obj1.id;
    axios
      .put(url, newData)
      .then((res) => {
        if (res.status === 200) {
          alert("Record Updated");
        } else {
          alert("something went wrong");
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
      <form className="EditForm" onSubmit={handleSubmit}>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setfirstName(e.target.value);
            // e is the event happening , target is targeting the occured event , value is capturing the value that occured when an event happens.
            //this line is basically capturing the data
          }}
          defaultValue={firstName}
        />
        <label for="lastName">LastName:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
          defaultValue={lastName}
        />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          defaultValue={email}
        />
        <label for="Contact">Contact:</label>
        <input
          type="number"
          id="Contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          defaultValue={contact}
        />
        <label for="parentName">ParentName:</label>
        <input
          type="text"
          id="parentName"
          onChange={(e) => {
            setparentName(e.target.value);
          }}
          defaultValue={parentName}
        />
        <label for="parentContact">ParentContact:</label>
        <input
          type="number"
          id="parentContact"
          onChange={(e) => {
            setparentContact(e.target.value);
          }}
          defaultValue={parentContact}
        />

        <input type="submit" id="submit" />
      </form>
    </Layouts>
  );
}

export default EditPage;
