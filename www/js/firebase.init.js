angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIpyJYAwcvdKTDNF-JSXNGn3ZRcYjWLMY",
    authDomain: "login-test-a46ec.firebaseapp.com",
    databaseURL: "https://login-test-a46ec.firebaseio.com",
    storageBucket: "login-test-a46ec.appspot.com",
  };
  firebase.initializeApp(config);
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)


})


/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/