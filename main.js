window.addEventListener('load', init, 'else');
function init() {
    nav = document.getElementById('navbar');
    on = document.getElementById('open');
    off =document.getElementById('close');
    btn = document.getElementById('btn');
    aux = document.getElementById('nav-aux');

    
    // Area of Functions
    on.addEventListener('click', ()=>{
        off.style.display = 'block';
        on.style.display = 'none';
        nav.style.left = '0rem'
        nav.style.transition = '.6s';
        nav.style.transitionTimingFunction = 'ease';
        btn.style.borderColor = 'crimson';
        aux.style.background = '#222831'
    });
    
    off.addEventListener('click', ()=>{
        off.style.display = 'none';
        on.style.display = 'block';
        nav.style.left = '-15rem'
        btn.style.borderColor = 'burlywood';
        aux.style.background = '#12334b'
    });
    
    

    
}
window.addEventListener('resize', other, 'else');
function other(){
    // class of navbar
    box1 = document.getElementById('box1');
    box2 = document.getElementById('box2');
    box3 = document.getElementById('box3');
    box4 = document.getElementById('box4');
    box5 = document.getElementById('box5');
    box6 = document.getElementById('box6');
    box7 = document.getElementById('box7');



   if(innerWidth > 700){
       console.log('esta todo Ok...')
    } else{
        box1.addEventListener('click', ()=>{
            off.style.display = 'none';
            on.style.display = 'block';
            nav.style.left = '-15rem'
            btn.style.borderColor = 'burlywood';
            aux.style.background = '#12334b'
        });
        box2.addEventListener('click', ()=>{
            off.style.display = 'none';
            on.style.display = 'block';
            nav.style.left = '-15rem'
            btn.style.borderColor = 'burlywood';
            aux.style.background = '#12334b'
        });
        box3.addEventListener('click', ()=>{
            off.style.display = 'none';
            on.style.display = 'block';
            nav.style.left = '-15rem'
            btn.style.borderColor = 'burlywood';
            aux.style.background = '#12334b'
        });
        box4.addEventListener('click', ()=>{
            off.style.display = 'none';
            on.style.display = 'block';
            nav.style.left = '-15rem'
            btn.style.borderColor = 'burlywood';
            aux.style.background = '#12334b'
        });
        box5.addEventListener('click', ()=>{
            off.style.display = 'none';
            on.style.display = 'block';
            nav.style.left = '-15rem'
            btn.style.borderColor = 'burlywood';
            aux.style.background = '#12334b'
        });
        box6.addEventListener('click', ()=>{
            off.style.display = 'none';
            on.style.display = 'block';
            nav.style.left = '-15rem'
            btn.style.borderColor = 'burlywood';
            aux.style.background = '#12334b'
        }); 
        box7.addEventListener('click', ()=>{
            off.style.display = 'none';
            on.style.display = 'block';
            nav.style.left = '-15rem'
            btn.style.borderColor = 'burlywood';
            aux.style.background = '#12334b'
        }); 
    } 
}