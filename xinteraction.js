$(document).ready(function(){
	$(".skilldes").hide();
	$(".newpic").hide();
  $(".holder").each(function(index){
    var current = $(this).children().attr("id").charAt(1);
    if (current == "2" || current == "4"){
      $(this).css('margin-top', "120px");
    }
    else if (current == "3") {
      $(this).css('margin-top', "220px");
      big($(this));
    }
  });

 /* Den här delen hanterar hover över skills*/
  $("img.skill").mouseenter( function() {
		$(".skilldes").show();
		var skills = $(this).attr("id");
		var t = textskill(skills);
		$(".skilldes").html("<div class='textskill'>"+textskill(skills)+"</div>");
  }).mouseleave(function() {
    $(".skilldes").hide();
  });

 /* Den här delen hanterar hover över och klick på karaktärerna*/
  $(".holder").mouseenter(
    function() {
			if($(this).attr('clicked') != 'yes'){
			  var hovered = $(this).children().attr("id");
			  $(this).animate({width: "300px"}, "fast");
			  console.log($(this));
			  $(this).find("h1").show();
			  $(this).css('cursor', 'pointer');
			}
		}
  ).mouseleave(function() {
		  if($(this).attr('clicked') != 'yes'){
			  var hovered = $(this).children().attr("id");
			  $(this).animate({width: "200px"}, "fast");
			  $(this).find("h1").hide();
		  };
  }).click(function() {
			if ($(this).attr('clicked') != 'yes'){
				small();};
		  big(this);
			$(this).css('cursor', 'default');
	  	});
  });

  /*Gör alla karaktärer små (händer vid varje klick)*/
  function small() {
	  $(".holder").animate({width: "200px"}, "fast");
	  $(".holder").find("h1").hide();
		$(".newpic").fadeOut();
		$(".oldpic").fadeIn();
  }

  function big(myThis) {
		var oldpic = $(myThis).find(".oldpic");
		var newpic = $(myThis).find(".newpic");
    var hovered = $(myThis).children().attr("id");
		$(".holder").attr("clicked","no");
    $(myThis).animate({width: "700px"}, "slow");
    $("#" + String(hovered)).animate({margin: "0;"}, "fast");
    $(myThis).attr('clicked', 'yes');
		$(oldpic).hide();
		$(newpic).fadeIn("slow");
  }
  /*Ger beskrivning på en skill baserat på ID*/
  function textskill (skill){
	  var alltext = {
		  "m1": "Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.",
		  "m2": "Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.",
		  "m3": "Mercy brings a dead ally back into the fight with full health.",
		  "m4": "Gain the ability to fly. Mercy’s abilities are enhanced.",

		  "z1": "Zenyatta projects his destructive energy orbs in a rapid-fire volley after a few seconds spent gathering power.",
		  "z2": "Zenyatta casts an orb over the shoulder of a targeted ally. So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orb's benefit at a time.",
		  "z3": "Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as Zenyatta maintains line of sight. Only one opponent can suffer the orb's effects at a time.",
		  "z4": "Zenyatta enters a state of heightened existence for a short period of time. While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage and automatically ",

		  "s1": "Symmetra’s weapon emits a short-range beam that homes in on a nearby enemy, dealing continuous damage that increases the longer it is connected.",
		  "s2": "Symmetra sets up a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Several turrets can be built on the battlefield at once.",
		  "s3": "Symmetra projects a moving barrier that absorbs damage as it travels forward.",
		  "s4": "Symmetra deploys a wide-radius generator that provides increased shielding to her entire team.",

		  "a1": "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
		  "a2": "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
		  "a3": "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.",
		  "a4": "After Ana hits one of her allies with a combat boost, they deal more damage and take less damage from enemies’ attacks.",

		  "l1": "Lúcio can knock his enemies back with a blast of sound.",
		  "l2": "Lúcio continuously energizes himself — and nearby teammates — with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.",
		  "l3": "Lúcio increases the volume on his speakers, boosting the effects of his songs.",
		  "l4": "Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.",
	  };
	  return alltext[String(skill)];
  }


	/*  function pos() {
		var zen3 = "220px";
	    var zen2n4 = "120px";
		$(".holder").each(function(index){
			var current = $(this).children().attr("id").charAt(1);
			if (current == "2" || current == "4"){
			  $(this).css('margin-top', zen2n4);
			}
			else if (current == "3") {
			  $(this).css('margin-top', zen3);
	  }})};*/
