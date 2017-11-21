function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getCategoryTestBlock(oldSpecies1TestImages,oldSpecies2TestImages,oldSpecies3TestImages,oldSpecies4TestImages,newSpecies1TestImages,newSpecies2TestImages,newSpecies3TestImages,newSpecies4TestImages) {
  // Get old diff trials
  oldies = [
    oldSpecies1TestImages,
    oldSpecies2TestImages,
    oldSpecies3TestImages,
    oldSpecies4TestImages
  ];

  var stimuliResponsePairs = [];

  // hand-assign trials
      stimuliResponsePair = {
        stimuli:[oldSpecies1TestImages[0],oldSpecies2TestImages[0]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies1TestImages[1],oldSpecies3TestImages[0]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies1TestImages[2],oldSpecies4TestImages[0]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies2TestImages[1],oldSpecies1TestImages[3]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies2TestImages[2],oldSpecies3TestImages[1]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies2TestImages[3],oldSpecies4TestImages[1]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies3TestImages[2],oldSpecies1TestImages[4]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies3TestImages[3],oldSpecies2TestImages[4]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies3TestImages[4],oldSpecies4TestImages[2]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies4TestImages[3],oldSpecies1TestImages[5]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies4TestImages[4],oldSpecies2TestImages[5]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies4TestImages[5],oldSpecies3TestImages[5]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      ///////////////// 12 old diffs

      stimuliResponsePair = {
        stimuli:[oldSpecies1TestImages[6],oldSpecies1TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies1TestImages[8],oldSpecies1TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies1TestImages[10],oldSpecies1TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies2TestImages[6],oldSpecies2TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies2TestImages[8],oldSpecies2TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies2TestImages[10],oldSpecies2TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies3TestImages[6],oldSpecies3TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies3TestImages[8],oldSpecies3TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies3TestImages[10],oldSpecies3TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies4TestImages[6],oldSpecies4TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies4TestImages[8],oldSpecies4TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[oldSpecies4TestImages[10],oldSpecies4TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

///////////////////// 12 old sames

     stimuliResponsePair = {
        stimuli:[newSpecies1TestImages[0],newSpecies2TestImages[0]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies1TestImages[1],newSpecies3TestImages[0]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies1TestImages[2],newSpecies4TestImages[0]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies2TestImages[1],newSpecies1TestImages[3]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies2TestImages[2],newSpecies3TestImages[1]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies2TestImages[3],newSpecies4TestImages[1]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies3TestImages[2],newSpecies1TestImages[4]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies3TestImages[3],newSpecies2TestImages[4]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies3TestImages[4],newSpecies4TestImages[2]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies4TestImages[3],newSpecies1TestImages[5]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies4TestImages[4],newSpecies2TestImages[5]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies4TestImages[5],newSpecies3TestImages[5]],
        response:"different"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      ///////////////// 12 new diffs

      stimuliResponsePair = {
        stimuli:[newSpecies1TestImages[6],newSpecies1TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies1TestImages[8],newSpecies1TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies1TestImages[10],newSpecies1TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies2TestImages[6],newSpecies2TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies2TestImages[8],newSpecies2TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies2TestImages[10],newSpecies2TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies3TestImages[6],newSpecies3TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies3TestImages[8],newSpecies3TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies3TestImages[10],newSpecies3TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies4TestImages[6],newSpecies4TestImages[7]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies4TestImages[8],newSpecies4TestImages[9]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

      stimuliResponsePair = {
        stimuli:[newSpecies4TestImages[10],newSpecies4TestImages[11]],
        response:"same"
      };
      stimuliResponsePairs.push(stimuliResponsePair);

///////////////////// 12 new sames

  // console.log('LENG OF old and new: '+stimuliResponsePairs.length);

    // Shuffle trials
  shuffle(stimuliResponsePairs);
  // // console.log('number of trials: '+stimuliResponsePairs.length);
  // for(i = 0;i<stimuliResponsePairs.length;i++) {
  //   // console.log(stimuliResponsePairs[i].response+': '+stimuliResponsePairs[i].stimuli[0]+', '+stimuliResponsePairs[i].stimuli[1]);
  // }

  trials = [];

  // Unpack trials
  for(i = 0;i<stimuliResponsePairs.length;i++){
    var categoryTestBlock = {
      type: 'modified-same-different',
      stimuli: stimuliResponsePairs[i].stimuli,
      prompt: "<p class='center-content'>Press Q if the paintings were by the same artist. Press P if the paintings were by different artists.</p>",
      // same_key: 'Q',
      // different_key: 'P',
      answer: stimuliResponsePairs[i].response
    };
    trials.push(categoryTestBlock);
  }
  return trials;
}

// function getCategoryTestBlock(allImages) {
//   block = {};
//   exemplarSplitA = [];
//   exemplarSplitB = [];

//   stimuliResponsePairs = [];
//   stimuli = [];
//   answers = []; 
//   // console.log('all images = '+allImages);
//   // console.log('all images dot length ' + allImages.length);
//   // Get all categories
//   for(i = 0;i<allImages.length;i++){
//     category = allImages[i];
//     shuffle(category);
//     // Split this category in two
//     numberOfExemplars = category.length;
//     // console.log('length of cat: '+category.length);
//     categorySplitA = category.slice(0,(numberOfExemplars/2));
//     exemplarSplitA.push(categorySplitA);
//     categorySplitB = category.slice(numberOfExemplars/2,numberOfExemplars);
//     exemplarSplitB.push(categorySplitB);
//     // Match it with another category B
//     // console.log('a = '+ categorySplitA.length + ", B = "+ categorySplitB.length);
//   }
//   // We have category splits
//   // Now create pairs
//   a = 0;
//   b = 0;
//   for (i = 0;i<exemplarSplitA.length;i++) {
//     for (j = 0;j<exemplarSplitB.length;j++) {
//       pair = [exemplarSplitA[i][a],exemplarSplitB[j][b]];
//       answer = "different";
//       if(i == j) answer = "same";
//       stimuliResponsePair = {
//         stimuli:pair,
//         response:answer
//       };
//       // console.log('stimresponsepair '+stimuliResponsePair);
//       stimuliResponsePairs.push(stimuliResponsePair);
//       a++;
//     }
//     a=0;
//     b++;
//   }

//   // Add 4 same conditions for each category
//   // console.log(exemplarSplitA);
//   // console.log(exemplarSplitB);
//   // shuffle(exemplarSplitA);
//   // shuffle(exemplarSplitB);
//   for (i = 0;i<4;i++) {
//     for(j = 0; j<4;j++){
//       // console.log(exemplarSplitA[0][0]);
//       // if ()
//       pair = [exemplarSplitA[i][j],exemplarSplitB[i][j]];
//       answer = "same";
//       stimuliResponsePair = {
//         stimuli:pair,
//         response:answer
//       };
//       stimuliResponsePairs.push(stimuliResponsePair);
//     }
//   }

//   // console.log(stimuliResponsePairs);

//   // Shuffle trials
//   shuffle(stimuliResponsePairs);
//   trials = [];

//   // Unpack trials
//   for(i = 0;i<stimuliResponsePairs.length;i++){
//     // console.log(stimuliResponsePairs[i].stimuli);
//     // stimuli.push(stimuliResponsePairs[i].stimuli);
//     // // stimuli.push([stimuliResponsePairs[i].stimuli[0],stimuliResponsePairs[i].stimuli[1]]);
//     // // stimuli.push(stimuliResponsePairs[i].stimuli[0]);
//     // // stimuli.push(stimuliResponsePairs[i].stimuli[1]);
//     // answers.push(stimuliResponsePairs[i].response);
//     var categoryTestBlock = {
//       type: 'modified-same-different',
//       stimuli: stimuliResponsePairs[i].stimuli,
//       prompt: "<p class='center-content'>Press Q if the paintings were by the same artist. Press P if the paintings were by different artists.</p>",
//       // same_key: 'Q',
//       // different_key: 'P',
//       answer: stimuliResponsePairs[i].response
//     };
//     trials.push(categoryTestBlock);
//   }
//   // console.log(categoryTestBlock);
//   // console.log(trials);
//   return trials;
// }

// function getCategoryTestBlock(allImages) {
//   block = {};
//   exemplarSplitA = [];
//   exemplarSplitB = [];

//   stimuliResponsePairs = [];
//   stimuli = [];
//   answers = []; 
//   // console.log('all images = '+allImages);
//   // console.log('all images dot length ' + allImages.length);
//   // Get all categories
//   for(i = 0;i<allImages.length;i++){
//     category = allImages[i];
//     shuffle(category);
//     // Split this category in two
//     numberOfExemplars = category.length;
//     // console.log('length of cat: '+category.length);
//     categorySplitA = category.slice(0,(numberOfExemplars/2));
//     exemplarSplitA.push(categorySplitA);
//     categorySplitB = category.slice(numberOfExemplars/2,numberOfExemplars);
//     exemplarSplitB.push(categorySplitB);
//     // Match it with another category B
//     // console.log('a = '+ categorySplitA.length + ", B = "+ categorySplitB.length);
//   }
//   // We have category splits
//   // Now create pairs
//   a = 0;
//   b = 0;
//   for (i = 0;i<exemplarSplitA.length;i++) {
//     for (j = 0;j<exemplarSplitB.length;j++) {
//       pair = [exemplarSplitA[i][a],exemplarSplitB[j][b]];
//       answer = "different";
//       if(i == j) answer = "same";
//       stimuliResponsePair = {
//         stimuli:pair,
//         response:answer
//       };
//       // console.log('stimresponsepair '+stimuliResponsePair);
//       stimuliResponsePairs.push(stimuliResponsePair);
//       a++;
//     }
//     a=0;
//     b++;
//   }

//   // Add 4 same conditions for each category
//   // console.log(exemplarSplitA);
//   // console.log(exemplarSplitB);
//   // shuffle(exemplarSplitA);
//   // shuffle(exemplarSplitB);
//   for (i = 0;i<4;i++) {
//     for(j = 0; j<4;j++){
//       // console.log(exemplarSplitA[0][0]);
//       // if ()
//       pair = [exemplarSplitA[i][j],exemplarSplitB[i][j]];
//       answer = "same";
//       stimuliResponsePair = {
//         stimuli:pair,
//         response:answer
//       };
//       stimuliResponsePairs.push(stimuliResponsePair);
//     }
//   }

//   // console.log(stimuliResponsePairs);

//   // Shuffle trials
//   shuffle(stimuliResponsePairs);
//   trials = [];

//   // Unpack trials
//   for(i = 0;i<stimuliResponsePairs.length;i++){
//     // console.log(stimuliResponsePairs[i].stimuli);
//     // stimuli.push(stimuliResponsePairs[i].stimuli);
//     // // stimuli.push([stimuliResponsePairs[i].stimuli[0],stimuliResponsePairs[i].stimuli[1]]);
//     // // stimuli.push(stimuliResponsePairs[i].stimuli[0]);
//     // // stimuli.push(stimuliResponsePairs[i].stimuli[1]);
//     // answers.push(stimuliResponsePairs[i].response);
//     var categoryTestBlock = {
//       type: 'modified-same-different',
//       stimuli: stimuliResponsePairs[i].stimuli,
//       prompt: "<p class='center-content'>Press Q if the paintings were by the same artist. Press P if the paintings were by different artists.</p>",
//       // same_key: 'Q',
//       // different_key: 'P',
//       answer: stimuliResponsePairs[i].response
//     };
//     trials.push(categoryTestBlock);
//   }
//   // console.log(categoryTestBlock);
//   // console.log(trials);
//   return trials;
// }

function getCorrectAnswerForStim(stim){
  newPrompt = stim;
  if(newPrompt.indexOf("cezanne") > -1){
    prompt = "Cezanne"
  } else if(newPrompt.indexOf("hofmann") > -1){
    prompt = "Hofmann"
  } else if(newPrompt.indexOf("frankenthaler") > -1){
    prompt = "Frankenthaler"
  } else if(newPrompt.indexOf("gauguin") > -1){
    prompt = "Gauguin"
  } else if(newPrompt.indexOf("mitchell") > -1){
    prompt = "Mitchell"
  } else if(newPrompt.indexOf("pollock") > -1){
    prompt = "Pollock"
  } else if(newPrompt.indexOf("seurat") > -1){
    prompt = "Seurat"
  } else if(newPrompt.indexOf("vangogh") > -1){
    prompt = "Van Gogh"
  } else prompt = "";
  return prompt;
}

function getFourChoiceCategoryTestBlocks(testStimuli) {
  trials = [];
  trialStimuli = [];
  labelsForStimuli = [];
  shuffle(testStimuli);
  for (i = 0;i<4;i++) {
    category = testStimuli[i];
    shuffle(category);
    // ten correct trials per category
    category = category.slice(0,10);
    // console.log('category: '+ trialStimuli.concat(category));
    trialStimuli = trialStimuli.concat(category);
  }

  names = ["Hofmann","Frankenthaler","Mitchell","Pollock"];

  shuffle(trialStimuli);
  // console.log('trial stims:' + trialStimuli);
  for(i = 0;i<trialStimuli.length;i++){
    trialStimuli[i]
    // console.log('WOW!');
    answer = getCorrectAnswerForStim(trialStimuli[i]);
    shuffle(names);
    var br_trial = {
      type: 'button-response',
      stimulus: trialStimuli[i],
      choices: names,
      answer: answer,
      prompt: "<p class='center-content'>Which artist is this painting by?</p>",
      button_html: "<a class='jspsych-btn'>%choice%</a>",
      on_finish: function(trial_data){
        // let's imagine that the correct answer is NO
        // console.log('this: '+this+', this.stimulus'+this.stimulus);
        newPrompt = this.stimulus;
        if(newPrompt.indexOf("hofmann") > -1){
          buttonNumber = names.indexOf("Hofmann");
        } else if(newPrompt.indexOf("frankenthaler") > -1){
          buttonNumber = names.indexOf("Frankenthaler");
        } else if(newPrompt.indexOf("mitchell") > -1){
          buttonNumber = names.indexOf("Mitchell");
        } else if(newPrompt.indexOf("pollock") > -1){
          buttonNumber = names.indexOf("Pollock");
        }
        // console.log(trial_data.button_pressed == buttonNumber);
        var correct = (trial_data.button_pressed == buttonNumber);
        jsPsych.data.addDataToLastTrial({correct: correct});
      }
    };
    trials.push(br_trial);
  }
  shuffle(trials);
  return trials;
}