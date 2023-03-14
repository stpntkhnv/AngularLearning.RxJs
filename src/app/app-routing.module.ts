import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from 'src/FirstComponent/first.component';
import { FourthComponent } from 'src/FourthComponent/fourth.component';
import { SecondComponent } from 'src/SecondComponent/second.component';
import { ThirdComponent } from 'src/ThirdComponent/third.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
