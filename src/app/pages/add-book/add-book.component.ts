import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Book } from 'src/app/interfaces/book.interface';
import { BugbookService } from 'src/app/services/bugbook.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  Books$ = this.bugbookService.Books$;
  @ViewChild("title") title!: ElementRef;
  @ViewChild("content") content!: ElementRef;

  constructor(
    private bugbookService: BugbookService,
    private _bottomSheetRef: MatBottomSheetRef
  ) {  }

  saveBook() {
    const newBook: Book = {
      title: this.title.nativeElement.value,
      body: this.content.nativeElement.value
    }
    const updatedBooks: Book[] = this.Books$.value;
    updatedBooks.push(newBook)
    this.Books$.next(updatedBooks);
    this.bugbookService.CurrentBook$.next(newBook);
    this._bottomSheetRef.dismiss();
  }

  ngAfterViewInit() {

  }
}
