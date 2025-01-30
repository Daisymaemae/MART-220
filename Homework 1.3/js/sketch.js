
    <title>Burger in p5.js</title>
        function setup() 
        {
            createCanvas(400, 400);
            noLoop(); // Stops draw() from running in a loop
        }

        function draw() 
        {
            background(220);

            // Top Bun
            fill(255, 204, 102);
            arc(200, 160, 150, 100, PI, 0, CHORD); // Fixed arc syntax

            // Lettuce
            fill(0, 200, 0);
            ellipse(200, 190, 160, 20); 

            // Tomato
            fill(255, 50, 50);
            rect(125, 200, 150, 10, 5);

            // Patty
            fill(120, 60, 30);
            rect(125, 210, 150, 30, 5);

            // Bottom Bun
            fill(255, 204, 102);
            rect(125, 240, 150, 30, 5);
        }
