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

// Function to add a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAllThumbnails(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const objectid = item.getAttribute("objectid");
    const imageId = "thumbnail-" + objectid;
    await delay(10); // Add a 500ms delay between each fetch
    fetchThumbnail(objectid, imageId);
  }
}

// Function to fetch thumbnail from BGG "thing" endpoint with fallback
async function fetchThumbnail(objectid, imageId) {
  const thingURL = "https://boardgamegeek.com/xmlapi2/thing?id=" + objectid;
  const fallbackImage = "/assets/images/placeholder-thumbnail.png"; // Update this path to match your site

  try {
    const response = await fetch(thingURL);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const thumbnailElement = xmlDoc.querySelector("thumbnail");

    const img = document.getElementById(imageId);

    if (thumbnailElement && thumbnailElement.textContent) {
      img.src = thumbnailElement.textContent;
    } else {
      img.src = fallbackImage;
    }

    // Fallback if image fails to load
    img.onerror = function () {
      this.onerror = null; // prevent loop if fallback image fails
      this.src = fallbackImage;
    };
  } catch (error) {
    console.error("Error fetching thumbnail for objectid " + objectid + ":", error);
    const img = document.getElementById(imageId);
    img.src = fallbackImage;
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

  // if no geeklist id is provided, show a message and return
  if (!geeklistId) {
    container.innerHTML = '<p>No gameslist yet but watch this space...</p>';
    return;
  }

  // Construct the URL for the Geeklist XML API
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
    Array.from(items).forEach(function (item) {
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
            <img id="${imageId}" src="/assets/images/placeholder-thumbnail.png"" alt="Thumbnail for ${objectname}" style="max-width:150px;">
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
    fetchAllThumbnails(Array.from(items));

  } catch (error) {
    console.error("Error loading Geeklist:", error);
    container.innerHTML =
      "<p>Error loading Geeklist data.</p>";
  }

};
