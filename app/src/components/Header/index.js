import React from 'react'
import styles from './styles.module.scss'
import icon from 'commons/image-removebg-preview.png'


function Header({onChange}) {
  return (
    <header className={styles.header}>
      <img src={icon}></img>
      <input onChange={onChange} placeholder="You're looking for something?"  type="search"></input>
    </header>
  )
}

export default Header