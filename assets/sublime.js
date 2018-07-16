let project_tab =   document.getElementsByClassName('titles')[0];
let url = 'assets/project.json';

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

function createClickFunction(i, data) {
  return project_tab.children[i].addEventListener('click', function() { 
    for(let j = 0; j < 3; j++) {
      if( document.querySelector(".titles").children[j].classList == 'active' ) {
        document.querySelector(".titles").children[j].classList.remove('active');
      }
    }
    
    document.querySelector(".titles").children[i].classList = 'active';

    document.getElementsByClassName('paragraph_green')[0].innerHTML = '"' + data.name + '"';
    document.getElementsByClassName('paragraph_green')[1].innerHTML = '"' + data.description + '"';
    document.getElementsByClassName('paragraph_green')[2].innerHTML = '"' + data.technolgoies + '"';
    document.getElementsByTagName('a')[4].setAttribute('href', data.link);
  });
}

requestURL(url, function(res){
  let data = JSON.parse(this.responseText);

  // Default 
  document.getElementsByClassName('paragraph_green')[0].append('"' + data[0].name + '"');
  document.getElementsByClassName('paragraph_green')[1].append('"' + data[0].description + '"' );
  document.getElementsByClassName('paragraph_green')[2].append('"' + data[0].technolgoies + '"');
  document.getElementsByTagName('a')[4].setAttribute('href', data[0].link);
  document.querySelector(".titles").children[0].classList = 'active';

  for(let i = 0; i < data.length; i++) {
    createClickFunction(i, data[i]);
  }
});