# Benton Facial Recognition Test 

Implementation of BFRT using jsPsych library.
Based on Bruno Roisson's paper, "Normative data for accuracy and response times at the
computerized Benton Facial Recognition Test (BFRT-c)"

## jspsych-benton-face-part-one.js

Part one of the BFRT. Displays six images from which one image is selected by the participant. 
Stores reaction time, selected stimuli and score per trial.

## jspsych-benton-face-part-two.js

Part two of the BFRT. Displays six images from which three images are selected by the participant.
Stores reaction time, array of selected stimulis and score per trial (out of 3).

## experiment.js

The experiment which utilizes jspsych-button-responses.js and the two previously mentioned plugins to create the BFRT.

