//Hour
// Hour 6-12pm Good morning, 12-6pm Good afternoon else Good evening

let hour = 16;

if(hour >=6 && hour <12){
    console.log('Good morning');
}else if(hour>=12 && hour<18){
    console.log('Good afternoon');
}else{
    console.log('Good evening');
}