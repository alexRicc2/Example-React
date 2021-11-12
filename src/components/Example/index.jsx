import React, { useState } from 'react';
import { useExemplo } from '../../hooks/Exemplo';
import styles from './styles.module.scss';
import { Image , StructuredText } from 'react-datocms' 
export function Example({padrao}){

  function getRandomInt(max) {
    const proxImage = Math.floor(Math.random() * max);
    while(proxImage == numImage && quant != 1){
      proxImage = Math.floor(Math.random() * max);
    }
    return proxImage;
  }

  const { exemplo, setExemplo } = useExemplo();
  const  [numImage, setNumImage] = useState(0);
  const quant = exemplo.image.length
  
  
  return <div> 
    <h1>{exemplo.title}</h1>
    <button onClick={()=>{
      setNumImage(getRandomInt(quant))
    }}>muda image</button>
    <Image data={exemplo.image[numImage].responsiveImage}/>
    <StructuredText
      data={exemplo.explanation}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case "ImageRecord":
            return <Image data={record.image.responsiveImage} />;
          default:
            return null;
        }
      }}
    >{exemplo.explanation}</StructuredText>
  </div>
}