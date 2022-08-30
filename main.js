function preload(){}
    function setup(){
        canvas=createCanvas(900,470);
        canvas.position(220,250);
        video = createCapture(VIDEO);
        video.hide();
        
    }
        function draw(){
            fill(0,255,0)
            circle(30, 20 , 40);
            circle(870,20,40);
            circle(30,450,40);
            circle(870,450,40);
            fill(0,0,255)
            rect(50, 10, 800, 20);
            rect(20, 40, 20, 390);
            rect(860, 40, 20, 390);
            rect(50, 437, 800, 20);
            image(video,360,60,280,300);
        }
        function take_snapshot(){
            save('birthday.png');
        }