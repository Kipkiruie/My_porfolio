// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDZ1gp36j9hzmeA1BpIleVDz_VR234haIw",
    authDomain: "personal-47737.firebaseapp.com",
    databaseURL: "https://personal-47737.firebaseio.com",
    projectId: "personal-47737",
    storageBucket: "personal-47737.appspot.com",
    messagingSenderId: "677912425520",
    appId: "1:677912425520:web:39390b1728647b7a9fa9f5",
    measurementId: "G-HPZX4LT1XF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference for form collection(3)
let formMessage = firebase.firestore().collection('messages');

//listen for submit event//(1)
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let description = document.querySelector('#description').value;

    //send message values
    sendMessage(name, email, subject, description);

    //Hide Alert Message After Seven Seconds(6)
    /*    setTimeout(function () {
            document.querySelector('.alert').style.display = 'none';
        }, 7000);*/

    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, subject, description) {
    formMessage.add({
        name: name,
        email: email,
        subject: subject,
        description: description,
    }).then(function (docRef) {
        //Show Alert Message(5)
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.alert').innerHTML = "<p style='color: #00E676'>Submitted Successfully!</p>Thank you <strong>" + name + "</strong> for " +
            "contacting me. Please quote <strong>" + docRef.id + "</strong> in future references";

    }).catch(function (error) {
        console.error("Error adding document: ", error);
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.alert').innerHTML = "<p style='color: red'>Error submitting the request</p> " +
            "Please try again <p>Error: " + error + "</p>"
    });
}
