// JS for digital birthday card. All asset references use 'assets/filename'.
// (Paste the latest working version of your script.js here, as previously provided, with no extra folder in asset paths.)

// Birthday card pages data
const pages = [
  {
    type: 'cover',
    content: `<div class="cover-title">Happy Birthday Ankit</div>
      <canvas class="confetti"></canvas>
      <div class="cover-subtitle">Wishing you a day filled with joy and love</div>
      <div class="cover-cake-people">
        <svg class="cover-cake-svg" viewBox="0 0 220 90" width="200" height="90">
          <!-- Cake -->
          <ellipse cx="110" cy="70" rx="60" ry="18" fill="#ffe0ec"/>
          <rect x="50" y="40" width="120" height="30" rx="14" fill="#fff8f0" stroke="#e75480" stroke-width="2"/>
          <rect x="65" y="60" width="90" height="10" rx="5" fill="#ffe066"/>
          <ellipse cx="110" cy="40" rx="60" ry="14" fill="#ffb3c6"/>
          <!-- Candles -->
          <rect x="80" y="28" width="4" height="12" rx="2" fill="#b5ead7"/>
          <rect x="110" y="26" width="4" height="14" rx="2" fill="#ffe066"/>
          <rect x="140" y="28" width="4" height="12" rx="2" fill="#e75480"/>
          <circle cx="82" cy="28" r="2" fill="#ffe066"/>
          <circle cx="112" cy="26" r="2" fill="#e75480"/>
          <circle cx="142" cy="28" r="2" fill="#b5ead7"/>
          <!-- People -->
          <g class="person" style="animation: person-bounce 1.6s infinite alternate;">
            <circle cx="70" cy="35" r="7" fill="#f8c471"/>
            <rect x="66" y="42" width="8" height="12" rx="4" fill="#b5ead7"/>
            <rect x="68" y="54" width="4" height="8" rx="2" fill="#ffe066"/>
            <rect x="62" y="44" width="4" height="10" rx="2" fill="#ffb3c6"/>
            <rect x="74" y="44" width="4" height="10" rx="2" fill="#ffb3c6"/>
          </g>
          <g class="person" style="animation: person-bounce 1.8s 0.3s infinite alternate;">
            <circle cx="110" cy="32" r="7" fill="#f1948a"/>
            <rect x="106" y="39" width="8" height="12" rx="4" fill="#ffe066"/>
            <rect x="108" y="51" width="4" height="8" rx="2" fill="#b5ead7"/>
            <rect x="102" y="41" width="4" height="10" rx="2" fill="#b5ead7"/>
            <rect x="114" y="41" width="4" height="10" rx="2" fill="#b5ead7"/>
          </g>
          <g class="person" style="animation: person-bounce 1.7s 0.6s infinite alternate;">
            <circle cx="150" cy="36" r="7" fill="#bb8fce"/>
            <rect x="146" y="43" width="8" height="12" rx="4" fill="#ffb3c6"/>
            <rect x="148" y="55" width="4" height="8" rx="2" fill="#ffe066"/>
            <rect x="142" y="45" width="4" height="10" rx="2" fill="#ffe066"/>
            <rect x="154" y="45" width="4" height="10" rx="2" fill="#ffe066"/>
          </g>
          <!-- Knife (cutting) -->
          <rect x="120" y="65" width="18" height="3" rx="1.5" fill="#888" transform="rotate(-15 120 65)"/>
        </svg>
      </div>`
  },
  {
    quote: "May your birthday be as beautiful as your smile!",
    message: "Wishing you endless happiness and unforgettable moments."
  },
  {
    quote: "Another adventure-filled year awaits you.",
    message: "Embrace it with great enthusiasm and celebrate every moment!"
  },
  {
    quote: "Life is better with people like you in it. You are a gift to everyone you meet.",
    message: "May your birthday sparkle with joy and delight."
  },
  {
    quote: "Wishing you a year of magical moments.",
    message: "May all your dreams come true! Happy Birthday Again Cheers. 🥂"
  }
];

// SVG art sets for each quote page
const pageArts = [
  // Page 1
  `<div class="bg-art">
    <svg class="cake celebration" viewBox="0 0 60 40"><rect x="10" y="20" width="40" height="16" rx="6" fill="#fff8f0" stroke="#e75480" stroke-width="2"/><rect x="16" y="28" width="28" height="8" rx="3" fill="#ffe066"/><ellipse cx="30" cy="20" rx="20" ry="8" fill="#ffb3c6"/><rect x="27" y="10" width="6" height="10" rx="2" fill="#b5ead7"/><rect x="29" y="6" width="2" height="6" fill="#ffe066"/><circle cx="30" cy="6" r="2" fill="#e75480"/></svg>
    <svg class="partyhat celebration celebration-left" viewBox="0 0 32 32"><polygon points="16,2 30,30 2,30" fill="#b5ead7" stroke="#e75480" stroke-width="2"/><circle cx="16" cy="4" r="3" fill="#ffe066"/></svg>
    <svg class="gift celebration celebration-right" viewBox="0 0 32 32"><rect x="6" y="14" width="20" height="12" rx="3" fill="#b5ead7"/><rect x="14" y="14" width="4" height="12" fill="#e75480"/><rect x="6" y="20" width="20" height="4" fill="#ffe066"/><rect x="12" y="8" width="8" height="8" rx="2" fill="#ffb3c6"/><rect x="15" y="8" width="2" height="8" fill="#e75480"/></svg>
  </div>`,
  // Page 2
  `<div class="bg-art">
    <svg class="balloon balloon1" viewBox="0 0 32 44"><ellipse cx="16" cy="18" rx="14" ry="18" fill="#b5ead7"/><rect x="15" y="36" width="2" height="8" fill="#b5ead7"/></svg>
    <svg class="balloon balloon2" viewBox="0 0 32 44"><ellipse cx="16" cy="18" rx="14" ry="18" fill="#ffb3c6"/><rect x="15" y="36" width="2" height="8" fill="#ffb3c6"/></svg>
    <svg class="sparkle sparkle1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="#e75480"/><g opacity="0.5"><circle cx="4" cy="4" r="2" fill="#e75480"/><circle cx="20" cy="20" r="2" fill="#e75480"/></g></svg>
    <svg class="partyhat celebration celebration-right" viewBox="0 0 32 32"><polygon points="16,2 30,30 2,30" fill="#ffe066" stroke="#e75480" stroke-width="2"/><circle cx="16" cy="4" r="3" fill="#ffb3c6"/></svg>
  </div>`,
  // Page 3
  `<div class="bg-art">
    <svg class="gift celebration celebration-left" viewBox="0 0 32 32"><rect x="6" y="14" width="20" height="12" rx="3" fill="#ffb3c6"/><rect x="14" y="14" width="4" height="12" fill="#e75480"/><rect x="6" y="20" width="20" height="4" fill="#ffe066"/><rect x="12" y="8" width="8" height="8" rx="2" fill="#b5ead7"/><rect x="15" y="8" width="2" height="8" fill="#e75480"/></svg>
    <svg class="sparkle sparkle2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="#b5ead7"/><g opacity="0.5"><circle cx="4" cy="20" r="2" fill="#b5ead7"/><circle cx="20" cy="4" r="2" fill="#b5ead7"/></g></svg>
    <svg class="cake celebration" viewBox="0 0 60 40"><rect x="10" y="20" width="40" height="16" rx="6" fill="#fff8f0" stroke="#e75480" stroke-width="2"/><rect x="16" y="28" width="28" height="8" rx="3" fill="#ffe066"/><ellipse cx="30" cy="20" rx="20" ry="8" fill="#ffb3c6"/><rect x="27" y="10" width="6" height="10" rx="2" fill="#b5ead7"/><rect x="29" y="6" width="2" height="6" fill="#ffe066"/><circle cx="30" cy="6" r="2" fill="#e75480"/></svg>
  </div>`,
  // Page 4
  `<div class="bg-art">
    <svg class="balloon balloon3" viewBox="0 0 32 44"><ellipse cx="16" cy="18" rx="14" ry="18" fill="#ffe066"/><rect x="15" y="36" width="2" height="8" fill="#ffe066"/></svg>
    <svg class="sparkle sparkle3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="#ffe066"/><g opacity="0.5"><circle cx="4" cy="12" r="2" fill="#ffe066"/><circle cx="20" cy="12" r="2" fill="#ffe066"/></g></svg>
    <svg class="partyhat celebration celebration-left" viewBox="0 0 32 32"><polygon points="16,2 30,30 2,30" fill="#b5ead7" stroke="#e75480" stroke-width="2"/><circle cx="16" cy="4" r="3" fill="#ffe066"/></svg>
    <svg class="gift celebration celebration-right" viewBox="0 0 32 32"><rect x="6" y="14" width="20" height="12" rx="3" fill="#b5ead7"/><rect x="14" y="14" width="4" height="12" fill="#e75480"/><rect x="6" y="20" width="20" height="4" fill="#ffe066"/><rect x="12" y="8" width="8" height="8" rx="2" fill="#ffb3c6"/><rect x="15" y="8" width="2" height="8" fill="#e75480"/></svg>
  </div>`,
  // Page 5
  `<div class="bg-art">
    <img src="assets/birthday-celebration.jpg" alt="Birthday Celebration" class="celebration-img-bg" />
    <svg class="cake celebration" viewBox="0 0 60 40"><rect x="10" y="20" width="40" height="16" rx="6" fill="#fff8f0" stroke="#e75480" stroke-width="2"/><rect x="16" y="28" width="28" height="8" rx="3" fill="#ffe066"/><ellipse cx="30" cy="20" rx="20" ry="8" fill="#ffb3c6"/><rect x="27" y="10" width="6" height="10" rx="2" fill="#b5ead7"/><rect x="29" y="6" width="2" height="6" fill="#ffe066"/><circle cx="30" cy="6" r="2" fill="#e75480"/></svg>
    <svg class="balloon balloon1" viewBox="0 0 32 44"><ellipse cx="16" cy="18" rx="14" ry="18" fill="#b5ead7"/><rect x="15" y="36" width="2" height="8" fill="#b5ead7"/></svg>
    <svg class="gift celebration celebration-left" viewBox="0 0 32 32"><rect x="6" y="14" width="20" height="12" rx="3" fill="#ffb3c6"/><rect x="14" y="14" width="4" height="12" fill="#e75480"/><rect x="6" y="20" width="20" height="4" fill="#ffe066"/><rect x="12" y="8" width="8" height="8" rx="2" fill="#b5ead7"/><rect x="15" y="8" width="2" height="8" fill="#e75480"/></svg>
    <svg class="rocket celebration-rocket rocket" viewBox="0 0 32 64"><rect x="13" y="24" width="6" height="28" rx="3" fill="#b5ead7"/><polygon points="16,4 28,24 4,24" fill="#e75480"/><rect x="13" y="52" width="6" height="8" fill="#ffe066"/><polygon points="13,60 19,60 16,64" fill="#e75480"/></svg>
    <svg class="firework-burst" viewBox="0 0 80 80"><g><circle cx="40" cy="40" r="8" fill="#ffe066"/><g stroke="#e75480" stroke-width="3"><line x1="40" y1="10" x2="40" y2="30"/><line x1="40" y1="50" x2="40" y2="70"/><line x1="10" y1="40" x2="30" y2="40"/><line x1="50" y1="40" x2="70" y2="40"/><line x1="20" y1="20" x2="32" y2="32"/><line x1="60" y1="20" x2="48" y2="32"/><line x1="20" y1="60" x2="32" y2="48"/><line x1="60" y1="60" x2="48" y2="48"/></g></g></svg>
    <svg class="firecracker firecracker1" viewBox="0 0 24 24"><rect x="10" y="2" width="4" height="12" rx="2" fill="#ffe066"/><polygon points="12,0 16,6 8,6" fill="#e75480"/><circle cx="12" cy="18" r="3" fill="#ffb3c6"/></svg>
    <svg class="firecracker firecracker2" viewBox="0 0 24 24"><rect x="10" y="2" width="4" height="12" rx="2" fill="#b5ead7"/><polygon points="12,0 16,6 8,6" fill="#ffe066"/><circle cx="12" cy="18" r="3" fill="#e75480"/></svg>
    <svg class="firecracker firecracker3" viewBox="0 0 24 24"><rect x="10" y="2" width="4" height="12" rx="2" fill="#e75480"/><polygon points="12,0 16,6 8,6" fill="#b5ead7"/><circle cx="12" cy="18" r="3" fill="#ffe066"/></svg>
  </div>`
];

const cardFlipbook = document.getElementById('card-flipbook');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
const bgMusic = document.getElementById('bg-music');
const flipSound = document.getElementById('flip-sound');
const happyBirthday = document.getElementById('happy-birthday');
let currentPage = 0;
let flipping = false;

function createPages() {
  cardFlipbook.innerHTML = '';
  pages.forEach((page, i) => {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page' + (i === 0 ? ' cover' : '');
    pageDiv.style.zIndex = pages.length - i;
    if (i === 0) {
      pageDiv.innerHTML = page.content;
    } else {
      pageDiv.classList.add('quote-bg');
      // Pick SVG art for this page (pages[1] is quote page 1, so pageArts[0])
      let art = pageArts[i-1] || '';
      let imgBg = '';
      // Add background images for cards 2, 3, 4, and last card
      if (i === 1) {
        imgBg = '<img src="assets/card-2.jpg" alt="Card 2" class="celebration-img-bg" />';
      } else if (i === 2) {
        imgBg = '<img src="assets/card-3.jpg" alt="Card 3" class="celebration-img-bg" />';
      } else if (i === 3) {
        imgBg = '<img src="assets/card-4.jpg" alt="Card 4" class="celebration-img-bg" />';
      } else if (i === pages.length - 1) {
        art = art.replace(/<img[^>]+celebration-img-bg[^>]+>/, '');
        imgBg = '<img src="assets/birthday-celebration.jpg" alt="Birthday Celebration" class="celebration-img-bg" />';
      }
      pageDiv.innerHTML = `
        ${imgBg}
        ${art}
        <svg class="floral top-left" viewBox="0 0 60 60"><circle cx="30" cy="30" r="18" fill="#ffe0ec" stroke="#e75480" stroke-width="2"/><ellipse cx="30" cy="18" rx="8" ry="4" fill="#e75480" opacity="0.3"/><ellipse cx="18" cy="30" rx="4" ry="8" fill="#e75480" opacity="0.3"/><ellipse cx="42" cy="30" rx="4" ry="8" fill="#e75480" opacity="0.3"/><ellipse cx="30" cy="42" rx="8" ry="4" fill="#e75480" opacity="0.3"/></svg>
        <svg class="floral bottom-right" viewBox="0 0 60 60"><circle cx="30" cy="30" r="18" fill="#ffe0ec" stroke="#e75480" stroke-width="2"/><ellipse cx="30" cy="18" rx="8" ry="4" fill="#e75480" opacity="0.3"/><ellipse cx="18" cy="30" rx="4" ry="8" fill="#e75480" opacity="0.3"/><ellipse cx="42" cy="30" rx="4" ry="8" fill="#e75480" opacity="0.3"/><ellipse cx="30" cy="42" rx="8" ry="4" fill="#e75480" opacity="0.3"/></svg>
        <div class="floating festive">
          <svg width="32" height="32" class="star" viewBox="0 0 32 32"><polygon points="16,2 20,12 31,12 22,18 25,29 16,22 7,29 10,18 1,12 12,12" fill="#ffe066" opacity="0.7"/></svg>
          <svg width="28" height="28" class="heart" viewBox="0 0 32 32"><path d="M23 5c-2.5 0-4 2-4 2s-1.5-2-4-2C9 5 7 8 7 11c0 6 9 13 9 13s9-7 9-13c0-3-2-6-5-6z" fill="#ffb3c6" opacity="0.7"/></svg>
          <svg width="28" height="28" class="balloon" viewBox="0 0 32 32"><ellipse cx="16" cy="14" rx="10" ry="12" fill="#b5ead7" opacity="0.7"/><rect x="15" y="26" width="2" height="6" fill="#b5ead7"/></svg>
        </div>
        <div class="quote">${page.quote}</div>
        <div class="message">${page.message}</div>
      `;
    }
    cardFlipbook.appendChild(pageDiv);
  });
}

function flipToPage(newPage) {
  if (flipping || newPage < 0 || newPage >= pages.length || newPage === currentPage) return;
  flipping = true;
  const allPages = cardFlipbook.querySelectorAll('.page');
  const direction = newPage > currentPage ? 1 : -1;
  const fromPage = allPages[currentPage];
  const toPage = allPages[newPage];
  flipSound.currentTime = 0;
  flipSound.play();
  gsap.to(fromPage, {
    rotationY: direction * -120,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
    duration: 0.7,
    ease: 'power2.in',
    onComplete: () => {
      fromPage.style.display = 'none';
      toPage.style.display = 'flex';
      gsap.fromTo(toPage, {
        rotationY: direction * 120,
        transformOrigin: direction > 0 ? 'right center' : 'left center',
        display: 'flex'
      }, {
        rotationY: 0,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          flipping = false;
        }
      });
      currentPage = newPage;
      updateButtons();
    }
  });
}

function updateButtons() {
  prevBtn.style.display = currentPage === 0 ? 'none' : 'block';
  nextBtn.style.display = currentPage === pages.length - 1 ? 'none' : 'block';
}

prevBtn.addEventListener('click', () => flipToPage(currentPage - 1));
nextBtn.addEventListener('click', () => flipToPage(currentPage + 1));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') flipToPage(currentPage - 1);
  if (e.key === 'ArrowRight') flipToPage(currentPage + 1);
});

// Touch/swipe support
let touchStartX = null;
cardFlipbook.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});
cardFlipbook.addEventListener('touchend', e => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (dx > 50) flipToPage(currentPage - 1);
  if (dx < -50) flipToPage(currentPage + 1);
  touchStartX = null;
});

// Confetti animation for cover
function confettiBurst(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.offsetWidth;
  const H = canvas.height = canvas.offsetHeight;
  const confettiCount = 60;
  const confetti = Array.from({length: confettiCount}, () => ({
    x: Math.random() * W,
    y: Math.random() * -H,
    r: 6 + Math.random() * 8,
    d: 2 + Math.random() * 2,
    color: `hsl(${Math.random()*360},80%,80%)`,
    tilt: Math.random() * 10 - 5
  }));
  function draw() {
    ctx.clearRect(0,0,W,H);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, c.r, c.r/2, c.tilt, 0, 2*Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
  }
  function update() {
    confetti.forEach(c => {
      c.y += c.d;
      c.x += Math.sin(c.y/30) * 2;
      c.tilt += Math.random() * 0.2 - 0.1;
      if (c.y > H) {
        c.y = -10;
        c.x = Math.random() * W;
      }
    });
  }
  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }
  loop();
}

function initConfetti() {
  const cover = cardFlipbook.querySelector('.cover');
  if (!cover) return;
  const canvas = cover.querySelector('.confetti');
  if (canvas) confettiBurst(canvas);
}

// Music controls
const musicControl = document.getElementById('music-control');
let musicPlaying = false;
let playingHappyBirthday = false;

// Add a toggle button for switching songs
const switchSongBtn = document.createElement('button');
switchSongBtn.textContent = '🎹 Happy Birthday Song';
switchSongBtn.style.marginLeft = '12px';
switchSongBtn.style.fontSize = '1.1rem';
switchSongBtn.style.border = 'none';
switchSongBtn.style.background = 'rgba(255,255,255,0.7)';
switchSongBtn.style.borderRadius = '8px';
switchSongBtn.style.cursor = 'pointer';
switchSongBtn.style.padding = '4px 10px';
switchSongBtn.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
switchSongBtn.style.verticalAlign = 'middle';
switchSongBtn.addEventListener('click', () => {
  if (!playingHappyBirthday) {
    if (!happyBirthday.src) return;
    bgMusic.pause();
    happyBirthday.currentTime = 0;
    happyBirthday.play();
    musicPlaying = true;
    playingHappyBirthday = true;
    musicControl.innerHTML = '🔊';
    switchSongBtn.textContent = '';
  } else {
    happyBirthday.pause();
    bgMusic.currentTime = 0;
    bgMusic.play();
    musicPlaying = true;
    playingHappyBirthday = false;
    musicControl.innerHTML = '🔊';
    switchSongBtn.textContent = '🎹 Happy Birthday Song';
  }
});
musicControl.appendChild(switchSongBtn);

function toggleMusic() {
  if (!playingHappyBirthday) {
    if (bgMusic.paused) {
      bgMusic.play();
      musicPlaying = true;
      musicControl.innerHTML = '🔊';
      musicControl.appendChild(switchSongBtn);
    } else {
      bgMusic.pause();
      musicPlaying = false;
      musicControl.innerHTML = '🔈';
      musicControl.appendChild(switchSongBtn);
    }
  } else {
    if (happyBirthday.paused) {
      happyBirthday.play();
      musicPlaying = true;
      musicControl.innerHTML = '🔊';
      musicControl.appendChild(switchSongBtn);
    } else {
      happyBirthday.pause();
      musicPlaying = false;
      musicControl.innerHTML = '🔈';
      musicControl.appendChild(switchSongBtn);
    }
  }
}
musicControl.innerHTML = '🔈';
musicControl.style.position = 'fixed';
musicControl.style.top = '18px';
musicControl.style.right = '18px';
musicControl.style.fontSize = '2rem';
musicControl.style.cursor = 'pointer';
musicControl.style.zIndex = 100;
musicControl.addEventListener('click', toggleMusic);

// Initialize
createPages();
updateButtons();
const allPages = cardFlipbook.querySelectorAll('.page');
allPages.forEach((p, i) => {
  if (i !== 0) p.style.display = 'none';
});
setTimeout(initConfetti, 300);
setTimeout(() => {
  const lastPage = cardFlipbook.querySelectorAll('.page')[pages.length-1];
  if (!lastPage) return;
  const rocket = lastPage.querySelector('.rocket');
  const burst = lastPage.querySelector('.firework-burst');
  if (!rocket || !burst) return;
  function animateRocket() {
    rocket.classList.remove('rocket-launch-anim');
    burst.classList.remove('firework-burst-anim');
    setTimeout(() => {
      rocket.classList.add('rocket-launch-anim');
      setTimeout(() => {
        burst.classList.add('firework-burst-anim');
        setTimeout(() => {
          burst.classList.remove('firework-burst-anim');
          rocket.classList.remove('rocket-launch-anim');
          setTimeout(animateRocket, 800);
        }, 700);
      }, 1200);
    }, 600);
  }
  animateRocket();
}, 600); 