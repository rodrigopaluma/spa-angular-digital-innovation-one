import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'alunos/novo', component: AlunoFormComponent},
  { path: 'professores', component: ProfessoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
