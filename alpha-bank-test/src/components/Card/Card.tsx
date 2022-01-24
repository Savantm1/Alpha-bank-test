import React from 'react';
import styles from "./Card.module.scss";
import { ReactComponent as Like } from "../../assets/img/like.svg";
import Remove from "../../assets/img/remove.png";
import { useAppDispatch } from '../../store/hooks';
import { like, remove } from '../../store/CardsReducer/CardsReducer';

interface CardPropsTypes {
  name: string;
  image_link: string;
  latin_name: string;
  animal_type: string;
  habitat: string;
  diet: string;
  geo_range: string;
  id: number;
  like: boolean;
}


const Card: React.FC<CardPropsTypes> = (props) => {

  const dispatch = useAppDispatch()

  return (
    <div className={styles.card}>
      <div className={styles.left_side}>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.image_container}>
          <img className={styles.card_image} src={props.image_link}  alt="avatar" />
        </div>
      </div>
      <div className={styles.right_side}>
        <ul className={styles.description}>
          <li className={styles.description_item}>
            <p className={styles.desc}><span>Latin Name:</span> {props.latin_name}</p>
          </li>
          <li className={styles.description_item}>
            <p className={styles.desc}><span>Type:</span> {props.animal_type}</p>
          </li>
          <li className={styles.description_item}>
            <p className={styles.desc}><span>Habitat:</span> {props.habitat}</p>
          </li>
          <li className={styles.description_item}>
            <p className={styles.desc}><span>Diet:</span> {props.diet}</p>
          </li>
          <li className={styles.description_item}>
            <p className={styles.desc}><span>GEO:</span> {props.geo_range}</p>
          </li>
        </ul>
        <div className={styles.action_container}>
          <Like
            className={styles.like}
            width="50"
            height="50"
            fill={`${props.like ? 'tomato' : 'green'}`}
            onClick={()=>{dispatch(like(props.id))}}
          />
          <img
            className={styles.remove}
            src={Remove}
            alt="remove"
            onClick={()=>{dispatch(remove(props.id))}}
          />
        </div>
      </div>
    </div>
  )
};

export default Card;
