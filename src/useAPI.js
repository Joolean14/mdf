import {useState, useEffect} from 'react'

export default function useAPI(url) {
    const[datos,setDatos] = useState([]);

    useEffect(()=>{
        const obtenerDatos = async() =>{
            const jsonData = await fetch(url);
            const data = await jsonData.json();
            // console.log('Este es jsonData = ' + jsonData);
            // console.log('Este es data = ' + data);
            setDatos(data);   
       }
       obtenerDatos();
    },[url])
    return {datos};  
}

