---
layout: page
title: Chikaku
description: A custom carrier board for Jetson SoMs.
img: assets/img/chikaku/real1_cropped.jpeg
importance: 1
category: embedded systems
giscus_comments: false
---

<div class="text-center">
    <img src="{{ 'assets/img/chikaku/real1_cropped.jpeg' | relative_url }}" alt="Mynd" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>

Chikaku is a custom-designed, 6-layer carrier board for the NVIDIA Jetson, engineered from the ground up to be the powerful and versatile heart of advanced robotics and embedded AI systems. It features a sophisticated dual-input power system, extensive high-speed I/O, and a modular architecture with multiple M.2 expansion slots. This project was a masterclass in high-density PCB design, tackling the immense challenges of high-speed signal integrity and complex power management.

While off-the-shelf carrier boards for the NVIDIA Jetson exist, we needed a platform with a specific, dense set of I/O, a far more robust and flexible power system, and a compact form factor that didn't compromise on expandability. The only way to achieve this was to build our own.

At its core is the NVIDIA Jetson, providing the processing power for AI, computer vision, and high-level planning. This is paired with a powerful STM32H7 microcontroller, which lives on its own custom M.2 module. The STM32H7 acts as a real-time co-processor, handling the low-level tasks like motor control, sensor polling, and CAN bus communication, freeing up the Jetson to focus on what it does best.

Key Features:
*    Expansion Slots: 2x M.2 A+E Key (for Wi-Fi/AI accelerators), 1x M.2 B Key (for NVMe SSD).
*    Connectivity: 4x USB 3.0 (Type-C), 1x Mini DisplayPort, 1x USB OTG debug port.
*    Auxiliary I/O: 4x UART, 8x GPIO, 1x CAN bus.

The power system provides dual-input capability from either a 4S Lithium battery or a USB-C Power Delivery adapter. An ideal diode circuit handles seamless switching between sources. The integrated PMU also charges the battery when powered by USB-PD. It provides multiple regulated voltage rails (5V, 3.3V, 1.8V) to power the Jetson, peripherals, and I/O.

<div class="text-center">
    <img src="{{ 'assets/img/chikaku/render33.jpg' | relative_url }}" alt="Mynd" class="img-fluid" style="height: 50vh; object-fit: contain;">
</div>

While I oversaw the entire project's direction, my most hands-on role was designing the intricate 6-layer PCB layout. This was an immense challenge. The schematic alone was a complex web of connections, but translating it to a physical board required extreme care. The board is dense with high-speed signals like USB 3.0 and PCIe from the M.2 slots. To ensure error-free operation, this required:

*    Controlled Impedance Routing: Every high-speed trace had to be designed with a specific width and spacing to maintain a precise impedance (e.g., 90 or 100 ohms), preventing signal reflections that can corrupt data.

*    Differential Pair Routing: Signals like USB are sent over a pair of wires. These pairs had to be routed together with exact, matched lengths to ensure the signals arrived at their destination at the exact same time.

*    Minimizing Crosstalk: We had to carefully manage the spacing between traces and use the inner ground planes of the 6-layer stackup to shield signals from interfering with each other.