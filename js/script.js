//Hiding or shwoing navbar
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

//Add functionality to read more button
function readMore() {
  let show = document.getElementById("show-readMore");
  let toggleData = document.getElementById("btn2");
  if (toggleData.getAttribute("data") === "show") {
    show.style.display = "none";
    toggleData.setAttribute("data", "hide");
    toggleData.textContent = "Read More";
  } else {
    {
      show.style.display = "block";
      toggleData.setAttribute("data", "show");
      toggleData.textContent = "Read Less";
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

//what should happen on form submit
function formSubmit() {
  event.preventDefault();
  alert(
    "Mail sent, Note: This is just a dummy text actual functionality yet to be implemented"
  );
}
/*Toggle Day & Night*/
function toggleDayNight() {
  let td = document.getElementById("toggle-data");
  let data = td.getAttribute("data-toggle");
  if (data === "day") {
    td.setAttribute("data-toggle", "night");
    td.style.left = "auto";
  } else {
    td.setAttribute("data-toggle", "day");
    td.style.left = 0;
  }
}
