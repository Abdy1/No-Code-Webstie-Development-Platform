 //when i click some botton the whole file is appended to separate css htm and js file. 
  //when user hit enter
  //take the input file
  //put it in switch case
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;
  var promptone = document.getElementById("promptone");
  var form = document.getElementById("form");

  var DidCssHappenedHeader = 0;

  //CSS properties for css
  var headerBackgroundColor = "#f1f1f1;"
  var headerPadding = "20px 10px"
  var trackheader = 0;
  //tracks the state of the program. if 0 its outside ready to add new component
  var trackstate = 0;
  css.value+= "body {\n  margin: 0px;\n }\n\n";
 

//think how to use to implement links without traditional html way
//  <script>
// function doSomething() {
//   alert("hello")
// }
// </script>
// <a href="javascript:doSomething();">click me</a>

  function commit(){
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  }
  promptone.innerHTML = "What is the content you want to add";
 

function letsGo(event){
  var userinput = document.getElementById("myInput").value;

  console.log(trackstate + "is the value of state if 0 its outside");

  //make sure state is 0 before creating new element
  if (trackstate == 0) {
    console.log("i entered the if statement");
  switch(userinput) {
    case "header":
      trackstate = 1;
      console.log("now state is " + trackstate);
      trackheader = trackheader + 1;
      html.value += "\n<!--headerone"+trackheader+"-->\n\n<div class=\"header\">\n <a href=\"#default\" class=\"logo\"> CompanyLogo </a>\n <div class=\"header-right\">\n  <a class=\"active\" href=\"#home\">Home</a>\n  <a href=\"#contact\">Contact</a>\n  <a href=\"#about\">About</a>\n </div>\n</div>\n\n<!--headerone"+trackheader+"closed-->\n\n";
      if(DidCssHappenedHeader == 0){
      //this won't be deleted
      css.value += ".header{\n   overflow: hidden;\n   background-color:" + headerBackgroundColor + "\n   padding: 20px 10px;\n}\n.header a {\n   float: left;\n   color: black;\n   text-align: center;\n   padding: 12px;\n   text-decoration: none;\n   font-size: 18px;\n   line-height: 25px;\n   border-radius: 4px;\n}\n.header a.logo {\n   font-size: 25px;\n   font-weight: bold;\n}\n.header a:hover {\n   background-color: #ddd;\n   color: black;\n}\n.header a.active {\n   background-color: dodgerblue;\n   color: white;\n}\n.header-right {\n   float: right;\n}\n@media screen and (max-width: 500px) {\n.header a {\n   float: none;\n   display: block;\n   text-align: left;\n}\n.header-right {\n   float: none;\n}\n}\n";
      DidCssHappenedHeader = 1;
      promptone.innerHTML = "what do you want the background color to be";
      console.log(headerBackgroundColor);
      headerBackgroundColor = userinput;
      console.log(headerBackgroundColor);
    }
    commit();
      break;
    case "OTHER":
      html.value += "<h1> YOU </h1>";
  
      commit();     
      break;
    default:
  }}

  //if state is 1 we know we are in header. so we let the user make modification of header
  if (trackstate == 1) {
    console.log("i entered the if statement");
  switch(userinput) {
    case "red":
      console.log(headerBackgroundColor);
      headerBackgroundColor = userinput;
      console.log(headerBackgroundColor);
    
    commit();
    break;
    case "OTHER":
      html.value += "<h1> YOU </h1>";
  
      commit();     
      break;
    default:
  }}

  event.preventDefault();
}
form.addEventListener('submit', letsGo);
  document.body.onkeyup = function() {
     commit();
  };

 



//to target and delete
//var man = html.value.replace(  html.value.slice(html.value.indexOf("<!--start-->"),html.value.indexOf("<!--finish-->")+23),'');
//html.value = man;
//console.log(man);

