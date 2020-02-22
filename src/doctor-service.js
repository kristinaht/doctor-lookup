export class DoctorService {
  async getDoctorService(medIssue, drName) {
    console.log("hello");
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${drName}&query=${medIssue}&location=or-portland&skip=0&limit=100&user_key=${process.env.API_KEY}`);
      console.log(response);
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