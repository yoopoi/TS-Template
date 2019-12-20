function log (target:any,propertyKey:string,descriptor:PropertyDescriptor){
    console.log("[Log]Date:"+new Date().getTime())
    target.msg = "hello";
}
function upperCase1(target:any,propertyName:string){
    Object.defineProperty(target,propertyName,{
    configurable:true,
    set:function(e){
        e = e[0].toLocaleUpperCase()+e.slice(1)
        this.value = e;
    },
    get:function(){
        return this.value;
    }
    
    })
    console.log(propertyName)
}
class Animal{
    public kind: string
    @upperCase1
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