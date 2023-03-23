music = " ";

function preload() {
    music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Posenet has been initialized");
}

function play() {
    music.play();
    music.setVolume(1);
    music.rate(1);
}

function stop() {
    music.stop();
}