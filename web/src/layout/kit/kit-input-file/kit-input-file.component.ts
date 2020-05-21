import { Component, OnInit, HostListener, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'kit-input-file',
  templateUrl: './kit-input-file.component.html',
  styleUrls: ['./kit-input-file.component.scss'],
  animations: [
    trigger("dragFiles", [
      state("hold", style({
        backgroundColor: "red"
      })),
      state("enter", style({
        backgroundColor: "blue"
      })),
      transition("hold => enter", animate("300ms")),
      transition("enter => hold", animate("300ms"))
    ])
  ]
})
export class KitInputFileComponent implements OnInit {

  @HostListener("click", ['$event']) onClick(event: Event) {
    if (event.isTrusted) {
      event.preventDefault();
      event.stopPropagation();
      this._input.nativeElement.click();
    }
  }

  @HostListener("drag", ['$event']) onDrag(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener("dragstart", ['$event']) onDragStart(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener("dragend", ['$event']) onDragEnd(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener("dragover", ['$event']) onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener("dragenter", ['$event']) onDragEnter(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.dragFilesState = "enter";
  }

  @HostListener("dragleave", ['$event']) onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.dragFilesState = "hold";
  }

  @HostListener("drop", ['$event']) onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (event instanceof DragEvent) {
      if (this.multiple) {
        const files = Array.from(event.dataTransfer.files);
        this.upload.emit(files);
      } else {
        const file = event.dataTransfer.files[0];
        this.upload.emit(file);
      }
    }
  }

  @ViewChild("input", { static: true }) _input: ElementRef<HTMLInputElement>;

  @Input("multiple") multiple: Boolean = false;

  @Output("upload") upload: EventEmitter<File | File[]> = new EventEmitter();

  dragFilesState: string = 'hold';

  constructor() { }

  ngOnInit() {
    this._input.nativeElement.addEventListener("change", (event: Event) => {
      const target = (event.target as HTMLInputElement);
      const files = Array.from(target.files);
      this.upload.emit(files);
    });
  }

}
