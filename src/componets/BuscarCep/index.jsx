import { useEffect } from "react";
import { useState } from "react"
import { CardResultado } from "./CardResultado";

export const BuscarCep = () => {
    const [adress, setAdress] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cep, setCep] = useState("")


    useEffect(() => {
        const loadData = async () => {
             setLoading(true);
             const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
             const json = await url.json();
             setAdress(json);
             setLoading(false);
        };
        if(cep !== "") {
            loadData();
        }
        
        
    }, [cep]);




    return(
        <>
        <CardResultado adress={adress} setAdress={setAdress} loading={loading} setCep={setCep}/>
        </>
    )
}