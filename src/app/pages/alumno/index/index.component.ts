import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { Alumno } from '../alumno';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  alumnos: Alumno[] = [];
  filterModelo = "";

  constructor(public alumnoService: AlumnoService) { }

  archivo;

  type = "file";

  files: any;
  rawFiles: any;

  onFileChanges(files) {
    console.log("File changed By Method :: ", files);
    console.log("File changed By Binding :: ", this.files);
    console.log("Raw files :: ", this.rawFiles);
  }

  test() {
    console.log("This files :: ", this.files);
  }

  ngOnInit(): void {
    this.alumnoService.getAll().subscribe((data: Alumno[])=>{
      this.alumnos = data;
    })
  }

  deleteAlumno(id){
    this.alumnoService.delete(id).subscribe(res => {
         this.alumnos = this.alumnos.filter(item => item.id !== id);
         console.log('alumno deleted successfully!');
    })
  }

  onFileChanged(e){
    console.log(e);
  }


}
