---
layout: page
title: Garaga
description: A 4-DoF robotic arm.
img: assets/img/garaga/garaga.jpg
importance: 3
category: robotics
giscus_comments: false
---

<div class="text-center">
    <img src="{{ '/assets/img/garaga/garaga.jpg' | relative_url }}" alt="Garaga" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>

**Garaga** is a 4-DoF robotic arm that I built during my time at second grade Vocational High School (SMK) for a school contest.
It was entirely designed and built by me, from the mechanical design to the electronics and firmware.
The mechanical design was done using now obsoleted **123D Design** which is then printed with PLA material, the electronics were just a simple **Arduino Nano**
that controls the servos with split supply, and the firmware was written in C++ using the Arduino IDE.
The arm is capable of basic movements that is controlled via joystick. From the joystick input, each of the servo's
angle is applied to the arm, without any inverse kinematics or trajectory planning.

Here is the demo that is performed by my classmate, because surprisingly controlling this thing is pretty hard 😂.
The arm is able to pick up a ball of paper and place it in a box :

<div class="row mt-4">
    <div class="col-12 d-flex justify-content-center">
        {% include video.liquid path="assets/img/garaga/demo.mp4" class="video-small rounded z-depth-1" controls=true %}
    </div>
</div>

And we won Best 3D Design award at the contest, yay 🎉. (Can't believe the certificate is handwritten lol)

<div class="text-center">
    <img src="{{ '/assets/img/garaga/best3d.jpg' | relative_url }}" alt="Best 3D Design" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>
