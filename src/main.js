import { DoctorService } from './doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var query = $("input#med-issue").val();

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorService(drName, medIssue);
      getElements(response);
    })();

    function getElements(response) {
     
      for(let i=0; i<response.data.length; i++) {
        console.log(response.data[i].profile.first_name, response.data[i].profile.last_name);
       
     
        $("div#display-response").show();          
        
        // response.data.forEach(function(response) {
        //   $("p.drName").prepend('<span>'(response.data[i].profile.first_name)`</span>`);
        // });

        // $("#display-response").append(`${response.data[i].profile.first_name}`);
        $("span.fName").append(`${response.data[i].profile.first_name} ${response.data[i].profile.last_name}<br>`);
        // $("span.lName").append(`<br>`);

       

        for(let index=0; index<response.data[i].practices.length; index++) {
          console.log(response.data[i].practices[index].visit_address.street);
          console.log(response.data[i].practices[index].visit_address.zip);
          console.log(response.data[i].practices[index].visit_address.city);
          console.log(response.data[i].practices[index].visit_address.state);
          console.log(response.data[i].practices[index].phones.number);

          $("span.street").text(response.data[i].practices[index].visit_address.street);
          $("span.city").text(response.data[i].practices[index].visit_address.city);
          $("span.state").text(response.data[i].practices[index].visit_address.state);
          $("span.zip").text(response.data[i].practices[index].visit_address.zip);
          $("span.phone").text(response.data[i].practices[index].phones.number);
          // $("span.website").text(response.data[i].practices[index].phones[index].number);
          

          if(response.data[i].practices[index].accepts_new_patients == true) {
           console.log("accepts new pts");
           $("p.newPt").text("Yes");
          }else{
             console.log("doesn't accept new pts");
             $("p.newPt").text("No");
           }   
        
          }

      }
    }
  });
});