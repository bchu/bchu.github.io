---
layout: post
comments: true
date: 2013-08-14 04:27
categories: [bower, npm]
title: "A Little Note on Versions"
description: Versions in bower and npm are maddeningly inconsistent.
---
tl;dr. Versions in bower and npm are maddeningly inconsistent in a tiny way.
<!-- more -->
So... In semver and bower (I'm assuming bower since it relies on the node-semver module), a hypenated version suffix (postfix) decreases precedence <(1.0.0 > 1.0.0-alpha > 1.0.0-1) and non-hypenated suffixes are invalid (1.0.0alpha is invalid).

Whereas in npm, hypenation with a numeric suffix increases precedence (1.0.0-1 > 1.0.0) whereas anything that is not a hypenated number decreases precedence (1.0.0 > 1.0.0alpha). So 1.0.0-1 > 1.0.0-1-a > 1.0.0 > 1.0.0alpha. Somebody shoot me in my face.