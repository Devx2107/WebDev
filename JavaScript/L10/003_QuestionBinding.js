function hello() {
    console.log("Binding in hello ", this);

    let world = function () {
        console.log("Binding in world ", this);
    };

    world();
}

let obj = {
    name: "CB"
};

hello.apply(obj);