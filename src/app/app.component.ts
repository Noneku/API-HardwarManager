
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TabStatesServersComponent} from "./tab-states-servers/tab-states-servers.component";
import {NavbarComponent} from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabStatesServersComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title : String = "HardwareManager";

}
