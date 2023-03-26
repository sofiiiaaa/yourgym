// import 
export interface Course {
    id: string; 
    course_url: string;
    course_name: string; 
    course_date: string;
    course_category: string;
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

console.log(process.env.PUBLIC_URL)

export const allCourses: Courses = [
    {
        "id": "1",
        "course_url":  `${process.env.PUBLIC_URL}/img/postural_training.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
        "course_name": "Postural Training",
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
        "course_url": `${process.env.PUBLIC_URL}/img/hata_yoga.webp`,
        "course_category": "cardiovascolari e tonificanzione", //da cambiare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/pancafit.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
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
        "course_url": `${process.env.PUBLIC_URL}/img/acqua_gym.jpg`,
        "course_category": "attività in acqua", //da modificare
        "course_date": "Oggi",
        "course_name": "Play acqua",
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
        "course_url": `${process.env.PUBLIC_URL}/img/les_mil_grit.jpg`,
        "course_category": "Danza", //da modificare
        "course_date": "Oggi",
        "course_name": "Les mil grit",
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
        "course_url": `${process.env.PUBLIC_URL}/img/bodypump.jpg`,
        "course_category": "cardiovascolari e tonificanzione", //da modificare
        "course_date": "Oggi",
        "course_name": "BodyPump",
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