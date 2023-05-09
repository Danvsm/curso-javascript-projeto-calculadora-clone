class CalcController {
    constructor() {
        this._currentDante;
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initialize();
        
    }

    initialize() {
        

        
        this._dateEl.innerHTML = 'qqq'
        this._timeEl.innerHTML = "ss"
    }

   get displayCalc() {
        return this._displayCalc.innerHTML;
   }  

   set displayCalc(valor) {
        this._displayCalc.innerHTML = valor;
    
   }

   get currentDante() {
        return this._dataAtual;
   }

   set dataAtual(data) {
        this._dataAtual = data;
   }
}