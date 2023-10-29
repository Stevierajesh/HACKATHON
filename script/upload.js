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
  //var ref = database.ref('/');


  export function createUpdateHook() {

    const ref = database.ref('/Chat')

    ref.on('value', function(snapshot){
        const data = snapshot.val();

        console.log("Update")

        //if (data.hasOwnProperty(getUniqueChatHisoryId(loginAccount, clientAccount))) {
        //  populateChatHistory(loginAccount, clientAccount);
        //}

      })
  }


  export function importUserData(userID) {
    const ref = database.ref('/Accounts/Users');
    
    return ref.once('value')
        .then(snapshot => {
        const data = snapshot.val();
        return data[userID];
        })
        .catch(error => {
            console.log(
                "There was an error when getting user Data: " + error
            );
            throw error;
        })
}

export function importChatData(chatID) {
    const ref = database.ref('/Chat');

    return ref.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data.hasOwnProperty(chatID)) {return false}
            return data[chatID]
        })
}

export function exportChatData(ID, chatID, msgSender, msgContent) {
    const ref = database.ref('/Chat');
    importChatData(chatID).then(data => {
        console.log({...{[Object.keys(data).length]: {sender: msgSender, content: msgContent}}, ...data})
        ref.child(chatID).set({...{[Object.keys(data).length]: {sender: msgSender, content: msgContent}}, ...data})
    })
    

    
}
/*
export function getUsername(userID) {
    const ref = database.ref('/Accounts/Users');
    
    return ref.once('value')
        .then(snapshot => {
        const data = snapshot.val();
        return data[userID].name;
        })
        .catch(error => {
            console.log(
                "There was an error when getting username: " + error
            );
            throw error;
        })
}

export function getPfp(userID) {
    const ref = database.ref('/Accounts/Users');
    
    return ref.once('value')
        .then(snapshot => {
        const data = snapshot.val();
        return data[userID].pfp;
        })
        .catch(error => {
            console.log(
                "There was an error when getting profile picture: " + error
            );
            throw error;
        })
}

export function getClearance(userID) {
    const ref = database.ref('/Accounts/Users');
    
    return ref.once('value')
        .then(snapshot => {
        const data = snapshot.val();
        return data[userID].clearance;
        })
        .catch(error => {
            console.log(
                "There was an error when getting security clearance: " + error
            );
            throw error;
        })
}

function pushOrder(userID) {

    var dataRef = database.ref('/Accounts/Users')

    // dataRef.child("/").set({"Test":})//this is where you would upload the thing to databse. 
}


function getValues(){
    
}


var ref = database.ref('/')
export function testPush() {
    
    ref.child("Test").set({Name:"Jerry", Bitches:0})//this is where you would upload the thing to databse. 
    console.log("lol")
}
*/