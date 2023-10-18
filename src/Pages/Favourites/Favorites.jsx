import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound]=useState(false);

    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice]= useState(0)

    useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        // console.log(favoriteItems, " i am not");

        if(favoriteItems){
        setFavorites(favoriteItems)
        const total = favoriteItems.reduce((preValue, currentItem)=> preValue + currentItem.price,0);

        console.log(total);
        setTotalPrice(total);

        }
        else{
            setNoFound("no data found");
        }
    },[totalPrice])

    // console.log(favorites);

    const handleRemove= ()=>{
        localStorage.clear();
        setFavorites('');
        setNoFound("No data found");
    }

    return (
        <div>
            {
                noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
                : 
                <div>
                    {favorites.length > 0 && 
                    <div>
                        <button onClick={handleRemove} 
                    className="px-5 bg-green-200 block mx-auto">Deleted all favorites</button>

                    <h1>Total Price: {totalPrice}</h1>
                    </div>
                    }
                    <div className="grid grid-cols-2">
                        {
                            isShow ? favorites.map((phone)=> (
                            <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                            ))
                            :
                            favorites.slice(0,4).map((phone)=> (
                            <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                            ))
                        }
                    </div>
                    <button onClick={()=> setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">See more</button>
                </div>
            }
        </div>
    );
};

export default Favorites;