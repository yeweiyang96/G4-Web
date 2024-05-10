import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-genome-browse',
  standalone: true,
  imports: [],
  templateUrl: './genome-browse.component.html',
  styleUrl: './genome-browse.component.scss',
})
export class GenomeBrowseComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log('GenomeBrowseComponent initialized');
  }
}
