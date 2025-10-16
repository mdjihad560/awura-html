document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const playerCard = document.getElementById("playerCard");

  if (!video || !playerCard) return;

  const playPause = document.getElementById("playPause");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");
  const currentTimeEl = document.getElementById("currentTime");
  const progress = document.getElementById("progress");
  const muteBtn = document.getElementById("muteBtn");
  const soundOn = document.getElementById("soundOn");
  const soundOff = document.getElementById("soundOff");
  const fsBtn = document.getElementById("fsBtn");
  const controls = document.getElementById("controls");

  // Format seconds -> M:SS
  function formatTime(sec) {
    sec = Math.floor(sec);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + (s < 10 ? "0" + s : s);
  }

  // Toggle play/pause UI
  function updatePlayUI() {
    if (video.paused || video.ended) {
      playIcon.style.display = "";
      pauseIcon.style.display = "none";
      playPause.setAttribute("aria-label", "Play");
    } else {
      playIcon.style.display = "none";
      pauseIcon.style.display = "";
      playPause.setAttribute("aria-label", "Pause");
    }
  }

  playPause.addEventListener("click", () => {
    if (video.paused || video.ended) video.play();
    else video.pause();
    updatePlayUI();
  });

  video.addEventListener("click", () => {
    if (video.paused) video.play();
    else video.pause();
    updatePlayUI();
  });

  // Update time & progress
  video.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(video.currentTime);
    if (video.duration) {
      const percent = (video.currentTime / video.duration) * 100;
      progress.value = percent;
      progress.style.backgroundSize = percent + "% 100%";
    }
  });

  video.addEventListener("loadedmetadata", () => {
    progress.value = 0;
    progress.style.backgroundSize = "0% 100%";
  });

  progress.addEventListener("input", (e) => {
    const pct = parseFloat(e.target.value);
    progress.style.backgroundSize = pct + "% 100%";
  });

  progress.addEventListener("change", (e) => {
    const pct = parseFloat(e.target.value);
    if (video.duration) {
      video.currentTime = (pct / 100) * video.duration;
    }
  });

  // mute/unmute
  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    soundOn.style.display = video.muted ? "none" : "";
    soundOff.style.display = video.muted ? "" : "none";
  });

  // fullscreen
  fsBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      playerCard.requestFullscreen?.() ||
        playerCard.webkitRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() || document.webkitExitFullscreen?.();
    }
  });

  video.addEventListener("play", updatePlayUI);
  video.addEventListener("pause", updatePlayUI);
  video.addEventListener("ended", updatePlayUI);

  // Optional hide controls on idle
  let hideTimer;
  function showControls() {
    controls.style.opacity = "1";
    controls.style.transform = "translateY(0)";
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!video.paused) controls.style.opacity = "1";
    }, 3000);
  }

  playerCard.addEventListener("mousemove", showControls);
  playerCard.addEventListener("touchstart", showControls);

  updatePlayUI();
  soundOff.style.display = "none";
});

// End first video


document.addEventListener("DOMContentLoaded", () => {
  const video2 = document.getElementById("video2");
  const playerCard2 = document.getElementById("playerCard2");

  if (!video2 || !playerCard2) return;

  const playPause2 = document.getElementById("playPause2");
  const playIcon2 = document.getElementById("playIcon2");
  const pauseIcon2 = document.getElementById("pauseIcon2");
  const currentTimeEl2 = document.getElementById("currentTime2");
  const progress2 = document.getElementById("progress2");
  const muteBtn2 = document.getElementById("muteBtn2");
  const soundOn2 = document.getElementById("soundOn2");
  const soundOff2 = document.getElementById("soundOff2");
  const fsBtn2 = document.getElementById("fsBtn2");
  const controls2 = document.getElementById("controls2");

  // Format seconds -> M:SS
  function formatTime(sec) {
    sec = Math.floor(sec);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + (s < 10 ? "0" + s : s);
  }

  // Toggle play/pause UI (safe version)
  function updatePlayUI() {
    if (video2.paused || video2.ended) {
      if (playIcon2) playIcon2.style.display = "block";
      if (pauseIcon2) pauseIcon2.style.display = "none";
      playPause2?.setAttribute("aria-label", "Play");
    } else {
      if (playIcon2) playIcon2.style.display = "none";
      if (pauseIcon2) pauseIcon2.style.display = "block";
      playPause2?.setAttribute("aria-label", "Pause");
    }
  }

  // Play / Pause
  playPause2?.addEventListener("click", () => {
    if (video2.paused || video2.ended) video2.play();
    else video2.pause();
    updatePlayUI();
  });

  video2.addEventListener("click", () => {
    if (video2.paused) video2.play();
    else video2.pause();
    updatePlayUI();
  });

  // Time update
  video2.addEventListener("timeupdate", () => {
    if (currentTimeEl2)
      currentTimeEl2.textContent = formatTime(video2.currentTime);
    if (video2.duration && progress2) {
      const percent = (video2.currentTime / video2.duration) * 100;
      progress2.value = percent;
      progress2.style.backgroundSize = percent + "% 100%";
    }
  });

  // Metadata load
  video2.addEventListener("loadedmetadata", () => {
    if (progress2) {
      progress2.value = 0;
      progress2.style.backgroundSize = "0% 100%";
    }
  });

  // Progress bar seek
  progress2?.addEventListener("input", (e) => {
    const pct = parseFloat(e.target.value);
    progress2.style.backgroundSize = pct + "% 100%";
  });

  progress2?.addEventListener("change", (e) => {
    const pct = parseFloat(e.target.value);
    if (video2.duration) {
      video2.currentTime = (pct / 100) * video2.duration;
    }
  });

  // Mute / Unmute
  muteBtn2?.addEventListener("click", () => {
    video2.muted = !video2.muted;
    if (soundOn2) soundOn2.style.display = video2.muted ? "none" : "block";
    if (soundOff2) soundOff2.style.display = video2.muted ? "block" : "none";
  });

  // Fullscreen
  fsBtn2?.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      playerCard2.requestFullscreen?.() ||
        playerCard2.webkitRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() || document.webkitExitFullscreen?.();
    }
  });

  // Events
  video2.addEventListener("play", updatePlayUI);
  video2.addEventListener("pause", updatePlayUI);
  video2.addEventListener("ended", updatePlayUI);

  // Hide controls on idle
  let hideTimer;
  function showControls2() {
    if (!controls2) return;
    controls2.style.opacity = "1";
    controls2.style.transform = "translateY(0)";
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!video2.paused) {
        controls2.style.opacity = "0";
        controls2.style.transform = "translateY(20px)";
      }
    }, 3000);
  }

  playerCard2.addEventListener("mousemove", showControls2);
  playerCard2.addEventListener("touchstart", showControls2);

  updatePlayUI();
  if (soundOff2) soundOff2.style.display = "none";
  showControls2();
});

