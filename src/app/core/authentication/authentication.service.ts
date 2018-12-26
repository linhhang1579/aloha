import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public afAuth: AngularFireAuth
  ) {
  }

  login(a) {
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((a) => console.log(a));
    this.afAuth.auth.signInWithPhoneNumber('+84979903200', a).then((confirmationResult) => {
      confirmationResult.confirm('274152')
        .then((good) => {
          console.log(good);
        })
        .catch((bad) => {
          // code verification was bad.
        });
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
