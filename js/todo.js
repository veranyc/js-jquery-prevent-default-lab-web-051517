$(document).ready(function(){
  // call functions here
    submitForm()
});

// define functions here

function submitForm() {
  $('form').on('submit', function(event){
    let toDo = $('#item').val()
    $('ol').append('<li>' + toDo + '</li>')
    event.preventDefault()
  })
}
