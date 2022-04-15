//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       
        //test
       //console.log(data)

       //document.querySelector('h2').innerText = data.name
       //console.log(data.subclasses)
       //document.querySelector('h3').innerText = data.subclasses[0].name
       //document.querySelector('h4').innerText = data.subclasses[1].name

       data.subclasses.forEach( obj => {
        console.log(obj.name)

        const li  = document.createElement('li')

        li.textContent = obj.name

        document.querySelector('ul').appendChild(li)

       })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

