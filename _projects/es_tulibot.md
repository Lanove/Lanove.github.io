---
layout: page
title: Tulibot
description: A wireless transcription device.
img: assets/img/Tulibot/tulibot_crop.jpeg
importance: 4
category: embedded systems
giscus_comments: false
---

<div class="text-center">
    <img src="{{ 'assets/img/Tulibot/tulibot_crop.jpeg' | relative_url }}" alt="Mynd" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>
<div class="caption">
    Both the microphone unit and the base dock.
</div>

During my time at PT. Terobosan Anak Bangsa (Tulibot), I had the opportunity to engineer the hardware for a fully independent, portable AI transcription device. While the final product concept was ultimately discontinued, the core component I developed, that is a multi-channel wireless microphone system was pretty much succeeded. This project was a deep dive into system architecture, wireless audio, and protocol bridging, culminating in a fully functional and tested hardware prototype.

## Microphone Unit

I designed three individual wireless microphone units, with each equipped with a I2S MEMS microphone, and an ESP32 for the wireless audio transmission via Bluetooth A2DP. designed to be compact and lightweight, so the ESP32 used here is just the chip, not an SoM. This means that i need to design the whole thing by myself, including the trickiest part that is the RF circuit, which need to be carefully designed by impedance matching and creating the filter network to ensure that the signal is strong enough to be received by the base dock. The microphones unit are powered by a single lithium battery, and can be charged on the dock with a pogo pin connector.

<div class="row mt-4 justify-content-center">
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/Tulibot/tulibot_mic.jpeg" title="PCBs of the microphone unit" class="img-fluid rounded z-depth-1" width="auto" height="50vh" max-height="50vh" %}
    </div>
</div>
<div class="caption">
    The PCBs of the microphone unit, designed to be compact and lightweight.
</div>

## Receiver Dock

The receiver dock is powered by RP2040, it's job is converting the audio stream from the microphone unit into USB Audio Class (UAC), which is then sent to the host computer. This meant that you could plug the receiver dock into any computer (or our future A33 module) with a USB cable (or just one PCB on the future A33 version), and it would instantly be recognized as a multi-channel microphone, with no special drivers needed.

## Outcome
The wireless microphone system was a complete success. We tested it extensively with a laptop, and it worked flawlessly, capturing and channeling audio from all three pods simultaneously. This was particularly challenging because to achieve the compact size required for the pods, we used the raw ESP32 chip instead of a larger module. This necessitated the careful design of a complex RF circuit, including an impedance-matched antenna and filter network, to ensure maximum wireless range and power efficiency for the battery-powered devices.


<div class="row mt-4 justify-content-center">
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/Tulibot/test.jpg" title="Wireless Mic Testing on Web" class="img-fluid rounded z-depth-1" width="auto" height="50vh" max-height="50vh" %}
    </div>
</div>
<div class="caption">
    Testing the wireless microphone system, capturing audio and transcribing it in real-time.
</div>

Unfortunately, as sometimes happens in the world of product development, the broader project was discontinued before the custom A33 module was fabricated. The final, all-in-one device remained a concept, though the design was modular. The plan was for the custom A33 module to be fitted into the existing dock via a standard M.2 connector, enabling streamlined development and testing.

<div class="row mt-4 justify-content-center">
    <div class="col-md text-center">
        {% include figure.liquid loading="eager" path="assets/img/Tulibot/a33.png" title="Design of the A33 M.2 Module" class="img-fluid rounded z-depth-1" width="auto" height="50vh" max-height="50vh" %}
    </div>
</div>
<div class="caption">
    The ongoing PCB design of the A33 M.2 Module, which is intended to be used on the receiver dock.
</div>

However, this project was an invaluable engineering experience. It was a lesson in building a complex, multi-part embedded system and a deep dive into RF design, wireless protocols, and USB device classes. While the final product didn't make it to market, the successful creation of a custom, multi-channel wireless audio-to-USB bridge is an amazing learning and engineering experience.