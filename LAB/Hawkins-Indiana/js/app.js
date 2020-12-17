console.log('stanger things are coming!');
$(() => {
const addH2 = () => {
	let $h2 = $('<h2>').text("Just getting started");
	$('body').append($h2);
}
addH2();
});




const generateSquares = (numberOfSquares)=> {
  for (let i=1; i <= numberOfSquares; i++){
	console.log(i);
	const $square = $('<div>').addClass('square');
	$square.css('background-color', randColorRGB());
	$('body').append($square);
	$square.attr('id', 'square' + i);
  }
}

 
$(()=>{
	generateSquares(1000);
});

const randColorRGB = () => {
	const red = Math.floor( Math.random() * 256 );
	const green = Math.floor( Math.random() * 256 );
	const blue = Math.floor( Math.random() * 256 );	
	return "rgb(" + red + "," + green + "," + blue + ")";
}

console.log(randColorRGB());

