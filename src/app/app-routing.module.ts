import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./paginas/personajes/personajes.module').then(m  => m.PersonajesPageModule)
  },
  {
    path: 'nombrePersonaje',
    loadChildren:() => import('./paginas/personaje/personaje.module').then(m => m.PersonajePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
