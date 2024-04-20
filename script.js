document.getElementById('sandbox').addEventListener('click', function() {
    var searchWrap = document.querySelector('.search__wrap');
    searchWrap.style.top = '0';
  });

  document.getElementById('sandbox-two').addEventListener('click', function() {
    var searchWrap = document.querySelector('.search__wrap');
    searchWrap.style.top = '-100%';
  });