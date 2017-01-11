'use strict';
var myButton = document.querySelector('button');
var myList = document.querySelector('ul');


function postData(mydata) {
  myButton.innerText = 'Loading'
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/exam');
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(mydata));
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var serverResponse = JSON.parse(xhr.response);
      if (serverResponse.status == 'ok') {
        renderStatus(serverResponse);
      } else if (serverResponse.status == 'error') {
        var myListItem = document.createElement('li');
        myList.innerHTML = '';
        myListItem.innerText = serverResponse.message;
        myList.append(myListItem);
      }
      myButton.innerText = 'Send';
    }
  }
}

function allData() {
  var myFeedback = document.querySelector('textarea');
  var myScale = document.querySelector('.scale');
  var myEmail = document.querySelector('.email');
  //console.log(myFeedback, myScale, myEmail);
  var myData = {feedback: myFeedback.value, scale: myScale.value, email: myEmail.value}
  return myData;
}

function renderStatus(array) {
  myList.innerHTML = '';
  console.log(myList);
  for(var i = 0; i < array.projects.length; i++) {
    var myListItem = document.createElement('li');
      myListItem.innerText = array.projects[i];
      console.log(myListItem);
      myList.append(myListItem);
  }
  console.log(myList);
}


myButton.addEventListener('click', function(){
  var datas = allData();
  postData(datas);
});

//allData();
