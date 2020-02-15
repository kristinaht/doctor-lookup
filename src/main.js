// import { DoctorService } from './doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var medIssue = $("input#med-issue").val();
    var drName = $("input#dr-name").val();

    console.log(medIssue + " " + drName);

    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors/name=${drName}&location=or-portland&user_key=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $("p#doctors").text(response);
      console.log(response);
    };




    // (async () => {
    //   let doctorService = new DoctorService();
    //   console.log(medIssue);
    //   const response = await doctorService.getDoctorService(medIssue,drName);
      
    //   getElements();
     
    // });

    // function getElements(response) {
    //   if(response) {
    //     $("p#doctors").text(`${response}`);
    //   } else {
    //     $("p#doctors").text("No doctors for you.");
    //   }
    // }

   



  });
});