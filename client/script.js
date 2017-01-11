'use strict';
var myButton = document.querySelector('button');
var myList = document.querySelector('ul');

function postData(mydata) {
  myList.innerHTML = '<li>Loading...</li>';
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/exam');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(mydata));
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var serverResponse = JSON.parse(xhr.response);
      if (serverResponse.status === 'ok') {
        renderStatus(serverResponse);
      } else if (serverResponse.status === 'error') {
        var myListItem = document.createElement('li');
        myList.innerHTML = '';
        myListItem.innerText = serverResponse.message;
        myList.append(myListItem);
      }
    }
  }
}

function allData() {
  var myFeedback = document.querySelector('textarea');
  var myScale = document.querySelector('.scale');
  var myEmail = document.querySelector('.email');
  var myData = {feedback: myFeedback.value, scale: myScale.value, email: myEmail.value}
  return myData;
}

function renderStatus(array) {
  myList.innerHTML = '';
  for (var i = 0; i < array.projects.length; i++) {
    var myListItem = document.createElement('li');
    myListItem.innerText = array.projects[i];
    myList.append(myListItem);
  }
}

myButton.addEventListener('click', function(){
  var datas = allData();
  postData(datas);
});
