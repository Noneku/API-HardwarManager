import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, interval, Observable, tap} from 'rxjs';
import { Server } from "../model/ServerModel";

@Injectable({
  providedIn: 'root',
})
export class ServerService {

  private http = inject(HttpClient);
  servers = signal<Server[]>([])
  readonly url = 'http://localhost:8080/api/serveurs';


  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.url).pipe(
      tap(servers => this.servers.set(servers))
    );
  }
}
