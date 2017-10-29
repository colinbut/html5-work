function clickCounter(){
				if(typeof(Storage) != "Undefined"){
					if(sessionStorage.clickcount){
						sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
					}
					else{
						sessionStorage.clickcount = 1;
					}
					
					document.getElementById("sessionStorageResult").innerHTML = sessionStorage.clickcount;
				}
				else{
					alert("Sorry, HTML5 Session Storage not supported on this web browser");
				}
			}
			
if(typeof(Storage) != "Undefined"){
				// store
				localStorage.setItem("lastname","But");
				
				// get
				document.getElementById("result").innerHTML = localStorage.getItem("lastname");
			}
			else{
				alert("Sorry, HTML5 Local Storage not supported on this web browser");
			}
			