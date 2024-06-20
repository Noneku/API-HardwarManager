import { Component, OnInit, inject } from '@angular/core';
import {ServerService} from "../services/server.service";
import {Scheduler} from "rxjs";

@Component({
  selector: 'app-tab-states-servers',
  standalone: true,
  imports: [],
  templateUrl: './tab-states-servers.component.html',
  styleUrl: './tab-states-servers.component.css'
})
export class TabStatesServersComponent implements OnInit{
  private serverService = inject(ServerService);
  servers = this.serverService.servers;


  ngOnInit() {
    setInterval(() =>{
      this.serverService.getServers().subscribe();
    });
  }
}
