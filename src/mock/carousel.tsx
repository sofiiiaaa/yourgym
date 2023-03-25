export interface Carousel {
    id: string;
    carousel_url: string
    carousel_title: string;
    announcement_description: string;
    announcement_date: string;
}

interface Carousels extends Array<Carousel> { }

export const allCarousels: Carousels = [
    {
        "id": "1",
        "carousel_url": "https://images.simedia.cloud/cms-v2/CustomerData/557/Files/Images/drei-zinnen-sextner-dolomiten/aktiv-winter/schneeschuhwandern/slider/slider01.jpg/1500x0/image.jpg?v=638152617457",
        "carousel_title": "GLI EVENTI DI DICEMBRE E GENNAIO",
        "announcement_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "announcement_date": "16/12/2019"
    },
    {
        "id": "2",
        "carousel_url":"https://images.simedia.cloud/cms-v2/CustomerData/557/Files/Images/drei-zinnen-sextner-dolomiten/aktiv-winter/schneeschuhwandern/slider/slider01.jpg/1500x0/image.jpg?v=638152617457" ,
        "carousel_title": "GLI EVENTI DI DICEMBRE E GENNAIO",
        "announcement_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "announcement_date": "16/12/2019"
    },
    {
        "id": "3",
        "carousel_url": "https://images.simedia.cloud/cms-v2/CustomerData/557/Files/Images/drei-zinnen-sextner-dolomiten/aktiv-winter/schneeschuhwandern/slider/slider01.jpg/1500x0/image.jpg?v=638152617457",
        "carousel_title": "GLI EVENTI DI DICEMBRE E GENNAIO",
        "announcement_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "announcement_date": "16/12/2019"
    }  
]