let project_tab = document.getElementsByClassName('titles');
for(var i = 0; i < project_tab[0].childNodes.length; i++) {
  if(project_tab[0].childNodes[i].localName == "p") { 
     console.log(project_tab[0].childNodes[i].innerHTML);
  }
}
console.log(project_tab);

function requestURL(url, callback) {
  let request = new XMLHttpRequest(), 
  method = 'GET', 
  async = true;
  request.open(method, url, async);
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      callback.apply(request);
    }
  };
  request.send();
};

function project() {
  let url = 'assets/project.json';
  requestURL(url, function(){
    let data = JSON.parse(this.responseText);
    console.log(data);
  });
}
project();