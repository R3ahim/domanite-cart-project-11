import { useEffect, useState } from "react";

const useCars = serviceId =>{
    const [cars, setCars] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:5000/cars`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setCars(data));

    }, []);
    return [cars]
}
export default useCars;
