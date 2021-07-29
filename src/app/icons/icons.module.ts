import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ArrowDown, Linkedin, Info, Search } from 'angular-feather/icons';

const icons = {
  ArrowDown,
  Linkedin,
  Info,
  Search
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