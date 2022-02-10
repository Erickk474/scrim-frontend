import { AppConstantsService } from '../constants/constants.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserPayload {
  username: string;
  email: string;
  password: string;
}

export interface UserUpdatePayload {
  username?: string;
  email?: string;
  password?: string;
}

export interface UserAuth {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public apiUrl: string = this.AppConstantsService.getApiUrl() + '/users';

  constructor(
    private AppConstantsService: AppConstantsService,
    private http: HttpClient
  ) {}

  public get() {
    return this.http.get(this.apiUrl);
  }

  public create(body: UserPayload) {
    return this.http.post(this.apiUrl, body);
  }

  public update(id: string, body: UserUpdatePayload) {
    return this.http.put(`${this.apiUrl}/${id}`, body);
  }

  public auth(body: UserAuth) {
    return this.http.post(this.apiUrl + '/auth', body);
  }
}
