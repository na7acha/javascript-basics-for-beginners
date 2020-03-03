// method --> obj
// function --> global (window, global)

const video = {
	title: 'a',
	tags: ['a','b','c'],
	play(){
		console.log(this);
	},
	showTags(){
		this.tags.forEach((tag)=>console.log(this, tag));
	}
};
video.play(); //video obj

video.stop = function() {console.log(this)};
video.stop(); //video obj

function playVideo(){
	console.log(this);
}

playVideo(); //global obj

function Video(title) {
	this.title = title;
	console.log(this);
}
const v = new Video('b');
console.log(v); //object video

video.showTags();