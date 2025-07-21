---
layout: page
title: Fiammetta
description: A dynamic quadruped robot dog.
img: assets/img/fiammetta/fia_real.png
importance: 1
category: robotics
related_publications: true
---

**Fiammetta** is a dynamic quadruped robot dog, my most challenging and ambitious project, designed to achieve agile and robust locomotion over complex terrains. The core of the robot is its sophisticated control framework based on Donghyun Kim and co's work. This system integrates **Model Predictive Control (MPC)** to plan optimal ground-reaction forces and **Whole-Body Impulse Control** to manage the final commands for the motor by considering the full-body dynamics of the robot. Although the original software is publicly available, I chose to reimplement the entire control stack from scratch to solidify my understanding of the complete system. The entire software architecture is implemented in C++, utilizing specialized libraries like Pinocchio for rigid body dynamics and qpOASES for real-time optimization, all of which I learned and integrated myself.

As the lead software and systems engineer on this project, I wrote the low-level firmware for the robot's microcontrollers, developed the entire high-level control software stack on the PC, and am currently creating a custom vision system for obstacle avoidance. This endeavor required me to independently learn advanced topics in control theory and applied mathematics, far outside my primary electronics and embedded systems background. The results are highly promising, with Fiammetta demonstrating stable dynamic behavior in simulation, and is currently undergoing real-world
tuning and testing.

## The Journey
This journey with Fiammetta has been unlike any other, coming from an electronics background, the dive into advanced control theory was incredibly steep. It was a semester long grind of reading papers, and turning them into codes. I want to state clearly that this project would have been impossible without the established academic work that served as my guide that is {% cite donghyun2019 %} and {% cite leziart2022 %}.

Understanding how to implement the papers' algorithms was a challenge, but the real implementation is no easy feat either. Since i don't really have any idea on how to confirm the correctness of the simulation's model, the first result
is a disaster as shown in following video. Where the robot frontflips, can't stand correctly, and is just unstable.

<style>
.video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.video-small {
    max-width: 100%;
    max-height: 450px;
    width: auto;
    height: auto;
}
</style>

<div class="row">
    <div class="col-md-6 mt-3">
        {% include video.liquid path="assets/img/fiammetta/fail1.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
    <div class="col-md-6 mt-3">
        {% include video.liquid path="assets/img/fiammetta/fail3.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>

This is currently is still a work in progress, but the latest results are pretty promising here. The robot were able to
take a hit from a kick, and still able to trot somewhat stably.

<div class="row mt-4">
    <div class="col-md-6 offset-md-4">
        {% include video.liquid path="assets/img/fiammetta/fia_demo_kick.mp4" class="video-small rounded z-depth-1" controls=true %}
    </div>
</div>

Currently, progress for real robot is stopped here, as one of the motor just died. But while at it, i tried to integrate a vision stack
on the control system for obstacle/terrain avoidance.

For the elevation mapping, We use a depth camera that is then processed to generate the heightmap of the terrain.
This part is developed by my teammate (shout out to <a href="https://github.com/hanzamzamy" target="_blank">Zamzamy</a>).
This heightmap is then fed into a QP solver to generate the terrain avoidance trajectory for the leg's swing phase.

<div class="row">
    <div class="col-md-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/fiammetta/vision.png" title="Heightmap" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-6 mt-3">
        {% include figure.liquid loading="eager" path="assets/img/fiammetta/optimized_trajectory.png" title="Optimized Trajectory" class="img-fluid rounded z-depth-1" %}
    </div>
</div>