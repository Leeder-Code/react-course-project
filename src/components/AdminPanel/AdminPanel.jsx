import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import CourseDetails from './subcomponents/CourseDetails';
import CoursePopup from './subcomponents/CoursePopup';

const AdminPanel = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const {courses} = useContext(StoreContext)

    const coursesElements = courses.map(course => <CourseDetails key={course.id} {...course}/>)

    const showPopup = () => setIsOpenPopup(true);
    const hidePopup = () => {
        setIsOpenPopup(false)
    }

    return ( 
    <section>
        {coursesElements}
        <button onClick={showPopup}>Dodaj nowy kurs</button>
        <CoursePopup isEditMode={false} isOpenPopup={isOpenPopup} hidePopup={hidePopup} />
    </section>
 );
}
 
export default AdminPanel;