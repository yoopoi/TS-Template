function log (target:any,propertyKey:string,descriptor:PropertyDescriptor){
    console.log("[Log]Date:"+new Date().getTime())
    target.msg = "hello";
}

class Animal{
    public kind: string
    public name: string 
    public age: Number
    constructor(_name){
        this.name = _name
    }
    @log
    public say(){
        console.log("my name is %s",this.name)
    }
}

let cat = new Animal("emilia")
cat.say()