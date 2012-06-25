$(function() {
	//general
	/*
	 * 以降の課題を行う上で、独自functionを追加する場合、
	 * グローバルを汚さないよう、pp_conというオブジェクトを用意し、
	 * その中に追加していくようにする。
	 */
	var pp_con = {};

	//subject01
	/*
	 * 特定の場所に、特定の要素の本文をコピーする。
	 * 一度コピーが終われば、
	 * 再度ボタンをクリックしても内容が変わらないことから、
	 * 複数回コピー処理を行う必要が無いので、
	 * 一度クリックされた時点でそのクリックイベントを削除する。
	 */
	$("#get_name").on("click", function(){
		$("#subject01_result").text($("#yamada_name").text());
		$(this).off("click");
	});

	//subject02
	/*
	 * ボタンに書かれた人の名前を追加する。
	 * 該当のaタグには 'id="add_<alphabet_name>"' が書かれており、
	 * '○○{を|の}追加'という本文を持つことから
	 * 追加されるli要素の本文を「○○」にし、
	 * そのタグに負荷されるclassを<alphabet_name>にするよう、
	 * 各要素を抽出した上で処理する。
	 * 他の要素を見ると<alphabet_name>はidにすべきだが、
	 * ボタンをクリックするたび同名のliを追加していくことから、
	 * 重複を許さないidではなく、classを追加することにした。
	 */
	pp_con.add_name = function(){
		var thisid = $(this).attr("id");
		var cls = thisid.length > 0 ? thisid.replace(/add_/, "") : "noname";
		var nm = $(this).text().replace(/.追加/, "");
		var li = $("<li>").addClass(cls).text(nm);
		$("#member_list").append(li);
	}
	$("#subject2").find(".btn-info").on("click", pp_con.add_name);
	
	//subject03
	/*
	 * 特定の要素を削除する。
	 * 削除される要素のidが、対象ボタンのidの一部になっているので、
	 * 対象ボタンのidから削除されるべき要素のidとなる文字列を抽出し、
	 * 削除を行う。
	 * また、一度消されると、再度消す必要がないため、
	 * そのイベント自体も削除する。
	 */
	pp_con.remove_name = function(){
		var thisid = $(this).attr("id");
		var removename = thisid.length > 0 ? thisid.replace(/remove_/, "") : "noname";
		$("#member_list_remove").find("#"+ removename).remove();
		$(this).off("click");
	}
	$("#subject3").find(".btn-info").on("click", pp_con.remove_name);

	//subject04
	/*
	 * せっかくなので、fadeIn/fadeOutするようにしてみた！
	 * せっかくなので！
	 */
	pp_con.togglename = function(){
		var thisid = $(this).attr("id");
		var target = thisid.length > 0 ? thisid.replace(/change_visible/, "stealth"): "";
		if(target.length > 0){
			$("#"+target).stop().fadeToggle();
		}
	}
	$("#subject4").find(".btn-info").on("click", pp_con.togglename);

	//subject05
	/*
	 */
	$("#change_header_html").on("click",function(){
		$("h2").each(function(){
			$(this).text("【" + $(this).text() + "】");
		});
		$(this).off("click");
	});
});
