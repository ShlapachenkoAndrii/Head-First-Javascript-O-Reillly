/*
Write JavaScript code to gain access to the orange image in the  HTML body code, first
using get ElementByld () , and then ustnq qetElementsByTagName( )

<body>
    <p>Before starting please choose an adventure stress level:</p>
    <img id="green" src="green.png" alt="Relaxing"><br/>
    <img id="blue" src="blue.png" alt="Irritatiing"><br/>
    <img id="yellow" src="yellow.png" alt="Frazzeled"><br/>
    <img id="orange" src="orange.png" alt="Panicked"><br/>
    <img id="red" src="red.png" alt="Maddening">
</body>
*/

document.getElementById("orange");
var allImages = document.getElementsByTagName("img");
var imageOrange = allImages[3];


