import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateKBComponent} from './create-kb/create-kb.component';
import {BotchatComponent} from './botchat/botchat.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {QnAKbComponent} from './qn-a-kb/qn-a-kb.component';
import {ListKbComponent} from './list-kb/list-kb.component';
import { HttpModule } from '@angular/http';

const routesConfig: Routes = [
  {path: 'createKb', component: CreateKBComponent},
  {path: 'botchat', component: BotchatComponent},
  {path: 'listquestion', component: QnAKbComponent},
  {path: 'listkb', component: ListKbComponent},
  {path: '', redirectTo: 'listkb', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routesConfig), CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule, MatStepperModule , HttpModule ],
  declarations: [
    CreateKBComponent,
    BotchatComponent,
    PageNotFoundComponent, ListKbComponent , QnAKbComponent
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
