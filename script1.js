var button=document.getElementById('enter');
var input=document.getElementById('userInput');
var ul=document.querySelector("ul");
function CheckLength() {
return input.value.length;
}
function todoList() {
  var li=document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value="";

}
function AddListAfterClick() {
  if (CheckLength()>0) {
  todoList();
}
}
function AddListAfterEnter(event) {
  if (CheckLength() >0 && event.keyCode===13) {
  todoList();
  }
}
button.addEventListener("click", AddListAfterClick);


input.addEventListener("keypress", AddListAfterEnter);
