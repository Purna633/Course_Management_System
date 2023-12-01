package com.purna.Firstproject.services;

import com.purna.Firstproject.entities.Course;

import java.util.List;

public interface CourseService {
    public List<Course> getCourses();

    public Course getCourse(long courseid);
    public Course addcourse(Course course);
    public Course updatecourse(Course course);
    public void deletecourse(long parselong);

}
