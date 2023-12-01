package com.purna.Firstproject.services;

import com.purna.Firstproject.dao.Coursedao;
import com.purna.Firstproject.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private Coursedao coursedao;

    //List<Course> list;
    public CourseServiceImpl() {
        /*list=new ArrayList<>();
        list.add(new Course(1,"java","this is advanced java course"));
        list.add(new Course(2,"Spring boot","this is spring boot  course"));
        list.add(new Course(3,"python","this is python course"));*/

    }

    @Override
    public List<Course> getCourses() {

        //return list;
        return coursedao.findAll();
    }

    @Override
    public Course getCourse(long courseid) {

        /*Course c=null;
        for(Course course:list)
        {
            if(course.getId()==courseid)
            {
                c=course;
                 break;
            }
        }*/

        //return c;
        return coursedao.getOne(courseid);
    }

    @Override
    public Course addcourse(Course course) {
       // list.add(course);
        coursedao.save(course);
        return course;

    }

    @Override
    public Course updatecourse(Course course) {
        /*list.forEach(e ->{
            if(e.getId()==course.getId()){
                e.setTitle(course.getTitle());
                e.setDescription(course.getDescription());
            }
        });*/
        coursedao.save(course);
        return course;
    }

    @Override
    public void deletecourse(long parselong) {
        //list=this.list.stream().filter(e->e.getId()!=parselong).collect(Collectors.toList());
        Course courseent=coursedao.getOne(parselong);
        coursedao.delete(courseent);
    }

}
