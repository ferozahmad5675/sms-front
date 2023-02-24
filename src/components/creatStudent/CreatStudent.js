import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";




export default function Creat() {

  const [student , setstudent] = React.useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: ""
  })
const creatStudnet = () =>{
axios.post('http://localhost:5000/student' , student)
}
  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<h1>Creat Student</h1>
<div className="textf">
    
      <TextField id="standard-basic" name='regNo' label="Reg. No" variant="standard" value={student.regNo} onChange ={(e) => setstudent({...student , regNo: e.target.value})} />
      <TextField id="standard-basic" name='studentName' label="Name" variant="standard" value={student.studentName} onChange ={(e) => setstudent({...student , studentName: e.target.value})} />
      <TextField id="standard-basic" name='grade' label="Grade" variant="standard" value={student.grade} onChange ={(e) => setstudent({...student , grade: e.target.value})}/>
      <TextField id="standard-basic" name='section' label="Section" variant="standard" value={student.section} onChange ={(e) => setstudent({...student , section: e.target.value})}/>
     
      </div>
      <div className="btn">
      <Button className='btn' onClick={creatStudnet} variant="contained">Creat</Button>
      </div>
    </Box>
    </>
  );
}