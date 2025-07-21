---
layout: about
title: about
permalink: /
subtitle: EE Student. 

profile:
  align: right
  image: figo.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Surabaya, Keputih</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---
Hey, thanks for stopping by! 👋

I’m an **Electrical Engineering** student at the **Sepuluh Nopember Institute of Technology (ITS)** and the **Head of the Electronics Division** for the **Abinara-1 robotics team**. My team is focused on solving challenging problems in legged robotics for competition purpose and research. We recently secured **1st place** and a **Best Strategy award** at the **2024 National Robot Contest (KRI)**, and received funding from Kemdiktisaintek for quadruped robot dog research.

My expertise covers the **full hardware stack**, from architecting **high-speed digital, analog, multi-layer PCBs** and developing complete **IoT stacks**, to writing **robust, low-level firmware in C/C++**. And just recently picked up an interest in **modern control theory**, particularly in **optimal control** for my thesis project.

I’ve applied these skills to various projects, from developing a complex **dynamic quadruped robot dog**, **high-speed PCB designs** for a custom **Jetson carrier board**, various **IoT devices**, that you can check out in detail in the <a href="{{ '/projects' | relative_url }}">projects</a> section.

I’m always eager to learn and collaborate on exciting projects, so feel free to reach out!

<div style="margin-top: 4rem;">
</div>

---
## Gallery

<style>
.gallery-img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.gallery-img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
}

.modal-caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}
</style>

<div class="row mt-4 g-4">
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/fiammetta/fia_render.jpeg' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 1" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/fiammetta/fia_render.jpeg' | relative_url }}', 'Gallery Image 1')">
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/fiammetta/fia_real.png' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 2" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/fiammetta/fia_real.png' | relative_url }}', 'Gallery Image 2')">
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/chikaku/real1_cropped.jpeg' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 3" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/chikaku/real1_cropped.jpeg' | relative_url }}', 'Gallery Image 3')">
        </div>
    </div>
</div>


<div class="row mt-4 g-4">
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ 'assets/img/stromvy/DSC_0055.JPG' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 1" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ 'assets/img/stromvy/DSC_0055.JPG' | relative_url }}', 'Gallery Image 4')">
        </div>
    </div>
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/kri/team.jpeg' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 2" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/kri/team.jpeg' | relative_url }}', 'Gallery Image 5')">
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/hotberry/19.jpeg' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 3" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/hotberry/19.jpeg' | relative_url }}', 'Gallery Image 6')">
        </div>
    </div>
</div>


<div class="row mt-4 g-4">
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/mynd/bel.jpg' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 1" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/mynd/bel.jpg' | relative_url }}', 'Gallery Image 7')">
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/garaga/garaga.jpg' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 2" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/garaga/garaga.jpg' | relative_url }}', 'Gallery Image 8')">
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="{{ '/assets/img/Tulibot/tulibot.jpeg' | relative_url }}" 
                 class="card-img-top gallery-img" 
                 alt="Gallery Image 3" 
                 style="height: 200px; object-fit: cover;"
                 onclick="openModal('{{ '/assets/img/Tulibot/tulibot.jpeg' | relative_url }}', 'Gallery Image 9')">
        </div>
    </div>
</div>


<!-- Modal -->
<div id="imageModal" class="modal">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="modalImg">
    <div class="modal-caption" id="caption"></div>
</div>

<script>
function openModal(src, alt) {
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('modalImg').src = src;
    document.getElementById('caption').innerHTML = alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    var modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
</script>

<div class="mt-5 mb-4">
</div>
---