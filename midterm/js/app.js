
var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];
// console.log(body);


var jsonScriptContent = document.createElement('script');
jsonScriptContent.setAttribute('src', 'data/content.json');
head.appendChild(jsonScriptContent);

var jsonScriptNav = document.createElement('script');
jsonScriptNav.setAttribute('src', 'data/nav.json');
head.appendChild(jsonScriptNav);

function content(_content) {
  var h1 = document.getElementsByTagName('h1')[0];
  h1.innerHTML = _content.h1;
  var p = document.getElementsByTagName('p')[0];
  p.innerHTML = _content.p;
  let h2 = document.getElementsByTagName('h2')[0];
  h2.innerHTML = _content.h2;
  let blockquote = document.getElementsByTagName('blockquote')[0];
  blockquote.innerHTML = _content.blockquote;
  let h3 = document.getElementsByTagName('h3')[0];
  h3.innerHTML = _content.h3;
  let firstLink = document.getElementsByTagName('li')[18];

  let secondLink = document.getElementsByTagName('li')[19];
  secondLink.innerHTML = _content.list[1].content;
  let thirdLink = document.getElementsByTagName('li')[20];
  thirdLink.innerHTML = _content.list[2].content;


  firstLink.innerHTML = _content.list[0].content;



}



function headerNav(_nav) {
  var nav = document.getElementsByTagName('nav')[0];
  var navHTML = '<ul>';

  // generate a list
  for (var i = 0; i <_nav.items.length; i++) {

      // checks if list items has more lists
      if (_nav.items[i].items.length > 0) {

        // <li><a href="url"> Label </a>
        //   <ul>
        //     <li><a href=" url "> Label </a></li>
        //     <li><a href=" url "> Label </a></li>
        //     <li><a href=" url "> Label </a></li>
        //     <li><a href=" url "> Label </a></li>
        //     <li><a href=" url "> Label </a></li>
        //     <li><a href=" url "> Label </a></li>
        //   </ul>
        // </li>

        navHTML += '<li> <a href=" '+ _nav.items[i].url+' ">';
        navHTML += _nav.items[i].label + '</a>';
        navHTML += '<ul>';

        for (var a = 0 ; a < _nav.items[i].items.length; a++)  {
          navHTML += '<li> <a href=" ' + _nav.items[i].items[a].url + ' ">' ;
          navHTML += _nav.items[i].items[a].label + '</a></li>' ;

        }
        // close ul
        navHTML += '</ul>';

      } else {

        // <li><a href="url">label</a></li>

        navHTML += '<li> <a href=" '+ _nav.items[i].url+' ">';
        navHTML += _nav.items[i].label + '</a></li>' ;
      }

    } // for loop ends

     navHTML += '</ul>';
     nav.innerHTML = navHTML;
  }
  // console.log(_nav.items[0].url);
