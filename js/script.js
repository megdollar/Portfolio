$(document).ready(function() {
    
var name = "Megan Dollar";
var subTitle = "Front-end Developer";

var pageTitle ="Projects Porfolio";

var logoImage = "images/udacity.png"
var mainImage ="images/megan1.png"

var projects = [{
  screenshot: "images/tiki.png",
  title: "Tiki Quiz", 
  link: "https://megdollar.github.io/TikiApp/",
  repo: "https://github.com/megdollar/TikiApp" 
},
{
  screenshot: "images/map.png",
  title: "Neigborhood Map", 
  link: "https://megdollar.github.io/Neighborhood_Map/",
  repo: "https://github.com/megdollar/Neighborhood_Map"  
},
{
  screenshot: "images/resume1.png",
  title: "Resume", 
  link: "https://megdollar.github.io/",
  repo: "https://github.com/megdollar/megdollar.github.io"  
}];
    
$(".udacity").attr("src", logoImage); 
$(".name").html(name);
$(".nick-name").html(subTitle);
$(".content_title").html(pageTitle);
$(".photo1").attr("src",mainImage);
 
var description = $(".description");
var screenshot = $(".screenshot");
var github = $(".github");
var repository = $(".code");

projectsDisplay = function(){
	for (var i = 0; i < projects.length; i++){
		$(description[i]).html(projects[i].title);
		$(screenshot[i]).attr("src", projects[i].screenshot);
		$(github[i]).attr("href", projects[i].link);
		$(repository[i]).attr("href", projects[i].repo);
	}
}

projectsDisplay()


});