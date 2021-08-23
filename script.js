let prod = document.querySelector(".product")
let url = "https://fakestoreapi.com/products"

let serv = new XMLHttpRequest
serv.open("GET", url)
serv.onload=()=>{
    if(serv.readyState === 4 && serv.status === 200){
        let inf = JSON.parse(serv.response)
        console.log(inf);
        inf.forEach(elem => {
            let cont = document.createElement("div")
            let dv = document.createElement("div")
            let txt = document.createElement("div")
            cont.setAttribute("class","card")
            txt.setAttribute("class","text")
            dv.setAttribute("class","img")
            dv.innerHTML=`<img src=${elem.image} /> `
            txt.innerHTML=`<h3>${elem.title}<h3/> <h2>${elem.price}$<h2/> <p>${elem.description}<p/>`
            prod.append(cont)
            cont.append(dv)
            cont.append(txt)
        });
    }
}
serv.send()