// Get json
$(document).ready(function () {
	$.ajax({
		url: "javascript/dnd.json"
		, dataType: "json"
		, success: function (data) {
			console.log(data);
			//Class info
			var barbName = data['Barbarian']['ClassName'];
			var barbDesc = data['Barbarian']['Description'];
			var barbSubs = data['Barbarian']['SubType'];
			var barbSN1 = data['Barbarian']['Subclasses']['Subclass1']['Name'];
			var barbSD1 = data['Barbarian']['Subclasses']['Subclass1']['Description'];
			var barbSN2 = data['Barbarian']['Subclasses']['Subclass2']['Name'];
			var barbSD2 = data['Barbarian']['Subclasses']['Subclass2']['Description'];
			var bardName = data['Bard']['ClassName'];
			var bardDesc = data['Bard']['Description'];
			var bardSubs = data['Bard']['SubType'];
			var bardSN1 = data['Bard']['Subclasses']['Subclass1']['Name'];
			var bardSD1 = data['Bard']['Subclasses']['Subclass1']['Description'];
			var bardSN2 = data['Bard']['Subclasses']['Subclass2']['Name'];
			var bardSD2 = data['Bard']['Subclasses']['Subclass2']['Description'];
			var clerName = data['Cleric']['ClassName'];
			var clerDesc = data['Cleric']['Description'];
			var clerSubs = data['Cleric']['SubType'];
			var clerSN1 = data['Cleric']['Subclasses']['Subclass1']['Name'];
			var clerSD1 = data['Cleric']['Subclasses']['Subclass1']['Description'];
			var druidName = data['Druid']['ClassName'];
			var druidDesc = data['Druid']['Description'];
			var druidSubs = data['Druid']['SubType'];
			var druidSN1 = data['Druid']['Subclasses']['Subclass1']['Name'];
			var druidSD1 = data['Druid']['Subclasses']['Subclass1']['Description'];
			var druidSN2 = data['Druid']['Subclasses']['Subclass2']['Name'];
			var druidSD2 = data['Druid']['Subclasses']['Subclass2']['Description'];
			var fightName = data['Fighter']['ClassName'];
			var fightDesc = data['Fighter']['Description'];
			var fightSubs = data['Fighter']['SubType'];
			var fightSN1 = data['Fighter']['Subclasses']['Subclass1']['Name'];
			var fightSD1 = data['Fighter']['Subclasses']['Subclass1']['Description'];
			var fightSN2 = data['Fighter']['Subclasses']['Subclass2']['Name'];
			var fightSD2 = data['Fighter']['Subclasses']['Subclass2']['Description'];
			var fightSN3 = data['Fighter']['Subclasses']['Subclass3']['Name'];
			var fightSD3 = data['Fighter']['Subclasses']['Subclass3']['Description'];
			var monkName = data['Monk']['ClassName'];
			var monkDesc = data['Monk']['Description'];
			var monkSubs = data['Monk']['SubType'];
			var monkSN1 = data['Monk']['Subclasses']['Subclass1']['Name'];
			var monkSD1 = data['Monk']['Subclasses']['Subclass1']['Description'];
			var monkSN2 = data['Monk']['Subclasses']['Subclass2']['Name'];
			var monkSD2 = data['Monk']['Subclasses']['Subclass2']['Description'];
			var palName = data['Paladin']['ClassName'];
			var palDesc = data['Paladin']['Description'];
			var palSubs = data['Paladin']['SubType'];
			var palSN1 = data['Paladin']['Subclasses']['Subclass1']['Name'];
			var palSD1 = data['Paladin']['Subclasses']['Subclass1']['Description'];
			var palSN2 = data['Paladin']['Subclasses']['Subclass2']['Name'];
			var palSD2 = data['Paladin']['Subclasses']['Subclass2']['Description'];
			var palSN3 = data['Paladin']['Subclasses']['Subclass3']['Name'];
			var palSD3 = data['Paladin']['Subclasses']['Subclass3']['Description'];
			var rangName = data['Ranger']['ClassName'];
			var rangDesc = data['Ranger']['Description'];
			var rangSubs = data['Ranger']['SubType'];
			var rangSN1 = data['Ranger']['Subclasses']['Subclass1']['Name'];
			var rangSD1 = data['Ranger']['Subclasses']['Subclass1']['Description'];
			var rangSN2 = data['Ranger']['Subclasses']['Subclass2']['Name'];
			var rangSD2 = data['Ranger']['Subclasses']['Subclass2']['Description'];
			var rogName = data['Rogue']['ClassName'];
			var rogDesc = data['Rogue']['Description'];
			var rogSubs = data['Rogue']['SubType'];
			var rogSN1 = data['Rogue']['Subclasses']['Subclass1']['Name'];
			var rogSD1 = data['Rogue']['Subclasses']['Subclass1']['Description'];
			var rogSN2 = data['Rogue']['Subclasses']['Subclass2']['Name'];
			var rogSD2 = data['Rogue']['Subclasses']['Subclass2']['Description'];
			var rogSN3 = data['Rogue']['Subclasses']['Subclass3']['Name'];
			var rogSD3 = data['Rogue']['Subclasses']['Subclass3']['Description'];
			var sorcName = data['Sorceror']['ClassName'];
			var sorcDesc = data['Sorceror']['Description'];
			var sorcSubs = data['Sorceror']['SubType'];
			var sorcSN1 = data['Sorceror']['Subclasses']['Subclass1']['Name'];
			var sorcSD1 = data['Sorceror']['Subclasses']['Subclass1']['Description'];
			var sorcSN2 = data['Sorceror']['Subclasses']['Subclass2']['Name'];
			var sorcSD2 = data['Sorceror']['Subclasses']['Subclass2']['Description'];
			var warName = data['Warlock']['ClassName'];
			var warDesc = data['Warlock']['Description'];
			var warSubs = data['Warlock']['SubType'];
			var warSN1 = data['Warlock']['Subclasses']['Subclass1']['Name'];
			var warSD1 = data['Warlock']['Subclasses']['Subclass1']['Description'];
			var warSN2 = data['Warlock']['Subclasses']['Subclass2']['Name'];
			var warSD2 = data['Warlock']['Subclasses']['Subclass2']['Description'];
			var warSN3 = data['Warlock']['Subclasses']['Subclass3']['Name'];
			var warSD3 = data['Warlock']['Subclasses']['Subclass3']['Description']
			var wizName = data['Wizard']['ClassName'];
			var wizDesc = data['Wizard']['Description'];
			var wizSubs = data['Wizard']['SubType'];
			var wizSN1 = data['Wizard']['Subclasses']['Subclass1']['Name'];
			var wizSD1 = data['Wizard']['Subclasses']['Subclass1']['Description'];
			//Html elements
			var barb = $("#barb");
			var bard = $("#bard");
			var cleric = $("#cleric");
			var druid = $("#druid");
			var fight = $("#fight");
			var monk = $("#monk");
			var pal = $("#pal");
			var rang = $("#ranger");
			var rog = $("#rogue");
			var sorc = $("#sorc");
			var war = $("#war");
			var wiz = $("#wiz");
			var Name = $("#className");
			var Desc = $("#description");
			var Subs = $("#Subs");
			var Sub1 = $("#sub1");
			var Sub2 = $("#sub2");
			var Sub3 = $("#sub3");
			var D1 = $("#desc1");
			var D2 = $("#desc2");
			var D3 = $("#desc3");
			//replacer functions
			barb.on('click', function () {
				Name.html(barbName);
				Desc.html(barbDesc);
				Subs.html(barbSubs);
				Sub1.html(barbSN1);
				D1.html(barbSD1);
				Sub2.html(barbSN2);
				D2.html(barbSD2);
				Sub3.empty();
				D3.empty();
			})
			bard.on('click', function () {
				Name.html(bardName);
				Desc.html(bardDesc);
				Subs.html(bardSubs);
				Sub1.html(bardSN1);
				D1.html(bardSD1);
				Sub2.html(bardSN2);
				D2.html(bardSD2);
				Sub3.empty();
				D3.empty();
			})
			cleric.on('click', function () {
				Name.html(clerName);
				Desc.html(clerDesc);
				Subs.html(clerSubs);
				Sub1.html(clerSN1);
				D1.html(clerSD1);
				Sub2.empty();
				D2.empty();
				Sub3.empty();
				D3.empty();
			})
			druid.on('click', function () {
				Name.html(druidName);
				Desc.html(druidDesc);
				Subs.html(druidSubs);
				Sub1.html(druidSN1);
				D1.html(druidSD1);
				Sub2.html(druidSN2);
				D2.html(druidSD2);
				Sub3.empty();
				D3.empty();
			})
			fight.on('click', function () {
				Name.html(fightName);
				Desc.html(fightDesc);
				Subs.html(fightSubs);
				Sub1.html(fightSN1);
				D1.html(fightSD1);
				Sub2.html(fightSN2);
				D2.html(fightSD2);
				Sub3.html(fightSN3);
				D3.html(fightSD3);
			})
			monk.on('click', function () {
				Name.html(monkName);
				Desc.html(monkDesc);
				Subs.html(monkSubs);
				Sub1.html(monkSN1);
				D1.html(monkSD1);
				Sub2.html(monkSN2);
				D2.html(monkSD2);
				Sub3.empty();
				D3.empty();
			})
			pal.on('click', function () {
				Name.html(palName);
				Desc.html(palDesc);
				Subs.html(palSubs);
				Sub1.html(palSN1);
				D1.html(palSD1);
				Sub2.html(palSN2);
				D2.html(palSD2);
				Sub3.html(palSN3);
				D3.html(palSD3);
			})
			rang.on('click', function () {
				Name.html(rangName);
				Desc.html(rangDesc);
				Subs.html(rangSubs);
				Sub1.html(rangSN1);
				D1.html(rangSD1);
				Sub2.html(rangSN2);
				D2.html(rangSD2);
				Sub3.empty();
				D3.empty();
			})
			rog.on('click', function () {
				Name.html(rogName);
				Desc.html(rogDesc);
				Subs.html(rogSubs);
				Sub1.html(rogSN1);
				D1.html(rogSD1);
				Sub2.html(rogSN2);
				D2.html(rogSD2);
				Sub3.html(rogSN3);
				D3.html(rogSD3);
			})
			sorc.on('click', function () {
				Name.html(sorcName);
				Desc.html(sorcDesc);
				Subs.html(sorcSubs);
				Sub1.html(sorcSN1);
				D1.html(sorcSD1);
				Sub2.html(sorcSN2);
				D2.html(sorcSD2);
				Sub3.empty();
				D3.empty();
			})
			war.on('click', function () {
				Name.html(warName);
				Desc.html(warDesc);
				Subs.html(warSubs);
				Sub1.html(warSN1);
				D1.html(warSD1);
				Sub2.html(warSN2);
				D2.html(warSD2);
				Sub3.html(warSN3);
				D3.html(warSD3);
			})
			wiz.on('click', function () {
				Name.html(wizName);
				Desc.html(wizDesc);
				Subs.html(wizSubs);
				Sub1.html(wizSN1);
				D1.html(wizSD1);
				Sub2.empty();
				D2.empty();
				Sub3.empty();
				D3.empty();
			})
		}
	})
})
