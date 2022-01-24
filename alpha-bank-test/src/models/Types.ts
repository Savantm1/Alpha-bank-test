export interface ICardType {
  name: string;
  latin_name: string;
  animal_type: string;
  active_time: string;
  length_min: string | number;
  length_max: string | number;
  weight_min: string | number;
  weight_max: string | number;
  lifespan: string | number;
  habitat: string;
  diet: string;
  geo_range: string;
  image_link: string;
  id: number;
  like: boolean;
}