import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';

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
    public operations: string[] = []
    public exp: string = ''


    constructor(private log: LogService) {

    }

    ngOnInit(): void {
        this.operations = this.log.getHistory()
    }

    clickEvt(value: string): void {
        if (this.lsTxt === '' && this.oKeys.includes(value, 0)) {
            this.lsTxt = this.usTxt + value
        }
        else {
            this.lsTxt = this.lsTxt + value
        }
    }

    calculate(expresion: string): void {
        try {
            this.usTxt = eval(expresion);
        } catch (error) {
            this.lsTxt = this.lsTxt.substring(1, this.lsTxt.length)
            this.usTxt = eval(this.lsTxt)
        }
        this.exp = this.lsTxt + ' ' + '=' + ' ' + this.usTxt
        this.log.addElement(this.exp)
        this.lsTxt = ''
    }

    deleteChar(): void {
        this.lsTxt = this.lsTxt.substring(0, this.lsTxt.length - 1)
    }

    clearDisplay(): void {
        this.lsTxt = ''
    }

    addOp(): void {
        this.log.addElement(this.exp)
    }
}

