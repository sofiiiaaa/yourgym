export interface Course {
    id: string; 
    course_name: string; 
    course_date: string;
    course_category: string;
    course_url: string;
    course_hour_start: string
    course_hour_end: string
    course_hour_last: string
    course_location: string
    course_sala_name: string
    course_still_available_spots: number
    course_all_available_spots?: number
    course_people_waiting?: number
    course_open_waiting?: string
}

interface Courses extends Array<Course>{}


export const allCourses: Courses = [
    {
        "id": "1",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "Postural TrainingAA",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Ravizza",
        "course_sala_name": "Consious",
        "course_people_waiting": 3,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":0,
        "course_all_available_spots": 30
    },
    {
        "id": "2",
        "course_category": "water poll", //da cambiare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "Hata Yoga",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "45 min",
        "course_location": "Ravizza",
        "course_sala_name": "Consious",
        "course_people_waiting": 3,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":0,
        "course_all_available_spots": 30
    },
    {
        "id": "3",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "50 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "4",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 1,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":0,
        "course_all_available_spots": 30
    },
    {
        "id": "5",
        "course_category": "water gym", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "6",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "7",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "8",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "9",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "10",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "11",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "12",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
         "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "13",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "14",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":2,
        "course_all_available_spots": 30
    },
    {
        "id": "15",
        "course_category": "water poll", //da modificare
        "course_date": "Oggi",
        "course_url": "dasads",
        "course_name": "PancaFit",
        "course_hour_start":"8.30",
        "course_hour_end": "9.15",
        "course_hour_last": "30 min",
        "course_location": "Terme",
        "course_sala_name": "Consious",
        "course_people_waiting": 0,
        "course_open_waiting": "12 ore",
        "course_still_available_spots":0,
        "course_all_available_spots": 30
    }


]