
//get menu elements
let home = document.getElementById("HOME")
let EXPERIENCE = document.getElementById("EXPERIENCE")
let PROJECTS = document.getElementById("PROJECTS")
let EDUCATION = document.getElementById("EDUCATION")
let CERTIFICATIONS = document.getElementById("CERTIFICATIONS")
let COURSES = document.getElementById("COURSES")
let LANGUAGES = document.getElementById("LANGUAGES")
let SKILLS = document.getElementById("SKILLS")
let CONTACTME = document.getElementById("CONTACTME")




//get section elements
let Kompetens= document.getElementById("Kompetens")
let employeer= document.getElementById("employeer")
let Uppdrag= document.getElementById("Uppdrag")
let Utbildning= document.getElementById("Utbildning")
let Cer= document.getElementById("Cer")
let Kurs= document.getElementById("Kurs")
let Sprak= document.getElementById("Sprak")
let skills= document.getElementById("skills")
let Ovrigt= document.getElementById("Ovrigt")
let contact= document.getElementById("contact")



//display sections
    Kompetens.style.display="block";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";



if(home){ home.addEventListener("click",function(){
    Kompetens.style.display="block";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};



if(EXPERIENCE){ EXPERIENCE.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="block";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};

if(PROJECTS){ PROJECTS.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="none";
    Uppdrag.style.display="block";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};

if(EDUCATION){ EDUCATION.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="block";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};

if(CERTIFICATIONS){ CERTIFICATIONS.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="block";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};

if(COURSES){ COURSES.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="block";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};

if(LANGUAGES){ LANGUAGES.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="block";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};

if(SKILLS){ SKILLS.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="block";
    Ovrigt.style.display="none";
    contact.style.display="none";
})};

if(CONTACTME){ CONTACTME.addEventListener("click",function(){
    Kompetens.style.display="none";
    employeer.style.display="none";
    Uppdrag.style.display="none";
    Utbildning.style.display="none";
    Cer.style.display="none";
    Kurs.style.display="none";
    Sprak.style.display="none";
    skills.style.display="none";
    Ovrigt.style.display="none";
    contact.style.display="block";
})};

//animation text
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "PLC Programmer",
    "HMI Programmer",
    "SCADA Programmer",
    "Robot Programmer",
    "Automation Engineer",
    
    
    
];

const morphTime = 2;
const cooldownTime =1.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "30%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
