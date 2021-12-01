import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function addCourseAction(title){
    return {type : 'ADD_COURSE', title};

}

export default function CourseList() {
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();
    
    function addCourse(){
        dispatch(addCourseAction('GrafQl'));
    }

    return(
        <>
            <ul>
                {
                    courses.map(course => <li key={course}>{course}</li>)
                }
            </ul>
            <button type="button" onClick={addCourse}>add course</button>
        </>
    );
}
