import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchParam: FormControl = new FormControl('');
  sendParam = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSearchPokemon(){
    const pokemonIDName = (this.searchParam.value).trim().toLowerCase();
  };
}
