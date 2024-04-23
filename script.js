let root = document.getElementById('root')
let sp = document.getElementById('sp')
let btn = document.getElementById('btn')
let cartBox = document.querySelector('.cartBox')

async function getData() {
    let raw = await fetch('https://fakestoreapi.com/products')
    let data = raw.json()
    return data
}
getData()
    .then((data) => {


        console.log(data)

        function displayData() {    
            root.innerHTML = ''
            data.map((item) => {
                let x ='' 
                for(let i=1; i<= Math.round(item.rating.rate); i++){
                  x += '⭐'
                }  
                let card = document.createElement('div')
                card.classList.add('card1')
                card.innerHTML = ` <img src="${item.image}" alt="">
                <h2> ${item.title}</h2>
                <h3>Category:- ${item.category}</h3>
                <h2>Price:- ₹ ${Math.ceil(item.price) * 10} </h2>
                <h3>Rating:- ${item.rating.rate} (${x})</h3>
                <button onclick="addToCart(${item.id})">Add to Cart</button>`

                root.appendChild(card)
            })
        }

        window.alldata = ()=>{
            root.innerHTML = ''
            data.map((item) => {
                let x ='' 
                for(let i=1; i<= Math.round(item.rating.rate); i++){
                  x += '⭐'
                }  
                let card = document.createElement('div')
                card.classList.add('card1')
                card.innerHTML = ` <img src="${item.image}" alt="">
                <h2> ${item.title}</h2>
                <h3>Category:- ${item.category}</h3>
                <h2>Price:- ₹ ${Math.ceil(item.price) * 10} </h2>
                <h3>Rating:- ${item.rating.rate} (${x})</h3>
                <button onclick="addToCart(${item.id})">Add to Cart</button>`

                root.appendChild(card)
            })
        }

        window.mens = ()=>{
            let result = data.filter((item)=> item.category=="men's clothing") 
            root.innerHTML = ''
            result.map((item) => {
                let x ='' 
                for(let i=1; i<= Math.round(item.rating.rate); i++){
                  x += '⭐'
                }  
                let card = document.createElement('div')
                card.classList.add('card1')
                card.innerHTML = ` <img src="${item.image}" alt="">
                <h2> ${item.title}</h2>
                <h3>Category:- ${item.category}</h3>
                <h2>Price:- ₹ ${Math.ceil(item.price) * 10} </h2>
                <h3>Rating:- ${item.rating.rate} (${x})</h3>
                <button onclick="addToCart(${item.id})">Add to Cart</button>`

                root.appendChild(card)
            })
        }

        window.Womens = ()=>{
            let result = data.filter((item)=> item.category=="women's clothing") 
            root.innerHTML = ''
            result.map((item) => {
                let x ='' 
                for(let i=1; i<= Math.round(item.rating.rate); i++){
                  x += '⭐'
                }  
                let card = document.createElement('div')
                card.classList.add('card1')
                card.innerHTML = ` <img src="${item.image}" alt="">
                <h2> ${item.title}</h2>
                <h3>Category:- ${item.category}</h3>
                <h2>Price:- ₹ ${Math.ceil(item.price) * 10} </h2>
                <h3>Rating:- ${item.rating.rate} (${x})</h3>
                <button onclick="addToCart(${item.id})">Add to Cart</button>`

                root.appendChild(card)
            })
        }

        window.elecrtonic = ()=>{
            let result = data.filter((item)=> item.category=="electronics") 
            root.innerHTML = ''
            result.map((item) => {
                let x ='' 
                for(let i=1; i<= Math.round(item.rating.rate); i++){
                  x += '⭐'
                }  
                let card = document.createElement('div')
                card.classList.add('card1')
                card.innerHTML = ` <img src="${item.image}" alt="">
                <h2> ${item.title}</h2>
                <h3>Category:- ${item.category}</h3>
                <h2>Price:- ₹ ${Math.ceil(item.price) * 10} </h2>
                <h3>Rating:- ${item.rating.rate} (${x})</h3>
                <button onclick="addToCart(${item.id})">Add to Cart</button>`

                root.appendChild(card)
            })
        }
         
        window.jewelry = ()=>{
            let result = data.filter((item)=> item.category=="jewelery") 
            root.innerHTML = ''
            result.map((item) => {
                let x ='' 
                for(let i=1; i<= Math.round(item.rating.rate); i++){
                  x += '⭐'
                }  
                let card = document.createElement('div')
                card.classList.add('card1')
                card.innerHTML = ` <img src="${item.image}" alt="">
                <h2> ${item.title}</h2>
                <h3>Category:- ${item.category}</h3>
                <h2>Price:- ₹ ${Math.ceil(item.price) * 10} </h2>
                <h3>Rating:- ${item.rating.rate} (${x})</h3>
                <button onclick="addToCart(${item.id})">Add to Cart</button>`

                root.appendChild(card)
            })
        }

        
        window.addToCart= (pId) =>{
         let product = data.find((item)=> pId === item.id)
         if(product){
            let row = document.createElement('div')
            row.classList.add('row')
            row.innerHTML = `<div>
            <h3>${product.title}</h3>
            <h4>${Math.ceil(product.price)*10}</h4>
            </div>
            <button onclick="removetocart(${product.id})">Remove</button>`


            cartBox.prepend(row)

            let cartItem = JSON.parse(localStorage.getItem('cart')) || []
            cartItem.push(product)

           localStorage.setItem('cart', JSON.stringify(cartItem))

           sp.innerHTML = `${cartItem.length}`
           let final = cartItem.reduce((x, y)=> x += (Math.ceil(y.price)*10),0)
           let totalPrice =document.getElementById('tp') 
           totalPrice.innerHTML = `${final}`
         }
        }
        let cartItem = JSON.parse(localStorage.getItem('cart')) || []
        sp.innerHTML = `${cartItem.length}`


        function displayCart(){
            cartBox.innerHTML = ''
            cartItem.map((item, index)=>{
                let row = document.createElement('div')
                row.classList.add('row')
                row.innerHTML = `<div>
                <h3>${item.title}</h3>
            <h4>${Math.ceil(item.price)*10}</h4>
            </div>
            <button onclick="removetocart(${index})">Remove</button>`
                cartBox.prepend(row)
            })

            let displayPrice = document.createElement('div')
            displayPrice.classList.add('price')
            displayPrice.innerHTML =
            `<h3>Total Price :-</h3>
            <h4 id='tp'></h4>`
            cartBox.appendChild(displayPrice)

let finalPrice = cartItem.reduce((x,y)=> x +=(Math.ceil(y.price)*10), 0)
let totalPrice = document.getElementById('tp')
totalPrice.innerHTML = `${finalPrice}`
        }


        window.removetocart = (index)=>{
            let cartItem = JSON.parse(localStorage.getItem('cart'))
            cartItem.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cartItem))
            sp.innerHTML =`${cartItem.length}`

            cartBox.innerHTML = ''
            cartItem.map((item, index)=>{
                let row = document.createElement('div')
                row.classList.add('row')
                row.innerHTML = `<div>
                <h3>${item.title}</h3>
            <h4>${Math.ceil(item.price)*10}</h4>
            </div>
            <button onclick="removetocart(${index})">Remove</button>`
                cartBox.prepend(row)
            })

            let displayPrice = document.createElement('div')
            displayPrice.classList.add('price')
            displayPrice.innerHTML =
            `<h3>Total price:-</h3>
            <h4 id='tp'></h4>`
            cartBox.appendChild(displayPrice)

            let finalPrice = cartItem.reduce((x,y)=> x +=(Math.ceil(y.price)*10), 0)
            let totalPrice = document.getElementById('tp')
            totalPrice.innerHTML = `${finalPrice}`
        }
       
      
        
        
        displayData()
        displayCart()

let flag = 0
btn.addEventListener('click', ()=>{
    if(flag == 0){
        cartBox.classList.add('show')
        flag = 1
    }else{
        cartBox.classList.remove('show')
        flag =0
    }
})
       

    })
    .catch((err) => {
        console.log(err)
    })