refs={dayElement:document.querySelector(".day"),hourElemen:document.querySelector(".hour"),minutesElemen:document.querySelector(".minutes"),secondsElemen:document.querySelector(".seconds"),millisecondsElemen:document.querySelector(".milliseconds"),buttonStart:document.querySelector(".start"),buttonPause:document.querySelector(".pause"),buttonStop:document.querySelector(".stop"),buttonNew:document.querySelector(".new")},console.log(refs.buttonNew),refs.buttonStart.addEventListener("click",(function(){clearInterval(interval),interval=setInterval(startTimer,10)})),refs.buttonPause.addEventListener("click",(function(){clearInterval(interval)})),refs.buttonStop.addEventListener("click",(function(){clearInterval(interval),clearFields(),interval=setInterval(startTimer,10),disabledButton()})),refs.buttonNew.addEventListener("click",(function(){clearInterval(interval),counter+=1;var e=document.querySelector(".results"),n=document.createElement("div");n.classList.add(".results__info"),n.innerText="Result: ".concat(counter,": ").concat(day,": ").concat(hour,": ").concat(minutes,": ").concat(seconds,": ").concat(milliseconds),e.append(n),clearFields(),clearInterval(interval)}));var interval,day=0,hour=0,minutes=0,seconds=0,milliseconds=0,counter=0,disabled=!0;function startTimer(){milliseconds+=1}function setInterval(){milliseconds<9&&(refs.millisecondsElemen.innerText="0"+milliseconds),milliseconds>9&&(refs.millisecondsElemen.innerText=milliseconds),milliseconds>100&&(refs.secondsElemen.innerText="0"+seconds,milliseconds=0,refs.millisecondsElemen.innerText="0"+milliseconds),seconds<9&&(refs.secondsElemen.innerText="0"+seconds),seconds>9&&(refs.millisecondsElemen.innerText=seconds),seconds>59&&(minutes+=1,refs.minutesElemen.innerText="0"+minutes,seconds=0,refs.secondsElemen.innerText="0"+minutes),minutes<9&&(refs.secondsElemen.innerText="0"+minutes),minutes>9&&(refs.minutesElemen.innerText=seconds),minutes>59&&(hour+=1,refs.secondsElemen.innerText="0"+minutes,refs.minutesElemen.innerText="0"+seconds),hour<9&&(refs.minutesElemen.innerText="0"+hour),hour>9&&(refs.hourElemen.innerText=hour),hour>24&&(day+=1,refs.minutesElemen.innerText="0"+hour,refs.hourElemen.innerText="0"+minutes),refs.buttonNew.disabled=!1}function clearFields(){day=0,hour=0,minutes=0,seconds=0,milliseconds=0,refs.dayElement.textContent="00",refs.hourElemen.textContent="00",refs.minutesElemen.textContent="00",refs.secondsElemen.textContent="00",refs.millisecondsElemen.textContent="00"}function disabledButton(){disabled&&(refs.buttonNew.disabled=!0)}disabledButton();
//# sourceMappingURL=index.e7ca232d.js.map
