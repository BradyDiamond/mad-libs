$(document).ready(function() {
   $("#formOne").submit(function(event) {
      event.preventDefault();
      const person1Input = $("input#person1").val();
      const person2Input = $("input#person2").val();
      const animalInput= $("input#animal").val();
      const exclamationInput = $("input#exclamation").val();
      const verbInput = $("input#verb").val();
      const nounInput = $("input#noun").val();
      
      let array1 = []
      array1.push(person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput)
      array1.forEach(function(element) {
      $(".person1").text(array1[0]);
      $(".person2").text(array1[1]);
      $(".animal").text(array1[2]);
      $(".exclamation").text(array1[3]);
      $(".verb").text(array1[4]);
      $(".noun").text(array1[5]);
    });

      $("#story").show();
    });
    $("#formTwo").submit(function(event) {
      event.preventDefault();
      const myNameInput = $("input#myName").val();
 
      $(".myName").text(myNameInput);

      $("#letter").show();
    });
  });