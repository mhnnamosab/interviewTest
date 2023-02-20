import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from 'src/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  /**
   * 
   * @returns fake json data for products
   */
  get(){
    return this.http.get<CategoryModel>('assets/fakeJsonData/InterviewExercise.json')
  }
}
