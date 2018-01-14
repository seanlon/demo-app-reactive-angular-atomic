import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ILoader } from '../interface/iloader';
/** ApiService - Manage all api calls*/
@Injectable()
export class ApiService {
    public loader: ILoader = { isLoading: false };

    private baseUrlPath = 'http://localhost:3000';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    private bodyRequest = {};
    private bodyResponse = {};

    constructor(private http: Http) { }
    showLoader() {
        console.log('showloader started');
        this.loader.isLoading = true;
    }
    hideLoader() {
        this.loader.isLoading = false;
    }
    getBodyRequest(): any {
        return this.bodyRequest;
    }
    setBodyRequest(bodyRequest) {
        this.bodyRequest = bodyRequest;
    }
    getBodyResponse(): any {
        return this.bodyResponse;
    }
    setBodyResponse(bodyResponse) {
        this.bodyResponse = bodyResponse;
    }

    getBaseUrlPath(): any {
        return this.baseUrlPath;
    }
    setBaseUrlPath(baseUrlPath) {
        this.baseUrlPath = baseUrlPath;
    }
    getData(servicePath: string): Observable<any> {
        this.showLoader();
        return this.http.get(`${this.baseUrlPath}${servicePath}`)
            .map((data) => { this.hideLoader(); return data.json(); })
            .catch(this.handleError);
    }
    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        this.bodyResponse = error;
        return new Observable();
    }

    getDataBasedOnId(id: number): Observable<any> {
        const url = `${this.baseUrlPath}/${id}`;
        return this.http.get(url).map((data) => { this.hideLoader(); return data.json(); })
            .catch(this.handleError);
    }


    createData(requestObj: string): Observable<any> {
        return this.http
            .post(this.baseUrlPath, JSON.stringify(requestObj), { headers: this.headers })
            .map((data) => { this.hideLoader(); return data.json(); })
            .catch(this.handleError);
    }


    updateData(requestObj: any): Observable<any> {
        const url = `${this.baseUrlPath}/${requestObj.id}`;
        return this.http
            .put(url, JSON.stringify(requestObj), { headers: this.headers })
            .map((data) => { this.hideLoader(); return data.json(); })
            .catch(this.handleError);
    }

    deleteData(requestObj: any): Observable<void> {
        const url = `${this.baseUrlPath}/${requestObj.id}`;
        return this.http.delete(url, { headers: this.headers })
            .map((data) => { this.hideLoader(); return data.json(); })
            .catch(this.handleError);
    }



}
