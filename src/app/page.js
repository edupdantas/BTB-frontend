"use client";
import { useState } from "react";
import "./globals.css"
import Link from "next/link";
import api from "@/services/api";

export default function Home() {



    const [filmes, setFilmes] = useState([]);
    async function loadFilmes(){
        const response = await api.get('movie/now_playing', {
            params:{
                api_key: 'e8a413dffea0a3f636fee44439c41934',
                language: 'pt-BR',
                page: 1,
            }
        })

        // console.log(response.data.results.slice(0,10));
        setFilmes(response.data.results.slice(0,6))

    }
    loadFilmes();
    localStorage.setItem('filmes',JSON.stringify(filmes))



  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0">
        <div className="">
          <div className="grid grid-cols-3 gap-4 p-24 pt-12 ">
            {filmes.map((filme, index) => {
              return (
                  <Link href={`/filme/${index}`} className="flex flex-col gap-2 items-center">
                    <img className="h-[360px] w-[240px] rounded-xl object-cover" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                         alt={filme.title}></img>
                    <strong className="items-center justify-center">{filme.title}</strong>
                  </Link>
              )
            })}
          </div>
        </div>
      </main>
  );
}
