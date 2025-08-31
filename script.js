let covers = document.querySelectorAll(".nu");
let piese = ["All star", "Apt Grafiti Alternative Version", "Counting Stars", "Houdini", "Hung Up"];
let artisti = ["Smash Mouth", "Bruno Mars & Rose", "One Republic", "Dua Lipa", "Madonna"];
let numele = ["Spark", "DR. Gigavolt", "Byte", "Fluff"];
let numele1 = ["", "Rosie", "Starseker", "Mirage"];
let numele11 = ["Sonny", "Sabrina", "Ray"];

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

    if (index == 0) {
        for (let i = 0; i < 4; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.textContent = numele[i];
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}${i}c.webp`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    } else if (index == 4) {
        for (let i = 0; i < 3; i++) {
            let div = document.createElement("div");
            let nume = document.createElement("h1");
            nume.textContent = numele11[i];
            nume.style.textAlign = "center";
            div.style.height = "100%";
            div.style.width = "25%";
            let imagine = document.createElement("img");
            imagine.src = `${index + 1}${i}c.webp`;
            imagine.classList.add("nu1");
            div1.append(div);
            div.append(imagine, nume);
        }
    } else {
        let div = document.createElement("div");
        let nume = document.createElement("h1");
        nume.textContent = numele1[index];
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
            c4.style.display = "block";
            c1.style.display = "grid";
            c2.style.display = "grid";
            c3.style.display = "grid";
        });
    });
}

covers.forEach((img, index) => {
    img.addEventListener("click", () => {
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
            c4.style.display = "block";
            c4.width = 600;
            video1.autoplay = true;
            video1.loop = true;
            video1.muted = true;
            video1.width = 500;
            video1.height = 600;
            c4.prepend(video1);

            document.getElementById("but1").style.display = "inline-block";
            document.getElementById("but2").style.display = "inline-block";

            document.getElementById("but1").onclick = () => {
                c1.style.display = "grid";
                c2.style.display = "grid";
                c3.style.display = "flex";
                c4.style.display = "none";
                audio1.pause();
                video1.remove();
            };

            document.getElementById("but2").onclick = () => {
                video1.remove();
                chanteur.textContent = "Choose your coach";
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