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
  // el siguiente metodo es para consultar el valor del id de la ultima fila para usarlo como id +1 en el proximo registro 
  public listarId() { 
    return this.db.list('/Formulario');
  }
  public addForm(formulario, id){
    return this.db.object('/Formulario/'+ id).set(formulario);
  }
}
