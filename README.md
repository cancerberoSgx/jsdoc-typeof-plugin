[![Build Status](https://travis-ci.org/cancerberoSgx/jsdoc-typeof-plugin.png?branch=master)](https://travis-ci.org/cancerberoSgx/jsdoc-typeof-plugin)
[![Dependencies](https://david-dm.org/cancerberosgx/jsdoc-typeof-plugin.svg)](https://david-dm.org/cancerberosgx/jsdoc-typeof-plugin)

# What

A jsdoc plugin that will convert types like `{typeof SomeClass}` into `{Class<SomeClass>}`

# Why

Because jsdoc3 doesn't support types which reference a class - just class instances. Also because we want to validate types using typescript jsdoc which supports the syntax `{typeof SomeClass}` to reference classes statically. Jsdoc currently fails generating documentation if it founds such expressions.

# How to use

```npm install jsdoc-typeof-plugin --save-dev```

Enable this plugin in your jsdoc configuration file:

```
    "plugins": ["node_modules/jsdoc-typeof-plugin"],
```

And now you are ready to use `{typeof SomeClass}`, for example:

```javascript
/**
* @return {typeof Something}
*/
static method1() {
    return null
}
```