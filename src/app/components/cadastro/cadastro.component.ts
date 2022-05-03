import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass'],
})
export class CadastroComponent implements OnInit {
  formProduct: FormGroup;
  constructor(private formBuilder: FormBuilder, private crud: CrudService) {
    console.log('salve');
    this.formProduct = formBuilder.group({
      nome: [''],
      preco: [''],
      qtde: [1],
    });
    console.log('deu ruim');
  }

  ngOnInit(): void {}

  saveProduct() {
    if (this.formProduct.valid) {
      this.crud.create(this.formProduct.value);
    }
  }
}
