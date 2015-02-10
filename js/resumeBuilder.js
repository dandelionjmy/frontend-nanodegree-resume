var bio={
  "name": "Minyi Ji",
  "role": "Data Analyst",
  "contact": "858-888-2392",
  "skills": ["SAS", "Matlab", "R"]
};
var work={
jobs: [
    {
      "position": "Data Analyst",
      "employer": "Acumen LLC",
      "years": 0.5,
      "city": "Burlingame"
    },
    {
      "position": "Financial Analyst",
      "employer": "The Retirement Group",
      "years": 0.5,
      "city": "San Diego"
    } 
  ]
};
var education={
  "schools": [
    {
     "name": "NWPU",
     "city": "Xi'an",
     "major": "Aerospace Engineering",
     "years": "2005-2009"
    },
    {
     "name": "UCSD",
     "city": "La Jolla",
     "major": "Applied Mathematics",
     "years": "2010-2013"
    }
  ]
}; 

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
  }
}
displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);
function inName(name) {
  name = name.trim().split(" ");
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}





