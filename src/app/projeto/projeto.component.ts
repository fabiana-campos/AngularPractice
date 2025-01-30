import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projeto',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.css'
})
export class ProjetoComponent {

// Objeto de formulário

formulario = new FormGroup({
  nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
  idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
  cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
});

// Visibilidade dos botões

  btnCadastrar:boolean = true;

// vetor
  vetor:Pessoa [] = [];

// Armazenar índice da pessoa selecionada

  indice:number = -1; 

//FUNÇÃO DE CADASTRO
  cadastrar(){

  // cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

  // limpeza dos inputs
    this.formulario.reset();

  // Visualização via console
    //console.table(this.vetor);
  }

// FUNÇÃO DE SELEÇÃO

  selecionar(indice:number){

    //atribuir o índice da pessoa
    this.indice = indice;

    //atribuir os dados da pessoa no formulário

    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade
    });

    // visibilidade dos botões

    this.btnCadastrar = false;
  }


  // FUNÇÃO DE ALTERAÇÃO
  alterar(){

    // Alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // Limpar os inputs
    this.formulario.reset();

    // Visibilidade dos botões

    this.btnCadastrar = true;
  }


  //FUNÇÃO DE REMOÇÃO

  remover(){

    //removendo pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //limpeza dos inputs
    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastrar = true;
  }


  //FUNÇAO DE CANCELAMENTO
  cancelar(){

    //limpeza dos inputs
    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastrar = true;
  }
}
