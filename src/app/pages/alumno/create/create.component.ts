import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  archivo;
  form: FormGroup;
  enviar_doc1: string = "";
  enviar_doc1_n: string = "";
  enviar_doc2: string = "";
  enviar_doc2_n: string = "";
  enviar_doc3: string = "";
  enviar_doc3_n: string = "";
  enviar_doc4: string = "";
  enviar_doc4_n: string = "";
  enviar_doc5: string = "";
  enviar_doc5_n: string = "";
  enviar_doc6: string = "";
  enviar_doc6_n: string = "";
  enviar_doc7: string = "";
  enviar_doc7_n: string = "";
  enviar_doc8: string = "";
  enviar_doc8_n: string = "";
  enviar_doc9: string = "";
  enviar_doc9_n: string = "";
  enviar_doc10: string = "";
  enviar_doc10_n: string = "";
  enviar_doc11: string = "";
  enviar_doc11_n: string = "";
  enviar_doc12: string = "";
  enviar_doc12_n: string = "";
  enviar_doc13: string = "";
  enviar_doc13_n: string = "";
  enviar_doc14: string = "";
  enviar_doc14_n: string = "";
  constructor(
    public alumnoService: AlumnoService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      edad: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      talla: new FormControl(''),
      peso: new FormControl(''),
      curp: new FormControl(''),
      curp_n: new FormControl(''),
      acta_nacimiento: new FormControl(''),
      acta_nacimiento_n: new FormControl(''),
      credencial_n: new FormControl(''),
      credencial: new FormControl(''),
      comprobante_domicilio_n: new FormControl(''),
      comprobante_domicilio: new FormControl(''),
      comprobante_calificacion_n: new FormControl(''),
      comprobante_calificacion: new FormControl(''),
      boleta_n: new FormControl(''),
      boleta: new FormControl(''),
      constancia_estudios_n: new FormControl(''),
      constancia_estudios: new FormControl(''),
      cartilla_vacunacion_n: new FormControl(''),
      cartilla_vacunacion: new FormControl(''),
      carta_radicacion_n: new FormControl(''),
      carta_radicacion: new FormControl(''),
      seguro_n: new FormControl(''),
      seguro: new FormControl(''),
      diagnostico_n: new FormControl(''),
      diagnostico: new FormControl(''),
      nombrePadre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      apellidoPadre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      telefonoPadre: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      grado_Estudio: new FormControl(''),
      ine_n: new FormControl(''),
      ine: new FormControl(''),
      curp_padre_n: new FormControl(''),
      curp_padre: new FormControl(''),
      acta_padre_n: new FormControl(''),
      acta_padre: new FormControl('')
    });
  }


  get f() {
    return this.form.controls;
  }
  

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
          this.archivo = this.enviar_doc1;
          console.log(this.enviar_doc1)
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

  capturarFileDoc2(event): any {
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
        this.enviar_doc2_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc2 = imagen.base;
          console.log(imagen.base);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc2 = "";
        this.enviar_doc2_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc2 = "";
      this.enviar_doc2_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }
  capturarFileDoc3(event): any {
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
        this.enviar_doc3_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc3 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc3 = "";
        this.enviar_doc3_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc3 = "";
      this.enviar_doc3_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc4(event): any {
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
        this.enviar_doc4_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc4 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc4 = "";
        this.enviar_doc4_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc4 = "";
      this.enviar_doc4_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc5(event): any {
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
        this.enviar_doc5_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc5 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc5 = "";
        this.enviar_doc5_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc5 = "";
      this.enviar_doc5_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc6(event): any {
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
        this.enviar_doc6_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc6 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc6 = "";
        this.enviar_doc6_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc6 = "";
      this.enviar_doc6_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc7(event): any {
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
        this.enviar_doc7_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc7 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc7 = "";
        this.enviar_doc7_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc7 = "";
      this.enviar_doc7_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc8(event): any {
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
        this.enviar_doc8_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc8 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc8 = "";
        this.enviar_doc8_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc8 = "";
      this.enviar_doc8_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc9(event): any {
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
        this.enviar_doc9_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc9 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc9 = "";
        this.enviar_doc9_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc9 = "";
      this.enviar_doc9_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc10(event): any {
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
        this.enviar_doc10_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc10 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc10 = "";
        this.enviar_doc10_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc10 = "";
      this.enviar_doc10_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc11(event): any {
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
        this.enviar_doc11_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc11 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc11 = "";
        this.enviar_doc11_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc11 = "";
      this.enviar_doc11_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc12(event): any {
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
        this.enviar_doc12_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc12 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc12 = "";
        this.enviar_doc12_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc12 = "";
      this.enviar_doc12_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc13(event): any {
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
        this.enviar_doc13_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc13 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc13 = "";
        this.enviar_doc13_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc13 = "";
      this.enviar_doc13_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc14(event): any {
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
        this.enviar_doc14_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.enviar_doc14 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      } else {
        this.enviar_doc14 = "";
        this.enviar_doc14_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      }
    } else {
      this.enviar_doc14 = "";
      this.enviar_doc14_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
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

  submit() {
    console.log(this.form.value);
    this.alumnoService.create(this.form.value).subscribe(res => {
      console.log('Alumno created successfully!');
      this.router.navigateByUrl('alumno/index');
    })
  }

}


