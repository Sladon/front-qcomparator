import React, {useEffect, useState} from "react";
import { SearchItem } from "../SearchItem/SearchItem";
import "./Local.css";

export const Local = () => {
    const [local, setLocal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        getLocal({setLocal, setLoading, setError});
    }
    , []);

    const handleClick = () => {
        console.log("goto add product")
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error</h1>
    }
    return (
        <div className="local-container">
            <div className="local-header">
                <h1 className="local-title">{local.name}</h1>
                <input className="local-btn" type="button" value="Editar" />
            </div>
            <div className="local-body">
                <div className="local-img-container">
                    <img className="local-img" src={local.img} alt="Local" />
                </div>
                <div className="local-info">
                    <h1 className="local-location">{local.location}</h1>
                    <p className="local-description">{local.description}</p>
                </div>
                <div className="local-menu">
                    <h1 className="local-menu-title">Menu</h1>
                    {local.menu.map((item) => {
                        return (
                            <SearchItem key={item.id} productID={item.id} onClick={(data) => console.log("Navigate to product:", data)} name={item.name} price={item.price} img={item.img} />
                        )
                    })}
                </div>
            </div>
            <input className="add-btn" type="button" value="Agregar producto" onClick={handleClick}/>
        </div>
    )
}

async function getLocal({setLocal, setLoading, setError}) {
    console.log("Getting local...");
    setLocal({
        name: "Local 1",
        location: "Ciencias",
        img: "/img/hamburguer.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam nisl nunc eget nunc. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam nisl nunc eget nunc.",
        menu: [
            {
                id: 1,
                name: "Hamburguesa",
                price: 100,
                img: "/img/hamburguer.png"
            },
            {
                id: 2,
                name: "Muffin",
                price: 50,
                img: "/img/muffin.jpg"
            }
        ]
    });
    setLoading(false);
    setError(false);
}


