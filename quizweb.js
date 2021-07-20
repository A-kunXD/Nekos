

var question001 = ['Susanthika Jayasingha won the Olympic silver medal in the 2000 Summer Olympics in Sydney',
            'South Affrica are the latest winners having won the 2019 Rugby world cup in Japan',
			'Germany has won the most number of FIFA World cup championships',
            'Sri Lanka won the Cricket World Cup championship in 1990',
            'New York Yankees have won the most champions in MLB history',
            'Lionel Messi won the most number of European Golden boots',
            'India has won the most number of Cricket World Cup championships',
			'The Indionapolis Colts won the NFL championship last year',
			'Trent Boult is The NO 1 bowler in the world',
            '1997 was the last year Nebraska won a National Championship for football',
        ];

        var options001 = ["<button class=buttons001 onclick=q1c()>True</button><br /><br /><button class=buttons001 onclick=q1i()>False</button>"];
        var options002 = ["<button class=buttons001 onclick=q2c()>True</button><br /><br /><button class=buttons001 onclick=q2i()>False</button>"];
        var options003 = ["<button class=buttons001 onclick=q3i()>True</button><br /><br /><button class=buttons001 onclick=q3c()>False</button>"];
        var options004 = ["<button class=buttons001 onclick=q4i()>True</button><br /><br /><button class=buttons001 onclick=q4c()>False</button>"];
        var options005 = ["<button class=buttons001 onclick=q5c()>True</button><br /><br /><button class=buttons001 onclick=q5i()>False</button>"];
        var options006 = ["<button class=buttons001 onclick=q6c()>True</button><br /><br /><button class=buttons001 onclick=q6i()>False</button>"];
        var options007 = ["<button class=buttons001 onclick=q7i()>True</button><br /><br /><button class=buttons001 onclick=q7c()>False</button>"];
        var options008 = ["<button class=buttons001 onclick=q8i()>True</button><br /><br /><button class=buttons001 onclick=q8c()>False</button>"];
        var options009 = ["<button class=buttons001 onclick=q9c()>True</button><br /><br /><button class=buttons001 onclick=q9i()>False</button>"];
        var options010 = ["<button class=buttons001 onclick=q10c()>True</button><br /><br /><button class=buttons001 onclick=q10i()>False</button>"];

        var a = 0;
        a++;
        var b = 0;
    
		var data=[];
        function start001() {
            c = 7;
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
            number001.innerHTML = a++;
			
        }

        function q1c() {                                                                              //Question 1
            window.clearInterval(update);
            c = "-";
            message003.innerHTML ="Correct. "; 
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[0]='Q1. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q1i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML ="You're Wrong. "; 
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[0]='Q1. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q2c() {                                                                              //Question 2                                                                              
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[1]='Q2. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q2i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong..";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[1]='Q2. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q3c() {                                                                               //Question 3
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct. Brazil has won the most number of FIFA World cup championships";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[2]='Q3. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q3i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong. Brazil has won the most number of FIFA World cup championships";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[2]='Q3. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q4c() {                                                                                //Question 4
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct. Sri Lanka won the championship in 1996";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[3]='Q4. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q4i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong. Sri Lanka won the championship in 1996";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[3]='Q4. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q5c() {                                                                                //Question 5
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[4]='Q5. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q5i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[4]='Q5. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q6c() {                                                                                 //Question 6
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[5]='Q6. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q6i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[5]='Q6. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q7c() {                                                                                  //Question 7
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct. Australia has won the most number of Cricket World Cup championships";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[6]='Q7. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q7i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong. Australia has won the most number of Cricket World Cup championships";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[6]='Q7. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q8c() {                                                                                  //Question 8
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct. The New England Patriots won the championship";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[7]='Q8. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q8i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong. The New England Patriots won the championship";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[7]='Q8. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q9c() {                                                                                  //Question 9
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[8]='Q9. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q9i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[8]='Q9. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function q10c() {                                                                                 //Question 10
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[9]='Q10. Correct';
			document.getElementById("frame001").style.backgroundColor = "#32CD32";
        }

        function q10i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "You're Wrong. ";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			data[9]='Q10. Incorrect';
			document.getElementById("frame001").style.backgroundColor = "#DC143C";
        }

        function next001() {
            if (a == "2") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "3") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "4") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "5") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "6") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[5];
                message002.innerHTML = options006;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "7") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[6];
                message002.innerHTML = options007;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "8") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[7];
                message002.innerHTML = options008;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "9") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[8];
                message002.innerHTML = options009;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
                    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
                }
            }

            else if (a == "10") {
                update = setInterval("timer001()", 1000);
                c = 7;
                time001.innerHTML = 7;
                message001.innerHTML = question001[9];
                message002.innerHTML = options010;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
				document.getElementById("frame001").style.backgroundColor = "Transparent";
            } else {
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Quiz";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Play Again</button>";
				message005.innerHTML=data[0];
				message006.innerHTML=data[1];
				message007.innerHTML=data[2];
				message008.innerHTML=data[3];
				message009.innerHTML=data[4];
				message010.innerHTML=data[5];
				message011.innerHTML=data[6];
				message012.innerHTML=data[7];
				message013.innerHTML=data[8];
				message014.innerHTML=data[9];
			
			if(score001.innerHTML<10){
				document.getElementById("frame001").style.backgroundColor = "#DC143C";
				document.getElementById("frame001").style.height='1200px';
			
			}
			else if(score001.innerHTML>10){
				document.getElementById("frame001").style.backgroundColor = "#32CD32";
				document.getElementById("frame001").style.height='1200px';
			
			}
			
            }
			
        }

        function timer001() {
            c = c - 1;
            if (c < 200) {
                time001.innerHTML = c;
            }

            if (c < 1) {
                window.clearInterval(update);
                message001.innerHTML = "Time's up";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }
        }

        update = setInterval("timer001()", 1000);

        function repeat001() {
            location.reload();
        }
    