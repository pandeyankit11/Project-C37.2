class Contestant{
    constructor(){

    }

         
        getCount(){
          var contestantCountRef = database.ref('contestantCount');
          contestantCountRef.on("value",(data)=>{
            contestantCount = data.val();
          })
        }
      
        updateCount(count){
          database.ref('/').update({
            contestantCount: count
          });
        }
      
        update(name){
          var contestantIndex = "contestants/contestant" + this.index;
          database.ref(contestantIndex).set({
          name:this.name,
          
          });
        }
        update(answer){
          var contestantIndex = "contestants/contestant" + this.index;
          database.ref(contestantIndex).set({
            
            answer:this.answer,
            
          
          });
        }
        static getContestantInfo(){
          var contestantInfoRef=database.ref('contestants');
          contestantInfoRef.on("value",(data)=>{
            allContestants=data.val();
          })
        }
    }
