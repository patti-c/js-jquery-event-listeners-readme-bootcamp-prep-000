//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on('load', function() {
<<<<<<< HEAD
    $('img').addClass('tasty');
    return;
=======
    addClass('tasty');
    return ;
>>>>>>> 91e02ce6ebef857c2595df50d644576148fb2931
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which === 71) {
      alert('You did the thing!');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

<<<<<<< HEAD

frameIt();

$(document).ready(function(){

getIt();
=======
$(document).ready(function(){

getIt();
frameIt();
>>>>>>> 91e02ce6ebef857c2595df50d644576148fb2931
pressIt();
submitIt()

});
