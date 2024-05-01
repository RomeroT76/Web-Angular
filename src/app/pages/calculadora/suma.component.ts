import { Component } from '@angular/core';

@Component({
    selector: 'app-suma',
    standalone: true,
    templateUrl: './suma.component.html',
    styleUrl: './suma.component.scss',
    imports: []
})
export class SumaComponent {
    public keys: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
    public oKeys: string[] = ['+', '-', '*', '/']
    public lsTxt: string = ''
    public usTxt: string = '0'

    clickEvt(value: string): void {
        if (this.lsTxt === '' && this.oKeys.includes(value, 0)) {
            this.lsTxt = this.usTxt + value
        }
        else {
            this.lsTxt = this.lsTxt + value
        }
    }

    calculate(expresion: string): void {
        this.usTxt = eval(expresion);
        this.lsTxt = ''
    }

    deleteChar(): void {
        this.lsTxt = this.lsTxt.substring(0, this.lsTxt.length - 1)
    }

    clearDisplay(): void {
        this.lsTxt = ''
    }
}

