var isDark = false;
document.querySelector('button').addEventListener('click',function(){
	if(isDark){
		document.querySelector('html').style.background = 'white';
		document.querySelector('html').style.color = 'black'
		isDark = false;
	}
	else{
		document.querySelector('html').style.background = 'coral';
		document.querySelector('html').style.color = 'white'
		isDark = true;
	}
})