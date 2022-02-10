import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConstantsService {
  private apiUrl: string = 'http://localhost:3000';

  constructor() {}

  public getApiUrl() {
    return this.apiUrl;
  }
}
