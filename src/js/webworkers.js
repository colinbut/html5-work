var w;
		
		function startWorker(){
			if(typeof(Worker) !== "undefined"){
				if(typeof(w) == "undefined"){
					w = new Worker("js/web-worker.js");
				}
				else{
					alert("Web Worker already initialized - can't initialise again");
				}
				w.onmessage = function(event){
					document.getElementById("web-worker-result").innerHTML = event.data;
				};
			}
			else{
				document.getElementById("web-worker-result").innerHTML = "Sorry, your browser does not support HTML5 Web Workers"; 
			}
		}
		
		/**
		 * Stops the Web Worker
		 */
		function stopWorker(){
			w.terminate();
		}