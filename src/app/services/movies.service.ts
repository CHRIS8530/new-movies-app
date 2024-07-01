import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie, Movies } from '../models/movie';
import { map } from 'rxjs';
import { Videos } from '../models/video';
import { Credits } from '../models/credit';

export const imagesBaseUrl = 'https://image.tmdb.org/t/p/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.apiKEY;
  private httpClient = inject(HttpClient);
  constructor() { }
}
