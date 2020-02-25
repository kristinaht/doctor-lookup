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
        for(let i=0; i<response.data.length; i++) {
        output += `<p>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p>`;
        $("div#display-response").html(output);

        
       
      
         
        // $("span.fName").text(response.data[i].profile.first_name);
        // $("span.lName").text(response.data[i].profile.last_name);

        for(let index=0; index<response.data[i].practices.length; index++) {
          console.log(response.data[i].practices[index].visit_address.street);
          console.log(response.data[i].practices[index].visit_address.zip);
          console.log(response.data[i].practices[index].visit_address.city);
          console.log(response.data[i].practices[index].visit_address.state);
        

          $("span.street").text(response.data[i].practices[index].visit_address.street);
          $("span.city").text(response.data[i].practices[index].visit_address.city);
          $("span.state").text(response.data[i].practices[index].visit_address.state);
          $("span.zip").text(response.data[i].practices[index].visit_address.zip);
          $("span.phone").text(response.data[i].practices[index].phones.number);
          
          

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