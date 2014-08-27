var welcomeTpl = $("#poly-template").html(); 
var templateWelcome = Handlebars.compile(welcomeTpl); 

var headerTpl = $("#header-template").html(); 
var templateHeader = Handlebars.compile(headerTpl); 

var showcaseTpl = $("#gallery-template").html(); 
var templateShowcase = Handlebars.compile(showcaseTpl); 

var data = { 
    users: [ { 
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "gazraa" 
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "Photographer",
        twitter: "photobasics"
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "LEGO Geek",
        twitter: "minifigures"
    } ],


     // Basic infos 
    basicInfos: [ { 
        sitename:'PolyFaces',
        headline: 'A showcase of well crafted Low poly faces',
        subline : 'You like them ? So get them !'
    }],

    // Gallery 
    header: [ 
	    	{
	    		url: 'index.html',
	    		name:'Home'
	    	},
	    	{
	    		url: 'showcase.html',
	    		name:'Showcase'
	    	},
	    	{
	    		url: '#',
	    		name:'Contact'
	    	}
	    ],

	    // Gallery 
    	faces: [ 
	    	{
	    		url: 'https://d13yacurqjgara.cloudfront.net/users/166931/screenshots/1699190/tesla_low_poly_small.png',
	    		name:'Nikola Tesla',
	    		poly:'436',
	    		price:'200€'
	    	},
	    	{
	    		url: 'https://d13yacurqjgara.cloudfront.net/users/166931/screenshots/1339246/dribbbleshot.png',
	    		name:'Hugo Bonomi',
	    		poly:'248',
	    		price:'200€'
	    	},
	    	{
	    		url: 'https://d13yacurqjgara.cloudfront.net/users/166931/screenshots/1699190/tesla_low_poly_small.png',
	    		name:'Nikola Tesla',
	    		poly:'436',
	    		price:'200€'
	    	},
	    	{
	    		url: 'https://d13yacurqjgara.cloudfront.net/users/166931/screenshots/1699190/tesla_low_poly_small.png',
	    		name:'Nikola Tesla',
	    		poly:'436',
	    		price:'200€'
	    	},
	    	{
	    		url: 'https://d13yacurqjgara.cloudfront.net/users/166931/screenshots/1339246/dribbbleshot.png',
	    		name:'Hugo Bonomi',
	    		poly:'248',
	    		price:'200€'
	    	},
	    	{
	    		url: 'https://d13yacurqjgara.cloudfront.net/users/166931/screenshots/1699190/tesla_low_poly_small.png',
	    		name:'Nikola Tesla',
	    		poly:'436',
	    		price:'200€'
	    	}
	    ]
}; 


Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

Handlebars.registerHelper('showcase', function(items, options) {
  var out = "<div class='well'><ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul></div>";
});

Handlebars.registerHelper('nav', function(items, options) {
  var out = "<ul class='nav nav-pills'>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});

$('.jumbotron').empty().append(templateWelcome(data));
$('.showcase').append(templateShowcase(data));
$('.header').append(templateHeader(data));
