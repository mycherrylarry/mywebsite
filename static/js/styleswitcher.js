/* Template: Syntac | Author: eriktailor | Version: 1.0 */
/*--------------------------------------------------------------------- */	
		
		$(function(){
		
			var switchTab = $('#styleswitcher-tab'),
				switcher = $('#styleswitcher'),
				color    = $('#colors a');
			
			switchTab.toggle(
				
			function(){
				switcher.animate({left:'0px'}, {queue: false, duration: 500});
				switchTab.children().html('&lt;');
			}, 	
				
			function (){
				switcher.animate({left:'-111px'}, {queue: false, duration: 500});
				switchTab.children().html('&gt;');				
			});
			

			$(".color-01 a").click( function(){ 
				$("body").removeClass('turq').addClass("red");
				$.cookie('mycookie','red');
			});

			$(".color-02 a").click( function(){ 
				$("body").removeClass('red').addClass("turq");
				$.cookie('mycookie','turq');
			});
			
			if ($.cookie('mycookie')) {
				$('body').addClass($.cookie('mycookie'));
			}
		
		});
		

			
			
		
