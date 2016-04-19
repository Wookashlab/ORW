var result = [];

function update() {

    postMessage({
	   result: result
	}
    );
}
onmessage = function(event) {
	var liczba1 = event.data[0];
	var	liczba2 = event.data[0];
	result[0] = 1;
	result[1] = liczba1;
	for (var i = 2; i <= event.data[1]; i++) {
			liczba1=liczba1*liczba2;
			result[i] = liczba1;
			
		}
		update();
};