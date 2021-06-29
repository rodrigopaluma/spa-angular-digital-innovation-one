import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { Aluno } from '../models/aluno.model';
import { AlunosService } from './alunos.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  displayedColumns: string[] = ['matricula','nome','curso','cpf','identidade','emissor','email','estado','cidade','acoes'];
  dataSource = new MatTableDataSource<Aluno>();

 /*  @ViewChild(MatPaginator) paginator: MatPaginator; */

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.carregaAlunos();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  carregaAlunos() {
    this.dataSource = new MatTableDataSource<Aluno>();
    this.alunosService.findAll().pipe(take(1)).subscribe((alunos: Aluno[]) => {
        this.dataSource = new MatTableDataSource<Aluno>(alunos);
        console.log(alunos);
      });
  }
}
