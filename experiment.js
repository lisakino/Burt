// Benton Facial Recognition Task
// Lisa Kinoshita 2017

//initialize 
var timeline = [];

var all_stims = [
			['stimuli/s01.bmp', 'stimuli/r01a.bmp', 'stimuli/r01b.bmp', 'stimuli/r01c.bmp', 'stimuli/r01d.bmp', 'stimuli/r01z.bmp', 'stimuli/r01f.bmp'],
			['stimuli/s02.bmp', 'stimuli/r02z.bmp', 'stimuli/r02b.bmp', 'stimuli/r02c.bmp', 'stimuli/r02d.bmp', 'stimuli/r02e.bmp', 'stimuli/r02f.bmp'],
			['stimuli/s03.bmp', 'stimuli/r03a.bmp', 'stimuli/r03z.bmp', 'stimuli/r03c.bmp', 'stimuli/r03d.bmp', 'stimuli/r03e.bmp', 'stimuli/r03f.bmp'],
			['stimuli/s04.bmp', 'stimuli/r04a.bmp', 'stimuli/r04b.bmp', 'stimuli/r04z.bmp', 'stimuli/r04d.bmp', 'stimuli/r04e.bmp', 'stimuli/r04f.bmp'],
			['stimuli/s05.bmp', 'stimuli/r05a.bmp', 'stimuli/r05b.bmp', 'stimuli/r05c.bmp', 'stimuli/r05d.bmp', 'stimuli/r05e.bmp', 'stimuli/r05z.bmp'],
			['stimuli/s06.bmp', 'stimuli/r06a.bmp', 'stimuli/r06z.bmp', 'stimuli/r06c.bmp', 'stimuli/r06d.bmp', 'stimuli/r06e.bmp', 'stimuli/r06f.bmp'],
			['stimuli/s07.bmp', 'stimuli/r07a.bmp', 'stimuli/r07x.bmp', 'stimuli/r07c.bmp', 'stimuli/r07d.bmp', 'stimuli/r07y.bmp', 'stimuli/r07z.bmp'],
			['stimuli/s08.bmp', 'stimuli/r08x.bmp', 'stimuli/r08b.bmp', 'stimuli/r08y.bmp', 'stimuli/r08z.bmp', 'stimuli/r08e.bmp', 'stimuli/r08f.bmp'],
			['stimuli/s09.bmp', 'stimuli/r09a.bmp', 'stimuli/r09x.bmp', 'stimuli/r09c.bmp', 'stimuli/r09y.bmp', 'stimuli/r09e.bmp', 'stimuli/r09z.bmp'],
			['stimuli/s10.bmp', 'stimuli/r10a.bmp', 'stimuli/r10x.bmp', 'stimuli/r10c.bmp', 'stimuli/r10d.bmp', 'stimuli/r10y.bmp', 'stimuli/r10z.bmp'],
			['stimuli/s11.bmp', 'stimuli/r11x.bmp', 'stimuli/r11b.bmp', 'stimuli/r11c.bmp', 'stimuli/r11y.bmp', 'stimuli/r11e.bmp', 'stimuli/r11z.bmp'],
			['stimuli/s12.bmp', 'stimuli/r12a.bmp', 'stimuli/r12x.bmp', 'stimuli/r12y.bmp', 'stimuli/r12d.bmp', 'stimuli/r12e.bmp', 'stimuli/r12z.bmp'],
			['stimuli/s13.bmp', 'stimuli/r13x.bmp', 'stimuli/r13b.bmp', 'stimuli/r13y.bmp', 'stimuli/r13d.bmp', 'stimuli/r13z.bmp', 'stimuli/r13f.bmp'],
			['stimuli/s14.bmp', 'stimuli/r14x.bmp', 'stimuli/r14b.bmp', 'stimuli/r14y.bmp', 'stimuli/r14d.bmp', 'stimuli/r14z.bmp', 'stimuli/r14f.bmp'],
			['stimuli/s15.bmp', 'stimuli/r15a.bmp', 'stimuli/r15x.bmp', 'stimuli/r15y.bmp', 'stimuli/r15z.bmp', 'stimuli/r15e.bmp', 'stimuli/r15f.bmp'],
			['stimuli/s16.bmp', 'stimuli/r16a.bmp', 'stimuli/r16x.bmp', 'stimuli/r16c.bmp', 'stimuli/r16y.bmp', 'stimuli/r16z.bmp', 'stimuli/r16f.bmp'],
			['stimuli/s17.bmp', 'stimuli/r17x.bmp', 'stimuli/r17b.bmp', 'stimuli/r17c.bmp', 'stimuli/r17y.bmp', 'stimuli/r17e.bmp', 'stimuli/r17z.bmp'],
			['stimuli/s18.bmp', 'stimuli/r18a.bmp', 'stimuli/r18b.bmp', 'stimuli/r18x.bmp', 'stimuli/r18y.bmp', 'stimuli/r18e.bmp', 'stimuli/r18z.bmp'],
			['stimuli/s19.bmp', 'stimuli/r19a.bmp', 'stimuli/r19x.bmp', 'stimuli/r19y.bmp', 'stimuli/r19z.bmp', 'stimuli/r19e.bmp', 'stimuli/r19f.bmp'],
			['stimuli/s20.bmp', 'stimuli/r20x.bmp', 'stimuli/r20y.bmp', 'stimuli/r20z.bmp', 'stimuli/r20d.bmp', 'stimuli/r20e.bmp', 'stimuli/r20f.bmp'],
			['stimuli/s21.bmp', 'stimuli/r21x.bmp', 'stimuli/r21b.bmp', 'stimuli/r21c.bmp', 'stimuli/r21d.bmp', 'stimuli/r21y.bmp', 'stimuli/r21z.bmp'],
			['stimuli/s22.bmp', 'stimuli/r22a.bmp', 'stimuli/r22x.bmp', 'stimuli/r22c.bmp', 'stimuli/r22y.bmp', 'stimuli/r22z.bmp', 'stimuli/r22f.bmp']
		]
;


// Welcome block
var welcome_block = {
  type: 'button-response',
  choices: ["Continue"],
  prompt: "<p class='center-content'>This is the Benton Face Recognition Test. There will be two parts to this test.</p><p class='center-content'>Press 'Continue' to begin.</p>",
  button_html: "<a class='jspsych-btn'>%choice%</a>"
};

var part_one_intro = {
  type: 'button-response',
  stimulus: "stimuli/instr1.jpg",
  choices: ["Continue"],
  prompt: "<p class='center-content'>You will see 1 face at the top of the screen, which you will have to find among the 6 faces presented below. You have 30 seconds to click on the image. Try to answer as quickly and correctly as possible.</p><p class='center-content'>Press 'Continue' to begin.</p>",
  button_html: "<a class='jspsych-btn'>%choice%</a>"
};

//Part One of the Benton Face Recognition Task
var part_one_trials = {
	type: "benton-face-part-one",
	timeline: [
		{stimuli: ['stimuli/s01.bmp', 'stimuli/r01a.bmp', 'stimuli/r01b.bmp', 'stimuli/r01c.bmp', 'stimuli/r01d.bmp', 'stimuli/r01z.bmp', 'stimuli/r01f.bmp']},
		{stimuli: ['stimuli/s02.bmp', 'stimuli/r02z.bmp', 'stimuli/r02b.bmp', 'stimuli/r02c.bmp', 'stimuli/r02d.bmp', 'stimuli/r02e.bmp', 'stimuli/r02f.bmp']},
		{stimuli: ['stimuli/s03.bmp', 'stimuli/r03a.bmp', 'stimuli/r03z.bmp', 'stimuli/r03c.bmp', 'stimuli/r03d.bmp', 'stimuli/r03e.bmp', 'stimuli/r03f.bmp']},
		{stimuli: ['stimuli/s04.bmp', 'stimuli/r04a.bmp', 'stimuli/r04b.bmp', 'stimuli/r04z.bmp', 'stimuli/r04d.bmp', 'stimuli/r04e.bmp', 'stimuli/r04f.bmp']},
		{stimuli: ['stimuli/s05.bmp', 'stimuli/r05a.bmp', 'stimuli/r05b.bmp', 'stimuli/r05c.bmp', 'stimuli/r05d.bmp', 'stimuli/r05e.bmp', 'stimuli/r05z.bmp']},
		{stimuli: ['stimuli/s06.bmp', 'stimuli/r06a.bmp', 'stimuli/r06z.bmp', 'stimuli/r06c.bmp', 'stimuli/r06d.bmp', 'stimuli/r06e.bmp', 'stimuli/r06f.bmp']}
	]
};

var part_two_intro = {
  type: 'button-response',
  stimulus: "stimuli/instr2.jpg",
  choices: ["Continue"],
  prompt: "<p class='center-content'>You will see 1 face at the top of the screen, which you will have to find 3 times among the 6 faces presented below. You will have 30 seconds to click on the three images. Try to answer as quickly and correctly as possible.</p><p class='center-content'>Press 'Continue' to begin.</p>",
  button_html: "<a class='jspsych-btn'>%choice%</a>"
};

var part_two_trials = {
	type: "benton-face-part-two",
	timeline: [
		{stimuli: ['stimuli/s07.bmp', 'stimuli/r07a.bmp', 'stimuli/r07x.bmp', 'stimuli/r07c.bmp', 'stimuli/r07d.bmp', 'stimuli/r07y.bmp', 'stimuli/r07z.bmp']},
		{stimuli: ['stimuli/s08.bmp', 'stimuli/r08x.bmp', 'stimuli/r08b.bmp', 'stimuli/r08y.bmp', 'stimuli/r08z.bmp', 'stimuli/r08e.bmp', 'stimuli/r08f.bmp']},
		{stimuli: ['stimuli/s09.bmp', 'stimuli/r09a.bmp', 'stimuli/r09x.bmp', 'stimuli/r09c.bmp', 'stimuli/r09y.bmp', 'stimuli/r09e.bmp', 'stimuli/r09z.bmp']},
		{stimuli: ['stimuli/s10.bmp', 'stimuli/r10a.bmp', 'stimuli/r10x.bmp', 'stimuli/r10c.bmp', 'stimuli/r10d.bmp', 'stimuli/r10y.bmp', 'stimuli/r10z.bmp']},
		{stimuli: ['stimuli/s11.bmp', 'stimuli/r11x.bmp', 'stimuli/r11b.bmp', 'stimuli/r11c.bmp', 'stimuli/r11y.bmp', 'stimuli/r11e.bmp', 'stimuli/r11z.bmp']},
		{stimuli: ['stimuli/s12.bmp', 'stimuli/r12a.bmp', 'stimuli/r12x.bmp', 'stimuli/r12y.bmp', 'stimuli/r12d.bmp', 'stimuli/r12e.bmp', 'stimuli/r12z.bmp']},
		{stimuli: ['stimuli/s13.bmp', 'stimuli/r13x.bmp', 'stimuli/r13b.bmp', 'stimuli/r13y.bmp', 'stimuli/r13d.bmp', 'stimuli/r13z.bmp', 'stimuli/r13f.bmp']},
		{stimuli: ['stimuli/s14.bmp', 'stimuli/r14x.bmp', 'stimuli/r14b.bmp', 'stimuli/r14y.bmp', 'stimuli/r14d.bmp', 'stimuli/r14z.bmp', 'stimuli/r14f.bmp']},
		{stimuli: ['stimuli/s15.bmp', 'stimuli/r15a.bmp', 'stimuli/r15x.bmp', 'stimuli/r15y.bmp', 'stimuli/r15z.bmp', 'stimuli/r15e.bmp', 'stimuli/r15f.bmp']},
		{stimuli: ['stimuli/s16.bmp', 'stimuli/r16a.bmp', 'stimuli/r16x.bmp', 'stimuli/r16c.bmp', 'stimuli/r16y.bmp', 'stimuli/r16z.bmp', 'stimuli/r16f.bmp']},
		{stimuli: ['stimuli/s17.bmp', 'stimuli/r17x.bmp', 'stimuli/r17b.bmp', 'stimuli/r17c.bmp', 'stimuli/r17y.bmp', 'stimuli/r17e.bmp', 'stimuli/r17z.bmp']},
		{stimuli: ['stimuli/s18.bmp', 'stimuli/r18a.bmp', 'stimuli/r18b.bmp', 'stimuli/r18x.bmp', 'stimuli/r18y.bmp', 'stimuli/r18e.bmp', 'stimuli/r18z.bmp']},
		{stimuli: ['stimuli/s19.bmp', 'stimuli/r19a.bmp', 'stimuli/r19x.bmp', 'stimuli/r19y.bmp', 'stimuli/r19z.bmp', 'stimuli/r19e.bmp', 'stimuli/r19f.bmp']},
		{stimuli: ['stimuli/s20.bmp', 'stimuli/r20x.bmp', 'stimuli/r20y.bmp', 'stimuli/r20z.bmp', 'stimuli/r20d.bmp', 'stimuli/r20e.bmp', 'stimuli/r20f.bmp']},
		{stimuli: ['stimuli/s21.bmp', 'stimuli/r21x.bmp', 'stimuli/r21b.bmp', 'stimuli/r21c.bmp', 'stimuli/r21d.bmp', 'stimuli/r21y.bmp', 'stimuli/r21z.bmp']},
		{stimuli: ['stimuli/s22.bmp', 'stimuli/r22a.bmp', 'stimuli/r22x.bmp', 'stimuli/r22c.bmp', 'stimuli/r22y.bmp', 'stimuli/r22z.bmp', 'stimuli/r22f.bmp']}
		]
};

timeline = [
  welcome_block,
  part_one_intro,
  part_one_trials,
  part_two_intro,
  part_two_trials
].concat(timeline);

function startExperiment(){
  end_page_url = document.location.href.split('/');
  // var experiment_folder_name = end_page_url[end_page_url.length-2];
  end_page_url = end_page_url.slice(0,end_page_url.length-1);
  end_page_url.push('endpage.html');
  temp_path = '';
  for(let i = 0;i<end_page_url.length;i++) {
    if (i > 0) temp_path = temp_path + '/';
    temp_path = temp_path + end_page_url[i];
  }
  end_page_url = temp_path;
  console.log(temp_path);
  jsPsych.init({
  display_element: $('#jspsych-target'),
  timeline: timeline,
    on_finish: function() {
      $.ajax({
        type: "POST",
        url: "https://diffmindslab.herokuapp.com/users/finishTrainSessionOffsite/"+location.search, //?experiment=bfrt-rt
        data: JSON.stringify(jsPsych.data.getData()),
        contentType: "application/json"
      })
      .success(function(data) {
        condition = JSON.stringify(data);
        // console.log(condition);
        // window.location.href = condition.id;
          console.log('HEY STOP PEEKING AT THE CONSOLE');
          window.location.href = end_page_url;
      })
      .fail(function() {
        // alert("A problem occurred while accessing the database. Please try again later.");
        console.log('HEY STOP PEEKING AT THE CONSOLE');
        window.location.href = end_page_url;
      });
    }
  });
}

jsPsych.pluginAPI.preloadImages(all_stims, function(){ startExperiment(); });
