const root = document.getElementById('root')
const URL = "https://jsonplaceholder.typicode.com/todos"
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
            container.classList.add = "kontik";
            let baslig = document.createElement('h1')
            baslig.textContent = element.id;
            let p = document.createElement('p')
            p.textContent = element.title;
            let p1 = document.createElement('p')
            p1.textContent = element.completed;
            container.append(baslig, p, p1,)
            root.append(container)
            console.log(root)

            if(element.completed == true){
                p1.className = "true";
            }
            else{
                p1.className = "false";
            }
        })
    }
} 