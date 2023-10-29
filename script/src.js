const firebaseConfig = {
  apiKey: "AIzaSyDDlO4a5nSE9sDFy1t4Z31u8BdmeYQ2b18",
  authDomain: "csproj1-b4de7.firebaseapp.com",
  databaseURL: "https://csproj1-b4de7-default-rtdb.firebaseio.com",
  projectId: "csproj1-b4de7",
  storageBucket: "csproj1-b4de7.appspot.com",
  messagingSenderId: "445466382978",
  appId: "1:445466382978:web:7522acdcf12fd399cc9a9b",
  measurementId: "G-6KKC3XYB4T"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref('/Orders/Volume');

function getMedicationStock(data) {
console.log(data)
data.foreach
//The total amount that we have - the total amount approved for investors
// {Medication1: amount}


return medications; //This will be a json containing the names, and the amounts
}

ref.on('value', function(snapshot) {
  const data = snapshot.val();

  stock = getMedicationStock(data);
  console.log(stock);
})



ref.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var data = childSnapshot.val();
    console.log(data["Johnson"])
    // console.log(data[0].lol)
    console.log(data.Johnson)
  });
});
console.log(medication1);
console.log(medication2);
console.log(medication3);
