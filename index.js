function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  var result = document.querySelector('div#grand-node div div div div')
  return result
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0; i < ranks.length; i++) {
    var modifiedRanks = (ranks[i].innerHTML) = (i + n).toString();
  } return parseInt(modifiedRanks);
}
