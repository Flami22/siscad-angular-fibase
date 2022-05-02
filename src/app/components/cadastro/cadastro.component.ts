import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {
formProduct: FormGroup;
  constructor(private formBuilder: FormBuilder, private crud: CrudService) {
    this.formProduct = formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      preco: ['', Validators.compose([Validators.required])],
      qtde:[1, , Validators.compose([Validators.required, Validators.min(1)])]
    })
  }

  ngOnInit(): void {
  }

  saveProduct() {
    if(this.formProduct.valid) {
      this.crud.create(this.formProduct.value)
    }
}
}
