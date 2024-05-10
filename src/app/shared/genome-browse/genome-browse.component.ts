import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import View from './genomeView';
const containerElementName = 'jbrowse_linear_genome_view';
@Component({
  selector: 'app-genome-browse',
  standalone: true,
  imports: [],
  templateUrl: './genome-browse.component.html',
  styleUrl: './genome-browse.component.scss',
})
export class GenomeBrowseComponent
  implements OnChanges, AfterViewInit, OnDestroy
{
  @ViewChild(containerElementName, { static: false })
  containerRef!: ElementRef;
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }
  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }
  private render() {
    ReactDOM.render(React.createElement(View), this.containerRef.nativeElement);
  }
}
