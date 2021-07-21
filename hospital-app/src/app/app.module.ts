import { ScrollingModule } from '@angular/cdk/scrolling';
import { environment } from './../environments/environment';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './../root-store/patients-store/root-store.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PatientsComponent } from './patients/patients.component';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    FilterBarComponent,
    PatientCardComponent,
    PatientListComponent,
    PatientsComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument(): [],
    EffectsModule.forRoot([]),
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
