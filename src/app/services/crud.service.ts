import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/Produto.models';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afd: AngularFirestore) { }

  create(produto: Product) {
    produto.id = this.afd.createId()
    this.afd.collection('Produtos').doc(produto.id).set(produto).then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  update() {

  }

  delete() {

  }

  index() {

  }

  indexById() {

  }
}
