class Form {
    constructor(){

    }
    display()
    {
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(430,0);

        var input=createInput("Name");
        var button=createButton('play');
        var greating=createElement('h2');

        input.position(430,160);
        button.position(550,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var Name=input.value();
            playerCount=playerCount+1;
            player.update(Name);
            player.updateCount(playerCount);
            greating.html("Hello "+Name);
            greating.position(530,160);
        })

    }
}