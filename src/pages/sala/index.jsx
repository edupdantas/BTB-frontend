"use client";

import Cadeira from "@/components/Cadeira";
import {useEffect, useState} from "react";
import "@/app/globals.css";
import api from "@/services/api";

export default function Sala() {

    const [cadeiras, setCadeiras] = useState([])

    useEffect(()=>{
        setCadeiras([
            {id: 1, occupied: true, selected: false},
            {id: 2, occupied: false, selected: false},
            {id: 3, occupied: false, selected: false},
            {id: 4, occupied: true, selected: false},
            {id: 5, occupied: true, selected: false},
            {id: 6, occupied: false, selected: false},
            {id: 7, occupied: false, selected: false},
            {id: 8, occupied: true, selected: false},
            {id: 9, occupied: true, selected: false},
            {id: 10, occupied: false, selected: false},
            {id: 11, occupied: true, selected: false},
            {id: 12, occupied: true, selected: false},
            {id: 13, occupied: false, selected: false},
            {id: 14, occupied: false, selected: false},
            {id: 15, occupied: true, selected: false},
            {id: 16, occupied: false, selected: false},
            {id: 17, occupied: false, selected: false},
            {id: 18, occupied: true, selected: false},
            {id: 19, occupied: true, selected: false},
            {id: 20, occupied: false, selected: false},
            {id: 21, occupied: true, selected: false},
            {id: 22, occupied: true, selected: false},
            {id: 23, occupied: false, selected: false},
            {id: 24, occupied: false, selected: false},
            {id: 25, occupied: true, selected: false},
            {id: 26, occupied: true, selected: false},
            {id: 27, occupied: false, selected: false},
            {id: 28, occupied: false, selected: false},
            {id: 29, occupied: true, selected: false},
            {id: 30, occupied: true, selected: false}
        ])
    }, [])

    const toggleSelected = (id) => {
        setCadeiras(prevCadeiras =>
            prevCadeiras.map(cadeira =>
                cadeira.id === id ? { ...cadeira, selected: !cadeira.selected } : cadeira
            )
        );
    };

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className={"text-4xl"}>Selecione as cadeiras desejadas</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-4 p-24 ">
                    {cadeiras.map((chair)=>{
                        return(
                            <Cadeira occupied={chair.occupied} alter={()=> toggleSelected(chair.id)} selected={chair.selected}/>
                        )
                    })}
                </div>
                <div className="flex items-center flex-col justify-center">
                    <button className="border border-black rounded-lg bg-red-600 p-2" type={"submit"}>
                        Enviar
                    </button>
                </div>
            </form>
        </main>
    );
}
