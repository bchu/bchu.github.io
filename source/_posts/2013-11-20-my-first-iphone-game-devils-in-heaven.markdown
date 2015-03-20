---
published: true
layout: post
comments: true
date: 2013-11-20 10:00
categories: [iOS, Projects]
title: "My First iPhone Game: Devils in Heaven"
description: "My first iPhone game, Devils in Heaven, an infinite runner with physics obstacles."
share_image: /images/blog/2013/dih-screenshot1.png
twitter_card_app: 744368918
twitter_card_app_url: https://itunes.apple.com/us/app/devils-in-heaven/id744368918?mt=8&uo=4&at=10lpgg
redirect_from:
  - /devils-in-heaven/
---

Introducing my first iPhone game, [Devils in Heaven](https://itunes.apple.com/us/app/devils-in-heaven/id744368918?mt=8&uo=4&at=10lpgg), a 2D infinite runner game with interactive obstacles!

<!-- more -->

[{% img center /images/app_store_download.png %}](https://itunes.apple.com/us/app/devils-in-heaven/id744368918?mt=8&uo=4&at=10lpgg)

{% img img-thumbnail center /images/blog/2013/dih-animated.gif 'Devils in Heaven' 'Video of gameplay.' %}

Beezlebubbly is stuck in heaven, and you need to help him escape from the not-too-happy angels chasing him. Fling statues and harps around and protect Beezlebubbly from the arrows.

It's completely free with no ads or in-app purchases, though I might add in-app purchases if the game gets popular enough.

Like it? [Text a link to your friends!](https://www.makegameswith.us/games/devils-in-heaven/)

Built with [coocs2d-iphone](http://www.cocos2d-iphone.org/) and [Kobold2D](http://www.kobold2d.com/display/KKSITE/Home). Published by [MakeGamesWithUs](https://www.makegameswith.us/).

{% img img-thumbnail center /images/blog/2013/dih-screenshot1.png 'Devils in Heaven' 'Screenshot of gameplay.' %}

# The Process

Originally the game was meant to be titled *Demolition Gauntlet* - featuring a knight running through Hell, chased by demons and devils. That was a pretty uninspiring theme, so I inverted the concept, giving the game the whimsical twist I wanted it to have from the start.

Devils in Heaven was a project I worked on in short bursts, a project that I left dormant for months at a time. I started the game in June of 2012 when I interned over the summer with MakeGamesWithUs (MGWU) after high school. The internship program, which continues today, is unlike your typical internship - it's more like an incubator where you work on our own game alongside the MGWU developers and other interns. Over three months I finished roughly half the game - while learning Objective-C and cocos2d.

Afterwards, I [joined](/about) the MGWU team full-time as I took a full year off from school. I worked on the game here and there, bringing it up to 90%, before largely shelving the project for nearly a year until the past few weeks.

{% img img-thumbnail center /images/blog/2013/dih-githistory.jpg 'Git commit history' 'Git commit history from August 2012 to November 2013' %}

There were a couple of difficult challenges. The game features ragdoll physics for the devil and angels, and setting up the parameters for the physical bodies was quite a lot of work. Dealing with physics in general was challenging at times: all the objects in the game are objects that can fully interact with the physical world, which meant dealing with unexpected behavior like being tipped over.

One cool part: I got to use some of the physics I learned in school when I was calculating the velocity of the arrows in the game, using the kinematic equations of motion.

{% img img-thumbnail center /images/blog/2013/dih-equations-small.jpg 'Kinematic equations' 'Handwritten calulations of the arrow's velocity using kinematic equations.' %}

The project was the first 10,000+ lines of code, object-oriented program I ever worked on, and it shows - the code is in dire need of serious refactoring, probably a month's worth of work. My first target? The entire class inheritance and object protocol (interface) system. The OOP structure that I originally created in the game over a year ago is convoluted, tightly coupled, and distinctly non-modular.

But it works! Hope you like it!

{% img img-thumbnail center /images/blog/2013/dih-physics.png 'Physics debugging' 'Screenshot of game with physics debugging graphics.' %}

By the way, I'm looking for a summer internship! So <a href="#" data-toggle="modal" data-target=".contact-modal">contact me</a>!

