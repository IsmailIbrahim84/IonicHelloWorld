import {Component, Input, OnInit} from '@angular/core';
import {PersonsService} from "../services/persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  personsList!: string[];
// private personService: PersonsService;

  constructor( private preService: PersonsService) {
  // this.personService = preService;
  }

  ngOnInit(): void {
    this.personsList = this.preService.persons;
  }

}
