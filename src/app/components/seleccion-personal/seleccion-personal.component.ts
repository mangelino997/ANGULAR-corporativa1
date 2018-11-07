import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';



@Component({
  selector: 'app-seleccion-personal',
  templateUrl: './seleccion-personal.component.html',
  styleUrls: ['./seleccion-personal.component.scss']
})
export class SeleccionPersonalComponent implements OnInit {


  public tipo:Array<any> = [];
  public sexo:Array<any> = [];
  public puesto:Array<any> = [];
  public tiposDeTrabajos:Array<any> = [];
  public nivelCompetencia:Array<any> = [];
  public tecnicas:Array<any> = [];

  public checkBoxGroup: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  quarterFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  startDate = new Date(1950, 0, 1);
  constructor(private _formBuilder: FormBuilder) { }

  public mostrar(m) {
    alert(m);
    };

  public seleccionado(c, n) {
    // document.getElementById(n).style.backgroundColor= '#40D4AF';
    // document.getElementById(n).style.color= '#FFFF';
      // Get the checkbox
      var checkBox = document.getElementById(c);
      // Get the output text
      var text = document.getElementById(n);
      alert(this.checkBoxGroup.get('checkBox1'));
      // If the checkbox is checked, display the output text
      // if (this.secondFormGroup.get('checkBox1') == true){
      //   text.style.backgroundColor= '#40D4AF';
      //   text.style.color= '#FFFF';
      // } else {
      //   text.style.backgroundColor= '#FFFF';
      //   text.style.color= 'black';
      // }
  }

  ngOnInit() {
    this.checkBoxGroup = new FormGroup({
      checkBox1: new FormControl(),
      checkBox2: new FormControl(),
      checkBox3: new FormControl(),
      checkBox4: new FormControl(),
      checkBox5: new FormControl()
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      
    });
    this.quarterFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.tipo = [
      {value: 'Persona'},
      {value: 'Compañía'} ];
    this.sexo = [
      {value: 'Masculino'},
      {value: 'Femenino'} ];
    this.puesto = [
        {value: 'Gerente general'},
        {value: 'Comercial (ventas y marketing'},
        {value: 'Administración, contabilidad y finanzas'},
        {value: 'Informático, sistemas y tecnología'},
        {value: 'Producción'},
        {value: 'Recursos humanos'},
        {value: 'Compras logísticas y abastecimiento'},
        {value: 'Servicios generales'},
        {value: 'Otros'} ];

    this.tiposDeTrabajos = [
        {value: 'Individual'},
        {value: 'Equipo'} ];

    this.nivelCompetencia = [
          {name:'1- Adaptación', radioNivelAlto: '1-Alto', radioNivelMedio: '1-Medio', radioNivelBajo: '1-Bajo'},
          {name:'2- Ambición profesional', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'3- Análisis', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'4- Aprendizaje', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'5- Autocontrol', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'6- Autonomía', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'7- Creatividad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'8- Delegación', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'9- Dinamismo', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'10- Flexibilidad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'11- Independencia', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'12- Iniciativa', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'13- Integridad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'14- Juicio', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'15- Liderazgo', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'16- Negociación y conciliación', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'17- Orientación al servicio', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'18- Persuasión', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'19- Planificación y Organización', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'20- Resolución de Problemas', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'21- Sensibilidad Interpersonal', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'22- Sociabilidad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'23- Toma de decisión', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'24- Trabajo bajo presión', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
          {name:'25- Trabajo en equipo', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'}
      ];

    this.tecnicas = [
        {name:'1- Atención al detalle', radioNivelAlto: '1-Alto', radioNivelMedio: '1-Medio', radioNivelBajo: '1-Bajo'},
        {name:'2- Atención al público', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'}
      ];
    }
}
