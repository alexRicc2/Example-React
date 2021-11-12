import React from 'react';
import { useExemplo } from '../../hooks/Exemplo';
export function ListaExemplos({exemplos}){
  
  const {setExemplo, setNumImage} = useExemplo();
  return (
    <div>
      {exemplos.slice(0,10).map((exemplo,index) =>{
        return(
          <button onClick={()=>{
            setExemplo(exemplo);
            setNumImage(0);
          }}>{exemplo.title}</button>
        )
      })}
    </div>
  )
}