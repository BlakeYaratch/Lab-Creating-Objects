let dog={
    type:"Rottweiler",
    numLegs:4,
    sayLegs: function() {
        return "This dog has "+this.numLegs+" legs."
    }
    };

    console.log(dog.type)
    console.log(dog.numLegs)
    console.log(dog.sayLegs())

    document.getElementById('demo1').innerHTML=dog.type;
    document.getElementById('demo2').innerHTML=dog.numLegs;
    document.getElementById('demo3').innerHTML=dog.sayLegs();