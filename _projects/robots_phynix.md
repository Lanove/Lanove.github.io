---
layout: page
title: Phynix-1
description: A hexapod robot.
img: assets/img/Phynix-1/compe3.jpg
importance: 2
category: robotics
giscus_comments: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Phynix-1/compe3.jpg" title="Phynix-1 Final" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Phynix-1 at the Finals of KRI 2024.
</div>

Every team has a project that defines a generation. For the 2022 generation of the Abinara-1 robotics team, that project is Phynix-1. It stands as our team's very first hexapod robot, a bold step into a new domain of legged robotics, and a challenge that brought out the very best in all of us.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Phynix-1/phynix4.jpeg" title="Phynix-1 Early" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    One of the early iterations of Phynix-1.
</div>

As a core member of the team and the Head of the Electronic Division, I had the immense privilege of playing a significant part in the robot's development direction. My primary focus was architecting the entire electronics system from the ground up. This involved conceptualizing the hardware , directed the design of numerous custom PCBs. Beyond the electronics, I also developed the fundamental parts of the motion system, creating the core kinematics engine and motion planning algorithms for the robot. While I also had some influence on the mechanical design to ensure system integration, my main contributions were centered on bringing the robot to life through its electronics and software.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Phynix-1/compe2.jpeg" title="Competition" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Me and my teammate at the KRI 2024, preparing Phynix-1.
</div>

The architecture of Phynix-1 is a two-tiered system. The "brain" is an NVIDIA Jetson Nano, running Ubuntu 20, which handles all the high-level algorithms and controls, from pathfinding to strategy execution. This is bridged to the physical hardware by a powerful STM32F4 microcontroller. The STM32F4 communicates directly with all the low-level components, including the IMU for orientation data and the servos that control each of its six legs.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MHWqEUXArn0?si=C-LpKeoJXzXKVXB3&amp;start=332" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>

All the late nights, tireless trials culminated in the proudest moment for our team. At the Kontes Robot Indonesia (KRI) 2024 National competition, Phynix-1 not only competed but excelled. It navigated the challenging arena, earning our team both the....

<div class="text-center">
    <h3>1st Place victory and the prestigious Best Strategy award.</h3>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Phynix-1/abinara.jpg" title="Abinara-1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Abinara-1 ITS at KRI 2024 Awarding Ceremony.
</div>