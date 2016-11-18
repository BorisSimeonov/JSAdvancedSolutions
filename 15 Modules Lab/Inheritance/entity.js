class Entity {
    constructor (name) {
        if (new.target === Entity) {
            throw new Error('Entity class is abstract and cannot be instanced.');
        }
        this.name = name;
    }
}

module.exports.Entity = Entity;
