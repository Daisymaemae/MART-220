function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(253,231,246);

    noStroke();
    //upper border
    fill(0);
    rect(0,0,800,25);
    //left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,800,25);
    //right boorder
    rect(775,25,25,600);

    fill(0);
    textSize(25);
    text("Daisy Cooper",550,560);
    text("apple(yum)",50,50);

    // shape 1
    fill(255,0,0);
    ellipse(200,200,120,140);

    // shape 2
    fill(139,69,19);
    rect(190,130,20,40,5);

    // shape 3
    fill(34,139,34);
    ellipse(230,140,40,20);
}