---
layout: default
title: "Meet the Table Hosts"
permalink: /hosts
---

## Meet the Table Hosts

<section class="host-selector">
  {% for host in site.data.hosts %}
    <button 
      class="host-button" 
      data-host="{{ host.name }}" 
      data-list="{{ host.geeklist_id }}"
      data-bio="{{ host.bio | escape }}">
      <img src="{{ host.image | relative_url }}" alt="{{ host.name }}">
      <span>{{ host.name }}</span>
    </button>
  {% endfor %}
</section>

<!-- Shared games list display section (initially hidden) -->
<div id="games-display-container" style="display:none;">
  <div id="host-bio-container" style="margin-bottom: 1rem;">
    <h3 id="host-bio-title" style="margin-bottom: 0.25rem;"></h3>
    <div id="host-bio" class="host-bio"></div>
  </div>
  <h2 id="games-display-title"></h2>
  <div id="games-display" class="games-list"></div>
</div>

<script>
{% assign placeholder_img = site.baseurl | append: "/assets/images/placeholder-thumbnail.png" %}
{% include gamelist.js image=placeholder_img %}
</script>
<script>
const buttons = document.querySelectorAll('.host-button');
const gamesContainer = document.getElementById('games-display-container');
const titleContainer = document.getElementById('games-display-title');
const gamesDisplay = document.getElementById('games-display');
const bioContainer = document.getElementById('host-bio-container');
const bioText = document.getElementById('host-bio');
const bioTitle = document.getElementById('host-bio-title');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show and update the bio section
    bioContainer.style.display = 'block';
    bioTitle.textContent = `Meet ${btn.dataset.host}`;
    bioText.textContent = btn.dataset.bio;

    // Update game list title and load
    document.getElementById('games-display-title').textContent = `${btn.dataset.host}'s Game List`;
    document.getElementById('games-display-container').style.display = 'block';
    loadGamesIntoDisplay(btn.dataset.host, btn.dataset.list);
  });
});


</script>

