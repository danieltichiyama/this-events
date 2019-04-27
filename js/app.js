//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navi = navmenu.getElementsByClassName ('navi');

for (i=0;i<navi.length;i++){
	navi[i].addEventListener ('click',showMenu);
// 	console.log('I have '+ i +'elements being counted.');
}

function showMenu (){
	var child = this.querySelector('a.inner');
	if (child.style.display ==='block'){
		child.style.display = 'none';
	}else{
		child.style.display = 'block';
	}
}
// WHY does it take two clicks to show the inner menu when the if statement is set to none, but only one click when the if statement is set to block?

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameOf = main.getElementsByClassName ('name');

for (i=0;i<nameOf.length;i++){
	nameOf[i].addEventListener ('click', showSecretMenu);
}

function showSecretMenu (){
// 	console.log('SecretMenu'+this.innerHTML);
	var menu = this.querySelector ('p.menu');
	
	if (menu.style.display === 'initial'){
		menu.style.display = 'none';
	}else{
		menu.style.display = 'initial';
	}
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbs = document.getElementsByClassName ('thumb');

for (i=0;i<thumbs.length;i++){
	var divCount = document.createElement ('div');
divCount.className = 'counter';
divCount.innerHTML = 0;
divCount.style.display = 'inline';
	thumbs[i].appendChild (divCount);
}

var icons = document.getElementsByClassName ('far fa-thumbs-down');

for (i=0;i<icons.length;i++){
icons[i].addEventListener('click',addOne);
}	

function addOne (){	
	console.log ('test');
}








