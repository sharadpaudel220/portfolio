const sections = document.querySelectorAll(".section")
const sectBtns = document.querySelectorAll('.controlls'); 
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); 

function PageTransitions(){
    // Button click for active class: 
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    // Section active class
    allSections.addEventListener('click', (e)=> {
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            
            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

}

PageTransitions();



// validating form
// const form = document.getElementById('contact-form');
//   const submitButton = document.getElementById('submit');

//   submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     const mailtoLink = `mailto:sharadpaudel220@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

//     window.location.href = mailtoLink;
//   });