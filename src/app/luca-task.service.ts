import { Injectable } from '@angular/core';

@Injectable()
export class LucaTaskService {
  lista: string[];

  constructor() {
    this.lista = [];
  }

  add(titulo: string): void {
    this.lista.push(titulo);
    this.saveLocal();
  }

  remove(id: number): void {
    this.lista.splice(id, 1);
    this.saveLocal();
  }

  getTask(): string[] {
    return JSON.parse(localStorage.getItem('tarefa'));
  }

  getQtTask(): number {
    return JSON.parse(localStorage.getItem('tarefa')).length;
  }

  saveLocal(): void {
    localStorage.setItem('tarefa', JSON.stringify(this.lista));
  }
}
