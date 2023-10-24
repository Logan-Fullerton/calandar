var currentTime = dayjs().format('H')
const saveButtons= document.querySelectorAll('.saveBtn')
const textAreas= document.querySelectorAll('.description')
for (const saveBtn of saveButtons) {
   saveBtn.addEventListener('click',function(e) {
      let userInput=saveBtn.previousElementSibling.value
      let timeBlock=saveBtn.parentElement.id
      localStorage.setItem(timeBlock, userInput)
   })
}
for (const textarea of textAreas) {
   let timeBlock=textarea.parentElement.id
   if(localStorage.getItem(timeBlock)){
      textarea.textContent=localStorage.getItem(timeBlock)
   }
}
var rowElements = document.querySelectorAll(".row");

rowElements.forEach(function(rowElement) {
  var divId = rowElement.id;
  console.log(divId);
  
  
  var divElement = document.querySelectorAll(".row");
  
  var divId = rowElement.id;
  console.log(typeof currentTime , typeof divId)
  if (currentTime < divId) {
    divElement.classList.add("future");
  
  if(currentTime> divId.textContent)
   divElement.classList.add("past");
  
  else
   divElement.classList.add('present');
  }
});

