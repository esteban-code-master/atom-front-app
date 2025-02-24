import { Injectable } from '@angular/core';
import { CanActivate  , ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { take, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router
  ) {}

  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => {
					console.log("user ===>", user)

				return !!user
			}),
      switchMap(isAuthenticated => {
        if (isAuthenticated) {
          return [true];
        } 

				this.router.navigate(['/login']);
				return [false]; 
      })
    );
  }
}
