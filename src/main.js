import { DoctorService } from './doctor-service.js';
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

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorService(drName, medIssue);
      getElements(response);
    })();

    function getElements(response) {
      for(let i=0; i<response.data.length; i++) {
        console.log(response.data[i].profile.first_name);
      }
    }

  });
});