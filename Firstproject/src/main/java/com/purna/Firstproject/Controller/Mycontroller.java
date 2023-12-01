package com.purna.Firstproject.Controller;

import com.purna.Firstproject.entities.Course;
import com.purna.Firstproject.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class Mycontroller {
    @Autowired
    private CourseService courseService;
    @GetMapping("/home")
    public String home()
    {

        return "this is home page";
    }
    @GetMapping("/courses")
    @CrossOrigin(origins="*",allowedHeaders="*")

    public List<Course> getCourses()
    {
        return courseService.getCourses();

    }

    @GetMapping("/courses/{courseid}")
    @CrossOrigin(origins="*",allowedHeaders="*")

    public Course getCourse(@PathVariable String courseid)
    {
        return this.courseService.getCourse(Long.parseLong(courseid));
    }
    @PostMapping("/courses")
    @CrossOrigin(origins="*",allowedHeaders="*")
    public Course addcourse(@RequestBody Course course)
    {
        return this.courseService.addcourse(course);


    }
    @PutMapping("/courses/update/{courseid}")
    @CrossOrigin(origins="*",allowedHeaders="*")
    public Course updatecourse(@RequestBody  Course course)
    {
        return this.courseService.updatecourse(course);

    }

    @DeleteMapping("/courses/{courseid}")
    @CrossOrigin(origins="*",allowedHeaders="*")
    public ResponseEntity<HttpStatus> deletecourse(@PathVariable String courseid)
    {
        try {
            this.courseService.deletecourse(Long.parseLong(courseid));
            return new ResponseEntity<>(HttpStatus.OK);
             }
           catch(Exception e)
            {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

            }

    }
}
