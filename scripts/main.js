
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

      // Start light mode if it's before 6pm

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
