// check off specific todos by clicking
// don't use .click here, use .on, as you want new <li> created later to be able to be listened
// to do this, you need to change a little bit: put a listener on ul, and add an argument on li
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});


// same case here, if you want newly created span to be listened, put a listener to ul, and specify the tag you want to listen in the argument
$("ul").on("click" ,"span", function(event){
	// there is a way to assess to parent element in jQuery: .parent()
	$(this).parent().fadeOut(500, function() {
		// there is no .parent here, unless you want all ali to disappear
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		// append a new element under ul: tags + texts
		// this.val() extracts the text value from input
		// i need to add a span also
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + $(this).val() + "</li>");
		// i also need to erase the text input in the input bar
		$(this).val("");
	}
});


$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})