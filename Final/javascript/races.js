// Get json
$(document).ready(function () {
	$.ajax({
		url: "javascript/dnd.json"
		, dataType: "json"
		, success: function (data) {
			console.log(data);
			//race info
			var dwarfName = data['Dwarf']['RaceName'];
			var dwarfScore = data['Dwarf']['AbilMod'];
			var dwarfDesc = data['Dwarf']['Description'];
			var dwarfPhys = data['Dwarf']['Physical'];
			var dwarfSA1 = data['Dwarf']['Subraces']['Subrace1']['AbilMod'];
			var dwarfSN1 = data['Dwarf']['Subraces']['Subrace1']['Name'];
			var dwarfSD1 = data['Dwarf']['Subraces']['Subrace1']['Description'];
			var dwarfSA2 = data['Dwarf']['Subraces']['Subrace2']['AbilMod'];
			var dwarfSN2 = data['Dwarf']['Subraces']['Subrace2']['Name'];
			var dwarfSD2 = data['Dwarf']['Subraces']['Subrace2']['Description'];
			var elfName = data['Elf']['RaceName'];
			var elfScore = data['Elf']['AbilMod'];
			var elfDesc = data['Elf']['Description'];
			var elfPhys = data['Elf']['Physical'];
			var elfSA1 = data['Elf']['Subraces']['Subrace1']['AbilMod'];
			var elfSN1 = data['Elf']['Subraces']['Subrace1']['Name'];
			var elfSD1 = data['Elf']['Subraces']['Subrace1']['Description'];
			var elfSA2 = data['Elf']['Subraces']['Subrace2']['AbilMod'];
			var elfSN2 = data['Elf']['Subraces']['Subrace2']['Name'];
			var elfSD2 = data['Elf']['Subraces']['Subrace2']['Description'];
			var elfSA3 = data['Elf']['Subraces']['Subrace3']['AbilMod'];
			var elfSN3 = data['Elf']['Subraces']['Subrace3']['Name'];
			var elfSD3 = data['Elf']['Subraces']['Subrace3']['Description'];
			var halfName = data['Halfling']['RaceName'];
			var halfScore = data['Halfling']['AbilMod'];
			var halfDesc = data['Halfling']['Description'];
			var halfPhys = data['Halfling']['Physical'];
			var halfSA1 = data['Halfling']['Subraces']['Subrace1']['AbilMod'];
			var halfSN1 = data['Halfling']['Subraces']['Subrace1']['Name'];
			var halfSD1 = data['Halfling']['Subraces']['Subrace1']['Description'];
			var halfSA2 = data['Halfling']['Subraces']['Subrace2']['AbilMod'];
			var halfSN2 = data['Halfling']['Subraces']['Subrace2']['Name'];
			var halfSD2 = data['Halfling']['Subraces']['Subrace2']['Description'];
			var humName = data['Human']['RaceName'];
			var humScore = data['Human']['AbilMod'];
			var humDesc = data['Human']['Description'];
			var humPhys = data['Human']['Physical'];
			var dragName = data['Dragonborn']['RaceName'];
			var dragScore = data['Dragonborn']['AbilMod'];
			var dragDesc = data['Dragonborn']['Description'];
			var dragPhys = data['Dragonborn']['Physical'];
			var gnomeName = data['Gnome']['RaceName'];
			var gnomeScore = data['Gnome']['AbilMod'];
			var gnomeDesc = data['Gnome']['Description'];
			var gnomePhys = data['Gnome']['Physical'];
			var gnomeSA1 = data['Gnome']['Subraces']['Subrace1']['AbilMod'];
			var gnomeSN1 = data['Gnome']['Subraces']['Subrace1']['Name'];
			var gnomeSD1 = data['Gnome']['Subraces']['Subrace1']['Description'];
			var gnomeSA2 = data['Gnome']['Subraces']['Subrace2']['AbilMod'];
			var gnomeSN2 = data['Gnome']['Subraces']['Subrace2']['Name'];
			var gnomeSD2 = data['Gnome']['Subraces']['Subrace2']['Description'];
			var helfName = data['HalfElf']['RaceName'];
			var helfScore = data['HalfElf']['AbilMod'];
			var helfDesc = data['HalfElf']['Description'];
			var helfPhys = data['HalfElf']['Physical'];
			var horcName = data['HalfOrc']['RaceName'];
			var horcScore = data['HalfOrc']['AbilMod'];
			var horcDesc = data['HalfOrc']['Description'];
			var horcPhys = data['HalfOrc']['Physical'];
			var tiefName = data['Tiefling']['RaceName'];
			var tiefScore = data['Tiefling']['AbilMod'];
			var tiefDesc = data['Tiefling']['Description'];
			var tiefPhys = data['Tiefling']['Physical'];
			//Html elements
			var dwarf = $("#dwarf");
			var elf = $("#elf");
			var half = $("#half");
			var hum = $("#human");
			var drag = $("#drag");
			var gnome = $("#gnome");
			var helf = $("#helf");
			var horc = $("#horc");
			var tief = $("#tief");
			var Name = $("#raceName");
			var Abil = $("#scorMod");
			var Desc = $("#description");
			var Phys = $("#physical");
			var Subs = $("#Subs");
			var Sub1 = $("#sub1");
			var Sub2 = $("#sub2");
			var Sub3 = $("#sub3");
			var abil1 = $("#abil1");
			var abil2 = $("#abil2");
			var abil3 = $("#abil3");
			var D1 = $("#desc1");
			var D2 = $("#desc2");
			var D3 = $("#desc3");
			//replacer functions
			dwarf.on('click', function () {
				Name.html(dwarfName);
				Abil.html(dwarfScore);
				Desc.html(dwarfDesc);
				Phys.html(dwarfPhys);
				Sub1.html(dwarfSN1);
				abil1.html(dwarfSA1);
				D1.html(dwarfSD1);
				Sub2.html(dwarfSN2);
				abil2.html(dwarfSA2);
				D2.html(dwarfSD2);
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
			elf.on('click', function () {
				Name.html(elfName);
				Abil.html(elfScore);
				Desc.html(elfDesc);
				Phys.html(elfPhys);
				Sub1.html(elfSN1);
				abil1.html(elfSA1);
				D1.html(elfSD1);
				Sub2.html(elfSN2);
				abil2.html(elfSA2);
				D2.html(elfSD2);
				Sub3.html(elfSN3);
				abil3.html(elfSA3);
				D3.html(elfSD3);
			})
			half.on('click', function () {
				Name.html(halfName);
				Abil.html(halfScore);
				Desc.html(halfDesc);
				Phys.html(halfPhys);
				Sub1.html(halfSN1);
				abil1.html(halfSA1);
				D1.html(halfSD1);
				Sub2.html(halfSN2);
				abil2.html(halfSA2);
				D2.html(halfSD2);
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
			hum.on('click', function () {
				Name.html(humName);
				Abil.html(humScore);
				Desc.html(humDesc);
				Phys.html(humPhys);
				Sub1.empty();
				abil1.empty();
				D1.empty();
				Sub2.empty();
				abil2.empty();
				D2.empty();
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
			drag.on('click', function () {
				Name.html(dragName);
				Abil.html(dragScore);
				Desc.html(dragDesc);
				Phys.html(dragPhys);
				Sub1.empty();
				abil1.empty();
				D1.empty();
				Sub2.empty();
				abil2.empty();
				D2.empty();
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
			gnome.on('click', function () {
				Name.html(gnomeName);
				Abil.html(gnomeScore);
				Desc.html(gnomeDesc);
				Phys.html(gnomePhys);
				Sub1.html(gnomeSN1);
				abil1.html(gnomeSA1);
				D1.html(gnomeSD1);
				Sub2.html(gnomeSN2);
				abil2.html(gnomeSA2);
				D2.html(gnomeSD2);
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
			helf.on('click', function () {
				Name.html(helfName);
				Abil.html(helfScore);
				Desc.html(helfDesc);
				Phys.html(helfPhys);
				Sub1.empty();
				abil1.empty();
				D1.empty();
				Sub2.empty();
				abil2.empty();
				D2.empty();
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
			horc.on('click', function () {
				Name.html(horcName);
				Abil.html(horcScore);
				Desc.html(horcDesc);
				Phys.html(horcPhys);
				Sub1.empty();
				abil1.empty();
				D1.empty();
				Sub2.empty();
				abil2.empty();
				D2.empty();
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
			tief.on('click', function () {
				Name.html(tiefName);
				Abil.html(tiefScore);
				Desc.html(tiefDesc);
				Phys.html(tiefPhys);
				Sub1.empty();
				abil1.empty();
				D1.empty();
				Sub2.empty();
				abil2.empty();
				D2.empty();
				Sub3.empty();
				abil3.empty();
				D3.empty();
			})
		}
	})
})
