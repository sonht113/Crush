const textConfig = {
  text1: "sdafdsfdsfdsafdsfdsfdsfdsf",
  text2: "dsfdsfdsfdsafdsfdsfsdfd",
  text3: "sdfdsfdsfdsf",
  text4: "sdfdsfdsf",
  text5: "fdsfdsf?",
  text6: "Cdfdfddf",
  text7: "dsfdsfdsfdsfds",
  text77: "fdsfdsfdsfdsf",
  text78: "dfsdafdsfsdfdsfdsfds",
  text8: "Tiếp tục nào hihi -> ",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Giờ thì inbox nói chuyện đi nào hí hí ><",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      width: 900,
      padding: "3em",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      imageUrl:"",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((next) => {
      if(next.value) {
        Swal.fire({
          title: textConfig.text78,
          width: 900,
          padding: "3em",
          background: '#fff url("img/iput-bg.jpg")',
          backdrop: `
                        rgba(0,0,123,0.4)
                        url("img/giphy2.gif")
                        left top
                        no-repeat
                      `,
          imageUrl:"",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonColor: "#fe8a71",
          cancelButtonColor: "#f6cd61",
          confirmButtonText: textConfig.text8,
          onClose: () => {
            Swal.fire({
              title: textConfig.text77,
              text: textConfig.text11,
              width: 900,
              padding: "3em",
              background: '#fff url("img/iput-bg.jpg")',
              backdrop: `
                            rgba(0,0,123,0.4)
                            url("img/giphy2.gif")
                            left top
                            no-repeat
                          `,
              imageUrl:"",
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonColor: "#fe8a71",
              cancelButtonColor: "#f6cd61",
              confirmButtonText: textConfig.text12,
              onClose: () => {
                window.location = "lnikfacebook";
                
              },
            })
          },
        })
      }
    })
    // .then((result) => {
    //   if (result.value) {
    //     Swal.fire({
    //       width: 900,
    //       confirmButtonText: textConfig.text12,
    //       background: '#fff url("img/iput-bg.jpg")',
    //       title: textConfig.text10,
    //       text: textConfig.text11,
    //       confirmButtonColor: "#83d0c9",
    //       onClose: () => {
    //         window.location = "https://www.facebook.com/profile.php?id=100032736788526";
    //       },
    //     });
    //   }
    // });

    // $("#txtReason").focus(function () {
    //   var handleWriteText = setInterval(function () {
    //     textGenerate();
    //   }, 10);
    //   $("#txtReason").blur(function () {
    //     clearInterval(handleWriteText);
    //   });
    // });
  });
});
