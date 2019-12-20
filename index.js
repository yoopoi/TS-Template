var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, propertyKey, descriptor) {
    console.log("[Log]Date:" + new Date().getTime());
    target.msg = "hello";
}
function upperCase1(target, propertyName) {
    Object.defineProperty(target, propertyName, {
        configurable: true,
        set: function (e) {
            e = e[0].toLocaleUpperCase() + e.slice(1);
            this.value = e;
        },
        get: function () {
            return this.value;
        }
    });
    console.log(propertyName);
}
var Animal = /** @class */ (function () {
    function Animal(_name) {
        this.name = _name;
    }
    Animal.prototype.say = function () {
        console.log("my name is %s", this.name);
    };
    __decorate([
        upperCase1
    ], Animal.prototype, "name", void 0);
    __decorate([
        log
    ], Animal.prototype, "say", null);
    return Animal;
}());
var cat = new Animal("emilia");
cat.say();
//# sourceMappingURL=index.js.map