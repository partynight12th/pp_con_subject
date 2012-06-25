$(function() {
	console.log($().jquery);
	//general
	var pp_con = {};
	//subject01
	$("#get_name").on("click", function(){
		$("#subject01_result").text($("#yamada_name").text());
		$(this).off("click");
	});

	//subject02
	pp_con.add_name = function(){
		var cls = $(this).attr("id").replace(/add_/, ""); 
		var nm = $(this).text().replace(/.追加/, "");
		var li = $("<li>").addClass(cls).text(nm);
		$("#member_list").append(li);
	}
	$("#subject2").find(".btn-info").on("click", pp_con.add_name);
	
	//subject03
});
