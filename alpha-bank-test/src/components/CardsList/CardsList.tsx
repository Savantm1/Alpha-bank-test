import React, { useEffect } from 'react';
import { fetchCards } from '../../store/CardsReducer/AsyncActions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from "./CardsList.module.scss"
import Preloader  from "../../assets/img/preloader.gif"
import Card from '../Card/Card';

const CardsList: React.FC = (props) => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCards())
  },[dispatch])

  const { cards, loading, error, filterValue } = useAppSelector(state => state.cards)
  const likedElems = cards.filter(card => card.like === true)
  const CardsElems = filterValue === true ? likedElems : cards

  const elems = CardsElems.map(card => {
    return (
      <Card
        key={card.id}
        latin_name={card.latin_name}
        animal_type={card.animal_type}
        image_link={card.image_link}
        name={card.name}
        habitat={card.habitat}
        diet={card.diet}
        geo_range={card.geo_range}
        like={card.like}
        id={card.id}
      />
    )
  })


  return (
    <div className={styles.container}>
      {error && <h1>{error}</h1>}
      {loading && <img src={Preloader} alt="Loading..."/>}
      {elems}
    </div>
  )
};

export default CardsList;
