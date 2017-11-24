require.config({
    baseUrl:'core',
});

define(["Base/Router"],function(Router){

    var Person = function(name,age){
        
    };
    
    Person.prototype.init = function(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.showName = function(){    
        console.log(this.age);
    }

    Person.prototype.showAge = function(){    
        console.log(this.age);
    }

    Person.extend = function(obj){
        obj.super = Person
        _.each(this.prototype,function(item,key){
            obj[key] = item;
        }.bind(this))
    }

})