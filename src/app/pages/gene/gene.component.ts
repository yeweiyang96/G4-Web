import { ParsedLocString } from '@jbrowse/core/util';
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
  public config = 'assembly';
  public location!: ParsedLocString;
  onClick(name: string) {
    this.config = name;
  }
  navTo() {
    this.location = {
      refName: 'chr10',
      start: 94762681,
      end: 94855547,
      assemblyName: 'hg38',
      reversed: false,
    };
  }
}
