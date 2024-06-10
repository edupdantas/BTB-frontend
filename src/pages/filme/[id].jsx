"use client";

import Cadeira from "@/components/Cadeira";
import {useContext, useEffect, useState} from "react";
import "@/app/globals.css";
import api from "@/services/api";
import {useRouter} from "next/router";

export default function Sessao() {

    const router = useRouter();
    const [filme, setFilme] = useState(null)
    const id = router.query.id;
    let filmes;

    function recuperarLocal(){
        const objetoStringRecuperado = localStorage.getItem('filmes');
        if (objetoStringRecuperado) {
            const objeto = JSON.parse(objetoStringRecuperado)
                filmes = objeto;
            console.log(filmes)
        }
    }

    useEffect(() => {

        // Recuperar o objeto do local storage quando o componente montar


    }, []);

    console.log(filme)

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div>

            </div>
            <div>

            </div>
        </main>
    );
}
