import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from './Constant';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  public Server = 'https://sjrb3ed89j.execute-api.ap-south-1.amazonaws.com/Prod/';
  public ApiUrl = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

  private users: string;
  private schools: string;
  private schoolUsers: string;
  constructor(public  http: HttpClient) {
  this.users = this.ServerWithApiUrl + 'users/';
  this.schools = this.ServerWithApiUrl + 'schools/';
  this.schoolUsers = this.ServerWithApiUrl + 'SchoolUsers/';

}

/*
user management
*/
public getAllUsers<T>(): Observable<T> {
    return this.http.get<T>(this.users);
}

public getSingleUser<T>(id: number): Observable<T> {
    return this.http.get<T>(this.users + id);
}

public addUser<T>(itemName: T): Observable<T> {
    const toAdd = JSON.stringify({ ItemName: itemName });

    return this.http.post<T>(this.users, itemName);
}

public updateUser<T>(id: number, itemToUpdate: T): Observable<T> {
    return this.http
        .put<T>(this.users + id, itemToUpdate);
}

public deleteUser<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.users + id);
}


/*
schools management
*/
public getAllSchools<T>(): Observable<T> {
  return this.http.get<T>(this.schools);
}

public getSingleSchool<T>(id: number): Observable<T> {
  return this.http.get<T>(this.schools + id);
}

public addSchool<T>(itemName: T): Observable<T> {
  const toAdd = JSON.stringify(itemName);

  return this.http.post<T>(this.schools, itemName);
}

public updateSchool<T>(id: number, itemToUpdate: T): Observable<T> {
  return this.http
      .put<T>(this.schools + id , itemToUpdate);
}

public deleteSchool<T>(id: number): Observable<T> {
  return this.http.delete<T>(this.schools + id);
}

/*
Assign user to schools
*/
public getAllUserSchools<T>(): Observable<T> {
  return this.http.get<T>(this.schoolUsers);
}

public getSingleUserSchool<T>(id: number): Observable<T> {
  return this.http.get<T>(this.schoolUsers + id);
}

public addUserSchool<T>(itemName: T): Observable<T> {
  const toAdd = JSON.stringify(itemName);

  return this.http.post<T>(this.schoolUsers, itemName);
}

public updateUserSchool<T>(id: number, itemToUpdate: T): Observable<T> {
  return this.http
      .put<T>(this.schoolUsers + id, itemToUpdate);
}

public deleteUserSchool<T>(id: number): Observable<T> {
  return this.http.delete<T>(this.schoolUsers + id);
}


}
@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (!req.headers.has('Content-Type')) {
          req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      }

      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      console.log(JSON.stringify(req.headers));
      return next.handle(req);
  }
}
