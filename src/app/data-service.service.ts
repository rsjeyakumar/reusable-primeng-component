import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl: string = "http://localhost:3000/sidebar"

  constructor(private http: HttpClient) { }

  getSidebar() {
    return this.http.get(this.apiUrl);
  }
}
