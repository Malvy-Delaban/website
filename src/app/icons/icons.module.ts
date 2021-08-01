import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ArrowDown, Linkedin, Info, Search, Github } from 'angular-feather/icons';

const icons = {
  ArrowDown,
  Linkedin,
  Info,
  Search,
  Github
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