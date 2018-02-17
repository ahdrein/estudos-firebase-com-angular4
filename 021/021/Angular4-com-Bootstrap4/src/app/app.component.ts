import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  nome:string;
  email:string;
  senha:string;
  urlImagem:string;

  constructor(public afAuth: AngularFireAuth){
    this.user= this.afAuth.authState;
  }

  loginFacebook(){
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  loginGithub(){
    this.afAuth.auth.signInWithPopup( new firebase.auth.GithubAuthProvider());
  }

  loginEmail(){
    //console.log(this.email,this.senha);
    firebase.auth().signInWithEmailAndPassword(this.email,this.senha).catch((erro:any)=>{
      console.log(erro);
    });
  }

  cadastroEmail(){
    //console.log(this.email,this.senha);
    firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((res:any)=>{
      console.log(res);
      let usuario = firebase.auth().currentUser;
      usuario.updateProfile({
        displayName:this.nome,
        photoURL:this.urlImagem
      });

    }).catch((erro:any)=>{
      console.log(erro);
    });
  }

  sair(){
    this.afAuth.auth.signOut();
  }


}
