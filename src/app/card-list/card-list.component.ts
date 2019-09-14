import { Component, OnInit } from '@angular/core';
import ICardList from '../models/card-list';
import ICard from '../models/card-item';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, ICardList {

  id: string;
  name: string;
  cards: ICard[];

  constructor() { }

  ngOnInit() {
  }

}
