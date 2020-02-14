export class DoctorServices {
  async getDoctorServices(medIssue, drName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=portland&user_key=API_KEY`);
      let jsonifiedResponse;
      if(response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    }
    catch (error) {
      return false;
    }
  }
}