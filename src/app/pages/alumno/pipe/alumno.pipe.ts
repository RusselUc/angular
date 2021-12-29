import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumno'
})
export class AlumnoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultAlumno = [];

    for( const alumno of value ){
      val1: false;
      if((alumno.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (alumno.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1)){
        resultAlumno.push(alumno);
        val1: true;
      };
    };
    return resultAlumno;
  }

}
