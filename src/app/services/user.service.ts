import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string ="http://localhost:3000/users";
  constructor(private http:HttpClient) {

   }

   getAllUSers()
  {
    console.log("service");
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserByID(id:number)
  {
    return this.http.get<User>(this.baseUrl+ "/"+id);
    
  }
  //POST-createNewUsers()
  createNewReview(user:User)
  {
    console.log("in service");
    return this.http.post(this.baseUrl, user);

  }
  //PUT 
  updateuserById(user:User)
  {
    return this.http.put(this.baseUrl+ "/" + user.id,user);

  }
  //DELETE
  deleteUserById(id:number)
  {
    return this.http.delete(this.baseUrl+ "/" +id);
  }
}
