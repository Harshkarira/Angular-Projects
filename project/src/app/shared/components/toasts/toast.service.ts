import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts:any = []

  // {
  //   textOrTpl:'Message to be shown' 
  //   classname:'red'
  //   name:'asda'
  // }


  constructor() { }
  show(toast:any){
    this.toasts.push(toast)
  }
  



}
