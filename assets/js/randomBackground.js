
<script>
  var totalCount = 3;
  function ChangeIt() {
    var num = Math.ceil(Math.random() * totalCount);
    document.body.background = '../imgs/'+num+'.gif';
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center'
    document.body.style.height = 100%;
  }
</script>