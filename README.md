[![Build Status](https://travis-ci.org/cancerberoSgx/jsdoc-typeof-plugin.png?branch=master)](https://travis-ci.org/cancerberoSgx/jsdoc-typeof-plugin)
[![Dependencies](https://david-dm.org/cancerberosgx/jsdoc-typeof-plugin.svg)](https://david-dm.org/cancerberosgx/jsdoc-typeof-plugin)
[![Dependencies](https://david-dm.org/cancerberosgx/jsdoc-typeof-plugin/dev-status.svg)](https://david-dm.org/cancerberosgx/jsdoc-typeof-plugin?type=dev)

# What

A jsdoc plugin that will convert types like `{typeof SomeClass}` into `{Class<SomeClass>}`

# Why

Because jsdoc3 doesn't support types that reference classes - just class instances. Also because we want to validate types using typescript jsdoc and google closure which supports the syntax `{typeof SomeClass}` for referencing static types. Jsdoc currently fails generating documentation if it founds such expressions. This plugin will translate such expressions to a syntax compatible to jsdoc that make some sense.

# How to use

```npm install jsdoc-typeof-plugin --save-dev```

Enable this plugin in your jsdoc configuration file:

```
    "plugins": ["node_modules/jsdoc-typeof-plugin"],
```

And now you are ready to use `{typeof SomeClass}`, for example:

```javascript
/**
 * @class
 */
class WithTypes {

    constructor() {
        /**
         * @property {typeof View} the view class used to render each item
         */
        this.ItemViewClass
    }
    /**
    * @return {typeof Something} a new Something subclass
    */
    static extends() {
        return null
    }
}
```
