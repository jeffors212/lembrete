import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editando-lembrete',
  templateUrl: './dialog-editando-lembrete.component.html',
  styleUrls: ['./dialog-editando-lembrete.component.css']
})
export class DialogEditandoLembreteComponent implements OnInit {
  public lembForm!: FormGroup;
  prioridade: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogEditandoLembreteComponent>,
  ) { }

  ngOnInit(): any {
    console.log(localStorage.getItem("position"))
    this.prioridade = localStorage.getItem("priorEditing")
    this.lembForm = this.fb.group({
      lembTitle: ['',[Validators.required]], /*Recebe o título do lembrete */
      lembText: ['',[Validators.required]],  /*Recebe o texto do lembrete */
    })
  }

  atualizarLemb(){
    this.dialogRef.close();
    localStorage.setItem("lembreteEditado", JSON.stringify(this.lembForm.value));
    localStorage.setItem("save", 'save')
  }

  cancelar(){
    localStorage.setItem("save", 'cancel')
    this.dialogRef.close();
  }

}
