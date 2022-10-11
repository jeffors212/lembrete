import { Injectable } from '@angular/core';
import { initialize } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private $storage: Storage | null = null

  constructor(private storage: Storage){
    this.init();
  }

  async init(){
    const storage = await this.storage['create']()
    this.$storage = storage
  }
}

function getData(key: string): any {
  return JSON.parse(localStorage.getItem(key)!);
}

function setData(key: string, data: any){
  localStorage.setItem(key,JSON.stringify(data));
}



