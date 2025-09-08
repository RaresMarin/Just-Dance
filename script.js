let covers = document.querySelectorAll(".nu");
let piese = ["All star", "Apt Grafiti Alternative Version", "Born to be alive", "Counting Stars", "Drip","Don Raja", "Houdini", "Hung Up","Made of", "Viva La Vida","Zjerm"];
let artisti = ["Smash Mouth", "Bruno Mars & Rose","Patrick Hernandez", "One Republic" , "BABYMONSTER","Sureal", "Dua Lipa", "Madonna" ,"Goldielocks","Coldplay", "Skhodra Electronike"];
let numele = ["Spark", "DR. Gigavolt", "Byte", "Fluff"];
let numele1 = ["", "Rosie","", "Starseker","","", "Mirage" , "","Felicia", "Zepheon"];
let numele10 = ["Sonny", "Sabrina", "Ray"];
let numele2 = ["Besa" , "Kole"];
let numele3 = ["Stacy Step","Danny Dips"];
let numele4 = ["Cassia","Boom-B" , "Vineel"];
let numele5 = ["Isha", "Zayo" , "Mira"];


function updateSongInfo(index) {
    let melodiaId = `melodia${index + 1}`;
    let artistId = `artist${index + 1}`;
    document.getElementById(melodiaId).textContent = piese[index];
    document.getElementById(artistId).textContent = artisti[index];
}

function createCoachCards(index, video1, audio1, c4, c1, c2, c3, chanteur) {
    let div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.flexDirection = "row";
    div1.style.justifyContent = "center";
    div1.style.alignItems = "center";
    document.body.append(div1);
    document.getElementById("u").textContent = "";
    if (index == 0) {
        for (let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.textContent = numele[i];
            nume.classList.add("melodie");
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}-${i}c.webp`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    } 
    else if (index == 2) {
        for (let i = 0; i < 2; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.classList.add("melodie");
            nume.textContent = numele3[i];
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}${i}c.jpg`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    }
       else if (index == 4) {
        for (let i = 0; i < 3; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.classList.add("melodie");
            nume.textContent = numele4[i];
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}${i}c.jpg`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    }
           else if (index == 5) {
        for (let i = 0; i < 3; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.classList.add("melodie");
            nume.textContent = numele5[i];
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}${i}c.jpg`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    }
    else if (index ==7) {
        for (let i = 0; i < 3; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.classList.add("melodie");
            nume.textContent = numele10[i];
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}${i}c.webp`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    }
    else if(index==10){
      for (let i = 0; i < 2; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.classList.add("melodie");
            nume.textContent = numele2[i];
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}${i}c.png`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    } else {
        let div = document.createElement("div");
        let nume = document.createElement("h1");
        nume.textContent = numele1[index];
            nume.classList.add("melodie");
        nume.style.textAlign = "center";
        div.style.height = "100%";
        div.style.width = "25%";
        let imagine = document.createElement("img");
        imagine.src = `${index + 1}c.webp`;
        imagine.classList.add("nu1");
        div1.append(div);
        div.append(imagine, nume);
    }

    div1.addEventListener("click", () => {
                    if(index==11){
                video1.src="111.mp4";
            }
        document.getElementById("flexq").style.display = "none";
        div1.style.display = "none";
        let div2 = document.createElement("div");
        div2.style.display = "flex";
        div2.style.flexDirection = "row";
        div2.style.justifyContent = "center";
        div2.style.alignItems = "center";
        document.body.append(div2);
        div2.append(video1);
        chanteur.textContent = "";
        audio1.pause();
        video1.muted = false;
        video1.loop = false;
        video1.play();
        video1.addEventListener("ended", () => {
            div2.style.display = "none";
          c1.style.display = "block";
            c2.style.display = "block";
            c3.style.display = "grid";
                c4.style.display = "none";
        document.getElementById("flexq").style.display = "flex";
            c3.style.display = "block";
        });
    });
}

covers.forEach((img, index) => {
    img.addEventListener("click", () => {
        document.getElementById("u").textContent = "";
        const video = document.createElement("video");
        video.src = `${index + 1}.mp4`;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.width = img.width;
        video.height = img.height;

        img.replaceWith(video);

        let audio = document.createElement("audio");
        audio.src = `${index + 1}.mp3`;
        audio.loop = true;
        audio.play();

        updateSongInfo(index);

        video.addEventListener("click", () => {
            let audio1 = document.createElement("audio");
            audio1.src = `${index + 1}.mp3`;
            audio1.loop = true;
            audio1.play();

            let c2 = document.getElementById("c2");
            let c1 = document.getElementById("c1");
            let c3 = document.getElementById("c3");
            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
            let c4 = document.getElementById("c4");
            let video1 = document.createElement("video");
            video1.src = `${index + 1}.mp4`;
            let text = document.getElementById("melodie");
            let chanteur = document.getElementById("chanteur");
            chanteur.textContent = artisti[index];
            text.textContent = piese[index];
            chanteur.style.color = "white";
            text.style.color = "white";
            c4.style.display = "block";
            c4.width = 600;
            video1.autoplay = true;
            video1.loop = true;
            video1.muted = true;
            video1.width = 500;
            video1.height = 600;
            c4.prepend(video1);
            document.getElementById("imagine").src = `${index}1.jpg`;
            document.getElementById("but1").style.display = "inline-block";
            document.getElementById("but2").style.display = "inline-block";
            document.getElementById("but1").onclick = () => {
            c1.style.display = "block";
            c2.style.display = "block";
            c3.style.display = "flex";
                c4.style.display = "none";
                audio1.pause();
                video1.remove();
            };

            document.getElementById("but2").onclick = () => {
                imagine.style.display = "none";
                video1.remove();
                chanteur.textContent = "Choose your coach";
                chanteur.style.color = "white";
                text.textContent = "";
                document.getElementById("but2").style.display = "none";
                document.getElementById("but1").style.display = "none";
                createCoachCards(index, video1, audio1, c4, c1, c2, c3, chanteur);
            };
        });

        video.addEventListener("mouseout", () => {
            video.replaceWith(img);
            audio.pause();
            document.querySelectorAll(".ce").forEach((element) => {
                element.textContent = "";
            });
        });
    });
});

function Solo() {
    let p = document.getElementById("1");
    covers[0].style.display = "none";
    covers[2].style.display = "none";
    covers[4].style.display = "none";
    covers[5].style.display = "none";
    covers[7].style.display = "none";
    covers[10].style.display = "none";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Duo(){
    let p = document.getElementById("2");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    })
    covers[2].style.display = "block";
    covers[10].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Trio(){
    let p = document.getElementById("3");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[4].style.display = "block";
    covers[5].style.display = "block";
    covers[7].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function For(){
let p = document.getElementById("4");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[0].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Rock(){
let p = document.getElementById("9");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[0].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Pop(){
let p = document.getElementById("5");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[2].style.display = "block";
    covers[3].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Dance(){
let p = document.getElementById("6");
    covers.forEach((cover)=>{
        cover.style.display = "block";
    });
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function E(){
let p = document.getElementById("7");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[9].style.display = "block";
    covers[5].style.display = "block";
    covers[8].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Rock(){
let p = document.getElementById("8");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[0].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function K(){
let p = document.getElementById("9");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[1].style.display = "block";
    covers[4].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y(){
let p = document.getElementById("10");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[0].style.display = "block";
    covers[4].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y1(){
let p = document.getElementById("10");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[1].style.display = "block";
    covers[3].style.display = "block";
    covers[5].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y2(){
let p = document.getElementById("12");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[2].style.display = "block";
    covers[3].style.display = "block";
    covers[8].style.display = "block";
    covers[7].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y3(){
let p = document.getElementById("13");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[1].style.display = "block";
    covers[4].style.display = "block";
    covers[9].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y4(){
let p = document.getElementById("14");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[8].style.display = "block";
    covers[1].style.display = "block";
    covers[5].style.display = "block";
    covers[4].style.display = "block";
    covers[6].style.display = "block";
    covers[10].style.display = "block";

    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y5(){
let p = document.getElementById("15");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[3].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y6(){
let p = document.getElementById("16");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[7].style.display = "block";
    covers[8].style.display = "block";
    covers[9].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y7(){
let p = document.getElementById("17");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    
    covers[0].style.display = "block";
    covers[2].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y9(){
let p = document.getElementById("19");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[3].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y10(){
let p = document.getElementById("110");
    covers.forEach((cover)=>{
        cover.style.display = "block";
    });
    covers[2].style.display = "none";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y10(){
let p = document.getElementById("10");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[1].style.display = "block";
    covers[3].style.display = "block";
    covers[4].style.display = "block";
    covers[5].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function Y10(){

}
function Duo(){
let p = document.getElementById("2");
    covers.forEach((cover)=>{
        cover.style.display = "none";
    });
    covers[2].style.display = "block";
    covers[10].style.display = "block";
    p.style.backgroundColor = "cyan";
    p.style.color = "#e6c1ec";
    document.getElementById("reset").style.backgroundColor = "cyan";
    document.getElementById("reset").style.color = "#e6c1ec";
}
function reset(){
    covers.forEach((cover) =>{
        cover.style.display = "block";
    })
    document.querySelectorAll(".p").forEach((p)=>{
        p.style.color = "cyan";
        p.style.backgroundColor = "transparent";
    })
     document.getElementById("reset").style.backgroundColor = "transparent";
     document.getElementById("reset").style.color = "white";
}
let list = document.getElementById("list");
if(list!=null)
{
document.getElementById("list").addEventListener("input", (e) => {
    document.querySelectorAll(".hey").forEach((text) => {
        text.style.display = "none";
    });

    const parinte = document.querySelector(".Flex");
    let ordine;

    if (e.target.value === "By difficulty (low to high)") {
        ordine = [0, 9,6,3,10, 8, 2,5, 1,7, 4];
    } else if (e.target.value === "By difficulty (high to low)") {
        ordine = [4, 7,1,5,8, 2,10, 3,6,9,0];
    } else {
        ordine = [0, 1, 2, 3, 4,5,6,7,8,9,10,10];
    }

    const covers = document.querySelectorAll(".nu");
    ordine.forEach(i => {
        parinte.appendChild(covers[i]);
    });
});
}
function random(){
    let random = Math.floor(Math.random() * covers.length);

    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(90, 79, 79, 0.7)"; // semi-transparent gray
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "10101010";

    let machine = document.createElement("div");
    machine.style.display = "flex";
    machine.style.justifyContent = "center";
    machine.style.alignItems = "center";
    machine.style.backgroundImage = "url('machine1.jpg')";
    machine.style.backgroundSize = "cover";
    machine.style.width = "600px";
    machine.style.height = "900px";
    machine.style.borderRadius = "20px";
    machine.style.boxShadow = "0 4px 32px rgba(0,0,0,0.3)";

    overlay.appendChild(machine);
    document.body.appendChild(overlay);
    let slot = document.createElement("img");
    if(random==5 && random ==2 && random==10)
    {
    slot.src = `${random + 1}.jpg`;
        let audio = new Audio(`${random + 1}.mp3`);
    audio.play();
    slot.classList.add("machine");
        machine.appendChild(slot);
    overlay.addEventListener("click",()=>{
        overlay.remove();
        audio.pause();
    })
    }
    else{
slot.src = `${random + 1}.webp`;
    let audio = new Audio(`${random + 1}.mp3`);
    audio.play();
    slot.classList.add("machine");
        machine.appendChild(slot);
    overlay.addEventListener("click",()=>{
        overlay.remove();
        audio.pause();
    })
    }
}

for (let i=0;i<4;i++){
    let random = Math.floor(Math.random()*6);
    let imagine = document.createElement("img");
    imagine.classList.add("nu3");
    imagine.style.display = "inline";
    imagine.src = `${random+1}.webp`;
        if(random==10 && random ==2)
        {
    imagine.src = `${random+1}.png`;

        }
    document.querySelectorAll(".suma").forEach((sum)=>{
        sum.append(imagine)});
        console.log(random);

}
for (let i=0;i<4;i++){
    let random = Math.floor(Math.random()*5);
    let imagine = document.createElement("img");
    imagine.classList.add("nu3");
    imagine.style.display = "inline";
    imagine.src = `${random+1}.webp`;
    document.querySelectorAll(".suma1").forEach((sum)=>{
        sum.append(imagine)});

}
for (let i=0;i<4;i++){
    let random = Math.floor(Math.random()*5);
    let imagine = document.createElement("img");
    imagine.classList.add("nu3");
    imagine.style.display = "inline";
    imagine.src = `${random+1}.webp`;
    document.querySelectorAll(".suma2").forEach((sum)=>{
        sum.append(imagine)});

}
