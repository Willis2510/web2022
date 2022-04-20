
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

      // Start dark mode if it's after 6:59:59pm
      if (new Date().getHours() < 18) {
        //alert(new Date().getHours());
        //const wrapperBody = document.getElementsByClassName('main_content');
        //main_content.style.backgroundColor = 'grey';
        //main_content.style.color = 'black';
      }

      if (new Date().getHours() < 18) {
        const primaryBody = document.getElementById('primary');
        primaryBody.style.backgroundColor = 'white';
        primaryBody.style.color = 'black';
        primaryBody.style.border = 'white';
      }

      if (new Date().getHours() < 18) {
        const secondaryBody = document.getElementById('secondary');
        secondaryBody.style.backgroundColor = 'white';
        secondaryBody.style.color = 'black';
        secondaryBody.style.border = 'white';
      }
