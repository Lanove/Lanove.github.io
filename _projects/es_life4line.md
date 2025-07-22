---
layout: page
title: LiFe4Line
description: A LiFePO4 Battery Tester for Laboratory.
img: assets/img/life4line/prototype.jpg
importance: 7
category: embedded systems
giscus_comments: false
---

<div class="text-center">
    <img src="{{ 'assets/img/life4line/prototype.jpg' | relative_url }}" alt="Mynd" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>

LiFe4Line is a LiFePO4 battery tester that is a part of ongoing research from <a href="https://lipist.ee.its.ac.id/about_us.html" target="_blank">Laboratory of Measuring Instrumentation and Power System Indentification (LIPIST)</a> at Institut Teknologi Sepuluh Nopember (ITS) Surabaya, Indonesia. This device is capable of charging and discharging LiFePO4 batteries with custom algorithms, including Reinforcement Learning or simple rule based algorithm to enable fast charging or other advanced charging techniques. It is designed to be used in a laboratory setting, where it can be connected to a computer or remote operation for data logging and analysis, allowing for precise testing of battery performance and characteristics.

There will be two version of the hardware, one with a simple buck converter that has it's feedback loop controlled by a microcontroller (STM32F4), and the other version that uses a bidirectional flyback converter, which enables more advanced techniques such as active balancing using supercapacitors or just redistributing the charge to other batteries in the pack. The device is designed to be modular, allowing the charger to be easily adjusted to any battery pack configuration, and it can be used to test batteries with different capacities and chemistries. 

While the discharging part is using an LC filter and a switched resistor to simulate a constant current load.

Current progress is the prototype of the first version that uses a buck converter, which is capable of charging and discharging a single cell at 15A. The next progress is then developing a PCB for the first version and extending it to enable multiple cell testing.