import React, { createContext , useContext, useState} from 'react';

export const ExemploContext = createContext({})

function ExemploProvider({children}){
  const [numImage , setNumImage] = useState(0)
  const [exemplo, setExemplo] = useState(
    
      {
        "id": "72597743",
        "title": "Pesquise por algo relacionado a React",
        "explanation": {
          "value": {
            "schema": "dast",
            "document": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "span",
                      "value": "voce deve pesquisar e um exemplo aparecera"
                    }
                  ]
                }
              ]
            }
          }
        },
        "image": [
          {
            "responsiveImage": {
              "alt": null,
              "aspectRatio": 0.999000999000999,
              "bgColor": "#ff5a3e",
              "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBg0MEQgUDQ4NDRgQDQ0NEBEJFg0SFxUZGBYVFhUaHysjGh0oHRUWJDUxKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHRAQHC8dIh0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAQQDB//EABoQAAMBAQEBAAAAAAAAAAAAAAABAgMRQTH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAZEQADAQEBAAAAAAAAAAAAAAAAARIRIQP/2gAMAwEAAhEDEQA/AOyukvRK5fpHrdcM87roKNl58L6tJfQI7t8AtAgq0xTRnngugAsQaYtckkMALiDTP//Z",
              "height": 1001,
              "sizes": "(max-width: 1000px) 100vw, 1000px",
              "src": "https://www.datocms-assets.com/58199/1636691110-datocms.jpeg",
              "srcSet": "https://www.datocms-assets.com/58199/1636691110-datocms.jpeg?dpr=0.25 250w,https://www.datocms-assets.com/58199/1636691110-datocms.jpeg?dpr=0.5 500w,https://www.datocms-assets.com/58199/1636691110-datocms.jpeg?dpr=0.75 750w,https://www.datocms-assets.com/58199/1636691110-datocms.jpeg 1000w",
              "title": null,
              "webpSrcSet": "https://www.datocms-assets.com/58199/1636691110-datocms.jpeg?dpr=0.25&fm=webp 250w,https://www.datocms-assets.com/58199/1636691110-datocms.jpeg?dpr=0.5&fm=webp 500w,https://www.datocms-assets.com/58199/1636691110-datocms.jpeg?dpr=0.75&fm=webp 750w,https://www.datocms-assets.com/58199/1636691110-datocms.jpeg?fm=webp 1000w",
              "width": 1000
            }
          }
        ],
        "code": {
          "code": [
            "https://examplereactjs.vercel.app/",
            "oi"
          ]
        }
      }
  )

  return(
    <ExemploContext.Provider value={{exemplo, setExemplo, numImage, setNumImage}}>
    {children}
    </ExemploContext.Provider>
  )
}
function useExemplo(){
  const context = useContext(ExemploContext)
  return context
}


export { ExemploProvider, useExemplo }