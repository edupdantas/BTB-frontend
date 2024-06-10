"use client";

import Cadeira from "@/components/Cadeira";
import {useContext, useEffect, useState} from "react";
import "@/app/globals.css";
import api from "@/services/api";
import {useRouter} from "next/router";
import {DialogSala} from "@/components/DialogSala";

export default function Sessao() {

    const router = useRouter();
    const [filme, setFilme] = useState(null);
    const [showFilme, setShowFilme] = useState(false)
    const [cadeiras, setCadeiras] = useState([
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
    let filmes;

    function recuperarLocal() {
        const objetoStringRecuperado = localStorage.getItem('filmes');
        if (objetoStringRecuperado) {
            filmes = JSON.parse(objetoStringRecuperado);
        }
    }

    function submit(){
        console.log(cadeiras)
    }

    function carregarFilme(idFilme) {
        if (filmes && idFilme) {
            setFilme(filmes[idFilme]);
        }
    }

    useEffect(() => {
        const  idFilme  = router.query.id;
        if (idFilme) {
            recuperarLocal();
            carregarFilme(idFilme);
        }
    }, [router.query]);



    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            {filme ? <>
                    <DialogSala submit={submit} title={filme.title} open={showFilme} close={()=>setShowFilme(false)} obj={filme} cadeiras={cadeiras} toggleCadeiras={setCadeiras}/>
                    <div className="flex  flex-col gap-5">
                        <div className="flex gap-5 pb-7">
                            <img className="h-[360px] w-[240px] rounded-xl object-cover"
                                 src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                                 alt={filme.title}></img>
                            <div className="flex flex-col p-5 gap-5 items-start">
                                <h1 className={"text-4xl"}>{filme.title}</h1>
                                <span>{filme.title}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 p-3">
                            <div className="flex border rounded justify-between gap-3 px-2 py-0 items-center">
                                <h1 className="text-2xl">dia 1</h1>
                                <div className="flex gap-[100px] p-2">
                                    <button className="bg-red-600 border rounded-lg text-lg p-2" onClick={()=> setShowFilme(true)}> Sala 01 00:00h</button>
                                    <button className="bg-red-600 border rounded-lg text-lg p-2"> Sala 02 00:00h</button>
                                </div>
                            </div>
                            <div className="flex border rounded justify-between gap-3 px-2 py-0 items-center">
                                <h1 className="text-2xl">dia 1</h1>
                                <div className="flex gap-[100px] p-2">
                                    <button className="bg-red-600 border rounded-lg text-lg p-2"> Sala 01 00:00h</button>
                                    <button className="bg-red-600 border rounded-lg text-lg p-2"> Sala 02 00:00h</button>
                                </div>
                            </div>
                            <div className="flex border rounded justify-between gap-3 px-2 py-0 items-center">
                                <h1 className="text-2xl">dia 1</h1>
                                <div className="flex gap-[100px] p-2">
                                    <button className="bg-red-600 border rounded-lg text-lg p-2"> Sala 01 00:00h</button>
                                    <button className="bg-red-600 border rounded-lg text-lg p-2"> Sala 02 00:00h</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : <div>Loading...</div>}

        </main>
    );
}
