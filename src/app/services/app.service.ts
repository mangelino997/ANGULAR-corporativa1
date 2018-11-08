import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private db: AngularFireDatabase) { }

  public listarCompetencias() {
    return this.db.list('/Competencias');
  }
}
