let name1 = document.getElementById('name')
let imgsrc = document.getElementById('imgsrc')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let deletebcard = document.getElementById('deletebcard')
let delBtn = document.getElementById('delBtn')

btn.addEventListener('click' , ()=> {
    fetch('https://66e7e6bfb17821a9d9da7097.mockapi.io/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:name1.value,
            image: imgsrc.value
        }     
        ),
      })
        .then(response => response.json())
        .then(data => {
            text.textContent = "Img Uploaded";
        })
})

let container = document.getElementById('container')

fetch('https://66e7e6bfb17821a9d9da7097.mockapi.io/image')
  .then(response => response.json())
  .then(data => {
       
    let logoName = data.map(a => a.name);
    let logoImg = data.map(a => a.image);
    logoName.forEach((element , index) => {
        let nameContainer = document.createElement('p')
        let imgContainer = document.createElement('img')
        let card = document.createElement('div')
        nameContainer.classList.add('nameContainer')
        imgContainer.classList.add('imgContainer')
        card.classList.add('card')
        nameContainer.textContent = logoName[index];
        imgContainer.setAttribute('src',logoImg[index] )

        container.appendChild(card)
        card.appendChild(nameContainer)
        card.appendChild(imgContainer)
    });
})
delBtn.addEventListener('click', () => {
    fetch(`https://66e7e6bfb17821a9d9da7097.mockapi.io/image/${deletebcard.value}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(() => {
               card.remove();
        });
});