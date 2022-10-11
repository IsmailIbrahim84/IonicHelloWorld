import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = ['maxService','IsmailService','Test'];
  personsChanged = new Subject<string[]>();
  constructor() { }

  addPerson(name: string)
  {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }
}
