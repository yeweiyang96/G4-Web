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
import { createRoot, Root } from 'react-dom/client';
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
  public root!: Root;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.render();
  }

  ngAfterViewInit(): void {
    this.root = createRoot(this.containerRef.nativeElement);
    this.render();
  }
  ngOnDestroy(): void {
    this.root.unmount();
  }
  private render() {
    this.root.render(React.createElement(View));
  }
}
