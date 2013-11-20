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

This was inspired by some bits an pieces on StackOverflow. The gist of it is that you place your textarea inside a wrapper div, set the textarea height to 100% so that it fills the parent, and then insert a div behind the textarea that maintains a copy of the textarea text. The browser will correctly size the hidden div, which will stretch the parent and stretch the textarea.

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
  width: 20%;
  position: relative;
}

textarea, .textarea-size {
  font-family: sans-serif; /* need to manually set font and font size */
  font-size: 14px;
  box-sizing: border-box;
  padding: 4px;
  border: 1px solid;

  overflow: hidden;
  width: 100%;
  height: 100%;
}

textarea {
  position: absolute;
  resize:none;
}

.textarea-size {
  visibility: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap:; break-word;
}
```

``` javascript JavaScript
var textContainer, textareaSize, input;
var autoSize = function () {
  textareaSize.innerHTML = input.value + '\n' || 'a';
};

document.addEventListener('DOMContentLoaded', function() {
  textContainer = document.querySelector('.textarea-container');
  textareaSize = textContainer.querySelector('.textarea-size')
  input = textContainer.querySelector('textarea');
  
  autoSize();
  input.addEventListener('input', autoSize);
});
```


