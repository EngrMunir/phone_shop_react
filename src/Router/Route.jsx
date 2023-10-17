
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Login/Login';
import Favorites from '../Pages/Favourites/Favorites';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Phone from '../Phone/Phone';

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/phone.json')
            },
            {
                path: "/favorites",
                element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/phones/:id',
                element:<Phone></Phone>,
                loader: ()=>fetch('/phone.json')
            }
    ]
    }
]);


export default myCreatedRoute;