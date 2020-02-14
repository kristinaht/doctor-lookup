import { DoctorService } from './doctor-services';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var medIssue = $("input#med-issue").val();
    var drName = $("input#drName").val();

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorService(medIssue,drName);
      getElements();
    });

    // function getElements(response) {
    //   if(response)
    // }

  });
});