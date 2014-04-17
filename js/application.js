

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

function updateTileBackgrounds(){
	var Imgs = [
			["01_317_20140320070913979268.png.jpg", "100% 100%", "center"],
			["02_1243362_241331436050110_1502353279_o_IslandNationYouth.jpg","scale","center"],
			["03_1969216_652302371473783_1283792042_n_41-Design.jpg","100% 100%","center"],
			["04_013_4am.jpg","scale","center"],
			["05_1966916_618495421554636_1229943772_n_antiblacktw.jpg","scale","top"],
			["06_服貿黑箱-master2_wiki.png","100% 100%","center"],
			["07_024_4am.jpg","scale","center"],
			["08_1960043_244513922398528_106131358_n_IslandNationYouth.jpg","scale","top"],
			["09_gcrE11T.jpg","scale","center"],
			["10_1404060106091528.jpg","scale","center"],
			["11_10253804_10152034483748341_1750607430890746962_n1_civilmedia.jpg","100% 100%","center"]
			];

	for(var i=2, j=0; j<Imgs.length; (i=i*2), j++){
		//var targetClass = $(".tile.tile-"+i + " .tile-inner" );
		var targetClass = $(".tile.tile-"+i );
		
		/*
		var cssStr = {"backgrond":"url('../tile-assets/"+Imgs[j][0]+"');" +
					 "background-size:"+Imgs[j][1]+";" +
					 "background-position:" + Imgs[j][2]+";";
		alert(cssStr);
		targetClass.css({cssStr}
			*//*
		targetClass.css({"background":"url('../tile-assets/"+Imgs[j][0]+"')",
						 "background-size":Imgs[j][1],
						 "background-position": Imgs[j][2]});
		alert(targetClass.css("background-size"));

newimg.css({'background-image': 'url('+newimgsrc+')', 
'position': 'absolute', 
'height': '70px', 
'width': '200px', 'top': '68px', 'right': '2px'});
			"background","url('../tile-assets/"+Imgs[j][0]+"')");
		targetClass.css("background-size",Imgs[j][1]);
		targetClass.css("background-position",Imgs[j][2]);*/
	}
}