const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url,{
//     method: 'POST',
//     body: JSON.stringify({ //VA A CONETNER LOS DATOS QUE QUEREMOS ENVIARLE LOS DATOS
//         NAME: 'Chanchito feñiz',
//         website: 'google.com'
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8', //Le decirmos al servidor que es de tipo json
//       },
// })
//       .then(response => response.json())
//       .then(json => console.log(json))

      const fn1 = async () => {
        const response =  await fetch(url,{
            method: 'POST', //GET, PUT , DELETE, PATCH
            body: JSON.stringify({ //VA A CONETNER LOS DATOS QUE QUEREMOS ENVIARLE LOS DATOS
                NAME: 'Chanchito feLiz',
                website: 'google.com'
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8', //Le decirmos al servidor que es de tipo json
              },
        })
        
        const data = await response.json();
        console.log(data)
      }

      fn1();