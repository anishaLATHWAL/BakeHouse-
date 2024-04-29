import { Component } from '@angular/core';
import { SharedService } from '../../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caro',
  standalone: true,
  imports: [],
  templateUrl: './caro.component.html',
  styleUrl: './caro.component.css',
})
export class CaroComponent {
  activePanel: string;
  panels = ['a', 'b', 'c', 'd', 'e'];
  currentIndex = 0;

  constructor(private sharedService: SharedService, private router: Router) {
    this.activePanel = this.panels[this.currentIndex];
  }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.panels.length) {
        this.currentIndex = 0;
      }
      this.activePanel = this.panels[this.currentIndex];
    }, 3000);
  }

  onLinkClick(data: any) {
    this.sharedService.changeData(data);
    this.router.navigate(['/product']);
  }

  setActive(panel: string) {
    this.activePanel = panel;
    this.currentIndex = this.panels.indexOf(panel);
  }
}