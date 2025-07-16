import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forumPost } from './app';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Adjust the import path as necessary


@Injectable({
  providedIn: 'root'
})
export class ForumsService {


  private readonly apiUrl = environment.api; // Use the API URL from environment configuration
  private http = inject(HttpClient);
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  //constructor() { }

  getForums(): Observable<forumPost[]> { //.pipe(map((raw) => raw.data)) from rxjs/operators
    return this.http.get<forumPost[]>(`${this.apiUrl}`, {
      headers: this.jsonHeaders
    }).pipe(
      map((raw) => raw.reverse()) // Assuming the API returns an array of forum posts directly
    );
  }

  addForum(forum: forumPost): Observable<forumPost> {
    return this.http.post<forumPost>(`${this.apiUrl}`, forum, {
      headers: this.jsonHeaders
    });
  }

  updateForum(forum: forumPost): Observable<forumPost> {
    return this.http.put<forumPost>(`${this.apiUrl}/${forum.id}`, forum, {
      headers: this.jsonHeaders
    });
  }

}
