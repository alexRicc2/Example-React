import React, {createContext, useContext, useEffect, useState} from 'react'

export const ExampleContext = createContext({})

function ExampleProvider({children}){
  const [exemplo, setExemplo] = useState({
    title: "Pesquise por um exemplo em react",
    explanation: "teste",
    image: "https://doc-04-3g-docs.googleusercontent.com/docs/securesc/c57hvgklptlpu7j0jns8sd935mpe3ic9/skg91kg47b60k67nj51k36su27vhbfj0/1636634025000/08847536157537945310/08847536157537945310/1S8E0RgvuIXnr5dokxnUJOy6oXEqzt9cT?e=view&authuser=0&nonce=s172o6d9asn0g&user=08847536157537945310&hash=p9n5h4buhafkubgdau9jum90al592g64"
  })

  return(
    <ExemploContext.Provider value={{exemplo, setExemplo}}>
      {children}
    </ExemploContext.Provider>
  )
  function useExample(){
    const context = useContext(ExampleContext)
    return context
  }
}
export {useExample, ExampleProvider}