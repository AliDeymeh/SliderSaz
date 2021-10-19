
/*---menu bars for hide or show */
const btnha = document.querySelector('.btns');
const noebtnha = document.querySelector('.noebtnha');
const imgs = document.querySelector('.imgs');
const choeiseimgs = document.querySelector('.choeiseimgs');
const about=document.querySelector('.about');
const helps = document.querySelector('.helps');
const slideaslibtn = document.querySelector('.slideaslibtn');
const slideasli = document.querySelector('.slideasli');
btnha.addEventListener('click', function () {
    noebtnha.classList.add('active');
    choeiseimgs.classList.remove('active');
    helps.classList.remove('active');
    slideasli.classList.remove('active');
})
imgs.addEventListener('click', function () {
    choeiseimgs.classList.add('active');
    noebtnha.classList.remove('active');
    helps.classList.remove('active');
    slideasli.classList.remove('active');
})

slideaslibtn.addEventListener('click', function () {
    slideasli.classList.add('active');
    noebtnha.classList.remove('active');
    choeiseimgs.classList.remove('active');
    helps.classList.remove('active');
})
about.addEventListener('click', function () {
    slideasli.classList.remove('active');
    helps.classList.add('active');
    noebtnha.classList.remove('active');
    choeiseimgs.classList.remove('active');
})

/*-----------chisefile---- */
const drogArea = document.querySelector('.drag-area'),
    drogText = drogArea.querySelector('.header'),
    button = drogArea.querySelector('.choiseimg'),
    input = drogArea.querySelector('.inputimg');
let file;
button.onclick = () => {
    input.click();
}
input.addEventListener('change', function () {
    file = this.files[0];
    showFile();
    drogArea.classList.add('activeimg');

})
drogArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    drogArea.classList.add('activeimg');
    drogText.textContent = "عکسو ولش کن";
})
drogArea.addEventListener("dragleave", () => {
    drogArea.classList.remove('activeimg');
    drogText.textContent = "عکس ولش کن";
})
drogArea.addEventListener("drop", (event) => {
    event.preventDefault();

    file = event.dataTransfer.files[0];

    showFile();
})
let fileUrl;
const slide1 = document.querySelector('.slide1');

function showFile() {
    let filetype = file.type;
    let validExtsion = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtsion.includes(filetype)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            fileUrl = fileReader.result;

            slide1.style.background = `url('${fileUrl}')`;
            slide1.style.backgroundSize = 'cover';
            slide1.style.backgroundPosition = 'center center';
            slide1.style.backgroundRepeat = 'no-repeat';
            slide1.style.objectFit = 'cover';

        }
        fileReader.readAsDataURL(file);
    } else {
        alert("فایلت هرچی هست عکس نیست عزیز من :) ");
        drogArea.classList.remove('activeimg');

    }
}
/*----ersal imgs for slides---- */
const loading = document.querySelector('.loading');
const btnchoiseimg = document.querySelector('.btnchoiseimg');
btnchoiseimg.addEventListener('click', () => {
    loading.classList.add('loading1');
    setInterval(() => {
        loading.classList.remove('loading1');

    }, 1300)

})
const btnchoiseshape=document.querySelector('.btnchoiseshape');
const loading22 = document.querySelector('.loading22');
btnchoiseshape.addEventListener('click', () => {
    loading22.classList.add('loading2');
    setInterval(() => {
        loading22.classList.remove('loading2');
        
    }, 2000)


})

/*-------------------------------- */

const slideshowasli = document.querySelectorAll('.slideshowasli');

const left = document.getElementById('left');
const right = document.getElementById('right');
let activeslide = 0;
/*--------------------------------------------------- */
settagbody();
right.addEventListener('click', () => {
    activeslide++;
    if (activeslide > slideshowasli.length - 1) {
        activeslide = 0;
        
    }
    settagbody();
    setactiveslide();
})
/*--------------------------------------------------- */
left.addEventListener('click', () => {
    activeslide--;
    if (activeslide < 0) {
        activeslide = slideshowasli.length - 1;
    }
    settagbody();
    setactiveslide();
})
/*--------------------------------------------------- */
function settagbody() {
    slideasli.style.backgroundImage =slideshowasli[activeslide].style.backgroundImage;
}
/*--------------------------------------------------- */
function setactiveslide() {
    slideshowasli.forEach(slide => {
        slide.classList.remove('activeslidasli');
    });
    slideshowasli[activeslide].classList.add('activeslidasli');
}
/*--------------------------------------------------- */
// slideshowasli.forEach((item)=>{
//     item.style.backgroundImage=`url('${fileUrl}')`;
// })
const slideshowaslis = document.querySelectorAll('.slideshowasli');

let i = 0,j=0;
const slidercontainer=document.querySelector('.slideasli > .slider-container');

btnchoiseimg.addEventListener('click', () => {
   
  
    slideshowaslis[i].style.backgroundImage = `url('${fileUrl}')`;
    settagbody();
    i++;
    j++;
    
})


const leftarrow=document.querySelector('.left-arrow');
const rightarrow=document.querySelector('.right-arrow');
btnchoiseshape.addEventListener('click',()=>{
    let selectedshap=document.querySelector('.labelbtnha > input[type="radio"]:checked')
    let selectedcolor=document.querySelector('.labelbtnhacolor > input[type="radio"]:checked');
    let selectedborderradios=document.querySelector('.labalborderradios > input[type="radio"]:checked');

    leftarrow.style.border=`2px solid #${selectedcolor.value}`;
    leftarrow.style.borderRadius=`${selectedborderradios.value}%`;
    rightarrow.style.border=`2px solid #${selectedcolor.value}`;
    rightarrow.style.borderRadius=`${selectedborderradios.value}%`;
    if(selectedshap.value==1){
        left.innerHTML=`<i class="fa fa-reply" aria-hidden="true" 
        style="color: #${selectedcolor.value};"
        ></i>`;
        right.innerHTML=`<i class="fa fa-share" aria-hidden="true"
         style="color: #${selectedcolor.value};"></i>`;
     
    }else if(selectedshap.value==2){
        left.innerHTML=`<i class="fa fa-angle-double-left" aria-hidden="true"
         style="color:#${selectedcolor.value};"></i>`;
        right.innerHTML=`<i class="fa fa-angle-double-right"aria-hidden="true"
         style="color: #${selectedcolor.value};"></i>`;
    }
    if(selectedshap.value==3){ 
        left.innerHTML=`<i class="fa fa-arrow-circle-o-left" aria-hidden="true" 
        style="color: #${selectedcolor.value};"></i>`;
        right.innerHTML=`<i class="fa fa-arrow-circle-o-right" aria-hidden="true" 
        style="color: #${selectedcolor.value};"></i>`;
    }
    if(selectedshap.value==4){
        left.innerHTML=`<i class="fa fa-arrow-left" aria-hidden="true"
         style="color: #${selectedcolor.value};"></i>`;
        right.innerHTML=`<i class="fa fa-arrow-right" aria-hidden="true" 
        style="color:#${selectedcolor.value};"></i>`;
    }
    if(selectedshap.value==5){
        left.innerHTML=`<i class="fa fa-arrow-left" aria-hidden="true"
         style="color: #${selectedcolor.value};"></i>`;
        right.innerHTML=`<i class="fa fa-arrow-right" aria-hidden="true" 
        style="color:#${selectedcolor.value};"></i>`;
    }
      
})
/**---------------- */
setInterval(
    ()=>{
        activeslide++;
        if (activeslide > slideshowasli.length - 1) {
            activeslide = 0;
            
        }
        settagbody();
        setactiveslide();
           
    }
,5000)


