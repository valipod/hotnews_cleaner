// to_removes is an array of arrays with selector and number of levels
// to go up and remove the element
var to_remove = [
    ["a[href='https://www.hotnews.ro/articole_autor/Eugen Istodor']", 2],
    ["img[src='https://media.hotnews.ro/media_server1/image-2011-05-13-8621002-0-gsp-logo.jpg']", 1],
    ["a[href='https://hotnews.maps.arcgis.com/home/", 1],
    ['.forumStudentesc', 0],
    ['.celeMai', 0],
    ['.casutaBloguriDreapta', 0]
];
for (var index = 0, length = to_remove.length; index < length; index++) {
  var shits = document.querySelectorAll(to_remove[index][0]);
  for (var i = 0, l = shits.length; i < l; i++) {
    var shit = shits[i];
    if (to_remove[index][1] == 0){
      shit.remove();
    } else if (to_remove[index][1] == 1){
      shit.parentElement.remove();
    } else if (to_remove[index][1] == 2){
      shit.parentElement.parentElement.remove();
    };
  };
}
