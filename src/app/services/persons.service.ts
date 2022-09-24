import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = ['maxService','IsmailService','Test'];
  constructor() { }

  addPerson(name: string)
  {
    this.persons.push(name);
  }
}
