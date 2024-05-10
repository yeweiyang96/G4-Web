import { Component, HostBinding } from '@angular/core';
import { GenomeBrowseComponent } from '../../shared/genome-browse/genome-browse.component';
@Component({
  selector: 'app-gene',
  standalone: true,
  imports: [GenomeBrowseComponent],
  templateUrl: './gene.component.html',
  styleUrl: './gene.component.scss',
})
export class GeneComponent {
  @HostBinding('class.main-content') readonly mainContentClass = true;
}
