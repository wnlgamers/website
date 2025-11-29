// Host image from the include – currently unused, but kept
// in case you want to show a single host photo above the list later.
const imgUrl = "{{ include.image }}";

console.log("gameslist.js loaded (no per-game images), imgUrl =", imgUrl);

// Convert BBCode-ish content to HTML
function convertBBCodeToHTML(bggText = "") {
  return bggText
    .replace(/\[b\]/gi, "<strong>").replace(/\[\/b\]/gi, "</strong>")
    .replace(/\[url=(.*?)\](.*?)\[\/url\]/gi, '<a href="$1" target="_blank" rel="noopener">$2</a>')
    .replace(/(♟️)/g, '<br>$1')
    .replace(/(🎞️)/g, '<br>$1')
    .replace(/(<strong>Players:)/gi, '<br>$1')
    .replace(/(<strong>Complexity:)/gi, '<br>$1')
    .replace(/(<strong>Play Time:)/gi, '<br>$1');
}

async function loadGamesIntoDisplay(hostName, geeklistId) {
  console.log("loadGamesIntoDisplay called:", { hostName, geeklistId });

  const container  = document.getElementById("games-display");
  const title      = document.getElementById("games-display-title");
  const displayBox = document.getElementById("games-display-container");

  if (!container || !title || !displayBox) {
    console.warn("One or more display elements not found");
    return;
  }

  displayBox.style.display = "block";
  container.innerHTML = "<p>Loading games...</p>";
  title.textContent = `${hostName}'s Game List`;

  if (!geeklistId) {
    console.log("No geeklistId provided");
    container.innerHTML = "<p>No games list yet — watch this space…</p>";
    return;
  }

  const url = `/assets/data/geeklist-${geeklistId}.json`;
  console.log("Fetching geeklist JSON from:", url);

  try {
    const res = await fetch(`${url}?v=${Date.now()}`, { cache: "no-store" });
    console.log("Fetch response:", res.status, res.statusText);
    if (!res.ok) throw new Error(`Failed to load ${url} – status ${res.status}`);

    const data = await res.json();
    console.log("Geeklist data loaded:", data);

    const items = Array.isArray(data.items) ? data.items : [];
    console.log(`Number of items in geeklist ${geeklistId}:`, items.length);

    if (items.length === 0) {
      container.innerHTML = "<p>No games found in this list yet.</p>";
      return;
    }

    let html = "";

    for (const it of items) {
      const objectid = it.objectid;
      const name     = it.name || "Untitled";
      const bggLink  = `https://boardgamegeek.com/boardgame/${objectid}`;
      const bodyHTML = convertBBCodeToHTML(it.body || "");
      const likes    = it.likes ?? 0;
      const comments = it.comments ?? 0;

      html += `
        <div class="geeklist-item" style="border-bottom:1px solid #ccc; padding:1rem 0; margin-bottom:1rem;">
          <div class="geeklist-info">
            <h3>
              <a href="${bggLink}" target="_blank" rel="noopener">${name}</a>
            </h3>
            <div class="geeklist-description">
              ${bodyHTML}
            </div>
            <div class="geeklist-meta" style="margin-top:0.5rem; font-size:0.9rem; color:#555;">
              👍 ${likes} · 💬 ${comments}
            </div>
          </div>
        </div>
      `;
    }

    html += `
      <div class="geeklist-footer" style="text-align:center; margin-top:1rem;">
        <a href="https://boardgamegeek.com/geeklist/${geeklistId}" target="_blank" rel="noopener">
          View full Geeklist on BoardGameGeek
        </a>
      </div>
    `;

    container.innerHTML = html;
  } catch (err) {
    console.error("Error in loadGamesIntoDisplay:", err);
    container.innerHTML = "<p>Sorry — couldn’t load this games list.</p>";
  }
}

// expose globally so inline onclick etc. can see it
window.loadGamesIntoDisplay = loadGamesIntoDisplay;
