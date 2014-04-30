---
published: true
layout: post
comments: true
date: 2013-11-02 12:00
categories: [Front End, Tutorials]
title: "Creating an Auto-Growing Text Input"
description: "How to create a textarea that expands to fit the size of your input."
alias: /blog/2013/11/01/creating-an-auto-growing-textarea/index.html
---

On two occasions I've encountered the same problem: how do you create a textarea that automatically expands along with your input. Here's an implementation.

<!-- more -->

This was inspired by some bits and pieces on StackOverflow. The gist of it is that you place your textarea inside a wrapper div, set the textarea height to 100% so that it fills the parent, and then insert a div behind the textarea that maintains a copy of the textarea text. The browser will correctly size the hidden div, which will stretch the parent and stretch the textarea.

Here's a jsFiddle:

<iframe width="100%" height="300" src="http://jsfiddle.net/2UDdh/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

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
  width: 50%; /* you should change this*/
}

textarea, .textarea-size {
  font-family: sans-serif; /* need to manually set font and font size */
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
  Using "pre" or "normal" or "preline" fixes a Chrome issue where whitespace at the end of the lines does not trigger a line break.
  However, it causes the text to exhibit the behavior seen with "pre" that is described below.
  That issue does not occur in Firefox.
  We use pre-line because the whitespace property here must match the white-space property in textarea-size
   */
  white-space: pre-line;
}

.textarea-size {
  visibility: hidden;

  /*
  Pre-wrap: preserve spacing and newlines, but wrap text.
  Pre: preserve spacing and newlines but don't wrap text.

  Using "pre" does not wrap properly on Firefox, even with word-wrap: break-word.
  "pre" on Chrome works with word-wrap: break-word, but exhibits different behavior:
  Instead of entire words being moved to the next line when wrapping,
  the browser will simply cut words in the middle if needed for wrapping.

  We use pre-line here because pre does not work on Firefox, and pre-wrap has issues with whitespace at ends of lines.
  */
  white-space: pre-line;
  /* Required for wrapping lines in Webkit, but not necessary in Firefox if you have white-space wrapping (pre-wrap, normal, pre-line) already set */
  word-wrap: break-word;
  overflow-wrap: break-word;
}
```

``` javascript JavaScript
var textContainer, textareaSize, input;
var autoSize = function () {
  textareaSize.innerHTML = input.value + '\n'; // also can use textContent or innerText
};

document.addEventListener('DOMContentLoaded', function() {
  textContainer = document.querySelector('.textarea-container');
  textareaSize = textContainer.querySelector('.textarea-size');
  input = textContainer.querySelector('textarea');
  
  autoSize();
  input.addEventListener('input', autoSize);
});
```


