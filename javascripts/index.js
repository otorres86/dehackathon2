
var count = 1;

function placeFigure() {
	$("div#sticky" + count + " > img").toggleClass("hiding");
	count++;
	$("div#sticky" + count + " > img").toggleClass("hiding");
	popup();
	return count;
}

function weAreReady() {
	var bikeArray = JSON.stringify([]);
	localStorage.setItem("bikeArray", bikeArray);
	$("button#start").click(function () {
		count = placeFigure();
		if (count == 2) {
			$("button#start").html("Continue");
		}
		if (count == 25) {
			alert("here!");
			$('#myModal').modal('toggle');
			//window.location.replace("../views/ending.html");
		}
		console.log(count);
	});
	getData();
	
}

function popup()
{
	if (! window.focus)return true;
	var href='../views/itemInfoMessage.html';
	window.open(href, 'notes', 'width=650,height=700');


	return false;
}

function closePopUp(){
	window.close();
}
