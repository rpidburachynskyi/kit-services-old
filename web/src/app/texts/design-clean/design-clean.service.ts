import { Injectable } from '@angular/core';
import { CleanType } from './clean-type.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DesignCleanService {

	cleanType: CleanType;
	textForClean: string;
	resultText$: BehaviorSubject<string>;

	constructor() {
		this.resultText$ = new BehaviorSubject<string>("");
	}

	setHTMLText(text: string) {
		this.textForClean = text;
		this.cleanType = CleanType.HTML;

		this.clean();
	}

	private clean() {
		switch (this.cleanType) {
			case CleanType.HTML: this.cleanHTML(); break;
		}
	}

	private cleanHTML() {
		let result = this.textForClean;

		result = this._cleanSpaces(result);
		result = this._setSpaces(result);

		console.log(result);
		this.resultText$.next(result);
	}

	private _cleanSpaces(text: string) {
        return text.replace(/\n+\s+/g, "");
    }

    private _setSpaces(text: string) {
        return this._setSpacesRecursive(text);
    }

    _setSpacesRecursive(text: string, level: number = 0) : string {
        if(text.indexOf(">") === -1 || text.lastIndexOf("<") === -1) 
            return this._formatSubstring(text, level);
        let temp = this._setSpacesRecursive(text.substring(text.indexOf(">") + 1, text.lastIndexOf("<")), level + 1);
        let result = text.slice(0, text.indexOf(">") + 1) + temp + text.slice(text.lastIndexOf("<"));
        result = this._formatSubstring(result, level);
        return result;
    }

    _formatSubstring(text: string, tabsCount: number) {
        let result = text;
        const fillTabs = (t: number) => { let r = ""; while (t--) r += '\t'; return r; }
        const insert = (t: string, i: number, s: string) => t.slice(0, i) + s + t.slice(i);
        
        result = insert(result, 0, `\n${fillTabs(tabsCount)}`);
        if(tabsCount !== 0)
        result = insert(result, result.length, `\n${fillTabs(tabsCount - 1)}`);
        
        return result;
    }
}
