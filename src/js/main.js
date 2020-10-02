$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	
		
	function disableMW(){
	   $('body').bind("mousewheel", function() {
		return false;
	});
	}

	function enableMW(){
	   $('body').bind("mousewheel", function() {
		return true;
	});
	}
});	


function shuffleQuotes()
{
	
	var quotesAr = [
	"It's not what you look at that matters, it's what you see.",
	"Sometimes only a change of viewpoint is needed to convert a tiresome duty into an interesting opportunity.",
	"Vision: the art of seeing the invisible.",
	"Never solve a problem from its original perspective.",
	"Sometime the questions are complicated, and the answers are simple.",
	"If you change the way you look at things, the things you look at change.",
	"There are some people who see a great deal and some who see very little in the same things.",
	"Sometimes a problem isn’t really a problem but the solution in disguise.",
	"We don't know all the answers. If we knew all the answers we'd be bored, wouldn't we? We keep looking, searching, trying to get more knowledge.",
	"Creativity involves breaking out of established patterns in order to look at things in a different way."
	];
	var autorAr = [
	"~ Henry David Thoreau",
	"~ Alberta Flanders",
	"~ Jonathan Swift",
	"~ Charles Thompson",
	"~ Dr. Seuss",
	"~ Wayne Dyer",
	"~ Thomas Henry Huxley",
	"~ Richelle E. Goodrich",
	"~ Jack LaLanne",
	"~ Edward de Bono"
	];
	var i = randomIntFromInterval(0, 9);
	console.log("i: "+ i);
	var strObj =  {"q":quotesAr[i], 
			"a": autorAr[i]
		};
	return strObj;
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function burgerX(){
	//get pos + width + 15px
	var itemBox = $('.section').offset();	
}

function activateImgSwap(target){
	
	$('.people img').each(function(){
		$(this).mouseover(function(){
			//console.log($(this).attr('src'));
			var imgSrc = $(this).attr('src');
			var strPeep =imgSrc.replace('.jpg', '.gif');
			$(this).prop('src', strPeep) ;
		});
		
		$(this).mouseout(function(){
			//console.log($(this).attr('src'));
			var imgSrc = $(this).attr('src');
			var strPeep =imgSrc.replace('.gif', '.jpg');
			$(this).prop('src', strPeep);
		});
	});
}

var _pages = [
	"home",
	"about-us",
	"what-we-do",
	"meet-us",
	"careers",
	"art-director"	
];

	$(document).ready(function() {
		var welcome;
		var navIsOpen = getNavState();
		//var markedRemoved;
		
		
		$('.burger-button').click(function(){			

			var navStateOpen = getNavState();

			if(!navStateOpen){
				onMenuClosed();
			}else{
				onMenuOpen();
			}
		});
		
		function getNavState(){
			return navIsOpen = !navIsOpen;
		}
		
		function onMenuOpen(){		
			$('.homepage').css({'height': '100%'});
			
			/**/
			$('.global-nav-background').addClass('global-nav-background--open');
			$('.global-nav-wrapper').addClass('global-nav-wrapper--open');
			$('.global-content-vertical-fix').addClass('global-content-vertical-fix--shrink');
			/**/
			
			$('.global-content-vertical-fix').css({'transform' : 'translateY(200px)'});	
			//$('.global-content-vertical-fix').addClass('menu_open');

		
		}
		
		function onMenuClosed(){	
			//console.log("menu closed");		
			$('.global-content-vertical-fix').removeClass('global-content-vertical-fix--shrink');
			
			/**/
			$('.global-nav-background').removeClass('global-nav-background--open');
			$('.global-nav-wrapper').removeClass('global-nav-wrapper--open');
			$('.global-content-vertical-fix').css({'transform' : 'translateY(0)'});
			//$('.global-content-vertical-fix').addClass('menu_shrink');	
			/**/
		}
		
		$('#menu-nav li a').add('#fullpage .section a').add('.join_us_wrapper a').click(function (){
			onMenuClosed();					
		});
		
		
		//prepare nav for interactions
		getNavState();
		
	
	});


