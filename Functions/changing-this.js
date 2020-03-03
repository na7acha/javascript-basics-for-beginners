const video = {
	title: 'a',
	tags: ['a','b','c'],
	showTags(){
		//const that = this;
		//this.tags.forEach(function(tag){
		//	console.log(that.title, tag);
		//});
		/*this.tags.forEach(function(tag){
			console.log(this.title, tag);
		}.bind(this));*/
		//best if arrow function
		this.tags.forEach(tag=>{
			console.log(this.title, tag)
		});


	}
};
//video.showTags();

function playVideo() {
	console.log(this);
}
playVideo.call({name:'Nat'}); //multiple arguments
playVideo.apply({name:'Nat'}); //multiple arguments by an array
const fn = playVideo.bind({name: 'Nat'}); //its call a function
fn();