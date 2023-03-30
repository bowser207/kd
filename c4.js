noseX = 0;
noseY = 0;

function preload()
{
    xy = loadImage("https://i.postimg.cc/g2nGLdVw/x.png");
}


function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    image(xy, noseX - 20, noseY - 20, 50, 50);
}



function takeSnapshot()
{
    save('my-filter-img.png');
}