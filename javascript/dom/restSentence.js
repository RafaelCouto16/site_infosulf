const firstChild = document.querySelector("#restSentence span:first-child");

function restSentence(){
	var elementActived = document.querySelector(".actived");

	if(elementActived.nextElementSibling){
			elementActived.nextElementSibling.classList.add('actived');
			elementActived.classList.remove('actived');
			elementActived = document.querySelector(".actived");

		}else{
			elementActived.classList.remove('actived');
			firstChild.classList.add('actived');
			elementActived = document.querySelector(".actived");

		}
}
setInterval(() => {
	const infinityLopp = true;
	do{
		restSentence();
	}
	while(infinityLopp = true);
}, 2000);

