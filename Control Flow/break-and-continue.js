let i = 0;
while(i <=10){
    if(i===5) break; //break the loop
    if(i%2===0){
        i++;
        continue; //go at the beginning at the loop
    }
    console.log(i);
    i++;
}