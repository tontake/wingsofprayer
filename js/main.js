$(document).ready(function(){ 
    
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 10) { 
            console.log($(this).scrollTop());
			$("#scroll").css("display","block");
        } else { 
            
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 10 }, 600); 
        return false; 
    }); 
	 
});