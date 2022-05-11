import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  formProduct: FormGroup;
  constructor(private formBuilder: FormBuilder, private crud: CrudService) {
    console.log('salve');
    this.formProduct = formBuilder.group({
      nome: [''],
      preco: [''],
      qtde: [''],
    });
  }

  ngOnInit(): void {}

  saveProduct() {
    if (this.formProduct) {
      this.crud.create(this.formProduct.value);
    } else {
      alert('Todos os campos obrigatorios');
    }
  }
}
