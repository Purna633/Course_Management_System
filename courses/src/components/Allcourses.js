import React, { useState ,useEffect} from "react";
import Course from "./Course";
import base_url from "./../api/services"
import axios from "axios";
import { toast } from "react-toastify";

 const Allcourses =()=>{
    useEffect(()=>{
        document.title="All Courses"
    },[]);
    

    // function to call a server
    const getAllccoursesfromserver=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("courses haas been loaded",
                {
                    position:"top-center"
                });
                
                setCourses(response.data)

            },
            (error)=>
            {
              console.log(error);
              toast.error("something went wrong",
              {position:"top-center"})
              
        }

        );
    };
    //calling loading course
    useEffect(()=>{
        getAllccoursesfromserver();
      
    },[]);

   

    const [courses,setCourses]=useState([
    
]);
   const deletecourse=(id)=>
   {
    setCourses(courses.filter((c)=>c.id !==id));
   };


    return(
        <div>
            <h1>All courses</h1>
            <p>List of Courses as follows:</p>

            {
                courses.length>0 ? 
                courses.map((item)=>
                    <Course key={item.id} course ={item} update={deletecourse}/>
                )  :"no courses"

            }
        </div>


    )
 }
 export default Allcourses;