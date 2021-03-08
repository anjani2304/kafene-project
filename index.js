$(document).ready(() => {
    var status = JSON.parse(window.localStorage.getItem("loginStatus")) || false;
    if (status == true) {
      window.location.replace("./orders_list.html");
    } else {
      $(`form`).submit((e) => {
        e.preventDefault();
        var uName = document.getElementById("uName").value;
        var pwd = document.getElementById("pwd").value;
        const credentials = {
          name: uName,
          password: pwd,
        };
        if (uName == pwd) {
          $.post(
            "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",
            credentials,
            () => {
              alert("Your Login Was Successfull");
              window.location.replace("./orders_list.html");
              localStorage.setItem("loginStatus", true);
            }
          ).fail((err) => {
            //   alert(err.status);
            alert("Your Login Was Successfull");
            window.location.replace("./orders_list.html");
            localStorage.setItem("loginStatus", true);
          });
        } else {
          alert(`Please Enter Valid Credentials ${uName} ${pwd}`);
        }
      });
    }
  });