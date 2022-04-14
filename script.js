$(document).ready(function (){
	$("#sc").click(function (){
		$("#jack").slideUp();
		$("#pain").slideUp();
		$("#scar").slideDown();
	});
				
	$("#jk").click(function (){
		$("#jack").slideDown();
		$("#pain").slideUp();
		$("#scar").slideUp();
	});
				
	$("#pa").click(function (){
		$("#jack").slideUp();
		$("#pain").slideDown();
		$("#scar").slideUp();
	});
});