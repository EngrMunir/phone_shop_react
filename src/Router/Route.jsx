
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Login/Login';
import Favorites from '../Pages/Favourites/Favorites';

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/favorites",
                element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
    ]
    }
]);


export default myCreatedRoute;