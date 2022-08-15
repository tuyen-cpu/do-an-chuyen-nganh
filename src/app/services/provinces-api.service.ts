import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District, Province } from '../model/province.model';

@Injectable()
export class ProvincesApiService {
    private PROVINCE_API = 'https://provinces.open-api.vn/api';
    constructor(private http: HttpClient) {}
    getProvinces(): Observable<Province[]> {
        return this.http.get<Province[]>(`${this.PROVINCE_API}/p/`);
    }
    getDistricts(id: number): Observable<Province> {
        return this.http.get<Province>(`${this.PROVINCE_API}/p/${id}?depth=2`);
    }
    getCommunes(id: number): Observable<District> {
        return this.http.get<District>(`${this.PROVINCE_API}/d/${id}?depth=2`);
    }
}
