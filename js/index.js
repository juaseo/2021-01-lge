$(".main-wrapper .pager-wrapper a.pager").click(function(e){
	e.preventDefault();
	$(".main-wrapper .pager-wrapper a.pager").removeClass('active')
	$(this).addClass('active')
})

$(".main-wrapper .pager-wrapper .bt-play").click(function(e){
	e.preventDefault();
	$(".main-wrapper .pager-wrapper .bt-play").addClass('active')
	$(".main-wrapper .pager-wrapper .bt-pause").removeClass('active')
})

$(".main-wrapper .pager-wrapper .bt-pause").click(function(e){
	e.preventDefault();
	$(".main-wrapper .pager-wrapper .bt-play").addClass('active')
	$(".main-wrapper .pager-wrapper .bt-pause").removeClass('active')
})

$(".best-wrapper .pager-wrapper a.pager").click(function(e){
	e.preventDefault();
	$(".best-wrapper .pager-wrapper a.pager").removeClass('active')
	$(this).addClass('active')
})