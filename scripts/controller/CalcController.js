class CalcController {

    constructor() {

        this._locale = 'pt-BR'  
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        
    }

    initialize() {
          this.setDisplayDateTime() 
          setInterval(() =>{
               setDisplayDateTime()   
          }, 1000);

    }

     setDisplayDateTime() {
          this.displayDate = this.currentDante.toLocaleDateString(this._locale, {
             day: "2-digit",
             month: "long",
             year: "numeric"

          });
          this.displayTime = this.currentDante.toLocaleTimeString(this._locale);

     }

     get displayTime() {
          this._timeEl.innerHTML

     }

     set displayTime(value) {
          this._timeEl.innerHTML = value;

     }

     get displayDate() {
          this._dateEl.innerHTML;
     }
   
     set displayDate(value) {
          this._dateEl.innerHTML = value;
     }

     get displayCalc() {
          return this._displayCalcEl.innerHTML;
     }  

     set displayCalc(value) {
          this._displayCalcEl.innerHTML = value;
    
     }


     get currentDante() {
          return new Date();

     }

}