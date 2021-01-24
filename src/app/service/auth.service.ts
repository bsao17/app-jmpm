import { AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{

  items: Observable<any[]>;
  auth = firebase.auth();
  database = firebase.firestore();
  authStatus = false;
  administrators: object[] = [
    {
      firstname: 'Bruno',
      lastname: 'MEHDDEB',
      username: 'bsao17',
      email: 'meh.bruno@yahoo.com',
      github: 'https://github.com/bsao17',
      linkdin: 'https://www.linkedin.com/in/bruno-mehddeb-1349111a3/',
      scope: 'creator, Webmaster'
    },
    {
      firstname: 'Enzo',
      lastname: 'MEHDDEB',
      username: 'Enzodo17',
      email: 'enzodo17@gmail.com',
      github: '',
      linkdin: '',
      scope: 'Discord manager'
    }
  ];
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
  getAdmin(): Observable<any>{
    return new Observable((observer) => {
      if (this.administrators.length > 0){
        observer.next(this.administrators);
        observer.complete();
      }else{
        const error = 'Administrators queries error';
        observer.error(error);
      }
    });
  }
  // create account firebase
  sendAuthDataForCreateAccount(email, password, page): any{
    this.auth.createUserWithEmailAndPassword(email, password).then((response) => {
      console.log('Compte crée correctement' + response);
      document.location.href = page;
    } )
      .catch ((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ' | ' + errorMessage);
      });
  }
  // signin on firebase
  signInAccountMember(email, password): void{
    this.auth.signInWithEmailAndPassword(email, password).then((response) => {
      console.log(response.user.email + '\n You are connected ...');
    });
  }
  // Disconnection
  signOutAccountMember(): any{
    this.auth.signOut().then(() => {
      console.log('you are disconnected !');
    });
  }
  // state status
  onStateConnection(page): any{
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Connexion réussie ...');
        document.location = page;
      }
    });
  }
  googleConnection(): any{
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    this.auth
      .signInWithPopup(googleAuth)
      .then((result) => {
        // tslint:disable-next-line:no-redundant-jsdoc
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // @ts-ignore
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }
}
