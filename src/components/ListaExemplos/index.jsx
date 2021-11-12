import React from 'react';
import { useExemplo } from '../../hooks/Exemplo';
import styles from './styles.module.scss';
export function ListaExemplos({exemplos}){
  
  const {setExemplo, setNumImage} = useExemplo();
  return (
    <div className={styles.container}>
      {exemplos.slice(0,10).map((exemplo,index) =>{
        return(
          <button className={styles.botao}key={index} onClick={()=>{
            setExemplo(exemplo);
            setNumImage(0);
          }}>{exemplo.title}</button>
        )
      })}
    </div>
  )
}