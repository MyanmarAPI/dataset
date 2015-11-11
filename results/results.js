var candidates = {
  upper: require('../candidates/json/final_upper_house.json'),
  lower: require('../candidates/json/final_lower_house.json'),
  state: require('../candidates/json/final_state_house.json')
};

var parties = {
"1":"မြိုတိုင်းရင်းသားဖွံ့ဖြိုး​ရေးပါတီ",
"2":"တိုင်းရင်းသားစည်းလုံးညီညွတ်ရေးပါတီ",
"3":"လားဟူအမျိုးသားဖွံ့ဖြိုးတိုးတက်ရေးပါတီ",
"4":"ကိုးကန့်ဒီမိုကရေစီနှင့်ညီညွတ်ရေးပါတီ",
"5":"ပအိုဝ်းအမျိုးသားအဖွဲ့ချုပ်(PNO)ပါတီ",
"6":"ဒီမိုကရက်တစ်ပါတီ(မြန်မာ)",
"7":"ကယန်းအမျိုးသားပါတီ",
"8":"ရခိုင်ပြည်နယ်အမျိုးသားအင်အားစုပါတီ",
"9":"ကရင်ပြည်သူ့ပါတီ",
"10":"“ဝ”အမျိုးသားစည်းလုံးညီညွတ်ရေးပါတ",
"11":"တအာင်း(ပလောင်)အမျိုးသားပါတီ",
"12":"မွန်ဒေသလုံးဆိုင်ရာဒီမိုကရေစီပါတီ",
"13":"ဒီမိုကရေစီနှင့်ငြိမ်းချမ်းရေးပါတီ",
"14":"ရှမ်းတိုင်းရင်းသားများဒီမိုကရက်တစ်ပါတီ",
"15":"ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ(UDP)",
"16":"၈၈မျိုးဆက်ကျောင်းသားလူငယ်များ(ပြည်ထောင်စုမြန်မာနိုင်ငံ)ပါတီ",
"17":"ပြည်ထောင်စုမြန်မာနိုင်ငံအမျိုးသားနိုင်ငံရေးအဖွဲ့ချုပ်ပါတီ",
"18":"အမျိုးသားနိုင်ငံရေးမဟာမိတ်များအဖွဲ့ချုပ်ပါတီ",
"19":"ချင်းအမျိုးသားဒီမိုကရက်တစ်ပါတီ",
"20":"ဝံသာနုဒီမိုကရက်တစ်ပါတီ",
"21":"ခေတ်သစ်ပြည်သူ့ပါတီ",
"22":"ပြည်ထောင်စုဒီမိုကရေစီပါတီ",
"23":"မတူကွဲပြားခြင်းနှင့်ငြိမ်းချမ်းရေးပါတီ",
"24":"ချင်းတိုးတက်ရေးပါတီ",
"25":"အင်းအမျိုးသားဖွံ့ဖြိုးတိုးတက်ရေးပါတီ",
"26":"“ဝ”ဒီမိုကရက်တစ်ပါတီ",
"27":"ဖလုံ-စဝေါ် ဒီမိုကရက်တစ်ပါတီ",
"28":"အမျိုးသားဖွံ့ဖြိုးတိုးတက်ရေးဒီမိုကရက်တစ်ပါတီ",
"29":"ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ",
"30":"တိုင်းရင်းသားလူမျိုးစုများဖွံ့ဖြိုးရေးပါတီ",
"31":"ကမန်အမျိုးသားတိုးတက်ရေးပါတီ",
"32":"ခမီအမျိုးသားဖွံ့ဖြိုးတိုးတက်ရေးပါတီ",
"33":"အမျိုးသားဒီမိုကရေစီအင်အားစုပါတီ",
"34":"စည်းလုံးညီညွတ်ရေးနှနှင့်ဒီမိုကရေစီပါတီ ကချင်ပြည်နယ်(စဒက)",
"35":"ကရင်ပြည်နယ်ဒီမိုကရေစီနှနှင့်ဖွံ့ဖြိုးတိုးတက်ရေးပါတီ",
"36":"အမျိုးသားဖွံ့ဖြိုးတိုးတက်ရေးနှင့်ငြိမ်းချမ်းရေးပါတီ",
"37":"ပြည်သူ့ဒီမိုကရေစီပါတီ",
"38":"အမျိုးသားဒီမိုကရေစီပါတီသစ် ပါတီ",
"39":"ဗမာပြည်သူ့ပါတီ",
"40":"အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ",
"41":"မြန်မာ့လူ့ဘောင်သစ်ဒီမိုကရက်တစ်ပါတီ",
"42":"မြန်မာအမျိုးသားကွန်ဂရက်ပါတီ",
"43":"ကရင်ဒီမိုကရက်တစ်ပါတီ",
"44":"မြိုတိုင်းရင်းသားပါတီ",
"45":"တိုင်းလိုင် ( ရှမ်းနီ ) အမျိုးသားများဖွံ့ဖြိုးတိုးတက်ရေးပါတီ",
"46":"အရှိုချင်းအမျိုးသားပါတီ",
"47":"ရှမ်းတိုင်းရင်းသားများဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ",
"48":"ဓနုတိုင်းရင်းသားလူမျိုးများဒီမိုကရေစီပါတီ",
"49":"မွန်အမျိုးသားပါတီ",
"50":"ဇိုမီးဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ",
"51":"ရှမ်းပြည်ကိုးကန့်ဒီမိုကရက်တစ်ပါတီ",
"52":"မြန်မာနိုင်ငံတောင်သူလယ်သမားဖွံ့ဖြိုးတိုးတက်ရေးပါတီ",
"53":"အမျိုးသားညီညွတ်ရေးကွန်ဂရက်ပါတီ",
"54":"ဒီမိုကရေစီနှင့်လူ့အခွင့်အရေးပါတီ",
"55":"လူမျိုးပေါင်းစုံဒီမိုကရေစီပါတီ(ကယားပြည်နယ်)",
"56":"ကယားလူမျိုးစုဒီမိုကရေစီပါတီ",
"57":"အမျိုးသားတိုးတက်မြင့်မားရေးပါတီ",
"58":"ကချင်ပြည်နယ်ဒီမိုကရေစီပါတီ",
"59":"ကချင်အမျိုးသားများဒီမိုကရေစီကွန်ဂရက်ပါတီ",
"60":"လီဆူအမျိုးသားဖွံ့ဖြိုးတိုးတက်ရေးပါတီ(ဒူးလေးပါတီ)",
"61":"ထားဝယ်တိုင်းရင်းသားများပါတီ",
"62":"ဖက်ဒရယ်ပြည်ထောင်စုပါတိ",
"63":"ကချင်ဒီမိုကရက်တစ်ပါတီ",
"64":"ပြည်ထောင်စုပအိုဝ်းအမျိုးသားအဖွဲ့ချုပ် (ပ.အ.မ.ဖ)ပါတီ",
"65":"ရခိုင်အမျိုးသားပါတီ",
"66":"ချင်းဒီမိုကရေစီအဖွဲ့ချုပ်",
"67":"ခူမီး(ခမီး)အမျိုးသားပါတီ",
"68":"လူ့ဘောင်သစ် ဒီမိုကရက်တစ် ပါတီ",
"69":"ကရင် အမျိုးသား ပါတီ",
"70":"မြန်မာနိုင်ငံ တောင်သူ လယ်သမား၊အလုပ်သမား ပြည်သူ့ပါတီ",
"71":"မြိုအမျိုးသားဒီမိုကရေစီပါတီ",
"72":"ဓနုအမျိုးသားများအဖွဲ့ချုပ်ပါတီ",
"73":"ပြည်သူ့အကျိုးပြုကျောင်းသားများဒီမိုကရေစီပါတီ",
"74":"လမ်းပြကြယ်ပါတီ",
"75":"ရှမ်းနီ (တိုင်းလိုင်) နှင့် မြောက်ပိုင်းရှမ်းမျိုးနွယ်စုများ သွေးစည်းညီညွတ်ရေးပါတီ",
"76":"လူ့ဘောင်သစ်ပါတီ",
"77":"အင်းတိုင်းရင်းသားအဖွဲ့ချုပ်ပါတီ",
"78":"၈၈ မျိုးဆက်ဒီမိုကရေစီပါတီ",
"79":"စည်းလုံးညီညွတ်သောကရင်အမျိုးသားဒီမိုကရက်တစ်ပါတီ",
"80":"လော်ဝေါ်အမျိုးသားစည်းလုံးညီညွတ်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ",
"81":"ခေတ်သစ်ပြည်ထောင်စုပါတီ",
"82":"ရှမ်းပြည်နယ်အရှေ့ပိုင်းဖွံ့ဖြိုးတိုးတက်ရေးဒီမိုကရက်တစ်ပါတီ",
"83":"မဟာမိတ်တောင်သူလယ်သမားပါတီ",
"84":"အာခါအမျိုးသားဖွံ့ဖြိုးတိုးတက်ရေးပါတီ",
"85":"ဇိုတိုင်းရင်းသားဒေသဖွံ့ဖြိုးရေးပါတီ",
"86":"အမျိုးသားတိုးတက်ရေးပါတီ",
"87":"အမျိုးသမီးပါတီ (မွန်)",
"88":"ရခိုင်မျိုးချစ်ပါတီ",
"89":"စေ့စပ်ညှိနှိုင်းရေးနှင့် တည်ငြိမ်အေးချမ်းရေးပါတီ",
"90":"ပြည်ထောင်စုတောင်သူလယ်သမားအင်အားစုပါတီ",
"91":"ဒိုင်းနက်လူမျိုးများတိုးတက်ရေးပါတီ"
};

var fs = require('fs');
var myanmarNumbers = require('myanmar-numbers');
var csv = require('fast-csv');
var winners = [];

function processLower() {
	csv.fromPath('lowerhouse.csv', { delimiter: '\t' })
	  .on('data', function(row) {
		if (row.length === 6) {
		  winners.push(row.slice(1));
		}
	  })
	  .on('end', function() {
		// remove header
		// was: [ 'State/Region Name', 'Constituency Name', 'Winning Candidate Name', 'Party/Independence', 'Total Vote Counts' ]
		winners = winners.slice(1);
	
		for (var c = 0; c < winners.length; c++) {
		  var state = winners[c][0];
		  var conName = winners[c][1].replace(/ဉ/g, 'ဥ');
		  if (conName === 'မယ်စဲ့') {
			conName = 'မယ်စဲ';
		  }
		  if (conName === 'ဖားဆောင်း') {
		    conName = 'ဖာဆောင်း';
		  }
		  var name = winners[c][2].replace(/\s/g, '').replace(/့်/g, '့်').replace(/ဉ/g, 'ဥ');
		  var party = winners[c][3].replace(/\s/g, '').replace(/့်/g, '့်');
		  var party_id = null;
		  for (var pid in parties) {
			if (parties[pid] === party || parties[pid] === party + 'ပါတီ') {
			  party_id = pid;
			}
		  }
		  if (!party_id) {
			console.log(party);
		  }
		  var votes = myanmarNumbers(winners[c][4]);
	
		  // find match in lower house
		  var foundCandidate = false;
		  for (var i = 0; i < candidates.lower.length; i++) {
			if ((conName === candidates.lower[i].constituency.name.replace('မဲဆန္ဒနယ်', '').replace('မြို့နယ်',''))
			  && (party_id * 1 == candidates.lower[i].party_id * 1)
			  && (candidates.lower[i].name.replace(/\s/g, '').replace(/့်/g, '့်').replace(/ဉ/g, 'ဥ').indexOf(name) === 0)) {
			  foundCandidate = true;
			  if (candidates.lower[i].votes !== votes) {
				candidates.lower[i].votes = votes;
			  }
			  break;
			}
		  }
		  if (!foundCandidate) {
			console.log('did not find ' + name);
		  }
		}
	
		fs.writeFile('../candidates/json/final_lower_house.json', JSON.stringify(candidates.lower).replace(/}},/g, "}},\n"), function (err) {
		  if (err) {
			throw err;
		  }
		  console.log('done with lower house');
		  processState();
		});
	  });
}

function processState() {
    winners = [];
	csv.fromPath('statehouse.csv', { delimiter: '\t' })
	  .on('data', function(row) {
		if (row.length === 6) {
		  winners.push(row.slice(1));
		}
	  })
	  .on('end', function() {
		// remove header
		// was: [ 'State/Region Name', 'Constituency Name', 'Winning Candidate Name', 'Party/Independence', 'Total Vote Counts' ]
		winners = winners.slice(1);
	
		for (var c = 0; c < winners.length; c++) {
		  var state = winners[c][0];
		  var conName = winners[c][1].replace(/ဉ/g, 'ဥ').split('(')[0].trim();
		  if (conName === 'မယ်စဲ့') {
			conName = 'မယ်စဲ';
		  }
		  if (conName === 'ဖားဆောင်း') {
		    conName = 'ဖာဆောင်း';
		  }
		  var conNumber = winners[c][1].split('(')[1].split(')')[0];
		  var name = winners[c][2].replace(/\s/g, '').replace(/့်/g, '့်').replace(/ဉ/g, 'ဥ');
		  var party = winners[c][3].replace(/\s/g, '').replace(/့်/g, '့်');
		  var party_id = null;
		  for (var pid in parties) {
			if (parties[pid] === party || parties[pid] === party + 'ပါတီ') {
			  party_id = pid;
			}
		  }
		  if (!party_id) {
			console.log(party);
		  }
		  var votes = myanmarNumbers(winners[c][4]);
	
		  // find match in state house
		  var foundCandidate = false;
		  for (var i = 0; i < candidates.state.length; i++) {
			if ((conName === candidates.state[i].constituency.name.replace('မဲဆန္ဒနယ်', '').replace('မြို့နယ်',''))
			  && (party_id * 1 == candidates.state[i].party_id * 1)
			  && (myanmarNumbers(conNumber) === candidates.state[i].constituency.number)
			  && (candidates.state[i].name.replace(/\s/g, '').replace(/့်/g, '့်').replace(/ဉ/g, 'ဥ').indexOf(name) === 0)) {
			  foundCandidate = true;
			  if (candidates.state[i].votes !== votes) {
			    //console.log('switching votes from ' + candidates.state[i].votes + ' to ' + votes);
				candidates.state[i].votes = votes;
			  }
			  break;
			}
		  }
		  if (!foundCandidate) {
		  	console.log('did not find ' + name);
		  }
		}
		fs.writeFile('../candidates/json/final_state_house.json', JSON.stringify(candidates.state).replace(/}},/g, "}},\n"), function (err) {
		  if (err) {
			throw err;
		  }
		  console.log('done with state house');
		  processUpper();
		});
	  });
}

function processUpper() {
    winners = [];
	csv.fromPath('upperhouse.csv', { delimiter: '\t' })
	  .on('data', function(row) {
		if (row.length === 6) {
		  winners.push(row.slice(1));
		}
	  })
	  .on('end', function() {
		// remove header
		// was: [ 'State/Region Name', 'Constituency Number', 'Winning Candidate Name', 'Party/Independence', 'Total Vote Counts' ]
		winners = winners.slice(1);
	
		for (var c = 0; c < winners.length; c++) {
		  var state = winners[c][0];
		  var conNumber = winners[c][1];
		  var name = winners[c][2].replace(/\s/g, '').replace(/့်/g, '့်').replace(/ဉ/g, 'ဥ');
		  var party = winners[c][3].replace(/\s/g, '').replace(/့်/g, '့်');
		  var party_id = null;
		  for (var pid in parties) {
			if (parties[pid] === party || parties[pid] === party + 'ပါတီ') {
			  party_id = pid;
			}
		  }
		  if (!party_id && party !== 'တစ်သီးပုဂ္ဂလ') {
			console.log(party);
		  }
		  var votes = myanmarNumbers(winners[c][4]);
	
		  // find match in upper house
		  var foundCandidate = false;
		  for (var i = 0; i < candidates.upper.length; i++) {
			if ((party_id * 1 == candidates.upper[i].party_id * 1)
			  && (myanmarNumbers(conNumber) === candidates.upper[i].constituency.number)
			  && (candidates.upper[i].name.replace(/\s/g, '').replace(/့်/g, '့်').replace(/ဉ/g, 'ဥ').indexOf(name) === 0)) {
			  foundCandidate = true;
			  if (candidates.upper[i].votes !== votes) {
			    //console.log('switching votes from ' + candidates.upper[i].votes + ' to ' + votes);
				candidates.upper[i].votes = votes;
			  }
			  break;
			}
		  }
		  if (!foundCandidate) {
		  	console.log('did not find ' + name);
		  }
		}
		fs.writeFile('../candidates/json/final_upper_house.json', JSON.stringify(candidates.upper).replace(/}},/g, "}},\n"), function (err) {
		  if (err) {
			throw err;
		  }
		  console.log('done with upper house');
		});
	  });
}

processLower();