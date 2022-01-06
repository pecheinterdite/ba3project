////////////////////////////////////////////////////////////
/////////////////////////BA3////////////////////////////////
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
/////////////////////DECLARATIONS///////////////////////////
////////////////////////////////////////////////////////////

//Variables

//Site currently has 2 states, starts on 0
let state = 0;

//Size of icons
let targetSize = 30;

//Icons
let pinkIcon;
let purpleIcon;

//Sound pieces

//Yuri
let yuri_00;
let click_yuri_00 = 0;
let yuri_01;
let click_yuri_01 = 0;
let yuri_02;
let click_yuri_02 = 0;
let yuri_03;
let click_yuri_03 = 0;

//Cally
let cally_00;
let click_cally_00 = 0;

//Hani
let hani_00;
let click_hani_00 = 0;

//Ben
let ben_00;
let click_ben_00 = 0;

//Alex
let alex_00;
let click_alex_00 = 0;

//Kevin
let kevin_00;
let click_kevin_00 = 0;

//Max
let max_00;
let click_max_00 = 0;

//Positions
let positions = [
  [100, 100],
  [100, 200],
  [100, 300],
  [100, 400],
  [200, 100],
  [300, 100],
  [400, 100],
  [500, 100],
  [600, 100],
  [700, 100],
]

//Captions
let captions = [
  'Yuri',
  'Yuri',
  'Yuri',
  'Yuri',
  'Cally',
  'Hani',
  'Ben',
  'Alex',
  'Kevin',
  'Max'
]


////////////////////////////////////////////////////////////
/////////////////////////PRELOAD////////////////////////////
////////////////////////////////////////////////////////////

function preload() {
  //Preload images
  pinkIcon = loadImage('assets/pink.png');
  purpleIcon = loadImage('assets/purple.png');
  //Preload sound pieces
  yuri_00 = loadSound('assets/sound_pieces/yuri_00.mp3');
  yuri_01 = loadSound('assets/sound_pieces/yuri_01.mp3');
  yuri_02 = loadSound('assets/sound_pieces/yuri_02.mp3');
  yuri_03 = loadSound('assets/sound_pieces/yuri_03.mp3');
  cally_00 = loadSound('assets/sound_pieces/cally_00.mp3');
  hani_00 = loadSound('assets/sound_pieces/hani_00.mp3');
  ben_00 = loadSound('assets/sound_pieces/ben_00.mp3');
  alex_00 = loadSound('assets/sound_pieces/alex_00.mp3');
  kevin_00 = loadSound('assets/sound_pieces/kevin_00.mp3');
  max_00 = loadSound('assets/sound_pieces/max_00.mp3');
}

////////////////////////////////////////////////////////////
///////////////////////////SETUP////////////////////////////
////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Resize image assets
  pinkIcon.resize(targetSize, targetSize);
  purpleIcon.resize(targetSize, targetSize);

}

////////////////////////////////////////////////////////////
///////////////////////////DRAW/////////////////////////////
////////////////////////////////////////////////////////////

function draw() {

  ////////////////////////////////////////////////////////////
  //////////////////////STATE 0///////////////////////////////
  ////////////////////////////////////////////////////////////

  if (state == 0) {
    background(0);
    fill(255);
    text('welcome', width / 2, height / 2);
  }


  ////////////////////////////////////////////////////////////
  //////////////////////STATE 1///////////////////////////////
  ////////////////////////////////////////////////////////////

  //Draws playable file icons
  else if (state == 1) {
    background(255);
    fill(0);

    let numberOfPieces = positions.length;
    for (let i = 0; i <= numberOfPieces; i++) {
      image(pinkIcon, positions[i][0], positions[i][1]);
      text(captions[i], positions[i][0], positions[i][1] + 60);
    }
  }
}

////////////////////////////////////////////////////////////
/////////////////////MOUSE CLICKED//////////////////////////
////////////////////////////////////////////////////////////


function mouseClicked() {

  ////////////////////////////////////////////////////////////
  //////////////////////STATE 0///////////////////////////////
  ////////////////////////////////////////////////////////////

  //Some browsers require a user interaction to allow audio playback
  if (state == 0) {
    userStartAudio();
    state = 1;
  }

  ////////////////////////////////////////////////////////////
  //////////////////////STATE 1///////////////////////////////
  ////////////////////////////////////////////////////////////

  else if (state == 1) {
    state = 2;
  }

  ////////////////////////////////////////////////////////////
  /////////////////////STATE 2 (PLAYBACK)/////////////////////
  ////////////////////////////////////////////////////////////

  //In the playback state, one click on a file plays its audio
  //A second click stops it

  else if (state == 2) {

    //Playback

    for (let i = 0; i < positions.length; i++) {
      if (mouseX >= positions[i][0] && mouseX <= positions[i][0] + targetSize &&
        mouseY >= positions[i][1] && mouseY <= positions[i][1] + targetSize) {

        ////////////////////////////////////////////////////////////
        ///////////////////YURI/////////////////////////////////////
        ////////////////////////////////////////////////////////////
        if (i == 0) {
          if (click_yuri_00 == 0) {
            yuri_00.play();
            click_yuri_00 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            yuri_00.stop();
            click_yuri_00 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }

        } else if (i == 1) {
          if (click_yuri_01 == 0) {
            yuri_01.play();
            click_yuri_01 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            yuri_01.stop();
            click_yuri_01 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }

        } else if (i == 2) {
          if (click_yuri_02 == 0) {
            yuri_02.play();
            click_yuri_02 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            yuri_02.stop();
            click_yuri_02 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }

        } else if (i == 3) {
          if (click_yuri_03 == 0) {
            yuri_03.play();
            click_yuri_03 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            yuri_03.stop();
            click_yuri_03 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }

          ////////////////////////////////////////////////////////////
          ///////////////////CALLY///////////////////////////////////
          ///////////////////////////////////////////////////////////

        } else if (i == 4) {
          if (click_cally_00 == 0) {
            cally_00.play();
            click_cally_00 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            cally_00.stop();
            click_cally_00 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }


          ////////////////////////////////////////////////////////////
          ///////////////////HANI/////////////////////////////////////
          ///////////////////////////////////////////////////////////

        } else if (i == 5) {
          if (click_hani_00 == 0) {
            hani_00.play();
            click_hani_00 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            hani_00.stop();
            click_hani_00 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }


          ////////////////////////////////////////////////////////////
          ///////////////////BEN/////////////////////////////////////
          ///////////////////////////////////////////////////////////

        } else if (i == 6) {
          if (click_ben_00 == 0) {
            ben_00.play();
            click_ben_00 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            ben_00.stop();
            click_ben_00 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }


          ////////////////////////////////////////////////////////////
          //////////////////ALEX/////////////////////////////////////
          ///////////////////////////////////////////////////////////

        } else if (i == 7) {
          if (click_alex_00 == 0) {
            alex_00.play();
            click_alex_00 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            alex_00.stop();
            click_alex_00 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }



          ////////////////////////////////////////////////////////////
          //////////////////KEVIN/////////////////////////////////////
          ///////////////////////////////////////////////////////////

        } else if (i == 8) {
          if (click_kevin_00 == 0) {
            kevin_00.play();
            click_kevin_00 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            kevin_00.stop();
            click_kevin_00 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }

          ////////////////////////////////////////////////////////////
          //////////////////MAX//////////////////////////////////////
          ///////////////////////////////////////////////////////////

        } else if (i == 9) {
          if (click_max_00 == 0) {
            max_00.play();
            click_max_00 = 1;
            image(purpleIcon, positions[i][0], positions[i][1]);
          } else {
            max_00.stop();
            click_max_00 = 0;
            image(pinkIcon, positions[i][0], positions[i][1]);
          }
        }

        else {

        }
      }
    }
  }
}

  //Resize
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }