import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album.interface';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(private readonly http: HttpClient) {}

  get$(): Observable<Album[]> {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
}
