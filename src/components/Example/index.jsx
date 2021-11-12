import React from 'react';
import { useExemplo } from '../../hooks/Exemplo';
import ReplayIcon from '@material-ui/icons/Replay';
import styles from './styles.module.scss';
import { Image , StructuredText } from 'react-datocms' 
export function Example(){

  function getRandomInt(max) {
    const proxImage = Math.floor(Math.random() * max);
    while(proxImage == numImage && quant != 1){
      proxImage = Math.floor(Math.random() * max);
    }
    return proxImage;
  }

  const { exemplo, setExemplo, numImage, setNumImage } = useExemplo();
  
  const quant = exemplo.image.length
  
  
  return <div className={styles.container}> 
    <h1 className={styles.title}>{exemplo.title}</h1>
    <div className={styles.imageContainer}>
    <button className={styles.botao} onClick={()=>{
      setNumImage(getRandomInt(quant))
    }}><ReplayIcon/></button>
    
    <Image data={exemplo.image[numImage].responsiveImage}/>
    </div>
    <StructuredText
      className={styles.texto}
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