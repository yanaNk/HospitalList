import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { filter, map, pairwise, throttleTime } from 'rxjs/operators';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;
  @Input()
  items: any[] | [] = [];
  @Input()
  allItemsIds: string[] | [] = [];
  @Input()
  currentItemsIds!: string[] | [];
  @Input()
  scrolledItemTemplate!: TemplateRef<any>;
  @Input()
  itemSize!: number | 20;
  @Input() isLoading: boolean | undefined;
  @Output() scrolledToEnd = new EventEmitter<number>();
  private subsink: SubSink;
  constructor() {
    this.subsink = new SubSink();
  }
  ngAfterViewInit(): void {
    this.getNextBatchFromScroll();
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
  getNextBatchFromScroll() {
    this.subsink.sink = this.viewport
      .elementScrolled()
      .pipe(
        filter(() => !this.isLoading),
        filter(
          () =>
            this.currentItemsIds.length > 0 &&
            !(this.currentItemsIds?.length >= this.allItemsIds.length)
        ),
        throttleTime(200),
        map(() => this.viewport.measureScrollOffset('bottom')),
        pairwise(),
        filter(
          ([firstOffset, secondOffset]) =>
            secondOffset < firstOffset && secondOffset <= this.itemSize * 2
        )
      )
      .subscribe(() => {
        this.scrolledToEnd.emit(this.currentItemsIds?.length);
      });
  }
}
