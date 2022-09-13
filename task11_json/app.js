const root = document.getElementById('root')

const URL = "https://jsonplaceholder.typicode.com/users"
const xhr = new XMLHttpRequest()
xhr.open("GET", URL)
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const resp = xhr.response
        const data = JSON.parse(resp)
        data.forEach(element => {
         console.log(data)
         let container = document.createElement('div')
         container.classList.add= "kontik";
         let baslig = document.createElement('h1')
         baslig.textContent = element.username;
         let p = document.createElement ('p')
         p.textContent = element.email;
         let p1 = document.createElement ('p')
         p1.textContent = element.website;
         let p2 = document.createElement ('p')
         p2.textContent = element.phone;
         container.append(baslig, p, p1, p2)
         root.append(container)
         console.log(root)
        })
    }
}