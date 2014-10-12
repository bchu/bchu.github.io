---
layout: post
comments: true
date: 2013-08-18 06:00
categories: [JavaScript, Tutorials]
title: "An Interesting Module Pattern: the Sealed Module"
description: "Sharing private state across components of a module in JavaScript."
---

An interesting way to share private state across components of modules in JavaScript: <!-- more -->  
(credit goes to [this article](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html))

``` javascript
var module = (function (module) {
  var _private = module._private = module._private || {};
  var _seal = module._seal = module._seal || function () {
    delete module._private;
    delete module._seal;
    delete module._unseal;
  }
  var _unseal = module._unseal = module._unseal || function () {
    module._private = _private;
    module._seal = _seal;
    module._unseal = _unseal;
  };
  // permanent access to _private, _seal, and _unseal

  return module;
}(module || {}));
```

`_unseal` must be called by a function (probably some sort of loader function) that was initialized before `_seal` was called (so that `_unseal` will be present in its closure scope).

For example:

``` javascript
var loadScript = function (scriptUrl) {
  module._unseal();
  var script = document.createElement('script');
  script.src = scriptUrl;

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" ||
          script.readyState === "complete") {
        script.onreadystatechange = null;
        module._seal();
      }
    };
  }
  else {
    script.onload = function() {
      module._seal()
    };
  }

  document.getElementsByTagName('head')[0].append(script);
};
```
