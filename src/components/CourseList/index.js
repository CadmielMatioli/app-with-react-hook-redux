import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseAction } from '../Store/actions';

export default function CourseList() {
    const courses = useSelector(state => state.course.data);
    const dispatch = useDispatch();
    
    function addCourse(){
        dispatch(addCourseAction('GrafQl'));
    }

    return(
        <>
            <ul>
                {
                    courses.map((course, i) => <li key={i}>{course}</li>)
                }
            </ul>
            <button type="button" onClick={addCourse}>add course</button>
        </>
    );
}
