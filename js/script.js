let list=document.querySelector('ul');
let request = new XMLHttpRequest();
request.open('GET', "https://yogesh0011.github.io/assignment3/json/deals.json");
request.responseType='json';
request.send();

request.onload = function() {
  let data = request.response;
  loadDeals(data);
}

function loadDeals(obj) {
	
  let data = obj['data']
  
  for (let i = 0; i < data.length; i++) {
	  
    let item = document.createElement('li');
    let title = document.createElement('h2');
    let price = document.createElement('h3');
    let image = document.createElement('img');
    let description = document.createElement('p');
    let features = document.createElement('p');
    
	image.setAttribute('src', 'https://yogesh0011.github.io/assignment3/images/' + data[i].image);
	image.setAttribute('width', '100px');
	image.setAttribute('height', '100px');
    title.textContent = data[i].name;
	price.textContent = data[i].price;
	description.textContent = data[i].description;
	features.textContent = 'Features :- ' + data[i].features;
         
    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(price);
    item.appendChild(description);
    item.appendChild(features);
	
    list.appendChild(item); 
     
  }

}