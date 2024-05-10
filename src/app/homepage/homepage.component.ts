import { Component, HostBinding, Inject, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

import { RouterLink } from '@angular/router';
import { LogoComponent } from '../shared/logo/logo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterLink,
    LogoComponent,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  @HostBinding('class.main-content') readonly mainContentClass = true;
  @HostBinding('class.animations-disabled')
  readonly animationsDisabled: boolean;

  constructor(
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationsModule?: string
  ) {
    this.animationsDisabled = animationsModule === 'NoopAnimations';
    this.animationsDisabled = false;
  }
}
