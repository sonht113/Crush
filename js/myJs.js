const textConfig = {
  text1: "He luu Chị gái xinh đẹp!",
  text2: "Lần đầu nhìn thấy chị em đã muốn nói chuyện nhưng không biết phải làm thế nào để bắt đầu nên phải dùng cách này. Hi vọng chị sẽ thích hihi!!!",
  text3: "Chị cho em làm quen nhé? ._.",
  text4: "Nếu chị thoát mà không trả lời thì làm người yêu em đó nha hehe",
  text5: "Cậu mơ à???",
  text6: "Chị đồng ý <3",
  text7: "Cứ nghĩ là thiên thần không có thật. Nhưng điều đó đã sai sau khi gặp được chị ><",
  text77: "Đưa bàn tay này em nắm cho. Em sẽ đưa chị đến với hạnh phúc hihi",
  text78: "Bầu trời đẹp thật nhưng chỉ đẹp khi có thêm chị ở đó thôi <3",
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
      background: '#fff url("img/iput-bg.jpg")',
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
      imageHeight: "60%",
      imageWidth: "70%",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      imageUrl:"./img2/33.jpg",
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
          imageHeight: "50%",
          imageWidth: "60%",
          background: '#fff url("img/iput-bg.jpg")',
          backdrop: `
                        rgba(0,0,123,0.4)
                        url("img/giphy2.gif")
                        left top
                        no-repeat
                      `,
          imageUrl:"./img2/43.jpg",
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
              imageHeight: "50%",
              imageWidth: "60%",
              background: '#fff url("img/iput-bg.jpg")',
              backdrop: `
                            rgba(0,0,123,0.4)
                            url("img/giphy2.gif")
                            left top
                            no-repeat
                          `,
              imageUrl:"./img2/50.jpg",
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonColor: "#fe8a71",
              cancelButtonColor: "#f6cd61",
              confirmButtonText: textConfig.text12,
              onClose: () => {
                window.location = "https://www.facebook.com/profile.php?id=100032736788526";
                
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
