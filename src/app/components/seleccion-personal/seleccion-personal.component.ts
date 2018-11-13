import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-seleccion-personal',
  templateUrl: './seleccion-personal.component.html',
  styleUrls: ['./seleccion-personal.component.scss']
})
export class SeleccionPersonalComponent implements OnInit {

  public mostrarTipo:boolean = true;
  public sexo: Array<any> = [];
  public puesto: Array<any> = [];
  public tiposDeTrabajos: Array<any> = [];
  // public listaCompetencias: Array<any> = [];
  // public nivelCompetencia: Array<any> = [{ name: '', levelhigh: '', levelmedium: '', levellow: '', levelselected: '' }];
  // public tecnicas: Array<any> = [];
  // public nivelTecnicas: Array<any> = [{ name: '', levelhigh: '', levelmedium: '', levellow: '', levelselected: '' }];
  

  public checkBoxGroup: FormGroup;
  public checkBoxGroupResponsive: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  quarterFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  startDate = new Date(1950, 0, 1);

  public elementosA: FormArray; //contiene los niveles de competencias
  public elementosB: FormArray; //contiene los niveles de tecnicas
  public puestos: Array<any>; //contiene los puestos de trabajo
  public ultimoId: number;

  constructor(private _formBuilder: FormBuilder, private appService: AppService) {
  }
  public mostrar() {
    console.log(this.sixthFormGroup.get('observaciones').value);
  };

  public verificar() {
    console.log(this.ultimoId);
  }
 
  public sendform(){
    
    if(this.firstFormGroup.valid&&this.thirdFormGroup.valid&&this.quarterFormGroup.valid&&this.fifthFormGroup.valid&&this.sixthFormGroup.valid){
     
      let tipo="";
    if(this.firstFormGroup.get('tipo').value==1){
      tipo="Persona";
    }
    else{
      tipo="Compañia";
    }
    //el siguiente metodo setea el valor correspondiente al campo sexo
    let sexo="";
    if(this.firstFormGroup.get('sexo').value==1){
      sexo="Femenino"
    }
    else{
      sexo="Masculino"
    }
    //el siguiente metodo setea el valor correspondiente al checkbox seleccionado
    let perfilLaboral: Array<any>;
    let secondFormCheck1="", secondFormCheck2="", secondFormCheck3="", secondFormCheck4="", secondFormCheck5="";
    if(this.checkBoxGroup.get('checkBox1').value==true){
      secondFormCheck1="Perfil psicológico del directivo";
    }
    if(this.checkBoxGroup.get('checkBox2').value==true){
      secondFormCheck2="Perfil psicológico del comercial";
    }
    if(this.checkBoxGroup.get('checkBox3').value==true){
      secondFormCheck3="Perfil Psicológico del administrativo";
    }
    if(this.checkBoxGroup.get('checkBox4').value==true){
      secondFormCheck4="Perfil psicológico del creativo";
    }
    if(this.checkBoxGroup.get('checkBox5').value==true){
      secondFormCheck5="Perfil psicológico del técnico";
    }
    perfilLaboral = [secondFormCheck1, secondFormCheck2, secondFormCheck3, secondFormCheck4, secondFormCheck5];
    
    //el siguiente metodo guarda en un array las competencias y el nivel elegido por el usuario.
    let comptencias: Array<any>=[];
    for(let i=0; i<this.quarterFormGroup.get('elementosA').value.length; i++){
      comptencias.push(this.quarterFormGroup.get('elementosA').value[i]['name']+": "+this.quarterFormGroup.get('elementosA').value[i]['levelselected']); // lo que hago es filtrar todo el json para obtener solo el nombre del checkbox y el campo levelselected elegido por el usuario.
    }

    //el siguiente metodo guarda en un array las tecnicas y el nivel elegido por el usuario.
    let tecnics: Array<any>=[];
    for(let i=0; i<this.quarterFormGroup.get('elementosB').value.length; i++){
      tecnics.push(this.quarterFormGroup.get('elementosB').value[i]['name']+": "+this.quarterFormGroup.get('elementosB').value[i]['levelselected']); // lo que hago es filtrar todo el json para obtener solo el nombre del checkbox y el campo levelselected elegido por el usuario.
    }
    let formulario= {
        "tipo": tipo,
        "nombre": this.firstFormGroup.get('nombre').value,
        "razon social": this.firstFormGroup.get('razonSocial').value,
        "sexo": sexo,
        "fechaNacimiento": this.firstFormGroup.get('fechaNacimiento').value,
        "telefono": this.firstFormGroup.get('telefono').value,
        "domicilio": this.firstFormGroup.get('domicilio').value,
        "localidad": this.firstFormGroup.get('localidad').value,
        "mail": this.firstFormGroup.get('mail').value,
        "perfil laboral": perfilLaboral,
        "puesto": this.thirdFormGroup.get('puesto').value['name'],
        "objetivo general del puesto": this.thirdFormGroup.get('objetivoDelPuesto').value,
        "formacion academica": this.thirdFormGroup.get('formacionAcademica').value,
        "experiencia laboral": this.thirdFormGroup.get('experienciaLaboral').value,
        "tipo del trabajo": this.thirdFormGroup.get('tipoDelTrabajo').value,
        "competencias y nivel": comptencias,
        "competencia extra": this.quarterFormGroup.get('competenciaExtra').value,
        "tecnicas y nivel": tecnics, 
        "tecnica extra": this.quarterFormGroup.get('tecnicaExtra').value,
        "informacion adicional (profesional presente o no)": this.fifthFormGroup.get('profesionalPresente').value,
        "observaciones": this.sixthFormGroup.get('observaciones').value
    }
    this.appService.addForm(formulario, this.ultimoId);
    var el = document.getElementById('respuesta');
    el.innerHTML = '<div class=\'alert alert-success\' role=\'alert\'> Datos enviados exitosamente! Muchas gracias!</div>';

    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
    this.quarterFormGroup.reset();
    this.fifthFormGroup.reset();
    this.sixthFormGroup.reset();
    }
    else {
      var el = document.getElementById('respuesta');
      el.innerHTML = '<div class=\'alert alert-danger\' role=\'alert\'>Hubo un error! Debe completar todos los campos </div>';
      
    }
  }

  public seleccionado(n) {
    var text = document.getElementById(n);
    switch (n) {
      case 'card1':
        if (this.checkBoxGroup.get('checkBox1').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card2':
        if (this.checkBoxGroup.get('checkBox2').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card3':
        if (this.checkBoxGroup.get('checkBox3').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card4':
        if (this.checkBoxGroup.get('checkBox4').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card5':
        if (this.checkBoxGroup.get('checkBox5').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      default:
        text.style.backgroundColor = '#FFFF';
        text.style.color = 'black';
        break;
    }
  }

  public seleccionadoResponsive(n) {
    var text = document.getElementById(n);
    switch (n) {
      case 'card1':
        if (this.checkBoxGroupResponsive.get('checkBox1responsive').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card2':
        if (this.checkBoxGroupResponsive.get('checkBox2responsive').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card3':
        if (this.checkBoxGroupResponsive.get('checkBox3responsive').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card4':
        if (this.checkBoxGroupResponsive.get('checkBox4responsive').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      case 'card5':
        if (this.checkBoxGroupResponsive.get('checkBox5responsive').value == true) {
          text.style.backgroundColor = '#40D4AF';
          text.style.color = '#FFFF';
        } else {
          text.style.backgroundColor = '#FFFF';
          text.style.color = 'black';
        }
        break;

      default:
        text.style.backgroundColor = '#FFFF';
        text.style.color = 'black';
        break;
    }
  }
  public cambioTipo() {
    this.mostrarTipo = this.firstFormGroup.get('tipo').value == 1 ? true : false;
  }
  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      tipo: new FormControl('', Validators.required),
      nombre: new FormControl('', ),
      razonSocial: new FormControl('', ),
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
    this.checkBoxGroupResponsive = new FormGroup({
      checkBox1responsive: new FormControl(),
      checkBox2responsive: new FormControl(),
      checkBox3responsive: new FormControl(),
      checkBox4responsive: new FormControl(),
      checkBox5responsive: new FormControl()
    });
    this.thirdFormGroup = new FormGroup({
      puesto: new FormControl('', Validators.required),
      objetivoDelPuesto: new FormControl('', Validators.required),
      formacionAcademica: new FormControl('', Validators.required),
      experienciaLaboral: new FormControl('', Validators.required),
      tipoDelTrabajo: new FormControl('', Validators.required),
      // elementosC: this._formBuilder.array([])
    });
    this.quarterFormGroup = this._formBuilder.group({
      // adaptacion: new FormControl('', Validators.required),
      // ambicionProfesional: new FormControl('', Validators.required),
      // Análisis: new FormControl('', Validators.required)
      competenciaExtra: new FormControl('', ),
      tecnicaExtra: new FormControl('', ),
      elementosA: this._formBuilder.array([]),
      elementosB: this._formBuilder.array([])
    });

    this.fifthFormGroup = this._formBuilder.group({
      profesionalPresente: new FormControl('', Validators.required)
      
    });
    this.sixthFormGroup = this._formBuilder.group({
      observaciones: new FormControl('', )
    });
    this.sexo = ['Masculino', 'Femenino'];
    this.puesto = [
      { value: 'Gerente general' },
      { value: 'Comercial (ventas y marketing' },
      { value: 'Administración, contabilidad y finanzas' },
      { value: 'Informático, sistemas y tecnología' },
      { value: 'Producción' },
      { value: 'Recursos humanos' },
      { value: 'Compras logísticas y abastecimiento' },
      { value: 'Servicios generales' },
      { value: 'Otros' }];

    this.tiposDeTrabajos = [
      { value: 'Individual' },
      { value: 'Equipo' }];


    this.appService.listarCompetencias().valueChanges().subscribe(res => {
      res.forEach(element => {
        this.elementosA = this.quarterFormGroup.get('elementosA') as FormArray;
        this.elementosA.push(this.crearElementoA(element));
      });
    })

    this.appService.listarTecnicas().valueChanges().subscribe(res => {
      res.forEach(element => {
        this.elementosB = this.quarterFormGroup.get('elementosB') as FormArray;
        this.elementosB.push(this.crearElementoB(element));
        console.log(this.elementosB.value);
      });
    })

    this.appService.listarPuestos().valueChanges().subscribe(res => {
      this.puestos=res;
    })

    this.appService.listarId().valueChanges().subscribe(res => {
      this.ultimoId=res.length+1;
    })
    console.log(this.ultimoId);

  }
  private crearElementoA(e): FormGroup {
    return this._formBuilder.group(e)
  }

  private crearElementoB(e): FormGroup {
    return this._formBuilder.group(e)
  }

  // private crearElementoC(e): FormGroup {
  //   return this._formBuilder.group(e)
  // }
}
