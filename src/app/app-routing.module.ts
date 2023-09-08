import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BooknowComponent } from './booknow/booknow.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [{path:'',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'booknow/:pid',component:BooknowComponent},
{path:'add',component:AddComponent},
{path:'delete/:pid',component:DeleteComponent},
{path:'edit/:pid',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
