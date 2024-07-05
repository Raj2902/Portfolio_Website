function showHideNav() {
  var nav = document.getElementById("logo");
  var displayNav = document.getElementById("navigation");
  if (nav.getAttribute("data-nav") === "show") {
    displayNav.style.display = "none";
    nav.setAttribute("data-nav", "hide");
  } else {
    displayNav.style.display = "block";
    nav.setAttribute("data-nav", "show");
  }
}
function readMore() {
  let show = document.getElementById("show-readMore");
  let toggleData = document.getElementById("btn2");
  if (toggleData.getAttribute("data") === "show") {
    show.style.display = "none";
    toggleData.setAttribute("data", "hide");
  } else {
    {
      show.style.display = "block";
      toggleData.setAttribute("data", "show");
    }
  }
}
/*bar graph*/
var xValues = ["Html", "Css", "JS", "MongoDB", "Express", "React", "Nodejs"];
var yValues = [80, 70, 80, 50, 20, 60, 65];
var barColors = ["red", "green", "blue", "orange", "brown", "black", "yellow"];

//pie chart
new Chart("myChart-pie", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Amount of Knowledge I have in every skills",
    },
  },
});

//bar chart
new Chart("myChart-bar", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Amount of Knowledge I have in every skills",
    },
  },
});
function formSubmit() {
  event.preventDefault();
  alert(
    "Mail sent, Note: This is just a dummy text actual functionality yet to be implemented"
  );
}
