import React from 'react';
import { filter } from '../../store/CardsReducer/CardsReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from "./Navbar.module.scss";
const Navbar: React.FC = () => {

  const { filterValue } = useAppSelector(state => state.cards)
  const dispatch = useAppDispatch()
  
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <span className={styles.logo} >Alpha-bank Test</span>
        <button
          className={filterValue === true ? `${styles.filter} ${styles.filter_active}` : styles.filter}
          type='button'
          onClick={() => {dispatch(filter())}}
        >Filter</button>
      </div>
    </nav>
  )
};

export default Navbar;
