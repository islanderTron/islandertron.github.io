let proj_name = document.getElementsByClassName('tab_space')[0].childNodes[3].innerHTML,
project_desc =  document.getElementsByClassName('tab_space paragraph')[0].childNodes[1].innerHTML,
proj_tech =     document.getElementsByClassName('tab_space console')[0].childNodes[5].innerHTML,
proj_link =     document.getElementsByTagName('a')[0].href,
project_tab =   document.getElementsByClassName('titles')[0], 
default_id =    0;
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

let url = 'assets/project.json';
requestURL(url, function(){
  let data = JSON.parse(this.responseText);
  
  console.log(data);
  
  // Default 
  proj_name =     data[0].name;
  project_desc =  data[0].description;
  proj_tech =     data[0].technolgoies;
  proj_link =     data[0].link;

  for(var i = 0; i < data.length; i++) {
    console.log(data[i]);
    project_tab.children[i].addEventListener('click', function(event){
      console.log(event);
    });
  } 

  // for(var i = 0; i < project_tab.children.length; i++) {
  //   project_tab.children[i].addEventListener('click', function(event){
  //     console.log(data[i]);
  //     // proj_name =     data[i].name;
  //     // project_desc =  data[i].description;
  //     // proj_tech =     data[i].technolgoies;
  //     // proj_link =     data[i].link;
  //   });
  // }
});