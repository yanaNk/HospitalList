import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll.component';
const materialModules = [ScrollingModule];
@NgModule({
  declarations: [VirtualScrollComponent],
  imports: [CommonModule, ...materialModules],
  exports: [VirtualScrollComponent],
})
export class VirtualScrollModule {}
