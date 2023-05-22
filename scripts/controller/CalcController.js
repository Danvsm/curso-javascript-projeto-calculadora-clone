class CalcController {

    constructor() {

        this._locale = 'pt-BR'  
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents()
    }

    initialize() {
          this.setDisplayDateTime();
          
          setInterval( () => {
               this.setDisplayDateTime()
          }, 1)     

    }

    addEventListenerAll(element, events, fn) {
          events.split(' ').forEach(event => {
               element.addEventListener(event, fn)
          })

    }

    
    initButtonsEvents(){
     let buttons = document.querySelectorAll("#buttons > g, #parts > g")

     buttons.forEach((btn, index) => {
          this.addEventListenerAll(btn, 'click drag mouseover', e => {
              
               console.log(btn.className.baseVal.replace("btn-",""))
              
          });
          
          this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
               btn.style.cursor = "pointer"
          });
     });
}

     setDisplayDateTime() {
          this.displayDate = this.currentDante.toLocaleDateString(this._locale, {
             day: "2-digit",
             month: "short",
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