#Reddit Rift
(A replacement for the departed reddit toolbar.)

Ever happened that you clicked on a Reddit link, open it in a new tab on Firefox, and then completely forgot what was that about and which thread was it by the time you actually saw it?

Now we say ***Alzheimer no more*** with Reddit Rift!

![demo](https://cloud.githubusercontent.com/assets/2077346/11163485/c95def2c-8ad2-11e5-8584-d2587d59e9bf.gif)

### Install
Go to [Release](releases/) above here and click on the last `xpi` file ([or just click here, you lazy fella](releases/download/0.0.1/reddit-rift-0.0.1.xpi)). No Firefox restart required.

Sooner or later the Add-On will also be avaiable among [Mozilla Add-ons](https://addons.mozilla.org/en-us/firefox/).

#### Technical specs

Contrary to the original [Reddit Toolbar](https://www.reddit.com/wiki/toolbar), which used `frames` that were as 90's as the Spice Girls, Reddit Rift just adds a small element to the document; link infos are read and get as GET parameters (more or less). The add on should be very lightweight, especially on the linked page (where it uses only pure JS).

