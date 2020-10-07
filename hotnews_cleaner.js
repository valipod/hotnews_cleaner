var istodor = document.querySelectorAll("a[href='https://www.hotnews.ro/articole_autor/Eugen Istodor']");
for (var index = 0, length = istodor.length; index < length; index++) {
  var is = istodor[index];
  is.parentElement.parentElement.remove();
}
var grandparents = ["img[src='https://media.hotnews.ro/media_server1/image-2011-05-13-8621002-0-gsp-logo.jpg']",
                  "a[href='https://hotnews.maps.arcgis.com/home/"];
for (var index = 0, length = grandparents.length; index < length; index++) {
  var gpts = document.querySelectorAll(grandparents[index]);
  for (var i = 0, l = gpts.length; i < l; i++) {
    var gpt = gpts[i];
    gpt.parentElement.remove();
  };
}
var removeClasses = ['forumStudentesc', 'celeMai', 'casutaBloguriDreapta'];
for (var index = 0, length = removeClasses.length; index < length; index++){
  var divs = document.getElementsByClassName(removeClasses[index]);
  for (var i = 0, l = divs.length; i < l; i++) {
    var div = divs[0];
    div.remove();
  };
}
