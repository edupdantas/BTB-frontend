"use client";

export default function Cadeira({occupied,alter,selected, ...rest}){
    let Class;
    if (selected){
        Class = "bg-emerald-700"
    }else {
        Class = "bg-gray-400"
    }
    return (
        <button {...rest} onClick={alter} className={`rounded-md shadow p-2 flex gap-2 items-center justify-center border-0 text-white disabled:bg-red-700 size-8 ${Class}`} disabled={occupied}
        />
    )
}