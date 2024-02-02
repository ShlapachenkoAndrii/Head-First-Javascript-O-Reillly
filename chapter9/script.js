/* 
Task 1
Create an array of Blog objects in a variable named blog that
is initialized to the blog entries in the YouCube blog. Feel free to
just write the first few words of body text in each entry.
*/

function Blog (body, date) {
    this.body = body;
    this.date = date;
};

var blog = [new Blog("Learning JS", "18/08/2023"),
            new Blog("Learning JS more", "19/08/2023")];




/*
Task 2
Create two objects for the first two YouCube blog entries. Then call the
getDaysBetween() function. passing the two Date objects, and displaying
the result in ап alert box. 
*/

function getDatesBetween(date1, date2) {
    var daysBetween = (date2 - date1) / (1000 * 60 * 60 * 24); 
    return Math.round(daysBetween);
}
var firstBlogDate = new Date(2023, 7, 18);
var secondBlogDate = new Date(2023, 7, 16);
function alertDates(){
    alert("There are " + getDatesBetween(firstBlogDate, secondBlogDate) + " days between these dates");
}


/*
Task 3
Rewrite the code to create an array of YouCube Blog objects
where each date is now a Date object. Feel free to shorten the
body text. 
*/

var blog = [new Blog("Learning JS", new Date("18/08/2023")),
            new Blog("Learning JS more", new Date("19/08/2023"))];


 /* 
Task 4
Fix the cryptic YouCube blog date problem by rewriting the code
that formats a blog entry and stores it in the blog Text variable.
Make sure the blog date is formatted as M/DD/YYYY. 
 */

blogText +="<strong>" + (blog[i].date.getMonth() + 1) + "/" +
 blog[i].date.getDate() + "/" +
 blog[i].date.getFullYear() + "</strong><br/>" +
 blog[i].body + "</p>";