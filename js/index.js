$("document").ready( function() {

  /*Overriding console.log() to write on my new console*/ 
  console = {};
  console.log = function(message) {
    if (typeof message == 'object') {
      $("#consolecontainer").append((JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />');
    } else {
      $("#consolecontainer").append(message + '<br />');
    }
  }

  /*Making a run() function that takes the codearea and makes a script out of it*/
  function run() {
    $("#consolecontainer").empty();
    $("#oldScript").remove()

    var newScript;
    newScript = document.createElement("script");
    newScript.id = "oldScript";
    newScript.text = $("#codearea").val();
    document.body.appendChild(newScript);
  }

  /*Run() button click calls run() function*/
  $("#runbutt").click(function(){
    run();
  })

  /*Allow tabs in Textareas*/
  var textareas = document.getElementsByTagName('textarea');
  var count = textareas.length;
  for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}

});

 