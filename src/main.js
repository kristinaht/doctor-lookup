import { DoctorService } from './doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let query = $("#query").val();
   


    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorService(query);
      getElements(response);
    })();

    function getElements(response) {
      $("div#display-response").show();  
      let output = "";
      let outputNewPts = "";
      for(let i=0; i<response.data.length; i++) {
        output += `<p>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p>`;

        $("div#display-response").html(output);

        for(let index=0; index<response.data[i].practices.length; index++) {

          outputNewPts = (response.data[i].practices[index].accepts_new_patients) ? `<p>Accepts new patients</p>` : `<p>Doesn't accept new patients.</p>`;
        
          output += `<p>${response.data[i].practices[index].visit_address.street}</p>${response.data[i].practices[index].visit_address.city} ${response.data[i].practices[index].visit_address.state} ${response.data[i].practices[index].visit_address.zip}</p><p>${outputNewPts}</p> `;
          $("div#display-response").html(output);
          $("span.phone").text(response.data[i].practices[index].phones.number);
        }
      }
    }
  });
});