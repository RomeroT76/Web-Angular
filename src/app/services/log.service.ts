import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public history: string[] = []
  constructor() { }

  addElement(element: string): void {
    this.history.push(element)
  }

  getHistory(): string[] {
    return this.history
  }
}
