import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-seleccion-personal',
  templateUrl: './seleccion-personal.component.html',
  styleUrls: ['./seleccion-personal.component.scss']
})
export class SeleccionPersonalComponent implements OnInit {


  public tipo: Array<any> = [];
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

  constructor(private _formBuilder: FormBuilder, private appService: AppService) {

  }

  public mostrar(m) {
    alert(m);
  };

  public verificar() {
    console.log(this.quarterFormGroup.get('elementosB').value  );

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

  ngOnInit() {
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
      elementosC: this._formBuilder.array([])
    });
    this.quarterFormGroup = this._formBuilder.group({
      // adaptacion: new FormControl('', Validators.required),
      // ambicionProfesional: new FormControl('', Validators.required),
      // Análisis: new FormControl('', Validators.required)
      competenciaExtra: new FormControl('', Validators.required),
      Atenciónaldetalle: new FormControl('', Validators.required),
      Atenciónalpúblico: new FormControl('', Validators.required),
      tecnicaExtra: new FormControl('', Validators.required),
      elementosA: this._formBuilder.array([]),
      elementosB: this._formBuilder.array([])
    });

    this.fifthFormGroup = this._formBuilder.group({
      profesionalPresente: new FormControl('', Validators.required)
      
    });
    this.sixthFormGroup = this._formBuilder.group({
      observaciones: new FormControl('', Validators.required)
    });
    this.tipo = [
      { value: 'Persona' },
      { value: 'Compañía' }];
    this.sexo = [
      { value: 'Masculino' },
      { value: 'Femenino' }];
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

  }
  private crearElementoA(e): FormGroup {
    return this._formBuilder.group(e)
  }

  private crearElementoB(e): FormGroup {
    return this._formBuilder.group(e)
  }

  private crearElementoC(e): FormGroup {
    return this._formBuilder.group(e)
  }
}
