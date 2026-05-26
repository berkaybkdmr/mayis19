const configuredPhotos = Array.from({ length: 90 }, (_, index) => ({
  src: `assets/photos/photo-${index + 1}.jpg`,
  caption: `anımız ${index + 1}`,
}));

const fallbackCards = [
  { caption: "ilk bakış", text: "sen" },
  { caption: "en güzel gün", text: "biz" },
  { caption: "bir yıl", text: "365" },
  { caption: "kalbim", text: "iyi ki" },
  { caption: "hep yanımda", text: "el ele" },
  { caption: "nice yıllara", text: "sonsuz" },
];

const colors = [
  "linear-gradient(135deg, #bd4d63, #e9a6a0)",
  "linear-gradient(135deg, #64766a, #d4b383)",
  "linear-gradient(135deg, #742c42, #c98673)",
  "linear-gradient(135deg, #315d63, #d9b46f)",
  "linear-gradient(135deg, #8e5363, #ead0c8)",
  "linear-gradient(135deg, #5b6754, #c68f75)",
];
const secretLetters = [
  {
    type: "letter",
    theme: "pink",
    caption: "gizli mektup",
    answer: "3ekim",
    question: "Sevgili olduğumuz tarih? (örnek yazım: 5kasım)",
    title: "Nefiye'm",
    body: [
      "Bu mektubu fotoğrafların arasına sakladım çünkü bazı şeyleri herkesin değil, sadece senin bulmanı istedim. Her fotoğrafın içinde biraz biz var; gülüşün, bakışın, birlikte olduğumuz anların bende bıraktığı o sıcak his var.",
      "Seni özlediğimde bazen kelimeler yetmiyor. O yüzden bu küçük sayfayı yaptım; belki bir yerde kalbimin sana hâlâ nasıl baktığını anlatabilir diye.",
      "Eğer bu mektubu açtıysan, bil ki saklamak istediğim tek şey bu: seni çok seviyorum ve bu kez seni daha güzel sevmek istiyorum.",
    ],
  },
  {
    type: "letter",
    theme: "blue",
    caption: "mavi mektup",
    answer: "yanarım",
    answers: ["yanarım", "yanarim"],
    question: "Kareokede söylemek istediğimiz şarkı. (ipucu: y)",
    title: "Beraber Söyleyeceğimiz Şarkı",
    body: [
      "Bu şarkıyı duyunca aklıma kareoke ve sen geliyosun. Benim sesim seninki kadar güzel değil ama olsun dimi :)",
    ],
    song: {
      src: "assets/audio/yanarim.mp3",
      button: "Şarkıyı çal",
      ready: "Şarkı hazır.",
      playing: "Çalıyor...",
      paused: "Durdu.",
      missing: "Şarkı dosyasını (yanarim.mp3 veya yanarim.mp4) assets/audio/ klasörüne ekleyince burada çalacak.",
    },
  },
  {
    type: "letter",
    theme: "peach",
    caption: "küçük zarf",
    answer: "fatmaturgut",
    question: "Bilet aldığımız ama iptal olduğu için gidemediğimiz konser kimindi? (bitişik küçük harf)",
    title: "Ne Olucaksa Seninle Olsun",
    body: [
      "Seninle daha birsürü konserlere gitmek, şarkılar dinlemek, gülüp eğlenmek istiyorum. Birsürü kurduğumuz hayallerin, planladığımız herşeyin konser gibi iptal olmasını istemiyorum. Ne olucaksa senle olsun.. 💗",
    ],
  },
  {
    type: "letter",
    theme: "green",
    caption: "yeşil zarf",
    answer: "söylecanım",
    answers: ["söylecanım", "soylecanim", "söyle canım", "soyle canim"],
    question: "2026 yılında dinlediğimiz ilk şarkı? (bitişik küçük harf)",
    title: "Yılın İlk Şarkısı",
    body: [
      "Bu şarkı her dinlediğimde duyduğumda beni yılbaşı gününe götürüyo. O gün hayatımın en güzel günüydü. ilk defa ev tutup bir gece geçirmiştik. dizinin son bölümünü izlemiştik. aldığın resim kitabını boyamıştık. o ses türkiye izlemiştik, dans etmiştik. Hatırladıkça bile mutlu olduğum bir gün.",
      "Yeni yıla nasıl girersen öyle devam eder deniliyo. Ben hayatımın anlamıyla, herşeyimle, seninle girdim. Sensiz devam etmemeli. Seni çok seviyorum sevgilim 💗"
    ],
    song: {
      src: "assets/audio/soylecanim.mp3",
      button: "Şarkıyı çal",
      ready: "Şarkı hazır.",
      playing: "Çalıyor...",
      paused: "Durdu.",
      missing: "Şarkı dosyasını (soylecanim.mp3 veya soylecanim.mp4) assets/audio/ klasörüne ekleyince burada çalacak.",
    },
  },
];

const intro = document.querySelector(".intro-screen");
const memory = document.querySelector(".memory-screen");
const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const restartButton = document.querySelector("#restartButton");
const openGameButton = document.querySelector("#openGameButton");
const openPuzzleButton = document.querySelector("#openPuzzleButton");
const closeGameButton = document.querySelector("#closeGameButton");
const shuffleGameButton = document.querySelector("#shuffleGameButton");
const gamePanel = document.querySelector("#gamePanel");
const gameIntroNotice = document.querySelector("#gameIntroNotice");
const gameWinNotice = document.querySelector("#gameWinNotice");
const startGameButton = document.querySelector("#startGameButton");
const closeWinButton = document.querySelector("#closeWinButton");
const matchGrid = document.querySelector("#matchGrid");
const moveCounter = document.querySelector("#moveCounter");
const gameMessage = document.querySelector("#gameMessage");
const puzzlePanel = document.querySelector("#puzzlePanel");
const puzzleIntroNotice = document.querySelector("#puzzleIntroNotice");
const puzzleWinNotice = document.querySelector("#puzzleWinNotice");
const startPuzzleButton = document.querySelector("#startPuzzleButton");
const closePuzzleButton = document.querySelector("#closePuzzleButton");
const closePuzzleWinButton = document.querySelector("#closePuzzleWinButton");
const shufflePuzzleButton = document.querySelector("#shufflePuzzleButton");
const puzzleGrid = document.querySelector("#puzzleGrid");
const puzzlePreview = document.querySelector("#puzzlePreview");
const puzzleMoveCounter = document.querySelector("#puzzleMoveCounter");
const puzzleMessage = document.querySelector("#puzzleMessage");
const letterModal = document.querySelector("#letterModal");
const letterBackdrop = document.querySelector("#letterBackdrop");
const letterCloseButton = document.querySelector("#letterCloseButton");
const letterForm = document.querySelector("#letterForm");
const letterAnswer = document.querySelector("#letterAnswer");
const letterError = document.querySelector("#letterError");
const letterLock = document.querySelector("#letterLock");
const letterPaper = document.querySelector("#letterPaper");
const letterQuestion = document.querySelector("#letterQuestion");
const letterPaperTitle = document.querySelector("#letterPaperTitle");
const letterPaperBody = document.querySelector("#letterPaperBody");
const streamA = document.querySelector("#streamA");
const streamB = document.querySelector("#streamB");
let noClickCount = 0;
let openedCards = [];
let matchedPairs = 0;
let moveCount = 0;
let boardLocked = false;
let selectedPuzzleTile = null;
let puzzleMoveCount = 0;
let puzzleSolved = false;
let selectedSecretLetter = secretLetters[0];
let activeLetterAudio = null;
const confettiColors = ["#bd4d63", "#742c42", "#64766a", "#b6844f", "#f1cfca"];

function buildCard(item, index) {
  const card = document.createElement("article");
  card.className = "memory-card";
  card.dataset.caption = item.caption || "anımız";
  card.style.setProperty("--tilt", `${[-3, 2, -1, 3, -2, 1][index % 6]}deg`);

  if (item.type === "letter") {
    card.classList.add("secret-envelope-card");
    card.classList.add(`secret-envelope-${item.theme || "pink"}`);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Gizli mektubu aç");
    card.innerHTML = `<span class="secret-envelope-heart">♥</span>`;
    card.addEventListener("click", () => openSecretLetter(item));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSecretLetter(item);
      }
    });
    return card;
  }

  if (item.src) {
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.caption ? `${item.caption} fotoğrafı` : "Birlikte çekilen fotoğraf";
    image.loading = "lazy";
    card.appendChild(image);
    return card;
  }

  const placeholder = document.createElement("div");
  placeholder.className = "placeholder-art";
  placeholder.style.setProperty("--card-bg", colors[index % colors.length]);
  placeholder.innerHTML = `<span>${item.text}</span>`;
  card.appendChild(placeholder);
  return card;
}

function fillStream(stream, items, offset = 0) {
  stream.innerHTML = "";
  const repeatCount = items.length > 16 ? 2 : 4;
  const repeated = Array.from({ length: repeatCount }, () => items).flat();

  repeated.forEach((item, index) => {
    stream.appendChild(buildCard(item, index + offset));
  });
}

function chooseEvenly(items, limit) {
  if (items.length <= limit) {
    return items;
  }

  const step = (items.length - 1) / (limit - 1);
  return Array.from({ length: limit }, (_, index) => items[Math.round(index * step)]);
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function injectSecretLetters(items, startOffset = 0) {
  const withLetters = [];
  let letterIndex = startOffset;

  items.forEach((item, index) => {
    withLetters.push(item);

    if ((index + 1 + startOffset) % 5 === 0) {
      withLetters.push(secretLetters[letterIndex % secretLetters.length]);
      letterIndex += 1;
    }
  });

  return withLetters;
}

function render(items = configuredPhotos) {
  const source = items.length ? items : fallbackCards;
  const streamItems = chooseEvenly(source, 24);
  const firstStream = injectSecretLetters(streamItems, 0);
  const secondStream = injectSecretLetters(streamItems.slice().reverse(), 2);
  fillStream(streamA, firstStream, 0);
  fillStream(streamB, secondStream, 3);
}

function startExperience() {
  intro.classList.add("is-hidden");
  memory.classList.add("is-visible");
}

function updateMoveCounter() {
  moveCounter.textContent = `${moveCount} hamle`;
}

function updatePuzzleMoveCounter() {
  puzzleMoveCounter.textContent = `${puzzleMoveCount} hamle`;
}

function buildGameCard(cardData) {
  const card = document.createElement("button");
  card.className = "match-card";
  card.type = "button";
  card.dataset.matchId = cardData.matchId;
  card.setAttribute("aria-label", "Kapalı anı kartı");

  if (cardData.src) {
    const image = document.createElement("img");
    image.src = cardData.src;
    image.alt = cardData.caption;
    card.appendChild(image);
  }

  card.addEventListener("click", () => handleGameCardClick(card));
  return card;
}

function setupGame() {
  const source = configuredPhotos.length ? configuredPhotos : fallbackCards;
  const selectedPhotos = shuffle(source).slice(0, Math.min(6, source.length));
  const deck = shuffle(
    selectedPhotos.flatMap((photo, index) => [
      { ...photo, matchId: `memory-${index}-a` },
      { ...photo, matchId: `memory-${index}-b` },
    ])
  );

  openedCards = [];
  matchedPairs = 0;
  moveCount = 0;
  boardLocked = false;
  matchGrid.innerHTML = "";
  updateMoveCounter();
  gameMessage.textContent = "";

  deck.forEach((cardData) => {
    const card = buildGameCard(cardData);
    card.dataset.pair = cardData.src || cardData.caption;
    card.style.setProperty("--card-index", matchGrid.children.length);
    matchGrid.appendChild(card);
  });
}

function openGame() {
  closePuzzle(true);
  gamePanel.hidden = false;
  gameIntroNotice.hidden = false;
  gameIntroNotice.classList.remove("is-leaving");
  gameWinNotice.hidden = true;
  gameWinNotice.classList.remove("is-leaving");
  gamePanel.classList.add("is-waiting");
  gamePanel.classList.remove("is-preparing");
  memory.classList.add("is-playing");
  openedCards = [];
  matchedPairs = 0;
  moveCount = 0;
  boardLocked = true;
  matchGrid.innerHTML = "";
  gameMessage.textContent = "";
  updateMoveCounter();
  gamePanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closeGame(keepMemoryVisible = false) {
  gamePanel.hidden = true;
  gameIntroNotice.hidden = true;
  gameIntroNotice.classList.remove("is-leaving");
  gameWinNotice.hidden = true;
  gameWinNotice.classList.remove("is-leaving");
  gamePanel.classList.remove("is-waiting");
  gamePanel.classList.remove("is-preparing");

  if (!keepMemoryVisible) {
    memory.classList.remove("is-playing");
  }
}

function startMemoryGame() {
  gamePanel.classList.remove("is-waiting");
  gamePanel.classList.add("is-preparing");
  setupGame();
  gameIntroNotice.classList.add("is-leaving");

  window.setTimeout(() => {
    gameIntroNotice.hidden = true;
    gameIntroNotice.classList.remove("is-leaving");
  }, 440);

  window.setTimeout(() => {
    gamePanel.classList.remove("is-preparing");
  }, 1120);
}

function showWinNotice() {
  window.setTimeout(() => {
    gameWinNotice.hidden = false;
    gameWinNotice.classList.remove("is-leaving");
    celebrateWinNotice();
  }, 520);
}

function closeWinNotice() {
  gameWinNotice.classList.add("is-leaving");

  window.setTimeout(() => {
    gameWinNotice.hidden = true;
    gameWinNotice.classList.remove("is-leaving");
  }, 420);
}

function buildPuzzleTile(slotIndex, pieceIndex, photo) {
  const tile = document.createElement("button");
  tile.className = "puzzle-tile";
  tile.type = "button";
  tile.dataset.correct = slotIndex;
  tile.dataset.current = pieceIndex;
  tile.dataset.place = slotIndex + 1;
  tile.style.setProperty("--tile-index", slotIndex);
  tile.setAttribute("aria-label", `${slotIndex + 1}. puzzle parçası`);
  applyPuzzlePiece(tile, pieceIndex, photo.src);
  tile.addEventListener("click", () => handlePuzzleTileClick(tile));
  return tile;
}

function applyPuzzlePiece(tile, pieceIndex, photoSrc) {
  const column = pieceIndex % 3;
  const row = Math.floor(pieceIndex / 3);

  tile.dataset.current = pieceIndex;
  tile.style.backgroundImage = `url("${photoSrc}")`;
  tile.style.backgroundSize = "300% 300%";
  tile.style.backgroundPosition = `${column * 50}% ${row * 50}%`;
}

function setupPuzzle() {
  const source = configuredPhotos.length ? configuredPhotos : fallbackCards;
  const photo = shuffle(source)[0];
  const solvedPieces = Array.from({ length: 9 }, (_, index) => index);
  let shuffledPieces = solvedPieces;

  while (shuffledPieces.every((piece, index) => piece === index)) {
    shuffledPieces = shuffle(solvedPieces);
  }

  selectedPuzzleTile = null;
  puzzleMoveCount = 0;
  puzzleSolved = false;
  puzzleGrid.innerHTML = "";
  puzzlePreview.src = photo.src;
  puzzlePreview.alt = `${photo.caption} tamamlanmış hali`;
  puzzleMessage.textContent = "İki parçaya dokun; yerleri değişsin.";
  puzzleWinNotice.hidden = true;
  puzzleWinNotice.classList.remove("is-leaving");
  updatePuzzleMoveCounter();

  shuffledPieces.forEach((pieceIndex, slotIndex) => {
    puzzleGrid.appendChild(buildPuzzleTile(slotIndex, pieceIndex, photo));
  });
}

function openPuzzle() {
  closeGame(true);
  puzzlePanel.hidden = false;
  puzzleIntroNotice.hidden = false;
  puzzleIntroNotice.classList.remove("is-leaving");
  puzzleWinNotice.hidden = true;
  puzzleWinNotice.classList.remove("is-leaving");
  puzzlePanel.classList.add("is-waiting");
  puzzlePanel.classList.remove("is-preparing");
  memory.classList.add("is-playing");
  selectedPuzzleTile = null;
  puzzleMoveCount = 0;
  puzzleSolved = false;
  puzzleGrid.innerHTML = "";
  puzzlePreview.removeAttribute("src");
  puzzleMessage.textContent = "";
  updatePuzzleMoveCounter();
  puzzlePanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closePuzzle(keepMemoryVisible = false) {
  puzzlePanel.hidden = true;
  puzzleIntroNotice.hidden = true;
  puzzleIntroNotice.classList.remove("is-leaving");
  puzzleWinNotice.hidden = true;
  puzzleWinNotice.classList.remove("is-leaving");
  puzzlePanel.classList.remove("is-waiting");
  puzzlePanel.classList.remove("is-preparing");
  selectedPuzzleTile = null;

  if (!keepMemoryVisible) {
    memory.classList.remove("is-playing");
  }
}

function startPuzzleGame() {
  puzzlePanel.classList.remove("is-waiting");
  puzzlePanel.classList.add("is-preparing");
  setupPuzzle();
  puzzleIntroNotice.classList.add("is-leaving");

  window.setTimeout(() => {
    puzzleIntroNotice.hidden = true;
    puzzleIntroNotice.classList.remove("is-leaving");
  }, 440);

  window.setTimeout(() => {
    puzzlePanel.classList.remove("is-preparing");
  }, 980);
}

function handlePuzzleTileClick(tile) {
  if (puzzleSolved) {
    return;
  }

  if (!selectedPuzzleTile) {
    selectedPuzzleTile = tile;
    tile.classList.add("is-selected");
    puzzleMessage.textContent = "Şimdi değiştirmek istediğin parçayı seç.";
    return;
  }

  if (selectedPuzzleTile === tile) {
    tile.classList.remove("is-selected");
    selectedPuzzleTile = null;
    puzzleMessage.textContent = "İki parçaya dokun; yerleri değişsin.";
    return;
  }

  swapPuzzleTiles(selectedPuzzleTile, tile);
  selectedPuzzleTile.classList.remove("is-selected");
  selectedPuzzleTile = null;
  puzzleMoveCount += 1;
  updatePuzzleMoveCounter();
  puzzleMessage.textContent = "Güzel, bir parça daha yerine yaklaştı.";
  checkPuzzleSolved();
}

function swapPuzzleTiles(firstTile, secondTile) {
  const firstPiece = Number(firstTile.dataset.current);
  const secondPiece = Number(secondTile.dataset.current);
  const photoSrc = puzzlePreview.getAttribute("src");

  applyPuzzlePiece(firstTile, secondPiece, photoSrc);
  applyPuzzlePiece(secondTile, firstPiece, photoSrc);
}

function checkPuzzleSolved() {
  const tiles = Array.from(puzzleGrid.querySelectorAll(".puzzle-tile"));
  const isSolved = tiles.every(
    (tile) => Number(tile.dataset.current) === Number(tile.dataset.correct)
  );

  if (!isSolved) {
    return;
  }

  puzzleSolved = true;
  puzzleMessage.textContent = "Fotoğraf tamamlandı.";
  tiles.forEach((tile) => {
    tile.disabled = true;
    tile.classList.add("is-solved");
  });
  showPuzzleWinNotice();
}

function showPuzzleWinNotice() {
  window.setTimeout(() => {
    puzzleWinNotice.hidden = false;
    puzzleWinNotice.classList.remove("is-leaving");
    celebratePuzzleWinNotice();
  }, 580);
}

function closePuzzleWinNotice() {
  puzzleWinNotice.classList.add("is-leaving");

  window.setTimeout(() => {
    puzzleWinNotice.hidden = true;
    puzzleWinNotice.classList.remove("is-leaving");
  }, 420);
}

function normalizeSecretAnswer(value) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function isSecretAnswerCorrect(letter, value) {
  const normalizedValue = normalizeSecretAnswer(value);
  const acceptedAnswers = letter.answers || [letter.answer];

  return acceptedAnswers.some((answer) => normalizeSecretAnswer(answer) === normalizedValue);
}

function stopLetterAudio() {
  if (!activeLetterAudio) {
    return;
  }

  activeLetterAudio.pause();
  // currentTime can throw on some video elements or if metadata isn't loaded yet
  try {
    activeLetterAudio.currentTime = 0;
  } catch (e) {}
  activeLetterAudio = null;
}

function addLetterSong(song) {
  if (!song) {
    return;
  }

  const songWrap = document.createElement("div");
  songWrap.className = "letter-song";

  const songButton = document.createElement("button");
  songButton.className = "letter-song-button";
  songButton.type = "button";
  songButton.textContent = song.button || "Şarkıyı çal";

  const songStatus = document.createElement("p");
  songStatus.className = "letter-song-status";
  songStatus.textContent = song.ready || "";

  songWrap.append(songButton, songStatus);
  letterPaperBody.appendChild(songWrap);

  let attempts = 0;

  async function startPlayback(format) {
    stopLetterAudio();

    if (format === "mp3") {
      const audio = new Audio(song.src);
      activeLetterAudio = audio;

      audio.addEventListener("playing", () => {
        if (activeLetterAudio !== audio) return;
        songButton.textContent = "Duraklat";
        songStatus.textContent = song.playing || "Çalıyor...";
      });

      audio.addEventListener("pause", () => {
        if (activeLetterAudio !== audio) return;
        songButton.textContent = song.button || "Şarkıyı çal";
        songStatus.textContent = song.paused || "Durdu.";
      });

      audio.addEventListener("ended", () => {
        if (activeLetterAudio !== audio) return;
        songButton.textContent = song.button || "Şarkıyı çal";
        songStatus.textContent = song.paused || "Durdu.";
      });

      const handleError = () => {
        if (activeLetterAudio !== audio) return;

        if (attempts === 0) {
          attempts++;
          startPlayback("mp4");
        } else {
          songStatus.textContent = song.missing || "Şarkı dosyası bulunamadı.";
          songButton.textContent = song.button || "Şarkıyı çal";
          activeLetterAudio = null;
        }
      };

      audio.addEventListener("error", handleError);

      try {
        await audio.play();
      } catch (error) {
        handleError();
      }

    } else if (format === "mp4") {
      const existingVideo = songWrap.querySelector(".letter-video");
      if (existingVideo) {
        existingVideo.remove();
      }

      const video = document.createElement("video");
      video.className = "letter-video";
      video.src = song.src.replace(/\.mp3$/i, ".mp4");
      video.controls = true;
      video.playsInline = true;

      // Prepend video to songWrap so it appears beautifully above the controls
      songWrap.prepend(video);
      activeLetterAudio = video;

      video.addEventListener("playing", () => {
        if (activeLetterAudio !== video) return;
        songButton.textContent = "Duraklat";
        songStatus.textContent = song.playing || "Çalıyor...";
      });

      video.addEventListener("pause", () => {
        if (activeLetterAudio !== video) return;
        songButton.textContent = song.button || "Şarkıyı çal";
        songStatus.textContent = song.paused || "Durdu.";
      });

      video.addEventListener("ended", () => {
        if (activeLetterAudio !== video) return;
        songButton.textContent = song.button || "Şarkıyı çal";
        songStatus.textContent = song.paused || "Durdu.";
      });

      const handleVideoError = () => {
        if (activeLetterAudio !== video) return;
        video.remove();
        songStatus.textContent = song.missing || "Şarkı dosyası bulunamadı.";
        songButton.textContent = song.button || "Şarkıyı çal";
        activeLetterAudio = null;
      };

      video.addEventListener("error", handleVideoError);

      try {
        await video.play();
      } catch (error) {
        handleVideoError();
      }
    }
  }

  songButton.addEventListener("click", () => {
    if (activeLetterAudio) {
      if (!activeLetterAudio.paused) {
        activeLetterAudio.pause();
      } else {
        activeLetterAudio.play().catch(() => {});
      }
    } else {
      attempts = 0;
      startPlayback("mp3");
    }
  });
}

function openSecretLetter(letter = secretLetters[0]) {
  stopLetterAudio();
  selectedSecretLetter = letter;
  
  // 1. Remove hidden attribute so it renders in the DOM
  letterModal.hidden = false;
  
  // 2. Clear any active close transitions
  letterModal.classList.remove("is-leaving");
  
  // 3. Force a browser reflow to ensure the transition is registered
  void letterModal.offsetWidth;
  
  // 4. Add is-visible class to trigger transitions
  letterModal.classList.add("is-visible");

  letterModal.classList.remove("is-blue", "is-peach", "is-green");
  if (letter.theme && letter.theme !== "pink") {
    letterModal.classList.add(`is-${letter.theme}`);
  }
  letterLock.hidden = false;
  letterPaper.hidden = true;
  letterQuestion.textContent = letter.question;
  letterPaperTitle.textContent = letter.title;
  letterPaperBody.innerHTML = "";
  letter.body.forEach((paragraph) => {
    const text = document.createElement("p");
    text.textContent = paragraph;
    letterPaperBody.appendChild(text);
  });
  addLetterSong(letter.song);
  letterAnswer.value = "";
  letterError.textContent = "";
  window.setTimeout(() => letterAnswer.focus(), 80);
}

function closeSecretLetter() {
  stopLetterAudio();
  
  // 1. Remove is-visible and add is-leaving
  letterModal.classList.remove("is-visible");
  letterModal.classList.add("is-leaving");
  
  // 2. Hide completely after transition completes (400ms transition + buffer)
  window.setTimeout(() => {
    if (letterModal.classList.contains("is-leaving")) {
      letterModal.hidden = true;
      letterModal.classList.remove("is-leaving");
    }
  }, 420);
}

function unlockSecretLetter() {
  letterLock.hidden = true;
  letterPaper.hidden = false;
  letterError.textContent = "";
}

function handleGameCardClick(card) {
  if (
    boardLocked ||
    card.classList.contains("is-open") ||
    card.classList.contains("is-matched")
  ) {
    return;
  }

  card.classList.add("is-open");
  card.setAttribute("aria-label", "Açık anı kartı");
  openedCards.push(card);

  if (openedCards.length !== 2) {
    return;
  }

  moveCount += 1;
  updateMoveCounter();

  const [firstCard, secondCard] = openedCards;
  const isMatch = firstCard.dataset.pair === secondCard.dataset.pair;

  if (isMatch) {
    firstCard.classList.add("is-matched");
    secondCard.classList.add("is-matched");
    celebrateMatch(firstCard);
    celebrateMatch(secondCard);
    firstCard.disabled = true;
    secondCard.disabled = true;
    openedCards = [];
    matchedPairs += 1;
    gameMessage.textContent = "Bir anı daha yerine oturdu.";

    if (matchedPairs === 6) {
      gameMessage.textContent = "Tüm anılarımız tamamlandı.";
      showWinNotice();
    }

    return;
  }

  boardLocked = true;
  gameMessage.textContent = "Bu ikisi olmadı, bir daha deneyelim.";

  window.setTimeout(() => {
    firstCard.classList.remove("is-open");
    secondCard.classList.remove("is-open");
    firstCard.setAttribute("aria-label", "Kapalı anı kartı");
    secondCard.setAttribute("aria-label", "Kapalı anı kartı");
    openedCards = [];
    boardLocked = false;
  }, 760);
}

function celebrateMatch(card) {
  card.classList.remove("is-celebrating");
  void card.offsetWidth;
  card.classList.add("is-celebrating");

  window.setTimeout(() => {
    card.classList.remove("is-celebrating");
  }, 560);

  const panelRect = gamePanel.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;

  for (let index = 0; index < 18; index += 1) {
    const piece = document.createElement("span");
    const edge = index % 4;
    const along = 0.12 + Math.random() * 0.76;
    let startX = cardRect.left;
    let startY = cardRect.top;

    if (edge === 0) {
      startX = cardRect.left + cardRect.width * along;
    } else if (edge === 1) {
      startX = cardRect.right;
      startY = cardRect.top + cardRect.height * along;
    } else if (edge === 2) {
      startX = cardRect.left + cardRect.width * along;
      startY = cardRect.bottom;
    } else {
      startY = cardRect.top + cardRect.height * along;
    }

    const angle = Math.atan2(startY - cardCenterY, startX - cardCenterX);
    const distance = 34 + Math.random() * 42;
    const x = Math.cos(angle) * distance + (Math.random() - 0.5) * 26;
    const y = Math.sin(angle) * distance + (Math.random() - 0.5) * 26;

    piece.className = "confetti-piece";
    piece.style.setProperty("--start-x", `${startX - panelRect.left}px`);
    piece.style.setProperty("--start-y", `${startY - panelRect.top}px`);
    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    piece.style.setProperty("--spin", `${160 + Math.random() * 260}deg`);
    piece.style.setProperty(
      "--confetti-color",
      confettiColors[index % confettiColors.length]
    );

    gamePanel.appendChild(piece);
    window.setTimeout(() => piece.remove(), 760);
  }
}

function celebrateWinNotice() {
  const panelRect = gamePanel.getBoundingClientRect();
  const noticeCard = gameWinNotice.querySelector(".game-intro-card");
  const noticeRect = noticeCard.getBoundingClientRect();
  const startX = noticeRect.left + noticeRect.width / 2 - panelRect.left;
  const startY = noticeRect.top + noticeRect.height / 2 - panelRect.top;

  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 42;
    const distance = 86 + Math.random() * 96;
    const x = Math.cos(angle) * distance + (Math.random() - 0.5) * 34;
    const y = Math.sin(angle) * distance + (Math.random() - 0.5) * 34;

    piece.className = "confetti-piece modal-confetti-piece";
    piece.style.setProperty("--start-x", `${startX}px`);
    piece.style.setProperty("--start-y", `${startY}px`);
    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    piece.style.setProperty("--spin", `${220 + Math.random() * 360}deg`);
    piece.style.setProperty(
      "--confetti-color",
      confettiColors[index % confettiColors.length]
    );

    gamePanel.appendChild(piece);
    window.setTimeout(() => piece.remove(), 820);
  }
}

function celebratePuzzleWinNotice() {
  const panelRect = puzzlePanel.getBoundingClientRect();
  const noticeCard = puzzleWinNotice.querySelector(".game-intro-card");
  const noticeRect = noticeCard.getBoundingClientRect();
  const startX = noticeRect.left + noticeRect.width / 2 - panelRect.left;
  const startY = noticeRect.top + noticeRect.height / 2 - panelRect.top;

  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 42;
    const distance = 86 + Math.random() * 96;
    const x = Math.cos(angle) * distance + (Math.random() - 0.5) * 34;
    const y = Math.sin(angle) * distance + (Math.random() - 0.5) * 34;

    piece.className = "confetti-piece modal-confetti-piece";
    piece.style.setProperty("--start-x", `${startX}px`);
    piece.style.setProperty("--start-y", `${startY}px`);
    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    piece.style.setProperty("--spin", `${220 + Math.random() * 360}deg`);
    piece.style.setProperty(
      "--confetti-color",
      confettiColors[index % confettiColors.length]
    );

    puzzlePanel.appendChild(piece);
    window.setTimeout(() => piece.remove(), 820);
  }
}

function resetForgiveButtons() {
  noClickCount = 0;
  yesButton.style.setProperty("--yes-extra", "0px");
  noButton.disabled = false;
  noButton.classList.remove("is-disabled");
  noButton.textContent = "Hayır";
}

yesButton.addEventListener("click", startExperience);

noButton.addEventListener("click", () => {
  noClickCount += 1;
  const extraSize = Math.min(noClickCount * 16, 128);
  yesButton.style.setProperty("--yes-extra", `${extraSize}px`);

  if (noClickCount >= 8) {
    noButton.disabled = true;
    noButton.classList.add("is-disabled");
    noButton.textContent = "Artık Evet :)";
  }
});

restartButton.addEventListener("click", () => {
  memory.classList.remove("is-visible");
  intro.classList.remove("is-hidden");
  closeGame(true);
  closePuzzle(true);
  resetForgiveButtons();
});

openGameButton.addEventListener("click", openGame);
openPuzzleButton.addEventListener("click", openPuzzle);
closeGameButton.addEventListener("click", () => closeGame());
shuffleGameButton.addEventListener("click", setupGame);
startGameButton.addEventListener("click", startMemoryGame);
closeWinButton.addEventListener("click", closeWinNotice);
closePuzzleButton.addEventListener("click", () => closePuzzle());
shufflePuzzleButton.addEventListener("click", setupPuzzle);
startPuzzleButton.addEventListener("click", startPuzzleGame);
closePuzzleWinButton.addEventListener("click", () => {
  closePuzzleWinNotice();
  window.setTimeout(() => closePuzzle(), 420);
});
letterCloseButton.addEventListener("click", closeSecretLetter);
letterBackdrop.addEventListener("click", closeSecretLetter);
letterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isSecretAnswerCorrect(selectedSecretLetter, letterAnswer.value)) {
    unlockSecretLetter();
    return;
  }

  letterError.textContent = "Biraz daha düşün";
  letterAnswer.select();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !letterModal.hidden) {
    closeSecretLetter();
  }
});

function closeWelcomeOverlay() {
  const overlay = document.getElementById("welcomeOverlay");
  if (!overlay || overlay.classList.contains("is-leaving")) return;

  overlay.classList.remove("is-visible");
  overlay.classList.add("is-leaving");

  // Wait for the exit transition to finish before setting display to none
  window.setTimeout(() => {
    overlay.style.display = "none";
  }, 780);
}

function showWelcomeOverlay() {
  const overlay = document.getElementById("welcomeOverlay");
  if (!overlay) return;

  // 100ms gecikmeyle görünür yap (giriş efekti)
  window.setTimeout(() => {
    overlay.classList.add("is-visible");
  }, 100);

  // Kapatma butonuna basıldığında overlay'i kapat
  const closeBtn = document.getElementById("closeWelcomeBtn");
  let autoCloseTimeout;

  const handleClose = (event) => {
    if (event) event.stopPropagation();
    if (autoCloseTimeout) window.clearTimeout(autoCloseTimeout);
    closeWelcomeOverlay();
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", handleClose);
  }

  // Boş alana tıklandığında da kapansın
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      handleClose(event);
    }
  });

  // 5 saniye durduktan sonra otomatik kapat
  autoCloseTimeout = window.setTimeout(() => {
    closeWelcomeOverlay();
  }, 5000);
}

render();
showWelcomeOverlay();
