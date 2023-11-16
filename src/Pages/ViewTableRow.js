import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewTableRow(props) {
  const DeleteRecord = () => {
    let url = "https://studentbackend-acm7.onrender.com/students/delete-student/";
    console.log(url + props.obj._id);
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("delete success");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <td className="tabhead">{props.obj.firstName}</td>
      <td className="tabhead">{props.obj.lastName}</td>
      <td className="tabhead">{props.obj.email}</td>
      <td className="tabhead">{props.obj.contact}</td>
      <td className="tabhead">{props.obj.parentName}</td>
      <td className="tabhead">{props.obj.parentContact}</td>
      <td className="tabhead">
        <Link to={`/edit-student/${props.obj._id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={DeleteRecord}>Delete</button>
      </td>
    </tr>
  );
}

export default ViewTableRow;
 