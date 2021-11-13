import React, { useState } from 'react';
import { useExemplo } from '../../hooks/Exemplo';
import ReplayIcon from '@material-ui/icons/Replay';
import styles from './styles.module.scss';
import { Image , StructuredText } from 'react-datocms';
import { CopyToClipboard } from 'react-copy-to-clipboard'

export function Example(){

  function getRandomInt(max) {
    const proxImage = Math.floor(Math.random() * max);
    while(proxImage == numImage && quant != 1){
      proxImage = Math.floor(Math.random() * max);
    }
    return proxImage;
  }
  function copia(){
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }
  
  const { exemplo, setExemplo, numImage, setNumImage } = useExemplo();
  const [copiado, setCopiado] = useState(false)
  const quant = exemplo.image.length
  
  return <div className={styles.container}> 
    <h1 className={styles.title}>{exemplo.title}</h1>
    <div className={styles.imageContainer}>
    <button className={styles.botao} onClick={()=>{
      setNumImage(getRandomInt(quant))
    }}><ReplayIcon/></button>
    <CopyToClipboard 
      text={exemplo.code.code[numImage]}
      onCopy={copia}
    >
      <button className={styles.botaoCopia}>{copiado? 'Copied!' : 'Copy'}</button>
    </CopyToClipboard>
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