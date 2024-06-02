import React from "react";
import { useState } from "react";

export const SecondComponent = () => {

    const [name, setName ] = useState("Vale Ovalle");
    const [isNameChanged, setNameChanged] = useState(false);

    const changeName = (e) => {
        if (isNameChanged) {
            setName("Vale Ovalle")
        }else {
            setName("Zury Carrillo")
        }
        setNameChanged(!isNameChanged)

    }

    return (
        <div>
            <h3> Componente: SecondComponet</h3>
            <p>{name}</p>
        <div>
             <button className="button-large" onClick={changeName}>Cambiar nombre</button>
        </div>
        </div>
       
    )

}