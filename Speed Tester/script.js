    alert(document.getElementById('instruction').innerHTML)

        var start = new Date().getTime();

        var timeRecord = new Array();

        function getRandomColor() {

            var letters = '0123456789ABCDEF'.split('');

            var color = '#';

            for (var i = 0; i < 6; i++ ) {

                color += letters[Math.floor(Math.random() * 16)];

            }

            return color;
        }

        function makeShapeAppear() {

            var top = Math.random() * 90;

            var left = Math.random() * 90;

            var height = Math.random() * 200 + 100;
 
            var switchShape = Math.random();
            
            if (switchShape > 0.5 ) {
                document.getElementById('shape').style.borderRadius = '50%';
            } else {
                document.getElementById('shape').style.borderRadius = '0';
            }

            document.getElementById('shape').style.backgroundColor = getRandomColor();

            // document.getElementById('color').innerHTML = getRandomColor();

            document.getElementById('shape').style.position = 'absolute';

            document.getElementById('shape').style.top = top + '%';

            document.getElementById('shape').style.left = left + '%';

            document.getElementById('shape').style.height = height + 'px';

            document.getElementById('shape').style.width = height + 'px';
            
            document.getElementById("shape").style.display = "block";

            start = new Date().getTime();

        }

        function appearAfterDelay() {

            setTimeout(makeShapeAppear, Math.random() * 2000);

            

        }

        appearAfterDelay();

        document.getElementById("shape").onclick = function() {
            
            document.getElementById('shape').style.display = 'none';

            var end = new Date().getTime();

            var time = (end - start) / 1000;

            document.getElementById('timeTaken').innerHTML = time + "s";

            timeRecord.push(time);

            document.getElementById("fastestTime").innerHTML = Math.min(...timeRecord) + "s";

            appearAfterDelay();
        }

