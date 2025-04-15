---
layout: default
title: "Meet the Table Hosts"
---

## Meet the Table Hosts

<div class="host-grid">

  <div class="host-card">
    <img class="host-image" src="/assets/images/hosts/allan.jpg" alt="Allan">
    <h3>Allan</h3>
    <p>Game bio goes here</p>
    <button onclick="loadGamesIntoDisplay('Allan', 355830)">View Games</button>
  </div>

  <div class="host-card">
    <img class="host-image" src="/assets/images/hosts/graham.jpg" alt="Graham">
    <h3>Graham</h3>
    <p>Game bio goes here</p>
    <button onclick="loadGamesIntoDisplay('Graham', 355840)">View Games</button>
  </div>

  <div class="host-card">
    <img class="host-image" src="/assets/images/hosts/rachel_dom.jpg" alt="Rachel & Dom">
    <h3>Rachel & Dom</h3>
    <p>Game bio goes here</p>
    <button onclick="loadGamesIntoDisplay('Rachel & Dom', 355860)">View Games</button>
  </div>

  <div class="host-card">
    <img class="host-image" src="/assets/images/hosts/phil.jpg" alt="Phil">
    <h3>Phil</h3>
    <p>Game bio goes here</p>
    <button onclick="loadGamesIntoDisplay('Phil', 355850)">View Games</button>
  </div>

  <!-- Repeat for other hosts -->

<!-- Shared games list display section (initially hidden) -->
<div id="games-display-container" style="display: none;">
  <h2 id="games-display-title"></h2>
  <div id="games-display" class="games-list"></div>
</div>

<script src="{{ '/assets/gamelist.js' | relative_url }}"></script>

</div>
