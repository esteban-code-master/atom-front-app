import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "@module/app-routing.module";
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthInterceptor } from "@shared/interceptor/auth-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModalComponent } from "@shared/components/modal/modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { SessionRepositoryImpl } from "@module/auth/infrastructure/repository/session.repository-impl";
import { SessionRepository } from "@module/auth/domain/repository/session.repository";

const firebaseConfig = {
	apiKey: "AIzaSyC9mi6DsVJ-KLs68_a7Jv_GSZdgbClBKuA",
  authDomain: "atom-back-app.firebaseapp.com",
  projectId: "atom-back-app",
  storageBucket: "atom-back-app.firebasestorage.app",
  messagingSenderId: "81936999856",
  appId: "1:81936999856:web:c76b0b88e50130d004e275"
};
@NgModule({
	declarations: [AppComponent, 			ModalComponent],
	imports: [CommonModule,BrowserAnimationsModule, BrowserModule, AppRoutingModule, AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatDialogModule
  ],
	bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true  },
    { provide: SessionRepository, useClass: SessionRepositoryImpl}
  ]

})
export class AppModule {}
