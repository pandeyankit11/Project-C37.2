class Question{
    constructor(){
        this.button = createButton('Submit');
        this.button.position(800,350);
        this.input =createInput('Enter Your Name Here');
        this.input1 =createInput('Enter Correct Option No.')
         }
         display(){
            var title = createElement('h2')
            var question = createElement('h3')
            var option1 = createElement('h4')
            var option2 = createElement('h5')
            var option3 = createElement('h6')
            var option4 = createElement('h7')
            title.html("MyQuiz Game");
             title.position(750,0);

             
             question.html("Question:-What starts and ends with the letter 'E',but has only one letter? ");
             question.position(497,80);
             option1.html("1: Everyone");
             option1.position(500,100);
             option2.html("2: Envelope");
             option2.position(500,120);
             option3.html("3: Estimate");
             option3.position(500,140);
             option4.html("4: Example");
             option4.position(500,180);

             this.input.position(500,310);
             this.input1.position(1000,310);


             this.button.mousePressed(()=>{
                 title.hide();
                 this.input.hide();
                 this.input1.hide();
                 this.button.hide();
                 contestant.name =this.input.value();
                 contestantCount+=1;
                 contestant.index =contestantCount;
                 contestant.update();
                 contestant.updateCount(contestantCount);

                
             });
           
               
             }
         }
