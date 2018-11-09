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
  public listarTecnicas() {
    return this.db.list('/Tecnicas');
  }
  public listarPuestos() {
    return this.db.list('/Puesto');
  }

}
