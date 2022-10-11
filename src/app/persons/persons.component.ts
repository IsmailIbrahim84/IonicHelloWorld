import {Component, Input, OnInit} from '@angular/core';
import {PersonsService} from "../services/persons.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  personsList!: string[];
  private personListSubs: Subscription = new Subscription;
// private personService: PersonsService;

  constructor( private preService: PersonsService) {
  // this.personService = preService;
  }

  ngOnInit(): void {
    this.personsList = this.preService.persons;
    this.personListSubs= this.preService.personsChanged.subscribe(x=>{this.personsList = x});
  }
  ngOnDestroy(){
    this.personListSubs.unsubscribe();
  }
}
