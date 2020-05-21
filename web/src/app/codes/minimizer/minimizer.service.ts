import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinimizerService {

  inputText: string;
  outputText$: BehaviorSubject<string>;

  constructor(private http: HttpService) {
    this.outputText$ = new BehaviorSubject<string>("");
  }

  setInputText(text: string) {
    this.inputText = text;
  }

  minimize() {
    this.http.get("/codes/minimizer", { text: this.inputText })
      .subscribe(data => {
        this.outputText$.next(data['result']);
      });
  }

}
