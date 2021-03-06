---
published: true
layout: post
comments: true
date: 2013-11-02 12:00
categories: [Front End, Tutorials]
title: "Creating an Auto-Growing Text Input"
description: "How to create a textarea that expands to fit the size of your input."
redirect_from:
  - /blog/2013/11/01/creating-an-auto-growing-textarea/
---

On two occasions I've encountered the same problem: how do you create a textarea that automatically expands along with your input. Here's an implementation.

<!-- more -->

This was inspired by some bits and pieces on StackOverflow. The gist of it is that you place your textarea inside a wrapper div, set the textarea height to 100% so that it fills the parent, and then insert a div behind the textarea that maintains a copy of the textarea text. The browser will correctly size the hidden div, which will stretch the parent and stretch the textarea.

Here's a jsFiddle:

<iframe width="100%" height="300" src="http://jsfiddle.net/2UDdh/43/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

A copy of the code is below:

``` html HTML
<div class="textarea-container">
  <textarea></textarea>
  <div class="textarea-size"></div>
</div>
```

``` css CSS
.textarea-container {
  position: relative;
  /* you should change this*/
  width: 50%;
}

textarea, .textarea-size {
  min-height: 25px;
  /* need to manually set font and font size */
  font-family: sans-serif;
  font-size: 14px;
  box-sizing: border-box;
  padding: 4px;
  border: 1px solid;

  overflow: hidden;
  width: 100%;
}

textarea {
  height: 100%;
  position: absolute;
  resize:none;

  /*
  "pre" or "preline" or "normal" fixes Chrome issue where
    whitespace at end of lines does not trigger a line break.
  However, it causes the text to exhibit the behavior seen with
    "pre" that is described below.
   */
  white-space: normal;
}

.textarea-size {
  visibility: hidden;

  /*
  Pre-wrap: preserve spacing and newlines, but wrap text.
  Pre: preserve spacing and newlines but don't wrap text.

  "pre" does not wrap well on Firefox, even with word-wrap:break-word.
  "pre" on Chrome works with word-wrap, but exhibits different behavior:
  Instead of entire words being moved to the next line for wrapping,
  the browser will cut words in the middle for wrapping.
  "pre-line" has Firefox issues
  */
  white-space: pre-wrap;
  /* Required for wrapping lines in Webkit,
    but not necessary in Firefox if you have white-space wrapping
    (pre-wrap, normal, pre-line) already set */
  word-wrap: break-word;
  overflow-wrap: break-word;
}
```

``` javascript JavaScript
var textContainer, textareaSize, input;
var autoSize = function () {
  // also can use textContent or innerText
  textareaSize.innerHTML = input.value + '\n';
};

document.addEventListener('DOMContentLoaded', function() {
  textContainer = document.querySelector('.textarea-container');
  textareaSize = textContainer.querySelector('.textarea-size');
  input = textContainer.querySelector('textarea');
  
  autoSize();
  input.addEventListener('input', autoSize);
});
```


