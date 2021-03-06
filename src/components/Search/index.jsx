import React from 'react';
import { useState } from 'react';
import styles from './styles.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close'
import { useExemplo } from '../../hooks/Exemplo';
export function Search({ exemplos }) {

  const {exemplo, setExemplo, setNumImage} = useExemplo();
  const [search, setSearch] = useState('')
  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input placeholder="Search..." onChange={(event) => {
          setSearch(event.target.value)
        }}
          value={search}
        />
        <div className={styles.searchIcon}> 
        {search.length === 0 ?<SearchIcon />: 
          <CloseIcon className={styles.clearBtn} onClick={() => setSearch('')}/>}
        
        </div>
      </div>
      <div className={styles.dataResult}>
        {
          exemplos.filter((exemplo) => {
            if (search == "") {
              return
            }
            else if (exemplo.title.toLowerCase().includes(search.toLowerCase())) {

              return exemplo
            }
          }).slice(0,15).map((exemplo, key) => {
            return <button key={key} className={styles.dataItem} onClick={() => {
              setSearch('')
              setExemplo(exemplo)
              setNumImage(0)
            }}><p>{exemplo.title}</p></button>
          })}
      </div>
    </div>
  )
}