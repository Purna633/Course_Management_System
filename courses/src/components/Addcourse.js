import React, { Fragment,useEffect,useState} from "react";
import { Button, Container, Form,FormGroup, Input, Label } from "reactstrap";
 import './addcourse.css'
 import base_url from "../api/services";
 import axios from "axios";
 import { toast } from "react-toastify";
const Addcourse=()=>
{
    useEffect(()=>{
        document.title="Add Course || Courses Application"
    
      },[]);
const[course,setCourse]=useState({});

       //handle form function
const handleForm=(e)=>{
        console.log(course);
        postDatatoserver(course);

        e.preventDefault();
}
//creating function to post data on server
const postDatatoserver=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
      console.log(response);
      console.log("success");
      toast.success("course added successfuly");
      setCourse({id:"",title:"",description:""});
      },
  (error)=>
  {
      console.log(error);
      console.log("error");
      toast.error("Error! something went wrong");
  }
  );
  };


    return(
        <Fragment>
            <h1 className="text-center my-3">Fill course details</h1>
            <Form onSubmit={ handleForm }>
                <FormGroup>
                    <Label for="courseid">CourseId</Label>
                    <Input type="text" placeholder="enter here" name="courseid" id="courseid"
                    onChange={(e)=>
                    {
                        setCourse({...course,id: e.target.value});
                    }}
                    />

                </FormGroup>
                <FormGroup>
                    <Label for="title">Cours title</Label>
                    <Input type="text" placeholder="enter course title" name="title" id="title"
                    onChange={(e)=>
                        {
                            setCourse({...course,title: e.target.value});
                        }}             
                         />

                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" placeholder="enter description here" name="description" id="description"
                    onChange={(e)=>
                        {
                            setCourse({...course,description: e.target.value});
                        }}
                    
                    style={{height:200}}
                    />

                    </FormGroup>

                    <Container className="text-center">
                        <Button type="submit" color="success" outline>add Course</Button>
                        <Button
                        type="reset"
                        color="warning " outline  className="mar">Clear</Button>
                    </Container>

            </Form>
        </Fragment>
    )
}
export default Addcourse;