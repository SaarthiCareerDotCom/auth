var firebase = require('firebase');

firebase.initializeApp({
  serviceAccount: "/home/hydro/nodejs/test-c76c30679638.json",
  databaseURL: "https://test-ab9cc.firebaseio.com/"
});

var ref = firebase.database().ref();
var namesRef = ref.child('detail') //here we are storing in detail
//var messagesRef = ref.child('');

var nameRef = namesRef.push();


//console.log(namesRef.push().key);
console.log(nameRef.key); //actual key that is in database

nameRef.update({
  name: 'xyyyyy',
  email: 'yy'
});
// //to delete the detail node
// ref.update({
//     detail: null
// });

ref.once('value')
  .then(function(snap){
      console.log(snap.key,"\n\n");
      console.log(snap.ref.toString(),"\n\n");
      console.log(snap.val(),"\n\n");
  });
