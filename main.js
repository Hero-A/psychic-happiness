noseX = 0;
noseY = 0;

function preload(){
     clownNose = loadImage('https://i.postimg.cc/28NY2nWs/moustache.png');
}

function setup(){
    canvas = createCanvas(400, 330);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 330);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
   image(video, 0, 0, 400, 330);
   image(clownNose, noseX, noseY, 100, 100);
}

function take_snapshot(){
    save('my photo.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x -49;
        noseY = results[0].pose.nose.y -15  ;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}