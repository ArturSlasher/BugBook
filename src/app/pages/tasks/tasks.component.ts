import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { BugbookService } from 'src/app/services/bugbook.service';
import { Book } from 'src/app/interfaces/book.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  mobileQuery: MediaQueryList;

  Books$ = this.bugbookService.Books$;
  CurrentBook$ = this.bugbookService.CurrentBook$;

  private _mobileQueryListener: () => void;

  constructor(
    private bugbookService: BugbookService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _bottomSheet: MatBottomSheet)
    {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  updateCurrentBook(book: Book) {
    this.bugbookService.CurrentBook$.next(book);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.Books$.value, event.previousIndex, event.currentIndex);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(AddBookComponent);
  }

}
