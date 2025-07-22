---
layout: page
title: Mynd
description: A programmable school bell system.
img: assets/img/mynd/bel.jpg
importance: 2
category: embedded systems
giscus_comments: false
---

<div class="text-center">
    <img src="{{ '/assets/img/mynd/bel.jpg' | relative_url }}" alt="Mynd" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>

Mynd is a complete, custom-built automated school bell system designed to be flexible, user-friendly, and highly configurable that is deployed on local primary school around my hometown. It replaces outdated, rigid bell systems with a modern solution featuring a full-color touch screen interface, web-based management, and a powerful scheduling engine. The system is built around an ESP32 microcontroller, uses a MAX98357 for high-quality audio, and relies on an SD card for storing schedules and sound files. The entire user interface was created using the amazing open-source LVGL graphics library.

## The Technical Core

At the heart of Mynd is an ESP32 microcontroller. It was chosen for its excellent balance of performance, built-in Wi-Fi for the web interface, and robust community support. For audio, I opted for a MAX98357 I2S amplifier, which delivers clear and loud sound directly from the microcontroller.

<div class="row mt-4 justify-content-center">
    <div class="col-md-6 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/3d-pcb2.PNG" title="Mynd 3D Render" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-6 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/mynd4.jpg" title="Mynd Guts" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The 3D render of Mynd's PCB. And the actual Mynd's guts.
</div>

All interactions happen on a 3.5" TFT Touch LCD, but the real magic behind the beautiful and responsive UI is the LVGL (Light and Versatile Graphics Library). LVGL is an incredible open-source graphics library that allows you to create stunning user interfaces on resource-constrained microcontrollers like the ESP32. It enabled me to design a modern, intuitive, and visually appealing experience that feels like a professional product. All settings, schedules, and audio files are stored on a microSD card, making the system self-contained and easy to manage.


<div class="row mt-4 justify-content-center">
    <div class="col-md-4 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/tft display/main screen.PNG" title="Mynd Tabs" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-4 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/tft display/tab1-1.PNG" title="Mynd Tabs" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-4 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/tft display/tab1-2.PNG" title="Mynd Tabs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row mt-4 justify-content-center">
    <div class="col-md-4 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/tft display/tab1-3.PNG" title="Mynd Tabs" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-4 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/tft display/traverser.PNG" title="Mynd Tabs" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-4 text-center">
        {% include figure.liquid loading="eager" path="assets/img/mynd/tft display/tab2-2.PNG" title="Mynd Tabs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Mynd's user interface, built with LVGL.
</div>

## Features
*   **Template-Based Scheduling**: The most powerful feature is the ability to create reusable schedule templates. You can design different schedules for regular school days, exam weeks, or special events, and then apply them to the calendar as needed.
*   **Intuitive Touch Interface**: Users can easily navigate through menus to create new schedules, assign audio files, set the time and date, and adjust the volume.
*   **Manual Control**: For unscheduled announcements or alerts, there is a manual control panel with configurable buttons that can trigger specific bells instantly.
*   **On-Device File Management**: A built-in file browser allows users to select audio files directly from the SD card without needing to connect to a computer.
*   **Web Interface**: For added convenience, the system can also be configured remotely through a simple web interface, thanks to the ESP32's Wi-Fi capabilities.

## Lesson Learned
Looking back on the project, I'm proud of what I was able to achieve with the ESP32 and LVGL. The system is robust, feature-complete, and achieves the project's original goals.

However, every project is a learning experience. If I were to start over, I would consider using a Single-Board Computer (SBC) like a Raspberry Pi. An SBC would offer more processing power and greater flexibility in display choices (e.g., driving a larger HDMI display). This would make developing and expanding the graphical interface even easier.