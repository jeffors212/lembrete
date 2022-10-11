import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-novo-lembrete',
  templateUrl: './dialog-novo-lembrete.component.html',
  styleUrls: ['./dialog-novo-lembrete.component.css']
})
export class DialogNovoLembreteComponent implements OnInit {
  public lembForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogNovoLembreteComponent >,
  ) { }

  ngOnInit(): any {
    this.lembForm = this.fb.group({
      lembPrior: ['',[Validators.required]], /*Recebe a prioridade do lembrete */
      lembTitle: ['',[Validators.required]], /*Recebe o título do lembrete */
      lembText: ['',[Validators.required]],  /*Recebe o texto do lembrete */
    });
  }

  criarLemb(){
    this.dialogRef.close();
    localStorage.setItem("lembrete", JSON.stringify(this.lembForm.value));
    localStorage.setItem("save", 'save')
  }
  cancelar(){
    localStorage.setItem("save", 'cancel')
    this.dialogRef.close();
  }

}
