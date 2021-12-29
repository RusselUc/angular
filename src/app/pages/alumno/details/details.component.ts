import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Alumno } from '../alumno';
import { } from '../create/create.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  archivo;

  id: number;
  alumno: Alumno;
  form: FormGroup;

  enviar_doc1: string = "";
  enviar_doc1_n: string = "";

  constructor(
    public alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  

  ngOnInit(): void {
    this.alumno = {
      id: 1,
      nombre: '-',
      apellido: '-',
      email: '-',
      telefono: 0,
      edad: 0,
      talla: '-',
      peso: '-',
      curp_n: '-',
      curp: '-',
      acta_nacimiento_n: '-',
      acta_nacimiento: '-',
      credencial_n: '-',
      credencial: '-',
      comprobante_domicilio_n: '-',
      comprobante_domicilio: '-',
      comprobante_calificacion_n: '-',
      comprobante_calificacion: '-',
      boleta_n: '-',
      boleta: '-',
      constancia_estudios_n: '-',
      constancia_estudios: '-',
      cartilla_vacunacion_n: '-',
      cartilla_vacunacion: '-',
      carta_radicacion_n: '-',
      carta_radicacion: '-',
      seguro_n: '-',
      seguro: '-',
      diagnostico_n: '-',
      diagnostico: '-',
      nombrePadre: '-',
      apellidoPadre: '-',
      telefonoPadre: 0,
      grado_Estudio: '-',
      ine_n: '-',
      ine: '-',
      curp_padre_n: '-',
      curp_padre: '-',
      acta_padre_n: '-',
      acta_padre: '-'
    };

    this.id = this.route.snapshot.params['idAlumno'];
    this.alumnoService.find(this.id)?.subscribe((data?: Alumno) => {
      this.alumno = data;
      this.enviar_doc1 = this.alumno.curp;
      this.archivo = this.alumno.curp;
      console.log(this.alumno.nombre);
    },
      err => {
        console.log(err);
      }
    );


    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      edad: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      talla: new FormControl(''),
      peso: new FormControl(''),
      nombrePadre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      apellidoPadre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      telefonoPadre: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      grado_Estudio: new FormControl('')
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.alumnoService.update(this.id, this.form.value).subscribe(res => {
      console.log('Alumno updated successfully!');
      this.router.navigateByUrl('alumno/index');
    })
  }

  downloadPdf(base64String, fileName){
    if(window.navigator && window.navigator.msSaveOrOpenBlob){ 
      // download PDF in IE
      let byteChar = atob(base64String);
      let byteArray = new Array(byteChar.length);
      for(let i = 0; i < byteChar.length; i++){
        byteArray[i] = byteChar.charCodeAt(i);
      }
      let uIntArray = new Uint8Array(byteArray);
      let blob = new Blob([uIntArray], {type : 'application/pdf'});
      window.navigator.msSaveOrOpenBlob(blob, `${fileName}.pdf`);
    } else {
      // Download PDF in Chrome etc.
      const source = `data:application/pdf;base64,${base64String}`;
      const link = document.createElement("a");
      link.href = base64String;
      link.download = `${fileName}.pdf`
      link.click();
    }
  }

    onClickDownloadPdf(file,name){
      let base64String = file;
      this.downloadPdf(base64String,name);
    }

    curp(){
      this.onClickDownloadPdf(this.alumno.curp,this.alumno.nombre + "_curp");
    }

    acta(){
      this.onClickDownloadPdf(this.alumno.acta_nacimiento, this.alumno.nombre + "_acta");
    }

    credencial(){
      this.onClickDownloadPdf(this.alumno.credencial, this.alumno.nombre + "_credencial");
    }

    comprobanteDom(){
      this.onClickDownloadPdf(this.alumno.comprobante_domicilio, this.alumno.nombre + "_ComprobanteDomicilio");
    }

    seguro(){
      this.onClickDownloadPdf(this.alumno.seguro, this.alumno.nombre + "_seguro");
    }

    cartillaRad(){
      this.onClickDownloadPdf(this.alumno.carta_radicacion, this.alumno.nombre + "_radicacion");
    }

    cartilla(){
      this.onClickDownloadPdf(this.alumno.cartilla_vacunacion, this.alumno.nombre + "_vacunacion");
    }

    comprobanteCal(){
      this.onClickDownloadPdf(this.alumno.comprobante_calificacion, this.alumno.nombre + "_comptobanteCalificaciones");
    }

    boleta(){
      this.onClickDownloadPdf(this.alumno.boleta, this.alumno.nombre + "_boleta");
    }

    constancia(){
      this.onClickDownloadPdf(this.alumno.constancia_estudios, this.alumno.nombre + "_constancia");
    }

    curpPadre(){
      this.onClickDownloadPdf(this.alumno.curp_padre, this.alumno.nombre + "_curpPadre");
    }

    ine(){
      this.onClickDownloadPdf(this.alumno.ine, this.alumno.nombre + "_ine");
    }

    actaPadre(){
      this.onClickDownloadPdf(this.alumno.acta_padre, this.alumno.nombre + "_actaPadre");
    }
  /*downloadPdf(base64String, capturarFileDoc1) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${capturarFileDoc1}.pdf`
    link.click();
  }
  onClickDownloadPdf(){
    let base64String = this.enviar_doc1;
    console.log("hay ta "+base64String);
    this.downloadPdf(base64String,"sample");
  } */


  capturarFileDoc1(event): any {
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if (fileType == "application/pdf") {
      if (fileSize < 1000000) {
        console.log(archivoCapturado);
        this.enviar_doc1_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc1 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc1 = "";
        this.enviar_doc1_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc1 = "";
      this.enviar_doc1_n = "";
      alert('Tipo de archivo no permitido  (PDF)');
    }
  }

  

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  })

}