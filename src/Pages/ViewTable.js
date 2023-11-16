import React, { useEffect, useState } from "react";
import "../Components/Viewstyles.css";
import Layouts from "../Components/Layouts";
import { Table } from "react-bootstrap";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";

function ViewTable() {
  const [students, setStudent] = useState([]); // using useState() to create States in the functional component
 
  useEffect(() => {
    axios
      .get("https://studentbackend-acm7.onrender.com/students")
      .then((res) => {
        // console.log(res); displaying the response on the console
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  {
    /*the code below causes the re-rendering(meaning data displayed multiple times) of the data which is called the side effect.
      so in order to over come the side effect caused , we make use of the HOOK called the useEffect()*/
  }
  // axios
  //   .get("http://localhost:5000/students")
  //   .then((res) => {
  //     // console.log(res); displaying the response on the console
  //     setStudent(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //   console.log(students);

  const TableItems = () => {
    return students.map((student, i) => {
      return <ViewTableRow obj={student} key={i} />;
    });
  };
  return (
    <Layouts>
      <h1>View data page</h1>
      {/* {TableItems()} */}
      <table className="tab">
        <thead className="thead">
          <th className="tabhead">First Name</th>
          <th className="tabhead">Last Name</th>
          <th className="tabhead">Email</th>
          <th className="tabhead">Contact</th>
          <th className="tabhead">Parent Name</th>
          <th className="tabhead">Parent Contact</th>
        </thead>
        <tbody className="tabbody">{TableItems()}</tbody>
      </table>
    </Layouts>
  );
}

export default ViewTable;
