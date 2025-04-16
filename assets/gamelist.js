// Function to convert BBCode to HTML
function convertBBCodeToHTML(bggText) {
  bggText = bggText.replace(/\[b\]/gi, "<strong>")
                   .replace(/\[\/b\]/gi, "</strong>");
  bggText = bggText.replace(/\[url=(.*?)\](.*?)\[\/url\]/gi, '<a href="$1" target="_blank">$2</a>');
  bggText = bggText.replace(/(♟️)/g, '<br>$1')
                   .replace(/(🎞️)/g, '<br>$1');
  bggText = bggText.replace(/(<strong>Players:)/gi, '<br>$1')
                   .replace(/(<strong>Complexity:)/gi, '<br>$1')
                   .replace(/(<strong>Play Time:)/gi, '<br>$1');
  return bggText;
}

// Function to fetch thumbnail from BGG "thing" endpoint
async function fetchThumbnail(objectid, imageId) {
  const thingURL = "https://boardgamegeek.com/xmlapi2/thing?id=" + objectid;
  try {
    const response = await fetch(thingURL);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const thumbnailElement = xmlDoc.querySelector("thumbnail");
    if (thumbnailElement) {
      document.getElementById(imageId).src = thumbnailElement.textContent;
    }
  } catch (error) {
    console.error("Error fetching thumbnail for objectid " + objectid + ":", error);
  }
}

// Load Geeklist for a given host and inject into main container
async function loadGamesIntoDisplay(hostName, geeklistId) {
  const container = document.getElementById('games-display');
  const title = document.getElementById('games-display-title');
  const displayBox = document.getElementById('games-display-container');

  // Unhide the container before doing anything else
  displayBox.style.display = 'block';

  container.innerHTML = '<p>Loading games...</p>';
  title.textContent = `${hostName}'s Game List`;

  const geeklistURL = `https://boardgamegeek.com/xmlapi/geeklist/${geeklistId}`;

  try {
    const response = await fetch(geeklistURL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const items = xmlDoc.getElementsByTagName("item");
    let output = "";

    // Loop through each geeklist item
    Array.from(items).forEach(function(item) {
      // Get the game title from the "objectname" attribute
      const objectid = item.getAttribute("objectid");
      const objectname = item.getAttribute("objectname") || "Untitled";
      // Build a link to the game's BoardGameGeek page using the objectid
      const bggLink = `https://boardgamegeek.com/boardgame/${objectid}`;

      // Get the body text (which contains BBCode) and convert it to HTML
      const bodyElem = item.querySelector("body");
      let bodyText = bodyElem ? bodyElem.textContent : "";
      bodyText = convertBBCodeToHTML(bodyText);

      // Create a unique ID for the image element for this game
      const imageId = "thumbnail-" + objectid;

      // Build the HTML for this geeklist item
      output += `
        <div class="geeklist-item" style="border-bottom:1px solid #ccc; padding:1rem 0; margin-bottom:1rem;">
          <div class="geeklist-thumbnail" style="margin-bottom: 0.5rem;">
            <!-- Thumbnail image. The src is empty initially, to be filled in asynchronously -->
            <img id="${imageId}" src="" alt="Thumbnail for ${objectname}" style="max-width:150px;">
          </div>
           <div class="geeklist-info">
          <h3>
            <a href="${bggLink}" target="_blank">${objectname}</a>
          </h3>

          <div class="geeklist-description">
            ${bodyText}
          </div>
          </div>
        </div>
      `;
    });

// Append the footer link to the output
output += `
<div class="geeklist-footer" style="text-align: center; margin-top: 1rem;">
  <a href="https://boardgamegeek.com/geeklist/${geeklistId}" target="_blank">View Full Geeklist on BoardGameGeek</a>
</div>
`;

// Then update the container HTML
container.innerHTML = output;

    // Now, loop through the items again to fetch and set each thumbnail image
    Array.from(items).forEach(function(item) {
      const objectid = item.getAttribute("objectid");
      const imageId = "thumbnail-" + objectid;
      fetchThumbnail(objectid, imageId);
    });

  } catch (error) {
    console.error("Error loading Geeklist:", error);
    container.innerHTML =
      "<p>Error loading Geeklist data.</p>";
  }
};
