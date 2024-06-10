import {Dialog} from "primereact/dialog";
import "@/app/globals.css"
import {useState} from "react";
import Cadeira from "@/components/Cadeira";

export const DialogSala = ({title, open, close, obj, cadeiras,toggleCadeiras, submit, ...rest}) => {



    const toggleSelected = (id) => {
        toggleCadeiras(prevCadeiras =>
            prevCadeiras.map(cadeira =>
                cadeira.id === id ? { ...cadeira, selected: !cadeira.selected } : cadeira
            )
        );
    };

    function handleSubmit(e){
        submit()
        e.preventDefault()
    }

    return (
        <Dialog
            {...rest}
            className={"bg-gray-900 shadow p-6 rounded "}
            pt={{
                header: "text-xl font-semibold ",
                closeButton: "p-2 rounded-full hover:bg-primary bg-opacity-50",
                content: "flex flex-1 w-full mb-2",
                mask: "bg-black bg-opacity-50"
            }}
            header={title}
            visible={open}
            style={{minWidth: '30vw'}}
            onHide={close}>
            <main className="flex min-h-screen flex-col items-center p-24">
                <h1 className={"text-4xl"}>Selecione as cadeiras desejadas</h1>
                    <div className="grid grid-cols-6 gap-4 p-24 ">
                        {cadeiras.map((chair) => {
                            return (
                                <Cadeira occupied={chair.occupied} alter={() => toggleSelected(chair.id)}
                                         selected={chair.selected}/>
                            )
                        })}
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <button className="border border-black rounded-lg bg-red-600 p-2" onClick={handleSubmit}>
                            Enviar
                        </button>
                    </div>
            </main>


        </Dialog>
    )
}