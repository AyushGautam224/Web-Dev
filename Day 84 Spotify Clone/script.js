console.log("Lets start javascript");
let currentSong = new Audio();
let songs;
let currfolder;
async function getsongs(folder) {
  currfolder = folder;
  let a = await fetch(`${folder}/`)

  let response = await a.text();
  // console.log(response)
  let div = document.createElement("div")
  div.innerHTML = response;
  let as = div.getElementsByTagName("a")
  let songs = []
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3"))
      songs.push(element.href.split(`/${folder}/`)[1])

  }
  return (songs)
}
const playMusic = (track, pause = false) => {
  currentSong.src = `${currfolder}/` + track;

  currentSong.oncanplay = () => {
    if (!pause) {
      currentSong.play();
      document.getElementById("play").src = "img/pause.svg"; // <- ensures play icon updates
    }
  };

  let rawName = decodeURIComponent(track).replace(".mp3", "");
  let words = rawName.split(/\s+/);
  let firstTwo = words.slice(0, 2).join(" ");
  let lastThree = words.slice(-3).join(" ");
  let shortened = `${firstTwo} ... ${lastThree} mp3`;

  document.querySelector(".songinfo").innerHTML = shortened;
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};


async function displayAlbums() {
let a = await fetch(`songs/`);


  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer");
  let array = Array.from(anchors);

  for (let index = 0; index < array.length; index++) {
    const e = array[index];

    if (e.href.includes("/songs")) {
     let folder = e.getAttribute("href").split("/").filter(Boolean).pop();


      try {
        let a = await fetch(`songs/${folder}/info.json`);

        let response = await a.json();

        cardContainer.innerHTML += `
          <div data-folder="${folder}" class="card">
            <img class="play" src="img/playbutton.svg" alt="Play Button" width="64" height="64" />
           <img src="songs/${folder}/cover.jpeg" alt="" />

            <h2>${response.title}</h2>
            <p>${response.description}</p>
          </div>`;
      } catch (err) {
        console.warn(`Missing info.json or error in folder: ${folder}`, err);
      }
    }
  }
}




async function main() {

  await displayAlbums()


  songs = await getsongs("songs/cs")
  playMusic(songs[0], true)

  //display all the albums om the page 


  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]



  songUL.innerHTML = ""; // clear existing list

  songs.forEach((song, index) => {
    let raw = decodeURIComponent(song.split("/").pop().replace(".mp3", ""));
    let [artist, songName] = raw.split(" - ");

    songName = songName || raw;
    artist = artist || "Unknown";

    // Get only 2 words from each
    let songWords = songName.trim().split(/\s+/).slice(0, 2).join(" ");
    let artistWords = artist.trim().split(/\s+/).slice(0, 2).join(" ");

    songUL.innerHTML += `
  <li data-song="${song}">
    <div class="info">
      <div>${index + 1}. ${songWords} - ${artistWords} - mp3</div>
      <div class="playnow">Play Now</div>
      <img class="playbuttonc" src="img/playsong.svg" alt="Play" />
    </div>
  </li>
`;

  });


  Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {

      // console.log(e.querySelector(".info").firstElementChild.innerHTML)
      const track = e.getAttribute("data-song");
      playMusic(track);

    })
  })

  play.addEventListener("click", () => {

    if (currentSong.paused) {
      currentSong.play()
      play.src = "img/pause.svg"
    }
    else {
      currentSong.pause()
      play.src = "img/playsong.svg"
    }
  })

  // Update time and circle while song plays
  currentSong.addEventListener("timeupdate", () => {
    if (!isNaN(currentSong.duration)) {
      let percent = (currentSong.currentTime / currentSong.duration) * 100;
      document.querySelector(".circle").style.left = percent + "%";

      document.querySelector(".songtime").innerHTML =
        `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    }
  });

  // Handle seekbar click
  document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });


  function secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  const hamburger = document.getElementById("hamburger");
  const leftSidebar = document.querySelector(".left");

  // Show/hide sidebar on hamburger click
  hamburger.addEventListener("click", () => {
    leftSidebar.classList.toggle("show");
  });

  // Hide sidebar when clicking outside of it
  document.addEventListener("click", function (e) {
    if (
      leftSidebar.classList.contains("show") &&
      !leftSidebar.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      leftSidebar.classList.remove("show");
    }
  });
  document.querySelector(".close-icon").addEventListener("click", () => {
    document.querySelector(".left").classList.remove("show");
  });

  // add a event listener to previous and next 
  last.addEventListener("click", () => {
    // console.log("Previous clicked")
    // console.log(currentSong)

    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    if ((index - 1) >= 0) {
      playMusic(songs[index - 1])
    }
  })
  next.addEventListener("click", () => {
    // console.log("Next clicked")

    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    if ((index + 1) < songs.length - 1) {
      playMusic(songs[index + 1])
    }
  })
  document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    // console.log(e, e.target, e.target.value)
    currentSong.volume = parseInt(e.target.value) / 100
  })

  Array.from(document.getElementsByClassName("card")).forEach(e => {
  e.addEventListener("click", async item => {
    let folder = item.currentTarget.dataset.folder;
    songs = await getsongs(`songs/${folder}`);
    playMusic(songs[0]); // remove 'true' to autoplay
    updateSongList();
  });
});


}

//add eeevent listener to mute the track 
// document.querySelector(".volume>img").addEventListener("click", e=>{
//   console.log(e.target)
//   console.log(document.querySelector(".volume > img")); // Will log null or the element

// })
document.addEventListener("DOMContentLoaded", () => {
  const volumeBtn = document.querySelector(".volume > img");
  const volumeSlider = document.querySelector(".range input");

  let previousVolume = 0.5; // Default 50%

  volumeBtn.addEventListener("click", () => {
    if (currentSong.volume > 0) {
      previousVolume = currentSong.volume;
      currentSong.volume = 0;
      volumeSlider.value = 0;
      volumeBtn.src = "img/muted.svg";
    } else {
      currentSong.volume = previousVolume;
      volumeSlider.value = previousVolume * 100;
      volumeBtn.src = "img/volume.svg";
    }
  });

  volumeSlider.addEventListener("input", e => {
    currentSong.volume = e.target.value / 100;
    volumeBtn.src = currentSong.volume === 0 ? "img/muted.svg" : "img/volume.svg";
    if (currentSong.volume > 0) previousVolume = currentSong.volume;
  });
});


main()












function updateSongList() {
  let songUL = document.querySelector(".songList ul");
  songUL.innerHTML = "";

  songs.forEach((song, index) => {
    let li = document.createElement("li");
    li.dataset.song = song;

    let raw = decodeURIComponent(song.replace(".mp3", ""));
    let [artist, songName] = raw.split(" - ");

    songName = songName || raw;
    artist = artist || "Unknown";

    let songWords = songName.trim().split(/\s+/).slice(0, 2).join(" ");
    let artistWords = artist.trim().split(/\s+/).slice(0, 2).join(" ");

    li.innerHTML = `
  <div class="info">
    <div>${index + 1}. ${songWords} - ${artistWords} - mp3</div>
    <div class="playgroup">
      <span class="playnow">Play Now</span>
      <img class="playbuttonc" src="img/playsong.svg" alt="Play" />
    </div>
  </div>
`;


    li.addEventListener("click", () => playMusic(song));
    songUL.appendChild(li);
  });
}
