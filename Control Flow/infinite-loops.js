//EXAMPLES OF INFINITE LOOPS
let i = 0;
while(i<5){
    console.log(i);
    //i++ if we forget that we generate an infinite loop
}

while(true){};

let x = 0;
do{}while(x<5);

for(let i= 0; i<10;){}