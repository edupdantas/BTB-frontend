"use client";
import { useEffect, useState } from "react";
import api from "../services/api";
import "./globals.css"

export default function Home() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
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
      setLoading(false);

    }
    loadFilmes();
  }, [])

  if (loading){
    return(
        <div className="loading">
          <h2>Carregando filmes...</h2>
        </div>
    )
  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0">
        <div className="">
          <div className="grid grid-cols-3 gap-4 p-24 pt-12 ">
            {filmes.map((filme) => {
              return (
                  <a href={"/sala"} className="flex flex-col gap-2 items-center">
                    <img className="h-[360px]  rounded-xl object-cover" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                         alt={filme.title}></img>
                    <strong className="items-center justify-center">{filme.title}</strong>
                  </a>
              )
            })}
          </div>
        </div>
      </main>
  );
}
