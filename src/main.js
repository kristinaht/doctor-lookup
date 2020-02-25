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
      let outputWebsite = "";

      if(response.meta.count <1){
        $("div#display-response").html(`<p>OOops! No doctors for you.</p>`);
      }else {
        for(let i=0; i<response.data.length; i++) {
          for(let index=0; index<response.data[i].practices.length; index++) {

            outputNewPts = (response.data[i].practices[index].accepts_new_patients) ? `<p>Accepts new patients</p>` : `<p>Doesn't accept new patients.</p>`;

            outputWebsite = (response.data[i].practices[0].website) ? `<p>${response.data[i].practices[0].website}</p>` : `<p>No website, please call the clinic.</p>`; 
          
            output += `<div class="box"><p>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p><p>${response.data[i].practices[index].visit_address.street}</p>${response.data[i].practices[index].visit_address.city} ${response.data[i].practices[index].visit_address.state} ${response.data[i].practices[index].visit_address.zip}</p><p>${response.data[i].practices[index].phones[0].number}</p><p>${outputNewPts}</p><p>${outputWebsite}</p></div>`;
            $("div#display-response").html(output);
          }
        }
      }
    }
  });
});