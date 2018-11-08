import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {AppService} from '../../services/app.service';


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
  public nivelCompetencia:Array<any> = [{name:'', levelhigh: '', levelmedium: '', levellow: '', levelselected: ''}];
  public tecnicas:Array<any> = [];
  public listaCompetencias: Array<any> = [];

  public checkBoxGroup: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  quarterFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  startDate = new Date(1950, 0, 1);

  constructor(private _formBuilder: FormBuilder, private appService: AppService) {
    
   }

  public mostrar(m) {
    alert(m);
    };

  public verificar(){
    console.log(this.nivelCompetencia);

  }

  public seleccionado(n) {
    // document.getElementById(n).style.backgroundColor= '#40D4AF';
    // document.getElementById(n).style.color= '#FFFF';
      // Get the checkbox
      // Get the output text
      var text = document.getElementById(n);
     // alert(this.checkBoxGroup.get('checkBox1').value);
      // If the checkbox is checked, display the output text
      // if (this.checkBoxGroup.get('checkBox1').value == true){
      //   text.style.backgroundColor= '#40D4AF';
      //   text.style.color= '#FFFF';
      // }else if (this.checkBoxGroup.get('checkBox2').value == true){
      //   text.style.backgroundColor= '#40D4AF';
      //   text.style.color= '#FFFF';
      // }
      // else {
      //   text.style.backgroundColor= '#FFFF';
      //   text.style.color= 'black';
      // }

      switch(n){
        case 'card1':
        if (this.checkBoxGroup.get('checkBox1').value == true){
            text.style.backgroundColor= '#40D4AF';
            text.style.color= '#FFFF';
          }else {
              text.style.backgroundColor= '#FFFF';
              text.style.color= 'black';}
        break;

        case 'card2':
        if (this.checkBoxGroup.get('checkBox2').value == true){
          text.style.backgroundColor= '#40D4AF';
          text.style.color= '#FFFF';
        }else {
          text.style.backgroundColor= '#FFFF';
          text.style.color= 'black';}
        break;

        case 'card3':
        if (this.checkBoxGroup.get('checkBox3').value == true){
          text.style.backgroundColor= '#40D4AF';
          text.style.color= '#FFFF';
        }else {
          text.style.backgroundColor= '#FFFF';
          text.style.color= 'black';}
        break;

        case 'card4':
        if (this.checkBoxGroup.get('checkBox4').value == true){
          text.style.backgroundColor= '#40D4AF';
          text.style.color= '#FFFF';
        }else {
          text.style.backgroundColor= '#FFFF';
          text.style.color= 'black';}
        break;

        case 'card5':
        if (this.checkBoxGroup.get('checkBox5').value == true){
          text.style.backgroundColor= '#40D4AF';
          text.style.color= '#FFFF';
        }else {
          text.style.backgroundColor= '#FFFF';
          text.style.color= 'black';}
        break;

        default: 
        text.style.backgroundColor= '#FFFF';
        text.style.color= 'black';
        break;
      }


  }

  ngOnInit() {
    this.appService.listarCompetencias().valueChanges().subscribe(res=> {
      this.nivelCompetencia=res;
      
      this.nivelCompetencia.forEach(element => {
        this.quarterFormGroup.addControl (element.levelselected, new FormControl());
      });
      
    })

    this.firstFormGroup = new FormGroup({
      tipo: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      razonSocial: new FormControl('', Validators.required),
      puestoDeTrabajo: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      domicilio: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      localidad: new FormControl('', Validators.required)
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.checkBoxGroup = new FormGroup({
      checkBox1: new FormControl(),
      checkBox2: new FormControl(),
      checkBox3: new FormControl(),
      checkBox4: new FormControl(),
      checkBox5: new FormControl()
    });

    this.thirdFormGroup = new FormGroup({
      puesto: new FormControl('', Validators.required),
      objetivoDelPuesto: new FormControl('', Validators.required),
      formacionAcademica: new FormControl('', Validators.required),
      experienciaLaboral: new FormControl('', Validators.required),
      tipoDelTrabajo: new FormControl('', Validators.required)
    });
    this.quarterFormGroup = this._formBuilder.group({
      // adaptacion: new FormControl('', Validators.required),
      // ambicionProfesional: new FormControl('', Validators.required),
      // Análisis: new FormControl('', Validators.required)
      competenciaExtra: new FormControl('', Validators.required),
      Atenciónaldetalle: new FormControl('', Validators.required),
      Atenciónalpúblico: new FormControl('', Validators.required),
      tecnicaExtra: new FormControl('', Validators.required)
    });

    this.fifthFormGroup = this._formBuilder.group({
      profesionalPresente: new FormControl('', Validators.required)
      
    });
    this.sixthFormGroup = this._formBuilder.group({
      observaciones: new FormControl('', Validators.required)
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

    //       {name:'adaptacion', radioNivelAlto: '1-Alto', radioNivelMedio: '1-Medio', radioNivelBajo: '1-Bajo'},
    //       {name:'ambicionProfesional', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'}
    //       {name:'3- Análisis', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'4- Aprendizaje', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'5- Autocontrol', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'6- Autonomía', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'7- Creatividad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'8- Delegación', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'9- Dinamismo', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'10- Flexibilidad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'11- Independencia', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'12- Iniciativa', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'13- Integridad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'14- Juicio', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'15- Liderazgo', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'16- Negociación y conciliación', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'17- Orientación al servicio', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'18- Persuasión', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'19- Planificación y Organización', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'20- Resolución de Problemas', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'21- Sensibilidad Interpersonal', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'22- Sociabilidad', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'23- Toma de decisión', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'24- Trabajo bajo presión', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'},
    //       {name:'25- Trabajo en equipo', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'}
    ];

    this.tecnicas = [
        {name:'Atenciónaldetalle', radioNivelAlto: '1-Alto', radioNivelMedio: '1-Medio', radioNivelBajo: '1-Bajo'},
        {name:'Atenciónalpúblico', radioNivelAlto: '2-Alto', radioNivelMedio: '2-Medio', radioNivelBajo: '2-Bajo'}
      ];
    }
}
