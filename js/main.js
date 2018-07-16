document.addEventListener("DOMContentLoaded", function(event) {

var signInButton = document.querySelector('.signin');
var modal = document.querySelector('.modal');
var button = document.querySelector('.close');
var submitButton =  document.querySelector('.submit');
var inputUsername =  document.querySelector('#user');
var inputUserPass = document.querySelector('#pass');


signInButton.addEventListener('click', function(e) {
  modal.style.display = 'block';
});

button.addEventListener('click', function(e){
  modal.style.display = 'none';
  e.stopPropagation();

});

submitButton.addEventListener('click', function(e) {
  inputUsername.classList.add('error');
  inputUserPass.classList.add('error');
  e.stopPropagation();

});

inputUsername.addEventListener('focus', function(e){
inputUsername.classList.remove("error");
});

inputUserPass.addEventListener('focus', function(e){
inputUserPass.classList.remove("error");
});

modal.addEventListener('click', function(event) {
  modal.style.display = "none";

});

modal.childNodes.forEach(function(child) {
  child.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  });


});
