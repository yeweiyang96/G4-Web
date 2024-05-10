import { Component, HostBinding } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-genome',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './genome.component.html',
  styleUrl: './genome.component.scss',
})
export class GenomeComponent {
  @HostBinding('class.main-content') readonly mainContentClass = true;
}
