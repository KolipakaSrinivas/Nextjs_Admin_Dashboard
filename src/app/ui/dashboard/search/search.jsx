import React from 'react'
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'

function search({placeholder}) {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        // onChange={handleSearch}
      />
    </div>
  )
}

export default search