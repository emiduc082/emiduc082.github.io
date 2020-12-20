//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
var images = document.getElementById("images"); 
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
//this is the variable for the name of the character
var meal;
 
 
 
//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    meal =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
    // easteregg
  if( meal == "fiskburgare"){
  advanceTo(senario.fithteen)
}
  }
};

 
 
//this changes the text and puts in your characters name
var changeText = function(words) {
  text.innerHTML = words.replace("Ditt meal", meal);
};
 
//this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};
 
 
//this looks at the number of options we have set and creates enough buttons 
var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};
 
//this is what moves the game along
var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};
 
 
 
 
 
 
//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
var scenario = {
  one: {
    image: "https://imengine.gota.infomaker.io/?uuid=4d972bfd-7a1d-5b8e-a8c4-f392d486e933&width=960&height=480&type=preview&source=false&q=90&z=100&x=0.000&y=0.108&crop_w=1.000&crop_h=0.667&function=cropresize", 
    text: " Du har precis anlänt till din närmaste McDonalds efter att blivit super sugen. Vilken ska du ta?\n",
  },
  two: {
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/72/1c/0e/lentinho.jpg",
    text: "När du står i kön så tar du på dig din rånarluva som du haft i fickan och sätter på dig den. Du är redo för att göra vad som krävs. Vad gör du?",
    buttons: [["Sneaky style", "advanceTo(scenario.three)"],["All out chaos", "advanceTo(scenario.four)"]]
  },
  three: {
    image: "https://images.ohmyhosting.se/_GIobKMImV5Qy5wH4ggY64PmvDU=/831x425/smart/filters:quality(85)/https%3A%2F%2Fwww.besoksliv.se%2Fwp-content%2Fuploads%2F2017%2F11%2Fmcddd.jpg",
    text: "Du väntar snällt i kön och efter ett par minuter är det äntligen din tur! På vilket sätt tänker du prata med kassörskan?",
    buttons: [[" Vänligt", "advanceTo(scenario.five)"],["hotfullt", "advanceTo(scenario.six)"]]
  },
    four: {
    image: "https://shop.jakt.se/product-images/XL/webp/eberlestock-gunrunner-1.webp",
    text: " Kulsprutan kommer fram ut ur din ryggsäck och du skriker ge mig min Ditt meal på momangen. Samtidigt skjuter du några varningsskott i taket så de fattar vem som bestämmer. Du hoppar in över kassan och behöver nu välja om du vill ta en kall och gammal eller göra en egen.",
    buttons: [["Gör egen", "advanceTo(scenario.seven)"],["Ta den gamla", "advanceTo(scenario.eight)"]]
  },
  five: {
    image: "https://www.mcdonalds.com/content/dam/se/nfl/Core/Footer/Jobb/mcd-sv-core-share-jobb.jpg",
    text: "Tjena kexet, det här är ett råd och vi vill inte göra en stor grej av detta va? Ge mig vad jag vill ha så ska ingenting dåligt hända! Hon känner av rädslan i din mesiga röst och tar fram sin glock-18 med utökat magasin och ljuddämpare och sätter en kall kula mellan dina ögon.",
    buttons: [["F", "advanceTo(scenario.nine)"]]
  },
 
  six: {
    image: "https://thumbs.dreamstime.com/b/r%C3%A4dd-kvinna-4752593.jpg",
    text: "Tjena kexet, ge mig min order nu annars spränger jag hela stället. Hon känner av din dominans och ger dig inte bara en utan två stycken Ditt meal" ,
    buttons:[["FLY", "advanceTo(scenario.ten)"]]
  },
  seven: {
    image: "https://photos1.blogger.com/blogger/4430/2242/1600/P1020675.jpg,//",
    text: "Du springer hastigt in i köket, tar på dig förklädet och tvättar händerna precis som Marie alltid sagt. Därefter börjar du steka den. (Om den inte steks så tryck på Annat meal). Du har en rolig stund men glömmer bort tiden så medans du stod där inne ringde damen i kassan på aina och du behöver nu gitta ASAP walla. Hur flyr du?" ,
    buttons: [[" Annat meal", "advanceTo(scenario.twelve)"],["Bil", "advanceTo(scenario.eleven)"],["Ger upp", "advanceTo(scenario.thirteen)"],["Aina studsare", "advanceTo(scenario.fourteen)"]]
  },
  eight: {
    image: "https://images.freeimages.com/images/premium/previews/1233/12338348-portrait-of-happy-business-colleagues-standing-in-a-line.jpg",
    text: "Du väntar snällt i kön tills det blir din tur. När du är framme vid kassan och ska beställa. Vad säger du till kassörskan?",
    buttons: [[" Vänligt", "advanceTo(scenario.six)"],["hotfullt", "advanceTo(scenario.seven)"]]
  },
  nine: {
    image: "https://s.yimg.com/uu/api/res/1.2/IzfEY1z2Ki5YD9Jy3JAEHw--~B/aD0yMTE7dz00MjU7YXBwaWQ9eXRhY2h5b24-/https://www.blogcdn.com/wow.joystiq.com/media/2009/03/zach_bt-noobdays.jpg",
    text: "Kom igen vilken mes du är. Du går in för att råna donken och blir till en pussy. Get rekt noob :D",
    
  },
  ten: {
    image: "https://www.gp.se/image/policy:1.4157446:1487109963/170214-champtisdag-416477-se-gp-1-jpg.jpg?f=Wide&w=1024&$p$f$w=cb354c0",
    text: "På grund av din testo laddade röst får du det du ville ha och går smidigt därifrån som om ingenting hade hänt! WP ",
    
  },
  eleven: {
    image: "https://i.redd.it/naxar53glxs31.jpg",
    text: "Eftersom att du har snabb reaktionstid så hoppar du ut genom drive through fönstret och tar en grå saab som står parkerad. Du lyckas starta den och kör iväg. Polisen är efter dig men det ser ut som om du lyckas köra längre och längre ifrån dem. Du tänker ez men så kommer du på att det är en saab! och ett ögonblick senare är du upp och ner bredvid vägen på grund av den där saaben. Såklart, varför tog jag saaben tänkte du för dig själv det värsta bilmärket som någonsin skapats. :(",
   
  },
  twelve: {
    image: "data:image/jpeg;base64,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",
    text: " Ush varför kom du ens hit från första början??? Du kommer på att du är helt inkapabel och springer din väg och hittade aldrig hem igen",
    
  },
  thirteen: {
    image: "https://images.cdn.yle.fi/image/upload/f_auto,fl_lossy,q_auto,dpr_3,w_320,c_fill,ar_16:9,d_yle-areena.jpg/13-1-50612446-1599046836211.jpg",
    text: "Polisen är här och du medger ditt nederlag. Polisen batista bomba dig från köksbänken och sen tar de med dig till finkan",
    
  },
  fourteen: {
    image: "https://www.cisatracurium.de/images/cisatracuriumde/477-nike-air-max-97-lux-blacklaser-fuchsia-6505.jpg",
    text: "Eftersom att du är en sån alfahane så vet du att det enda logiska sättet att komma därifrån med livet i behåll är att ta på sig ainastudsare. Dessa fantastiska Air max är pass snabba att du lyckas göra klart din burgare och smita på samma gång. Polisen är kvar på donken helt förvirrade medans du är på joggingrunda hem med din börgare i handen",
  },
  fithteen: {
    image: "data:image/jpeg;base64,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",
    text: "Snälla Vincent...",
  },
  
};
 
 
 
advanceTo(scenario.one);

