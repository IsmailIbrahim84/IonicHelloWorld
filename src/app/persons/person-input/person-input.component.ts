import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonsService} from "../../services/persons.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  enteredPersonName = '';
  constructor(private presonSerivce: PersonsService) { }

  ngOnInit(): void {
  }

  onCreatePerson() {
    console.log("Create a person");
    //this.personCreate.emit(this.enteredPersonName);
    this.presonSerivce.addPerson(this.enteredPersonName);
    this.enteredPersonName='';
  }
}
