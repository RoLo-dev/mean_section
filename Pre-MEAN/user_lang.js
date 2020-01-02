var users = [
    {
        fname: "Rolando",
        lname: "Lopantzi",
        languages: ["JavaScript", "C#", "HTML", "CSS", "Flutter"],
        interests: {
            music: ["heavy metal", "rock", "Deep House"],
            dance: ["Bachata", "Salsa"],
            television: ["The Mandolorian", "Stranger Things"]
        }
    },
    {
        fname: "Smoky",
        lname: "the Bear",
        languages: ["Python", "Swift", "Java"],
        interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Wildfires"]
        }
    },
    {
        fname: "Adam",
        lname: "Savage",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
        space: ["galaxies", "planets", "black holes"],
        home: ["tea", "reading"]
        }
    }
]

var rolLang = console.log(users[0].fname + " " + users[0].lname +" knows " + users[0].languages)
var smokyLang = console.log(users[1].fname + " " + users[1].lname +" knows " + users[1].languages)
var adamLang = console.log(users[2].fname + " " + users[2].lname + " knows " + users[2].languages)