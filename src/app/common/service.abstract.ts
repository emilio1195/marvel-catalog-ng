import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {SearchModel} from "../models/search.model";

export abstract class ServiceAbstract<T> {

  searchObj!: SearchModel;

  constructor(protected url: string,
              protected httpClient: HttpClient) {
    this.initValues();
  }

  abstract buildSearch(): void;

  initValues(){
    this.buildSearch();
  }

  getListData(){
    let params = new HttpParams();
    params = this.paramControl(params, this.searchObj);

    return this.httpClient.get(this.url, {observe: 'response', params})
      .pipe(
        map(respnse => {
          return respnse.body;
          }
        ),
        catchError(this.handleError)
      );
  }

  protected paramControl(params: HttpParams, search: any){
    for(const field in search){
      if (search[field] !== null && search[field] !== undefined && search[field] !== '') {
        params = params.set(field, search[field])
      }
    }
    return params;
  }

  protected handleError(error: HttpErrorResponse): Observable<any> {
    console.error(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => error.status);
  }
}

