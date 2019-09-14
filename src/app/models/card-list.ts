import ICard from './card-item';

export default interface ICardList {
  id: string;
  name: string;
  cards: ICard[];
}
