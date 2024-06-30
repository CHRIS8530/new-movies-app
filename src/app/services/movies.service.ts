import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie, Movies } from '../models/movie';
import { map } from 'rxjs';
import { Videos } from '../models/video';
import { Credits } from '../models/credit';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
}
