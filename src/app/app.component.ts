import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogEditandoLembreteComponent } from './app/dialog-editando-lembrete/dialog-editando-lembrete.component';
import { DialogNovoLembreteComponent } from './Projects/lembrete/dialog-novo-lembrete/dialog-novo-lembrete.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pesquisa!: FormGroup;
  lembretes: any;
  lemb: any;
  alta: any;
  media: any;
  baixa: any;
  pos_a: any;
  pos_m: any;
  pos_b: any;
  encont: any;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    ) {}

ngOnInit(): any{
  this.pesquisa = this.fb.group({
    resPesq: ['',[Validators.required]],
  });
  this.lembretes = []
  this.alta = []
  this.media = []
  this.baixa = []
  this.pos_a = 0
  this.pos_m = 0
  this.pos_b = 0
  this.encont = true
}

novoLembrete(): any {
  const dialogRef = this.dialog.open(DialogNovoLembreteComponent, {
    minWidth: '500px'
  });

  dialogRef.afterClosed().subscribe((result) =>{
    if ('save' == localStorage.getItem("save")){
      this.lemb = JSON.parse(localStorage.getItem("lembrete")!)
      this.lembretes.unshift(this.lemb)
      console.log(this.lembretes)
      this.altaPrior()
      this.mediaPrior()
      this.baixaPrior()
    }
  });
}

altaPrior(){
  if (this.lemb.lembPrior == 'Alta'){
    this.alta.unshift(this.lemb)
    this.alta[this.pos_a].unshift(this.pos_a)
    this.pos_a ++
  }
}

mediaPrior(){
  if (this.lemb.lembPrior == 'Media'){
    this.media.unshift(this.lemb)
    this.media[this.pos_m].unshift(this.pos_m)
    this.pos_m ++
  }
}

baixaPrior(){
  if (this.lemb.lembPrior == 'Baixa'){
    this.baixa.unshift(this.lemb)
    this.baixa[this.pos_b].unshift(this.pos_m)
    this.pos_b ++
  }
}

editLembA(i: any): any {
  localStorage.setItem("priorEditing","Alta")
  const dialogRef = this.dialog.open(DialogEditandoLembreteComponent, {
    minWidth: '500px'
  });

  dialogRef.afterClosed().subscribe((result) =>{
    if ('save' == localStorage.getItem("save")){
      this.lemb = JSON.parse(localStorage.getItem("lembreteEditado")!)
      this.alta[i].lembTitle = this.lemb.lembTitle
      this.alta[i].lembText = this.lemb.lembText
    }
  });
}

editLembM(i: any): any {
  localStorage.setItem("priorEditing","Média")
  const dialogRef = this.dialog.open(DialogEditandoLembreteComponent, {
    minWidth: '500px'
  });

  dialogRef.afterClosed().subscribe((result) =>{
    if ('save' == localStorage.getItem("save")){
      this.lemb = JSON.parse(localStorage.getItem("lembreteEditado")!)
      this.media[i].lembTitle = this.lemb.lembTitle
      this.media[i].lembText = this.lemb.lembText
    }
  });
}

editLembB(i: any): any {
  localStorage.setItem("priorEditing","Baixa")
  const dialogRef = this.dialog.open(DialogEditandoLembreteComponent, {
    minWidth: '500px'
  });

  dialogRef.afterClosed().subscribe((result) =>{
    if ('save' == localStorage.getItem("save")){
      this.lemb = JSON.parse(localStorage.getItem("lembreteEditado")!)
      this.baixa[i].lembTitle = this.lemb.lembTitle
      this.baixa[i].lembText = this.lemb.lembText
    }
  });

}
pesquisaLemb(){
  let i = 0
  console.log(this.pesquisa.value.resPesq)
  while(i < this.alta.length){
    if(this.pesquisa.value.resPesq == this.alta[i].lembText){
      this.encont=false
      i=i+1
      console.log("alta");
      break
    }
    else()=>
      this.encont=true
      console.log("alta-1");
      i=i+1;
    }

}
  title = 'lembrete';
}
