package com.purna.Firstproject.dao;

import com.purna.Firstproject.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Coursedao extends JpaRepository<Course,Long> {

    Course getOne(long courseid);
}
