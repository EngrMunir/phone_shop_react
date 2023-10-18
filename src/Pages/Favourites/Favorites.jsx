import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound]=useState('')

    useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
        if(favoriteItems){
        setFavorites(favoriteItems)
        }
        else{
            setNoFound("no data found");
        }
    },[])

    console.log(favorites);

    return (
        <div>
            {
                noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>: 
                <div>
                    <div className="grid grid-cols-2">
                        {favorites.map(phone=> <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default Favorites;