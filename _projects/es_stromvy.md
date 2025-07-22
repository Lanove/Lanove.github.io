---
layout: page
title: Stromvy
description: An STM32-based Laboratory Power Supply
img: assets/img/stromvy/DSC_0055.JPG
importance: 5
category: embedded systems
giscus_comments: false
---

<div class="text-center">
    <img src="{{ 'assets/img/stromvy/DSC_0055.JPG' | relative_url }}" alt="Mynd" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>

Stromvy is a laboratory power supply that I designed and built for my personal use and learning experience. The main controller is based on the STM32F103C8T6 microcontroller. The power supply is capable of supplying power up to 30V and 5A.
It features an 20x4 LCD display for user interface, and a rotary encoder for adjusting parameters. It has features such as overcurrent protection, voltage and current cutoff, and timer based operation. 

The case is designed using Fusion 360, with front panel made of acrylic and the rest of the case made with plywood that is cut with CNC machine. While the PCB is designed using Eagle, and the components are soldered by hand.

<div class="row mt-4 justify-content-center">
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/stromvy/DSC_0058.JPG" title="Stromvy Testing" class="img-fluid rounded z-depth-1" width="auto" height="50vh" max-height="50vh" %}
    </div>
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/stromvy/DSC_0012.JPG" title="Stromvy Testing" class="img-fluid rounded z-depth-1" width="auto" height="50vh" max-height="50vh" %}
    </div>
</div>
<div class="caption">
    Stromvy guts during testing.
</div>

The power supply main topology is a linear regulator that is based on LM324 op-amps, the STM32F1 is sending a reference signal to the op-amps, which then controls the output voltage and current. 

<div class="row mt-4 justify-content-center">
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/stromvy/LTSpice Simulation.PNG" title="Analog Linear Regulator" class="img-fluid rounded z-depth-1" width="auto" height="50vh" max-height="50vh" %}
    </div>
</div>
<div class="caption">
    The LTSpice simulation of the linear regulator.
</div>
