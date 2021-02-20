let button = document.querySelector('button');
let namee = document.querySelector('#name');
let message = document.querySelector('#message');
let color = document.querySelector('#color');

button.addEventListener('click', function(){
    let div = document.createElement('div');
    let spanName = document.createElement('span');
    let spanColor = document.createElement('span');
    
    spanName.innerText = namee.value + ":";
    spanColor.innerText = message.value;
    spanName.style.color = color.value;

    fetch('https://live-chat-e070e-default-rtdb.firebaseio.com/chat.json', {
        method : "POST",
        document: JSON.stringify({
            name: namee.value,
            message: message.value,
            color: color.value , 
        })
    })


   div.append(spanName);
   div.append(spanColor);
   document.body.append(div)

})