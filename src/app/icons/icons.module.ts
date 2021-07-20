import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ArrowDown, Linkedin, Info } from 'angular-feather/icons';

const icons = {
  ArrowDown,
  Linkedin,
  Info,
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }