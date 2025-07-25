// Birthday card pages data
const pages = [
  {
    type: 'cover',
    content: `<div class="cover-title">Happy Birthday!</div>
      <canvas class="confetti"></canvas>
      <div class="cover-subtitle">Wishing you a day filled with joy and love</div>`
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
    quote: "You are a gift to everyone you meet.",
    message: "May your day be wrapped with love and laughter."
  },
  {
    quote: "Cheers to you on your special day!",
    message: "May your birthday sparkle with joy and delight."
  },
  {
    quote: "Wishing you a year of magical moments.",
    message: "May all your dreams come true!"
  }
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
      pageDiv.innerHTML = `
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
    switchSongBtn.textContent = '🎵 Background Music';
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