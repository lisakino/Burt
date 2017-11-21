/* Benton Facial Recognition Task Part 2
 * by Lisa Kinoshita (2017)
 * Template by Cool Jon Corp., 2017
 */


jsPsych.plugins["benton-face-part-two"] = (function() {

  var plugin = {};
  jsPsych.pluginAPI.registerPreload('benton-face-part-two', 'stimuli', 'image');
  plugin.trial = function(display_element, trial) {

	// default parameters
    trial.response_ends_trial = (typeof trial.response_ends_trial === 'undefined') ? true : trial.response_ends_trial;
    
    // timing parameters
    trial.timing_stim = trial.timing_stim || -1; // if -1, then show indefinitely
    trial.timing_response = 30000;

    trial.is_html = true;

    trial.prompt = "Select 3 images";
    trial.responses = [];

	// flattened version of the stimuli array
    var allstimuli = [];
    for (var i = 1; i < trial.stimuli.length; i++) {
      allstimuli = allstimuli.concat(trial.stimuli[i]);
    }
    var whichStimulus = 0;

    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];

    // array to store if we have gotten a valid response for
    // all the different response types
    var validResponses = [];
    for (var i = 0; i < trial.stimuli.length; i++) {
      validResponses[i] = false;
    }

    // array for response times for each of the different response types
    var responseTimes = [];
    for (var i = 0; i < trial.stimuli.length; i++) {
      responseTimes[i] = -1;
    }

    // array for response keys for each of the different response types
    var responseKeys = [];
    for (var i = 0; i < trial.stimuli.length; i++) {
      responseKeys[i] = -1;
    }
    
    // function to check if all of the valid responses are received
    function checkAllResponsesAreValid() {
      for (var i = 0; i < validResponses.length; i++) {
        if (validResponses[i] == false) {
          return false;
        }
      }
      return true;
    }
    
    function showStimuli() {
	  	 display_element.append($('<div>', {
        html:'<div id = prompt>'+trial.prompt+'</div>'}));
              display_element.append($('<div>', {
        html:'<div><p></div>'}));
		target_image = trial.stimuli[0];
		
      display_element.append($('<div>', {
      	   html:'<div id = target_stim><img src='+target_image+' class = target_stim ></div>'
      }));

      display_element.append($('<div>', {
        html:'<div><p></div>'}));
      // display stimulus
      html_content = '';
      console.log(trial);
 
      distractor_image_1 = trial.stimuli[1];
      distractor_image_2 = trial.stimuli[2];
      distractor_image_3 = trial.stimuli[3];
      distractor_image_4 = trial.stimuli[4];
      distractor_image_5 = trial.stimuli[5];
      distractor_image_6 = trial.stimuli[6];
    
      display_element.append($('<div>', {
        html:'<div position = relative>'+
                '<div class = col-sm-4 col-md-4 column1>'+
                  '<div id = container'+distractor_image_1+'><img src='+distractor_image_1+' id = '+distractor_image_1+' class = option ></div>'+
                  '<div id = container'+distractor_image_2+'><img src='+distractor_image_2+' id = '+distractor_image_2+' class = option ></div>'+
                '</div>'+
                '<div class = col-sm-4 col-md-4 column2>'+
                  '<div id = container'+distractor_image_4+'><img src='+distractor_image_4+' id = '+distractor_image_4+' class = option ></div>'+
                  '<div id = container'+distractor_image_3+'><img src='+distractor_image_3+' id = '+distractor_image_3+' class = option ></div>'+
              '</div>'+
              '<div class = col-sm-4 col-md-4 column3>'+
             	  '<div id = container'+distractor_image_5+'><img src='+distractor_image_5+' id = '+distractor_image_5+' class = option ></div>'+
                '<div id = container'+distractor_image_6+'><img src='+distractor_image_6+' id = '+distractor_image_6+' class = option></div>'+  
               '</div>'+
              '</div>',
        id: 'target_board'
      }));
  
      
	  $('.option').bind('click', function(){
        option_selected = $(this).attr('id');
        class_selected = $(this).attr('class');
        // if not duplicate
        if (trial.responses.indexOf(option_selected) == -1 && trial.responses.length < 3){
        // if ($.inArray(option_selected, trial.responses)){
          trial.responses.push(option_selected);
          if (trial.responses.length === 1){
            $(this).fadeTo(250,0);
            // console.log('selected dawg' + trial.responses);
          } else if (trial.responses.length === 2){
            $(this).fadeTo(250,0);
            // console.log('selected dawg' + trial.responses);
          } else if (trial.responses.length === 3) {
            $(this).fadeTo(250,0,function(){   
               after_response(trial.responses);
            });
          }
        } else {
           after_response(trial.responses);
  
        }
      });
    
    };
    // store response
    var response = {
      rt: -1,
    };
    // start time
    var start_time = 0;
    
    // function to handle responses by the subject
    var after_response = function(info) {
    
      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      response.rt = rt;
      
      console.log("IN AFTER RESPONSE");
      var whichResponse;
      for (var i = 0; i < trial.stimuli.length; i++) {
        // allow overlap between response groups
        if (validResponses[i]) {
          continue;
        }

        for (var j = 0; j < trial.stimuli[i].length; j++) {
          keycode = (typeof trial.stimuli[i][j] == 'string') ? jsPsych.pluginAPI.convertKeyCharacterToKeyCode(trial.stimuli[i][j]) : trial.stimuli[i][j];
          if (info.key == keycode) {
            whichResponse = i;
            break;
          }
        }

        if (typeof whichResponse !== 'undefined') {
          break;
        }
      }

      if (validResponses[whichResponse] != true) {
        validResponses[whichResponse] = true;
        responseTimes[whichResponse] = info.rt;
        responseKeys[whichResponse] = info.key;
      }

      if (trial.response_ends_trial) {
           console.log("YAY ENDS 2 HERE!!");
          end_trial();
        
      }
    };
    
 // function to end trial when it is time
    function end_trial() {
	   // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      // kill keyboard listeners
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      
      
      target_image = trial.stimuli[0];
      // trial.responses.splice(0,0,target_image);
      //debugger;

      var distractor_image_1 = trial.stimuli[1];
      var distractor_image_2 = trial.stimuli[2];
      var distractor_image_3 = trial.stimuli[3];
      var distractor_image_4 = trial.stimuli[4];
      var distractor_image_5 = trial.stimuli[5];
      var distractor_image_6 = trial.stimuli[6];


      var distractors = [distractor_image_1,distractor_image_2,distractor_image_3,distractor_image_4,distractor_image_5,distractor_image_6];
      var final_responses = [];
     
     
     //check number of responses
      if (trial.responses.length == 3) {
        console.log("Three responses=CHECK");
      } else if (trial.responses.length == 0){
       console.log("No response");
      } else{
        console.log("INVALID NUMBER OF RESPONSES");
        console.log(trial.responses);
      }
      
      
      var score = 0;
      var correct_response = /[xyz].bmp$/;
      final_responses = final_responses.concat(trial.responses);
      
      for(var i = 0; i<final_responses.length; i++) {
        console.log(final_responses);
        if (correct_response.test(final_responses[i])){
          score = score+1;
          console.log(score);
        }
      }
      
      
      final_responses.unshift(target_image);

      for(let j = 0;j<final_responses.length;j++) {
        console.log(j + " " + final_responses[j]);
        split_edition = final_responses[j].split('/');
        final_responses[j] = split_edition[split_edition.length-2] +'/'+ split_edition[split_edition.length-1];
      }

      var trial_data = {
      	 "rt": response.rt,
        "responses": JSON.stringify(final_responses),
         "score" : JSON.stringify(score)
      };

      display_element.html('');
      	display_element.append($('<div>', {
        html:'<button id = continueButton class = jspsych-btn>Continue</button>'}));
      //$('#continueButton').hide();
      $('#continueButton').bind('click', function(){
        $('#continueButton').hide();
    	  jsPsych.finishTrial(trial_data);
      });
    };
   
    // start timing
    start_time = Date.now();
    
    showStimuli();
 // start the response listener
    var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: allstimuli,
      rt_method: 'date',
      persist: true,
      allow_held_key: false
    });
    
   if (trial.timing_response > 0) {
      var t2 = setTimeout(function() {
        end_trial();
      }, trial.timing_response);
      setTimeoutHandlers.push(t2);
      }
    

  };

  return plugin;
})();
