function Post(title, body, author) {
	this.title = title,
	this.body = body,
	this.author = author,
	this.views = 0,
	this.comments = [],
	this.isLive = false
}

function Comments(author, body){
	this.author = author,
	this.body = body
}

let newPost = new Post('Título', 'Descripción', 'Autor');