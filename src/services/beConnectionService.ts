import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class BeConnectionService {


  constructor(private httpService: HttpService) {

  }

  async getAllAnimals() {
    return this.httpService.get('http://localhost:3000/animal/types').pipe(map(response => response.data)).toPromise();
  }

  async getAllServices() {
    return this.httpService.get('http://localhost:3000/service/types').pipe(map(response => response.data)).toPromise();
  }

  async getAllOffers() {
    return this.httpService.get('http://localhost:3000/offer').pipe(map(response => response.data)).toPromise();
  }

  async getAllSearches() {
    return this.httpService.get('http://localhost:3000/search').pipe(map(response => response.data)).toPromise();
  }

  async registerUser(data: any) {
    const response = await this.httpService.post('http://localhost:3000/auth/register', data).pipe(map(response => response.data)).toPromise();

    console.log(response);

    return response;
  }

  async addUserPicture(id: any, data: any) {
    console.log(data);
    const response = await this.httpService.post('http://localhost:3000/profile/' + id + '/upload', data).pipe(map(response => response.data)).toPromise();

    console.log(response);

    return response;
  }

  async getUserPicture(id : any){
    const response = await this.httpService.get('http://localhost:3000/profile/' + id + '/image').pipe(map(response => response.data)).toPromise();

    return response;
  }

  async addAnimalPicture(id: any, data: any) {
    console.log(data);
    const response = await this.httpService.post('http://localhost:3000/animal/' + id + '/upload', data).pipe(map(response => response.data)).toPromise();

    console.log(response);

    return response;
  }

  async getAnimalPicture(id : any){
    const response = await this.httpService.get('http://localhost:3000/animal/' + id + '/image').pipe(map(response => response.data)).toPromise();

    return response;
  }

  async loginUser(data: any) {
    const response = await this.httpService.post('http://localhost:3000/auth/login', data).pipe(map(response => response.data)).toPromise();

    return response;
  }

  async addOffer(data: any) {
    const response = await this.httpService.post('http://localhost:3000/offer', data).pipe(map(response => response.data)).toPromise();

    return response;
  }

  async addSearch(data: any) {
    const response = await this.httpService.post('http://localhost:3000/search', data).pipe(map(response => response.data)).toPromise();

    return response;
  }

  async addAnimal(data: any) {
    const response = await this.httpService.post('http://localhost:3000/animal', data).pipe(map(response => response.data)).toPromise();

    return response;
  }

  async getAnimal(data: any) {
    const response = await this.httpService.post('http://localhost:3000/animal', data).pipe(map(response => response.data)).toPromise();

    return response;
  }

  async getUserData(id: any) {
    const response = await this.httpService.get('http://localhost:3000/profile/' + id).pipe(map(response => response.data)).toPromise();

    return response;
  }

  async getAnimalsForUser(id: any) {
    const response = await this.httpService.get('http://localhost:3000/animal/user/' + id).pipe(map(response => response.data)).toPromise();

    console.log(response);

    return response;
  }
}
