function person(fast,last,age,eye){
    this.fastName=fast;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
    this.fullName=function(){
     return this.fastName +" "+this.lastName;
    }
}
const hello=new person("johe","Doe",50,"blue")
console.log(hello.fullName());



function person5(fast,last,age,eye){
    this.fastName=fast;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hello5=new person5("johe","Doe",50,"blue")
console.log(hello5);



function person1(fast,last,age,eye){
    this.fastName=fast;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hello1=new person1("johe","Doe",50,"blue")
console.log(hello.fastName);




function person2(fast,last,age,eye){
    this.fastName=fast;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hello2=new person2("johe","Doe",50,"blue")
console.log(hello.lastName);





function person3(fast,last,age,eye){
    this.fastName=fast;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hello3=new person3("johe","Doe",50,"blue")
console.log(hello.age);





function person4(fast,last,age,eye){
    this.fastName=fast;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hello4=new person4("johe","Doe",50,"blue")
console.log(hello.eyeColor);




function person6(fast,last,age,eye){
    this.fastName=fast;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hello6=new person6("johe","Doe",50,"blue")
const hello7=new person6("sally","rally",48,"green")
console.log(hello6);
console.log(hello7)


function person8(fist,last,age,eye){
    this.fastName=fist;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
const hello8=new person8("johe","Doe",50,"blue")
person8.prototype.natinality="English";
console.log(hello8.natinality);