export interface UserData {
    id: string; 
    subscibed_courses: string[];
    waiting_list: string[];
}

export const user: UserData = {
    "id" : "1",
    "subscibed_courses": ["1","2"],
    "waiting_list": ["3"]
}