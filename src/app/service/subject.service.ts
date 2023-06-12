import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
// decalre subject obserable.
firstName = new Subject<any>();
  constructor() { }
}
