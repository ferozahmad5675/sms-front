import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";

export default function CreatStudent() {
  const [studentList, setastudentList] = React.useState([]);

  const deletStudent = (id) => {
    axios.delete(`http://localhost:5000/student/${id}`);
  };
  React.useEffect(() => {
    axios.get("http://localhost:5000/student").then((allStudent) => {
      setastudentList(allStudent.data);
    });
  });
  return (
    <div className="head">
      <h1>Studen List</h1>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registration</TableCell>
              <TableCell align="right">Gradee</TableCell>

              <TableCell align="right">Section</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((student, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.studentName}
                </TableCell>
                <TableCell align="right">{student.regNo}</TableCell>
                <TableCell align="right">{student.grade}</TableCell>
                <TableCell align="right">{student.section}</TableCell>
                <TableCell align="right">
                  <button onClick={() => deletStudent(student._id)}>
                    {" "}
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
