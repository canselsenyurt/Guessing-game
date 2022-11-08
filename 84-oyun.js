var gizliNumara = 15;

var kullaniciNumara = prompt("Bi sayi tahmin et");
var tahmin = Number(kullaniciNumara);

if (tahmin === gizliNumara) {
	alert("Evet gizli numarayi buldun. Gizli Numara "
		+gizliNumara +" idi" );
} else if ( tahmin > gizliNumara ){
	alert("Cok buyuk tahmin ettin. Birazcik daha dus.");
} else{
	alert("Cok kucuk tahmin ettin. Birazcik daha cik.");
}