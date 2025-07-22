---
layout: page
title: Hotberry
description: BGA Rework Station Temperature Controller
img: assets/img/hotberry/index.jpeg
importance: 3
category: embedded systems
giscus_comments: false
---

<div class="text-center">
    <img src="{{ 'assets/img/hotberry/index.jpeg' | relative_url }}" alt="Mynd" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>

Hotberry is a temperature controller for Ball Grid Array (BGA) rework station. It features a dual-heater system (top and bottom) controlled by a RP2040 from Raspberry Pi, an LCD touch screen interface built with LVGL, and a custom 4-layer PCB. The project's core challenge was developing a control system capable of accurately following complex temperature profiles. This is needed for reworking BGA components, which require temperature management or profiling to avoid damaging the component or the PCB.

For the mechanical side, I used a scrap materials around my workshop to build the frame. It's made from a aluminium extrusion and an old PC case.

<div class="row mt-4 justify-content-center">
    <div class="col-md-6 text-center">
        {% include figure.liquid loading="eager" path="assets/img/hotberry/24.jpeg" title="RP2040 on Hotberry" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-6 text-center">
        {% include figure.liquid loading="eager" path="assets/img/hotberry/14.jpeg" title="Hotberry PCB" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The closeup of the RP2040 on Hotberry and the custom PCB.
</div>

The foundation of Hotberry is a RP2040 from Raspberry Pi. Its dual-core processor and flexible PIO make it perfect for handling real-time tasks. For temperature sensing, I used a MAX6675 module with a Type K thermocouple, known for its reliability.

I designed a modern, intuitive GUI for the ILI9486 Touch TFT LCD using the incredible LVGL (Light and Versatile Graphics Library). The entire system runs on FreeRTOS to ensure that UI updates, sensor readings, and control loop calculations happen reliably without interfering with each other. I wrote custom, thread-safe C/C++ drivers for all the peripherals to guarantee stability. The whole system is housed on a custom 4-layer PCB I designed in Autodesk Eagle to ensure signal integrity and a compact form factor.

<div class="row mt-4 justify-content-center">
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/hotberry/12.jpeg" title="RP2040 on Hotberry" class="img-fluid rounded z-depth-1" width="auto" height="50vh" max-height="50vh" %}
    </div>
</div>
<div class="caption">
    The development of the user interface for Hotberry using LVGL.
</div>

The core of the project was the control system for the top and bottom heaters. The goal was to make both heaters follow a predefined temperature profile accurately. My initial approach was to implement a classic PID (Proportional-Integral-Derivative) controller. At this point in time, i have little to none control system knowledge, and so i was mentored by a really kind German engineer on Discord who helped me understand the basics of PID control, before tuning the controller, i identified the system using simple step response tests, and calculated the transfer function based on the output data collected overtime. And then tuned the controller with a Bode Plot method and simulated it in Simulink.

<div class="row mt-4 justify-content-center">
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/hotberry/simulink.png" title="RP2040 on Hotberry" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In practice, however, tuning the PID for this dual-heater system proved to be incredibly difficult. While a PID controller is excellent for maintaining a single setpoint, making it precisely follow a trajectory (the temperature profile) for a complex thermal system with two interacting heaters is a pretty hard feat. The system would often overshoot the target temperature or lag behind.

This struggle was the most valuable part of the project. It taught me a crucial lesson about choosing the right tool for the job. While the PID controller works, it's not the optimal solution for this kind of trajectory tracking problem.

For the next version of Hotberry, I will be replacing the PID controller with Model Predictive Control (MPC). MPC is a more advanced control strategy that is far better suited for this application. Instead of just reacting to the current error like a PID, MPC can predict the future behavior of the system and optimize the heater outputs over a time horizon to follow the reference trajectory as closely as possible.