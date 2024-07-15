import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponentComponent } from './components/hello-world-component/hello-world-component.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponentComponent },
  { path: 'home', component: ParentComponentComponent },
  { path: 'form', component: ContactFormComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirigir a /home por defecto
  { path: '**', redirectTo: '/home' }  // Redirigir a /home para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
