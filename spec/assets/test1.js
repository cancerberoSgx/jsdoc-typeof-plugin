/**
 * this class contains a static method with a param which type is a class
 * @class
 */
class View {
    /**
     * @param {*} definition
     * @return {typeof View}
     */
    static extend(definition) {
        return null
    }
}

/**
 * this class contains a property which type is a class
 * @class
 */
class Something {
    constructor() {
        /**
         * @type {typeof Another}
         */
        this.typeProperty
    }
}

/**
 * this class contains a method which returns a type that is a class
 * @class
 */
class Another {
    /**
     * @return {typeof Something}
     */
    method1() {
        return null
    }
}
/**
 * @typedef {Object} Datatype1
 * @property {String} p1
 * @property {typeof View} view1
 */