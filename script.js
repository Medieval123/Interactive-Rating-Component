

var allScores = [...document.querySelectorAll(".score")]
var btn = document.querySelector ('.btn');
var ratingCard = document.querySelector('.rating-card-container');
var thankyouCard = document.querySelector('.thankyou-card-container');
var scoreResult = document.querySelector ('.score-result');
let scoreValue = null;


// Replace score result text content

allScores.forEach (score => {
 score.addEventListener('click', (e) => {
   scoreValue = e.currentTarget.id;
  scoreResult.innerHTML = ` You selected ${scoreValue} out of 5`;

  // Close rating and display the thank you container
  btn.addEventListener ('click', () => {
   // Make button unclickable

   if (scoreValue == null ){
    btn.disabled = true;
   }else{
    btn.disabled = false;
    // scoreValue = e.currentTarget.id;
    thankyouCard.classList.remove('hide')
    ratingCard.classList.add('hide')
   }
  })
 })
})