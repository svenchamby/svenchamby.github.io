// Get json
$(document).ready(function () {
	$.ajax({
		url: "javascript/dnd.json"
		, dataType: "json"
		, success: function (data) {
			console.log(data);
			//race info
			var acoName = data['Acolyte']['BackName'];
			var acoDesc = data['Acolyte']['Description'];
			var charName = data['Charlatan']['BackName'];
			var charDesc = data['Charlatan']['Description'];
			var crimName = data['Criminal']['BackName'];
			var crimDesc = data['Criminal']['Description'];
			var enterName = data['Entertainer']['BackName'];
			var enterDesc = data['Entertainer']['Description'];
			var folkName = data['FolkHero']['BackName'];
			var folkDesc = data['FolkHero']['Description'];
			var artName = data['GuildArtisan']['BackName'];
			var artDesc = data['GuildArtisan']['Description'];
			var hermName = data['Hermit']['BackName'];
			var hermDesc = data['Hermit']['Description'];
			var nobName = data['Noble']['BackName'];
			var nobDesc = data['Noble']['Description'];
			var outName = data['Outlander']['BackName'];
			var outDesc = data['Outlander']['Description'];
			var sageName = data['Sage']['BackName'];
			var sageDesc = data['Sage']['Description'];
			var sailName = data['Sailor']['BackName'];
			var sailDesc = data['Sailor']['Description'];
			var soldName = data['Soldier']['BackName'];
			var soldDesc = data['Soldier']['Description'];
			var urchName = data['Urchin']['BackName'];
			var urchDesc = data['Urchin']['Description'];
			//Html elements
			var aco = $("#aco");
			var char = $("#char");
			var crim = $("#crim");
			var enter = $("#enter");
			var folk = $("#folk");
			var art = $("#art");
			var herm = $("#hermit");
			var nob = $("#noble");
			var out = $("#out");
			var sage = $("#sage");
			var sail = $("#sailor");
			var sold = $("#sold");
			var urch = $("#urch");
			var Name = $("#backName");
			var Desc = $("#description");
			//replacer functions
			aco.on('click', function () {
				Name.html(acoName);
				Desc.html(acoDesc);
			})
			char.on('click', function () {
				Name.html(charName);
				Desc.html(charDesc);
			})
			crim.on('click', function () {
				Name.html(crimName);
				Desc.html(crimDesc);
			})
			enter.on('click', function () {
				Name.html(enterName);
				Desc.html(enterDesc);
			})
			folk.on('click', function () {
				Name.html(folkName);
				Desc.html(folkDesc);
			})
			art.on('click', function () {
				Name.html(artName);
				Desc.html(artDesc);
			})
			herm.on('click', function () {
				Name.html(hermName);
				Desc.html(hermDesc);
			})
			nob.on('click', function () {
				Name.html(nobName);
				Desc.html(nobDesc);
			})
			out.on('click', function () {
				Name.html(outName);
				Desc.html(outDesc);
			})
			sage.on('click', function () {
				Name.html(sageName);
				Desc.html(sageDesc);
			})
			sail.on('click', function () {
				Name.html(sailName);
				Desc.html(sailDesc);
			})
			sold.on('click', function () {
				Name.html(soldName);
				Desc.html(soldDesc);
			})
			urch.on('click', function () {
				Name.html(urchName);
				Desc.html(urchDesc);
			})
		}
	})
})
