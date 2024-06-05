"use client";
import {useState} from "react";

export default function Cadeira({occupied, ...rest}){
    const [selected, setSelected] = useState(false)
    let Class;
    if (selected){
        Class = "bg-emerald-700"
    }else {
        Class = "bg-gray-400"
    }
    return (
        <button {...rest} onClick={()=>setSelected(!selected)} className={`rounded-md shadow p-2 flex gap-2 items-center justify-center border-0 text-white disabled:bg-red-700 ${Class}`} disabled={occupied}
        />
    )
}