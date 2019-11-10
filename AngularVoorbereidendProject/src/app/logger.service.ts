import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  logWarnings(warning: string){console.log(warning)};
  logErrors(error: string){console.log(error)};
}
