/*
$(function () {
    $("button").click(function () {
        $.get("recursoEjemplo.txt", function (data, status) {
            alert(`Contenido: ${data} \nEstado: ${status}`);
        })
    })
});


$(function () {
    $("button").click(function () {
        $.get("https://sinca.mma.gob.cl/index.php/json", function (data, status) {
            console.log(`Estado: ${status}`);
            console.log(data);
        })
    })
});


$(function () {
    $("button").click(function () {
        $.post("https://jsonplaceholder.typicode.com/posts", {
            "userId": 4,
            "id": 7,
            "title": "Esto es un Post realizado con jQuery",
            "body": "AJAX es muy util."
        }, function (data, status) {
            console.log(data);
            console.log(status);
        })
    })
});

fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data))

fetch('https://reqres.in/api/users/23')
    .then(res => res.json())
    .then(data => console.log(data))

    fetch('https://reqres.in/api/users/23')
 .then(res => {
 if (res.ok) {
 console.log('Éxito')
 return res.json()
 } else {
 console.log("Falló")
 }
 })
 .then(data => console.log(data))

 fetch('https://reqres.in/api/users')
 .then(res => {
 if (res.ok) {
 console.log('Éxito')
 return res.json()
 } else {
 console.log("Falló")
 }
 })
 .then(data => console.log(data))


fetch('https://reqres.in/api/users', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify({
 name: 'Usuario 1'
 })
}).then(res => {
 if (res.ok) {
 console.log('Éxito')
 return res.json()
 } else {
 console.log("Falló")
 }
}).then(data => console.log(data))

fetch('https://reqres.in/api/users/2', {
 method: 'DELETE',
}).then(res => {
 if (res.ok) {
 console.log('Éxito')
 console.log(res.status)
 } else {
 console.log("Falló")
 console.log(res.status)
 }
})


async function leerArchivo() {
    var x = await fetch('lorem.txt');
    var y = await x.text()
    console.log(y)
   }
   leerArchivo();
   */


   var url = 'https://api.jsonbin.io/b/6255efcadc6e0124e8bf948b/1';
fetch(url, {
 method: 'GET',
 headers:{
    'Content-Type': 'application/json',
    'secret-key':
   '$2b$10$ypwOtMIirE7y7Fie4Zjxtu.0ppg21IVp/PvXhoxrWhbq45Oyv2oom',
    }
   }).then(res => res.json())
   .catch(error => console.error('Error:', error))
   .then(response => console.log('Success:', response));
   