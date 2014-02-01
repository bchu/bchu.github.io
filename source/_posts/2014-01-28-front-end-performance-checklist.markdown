---
published: false
layout: post
comments: true
date: 2014-01-28 00:24
categories: 
title: "Front-end performance checklist"
description: 
---

A compilation of different optimizations for front-end performance.

Disclaimer: I do not claim credit for coming up or discovering any of these optimizations, the vast majority are taken from other, disparate resources.

# Page load (layout, parsing, reflow)
JS
CSS
async defer

# DOM
document fragment

# Events
debounce
listen from parent, check event.target (or jquery sugar)

# Server-side factors
301/302
caching

#Request response factors
batching
progressive processing
spdy

# Selectors
#id
caching

# General JS
caching length

# Tools




Links
http://blog.fogcreek.com/we-spent-a-week-making-trello-boards-load-extremely-fast-heres-how-we-did-it/
https://news.ycombinator.com/item?id=7103815

batched requests
https://tech.dropbox.com/2014/01/retrieving-thumbnails/

measurement:
https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html