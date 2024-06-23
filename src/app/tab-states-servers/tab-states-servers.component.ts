// @ts-ignore

import { Component, OnInit, inject } from '@angular/core';
import {ServerService} from "../services/server.service";
import {Scheduler} from "rxjs";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-tab-states-servers',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './tab-states-servers.component.html',
  styleUrl: './tab-states-servers.component.css'
})
export class TabStatesServersComponent implements OnInit{
  private serverService = inject(ServerService);
  servers = this.serverService.servers;


  ngOnInit() {
    setInterval(() =>{
      this.serverService.getServers().subscribe();
    }, 6000);
  }

  GetCpuClass(chargeCpu: number): string {
    if (chargeCpu > 60) {
      return 'bf-danger'; // Utilisez une classe Bootstrap pour le texte en rouge
    } else {
      return ''; // Retourne une chaîne vide pour ne pas appliquer de classe spécifique
    }
  }
}
