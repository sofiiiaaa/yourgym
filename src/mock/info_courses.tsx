export interface Course {
    id: string; 
    course_name: string; 
    course_date: string;
    course_category: string;
    course_url: string;
    status: string;
    course_hour_start: string
    course_hour_end: string
    course_hour_last: string
    course_location: string
    course_sala_name: string
  
}

interface Courses extends Array<Course>{}


export const allCourses: Courses = [
    {
        "id": "1",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "status": "subscribed",
        "course_name": "Postural Training",
        "course_hour_start":"11.10",
        "course_hour_end": "11.40",
        "course_hour_last": "30 min",
        "course_location": "Ravizza",
        "course_sala_name": "Consious"
    },
        {
        "id": "2",
        "course_category": "water poll", //da cambiare
        "course_date": "Oggi",
        "course_url": "dasads",
        "status": "subscribed",
        "course_name": "Hata Yoga",
        "course_hour_start":"11.10",
        "course_hour_last": "30 min",
        "course_hour_end": "11.40",
        "course_location": "Ravizza",
        "course_sala_name": "Consious"
    }
,    {
        "id": "3",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "status": "waiting_list",
        "course_name": "PancaFit",
        "course_hour_start":"11.10",
        "course_hour_end": "11.40",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious"
    }


]