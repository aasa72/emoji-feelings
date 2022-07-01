const myEmojis = [ "😀", "😎", "😱", "😥", "🥳", "😴" ]
const paraEl = document.getElementById("para-el") 
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

 
function renderEmojis() {
  paraEl.innerHTML = ""

  // loop through the myEmojis array and create spans to hold emojis
  for( let i = 0; i < myEmojis.length; i++ ) {
    const emoji = document.createElement("span")
    emoji.textContent = myEmojis[i]
    paraEl.append(emoji)
  }
}
    //click-function to push inputvalue and clear fields
pushBtn.addEventListener("click", function() {
  if(emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})

unshiftBtn.addEventListener("click", function(){
  if(emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = "" 
    renderEmojis()
  }
})
popBtn.addEventListener("click", function() {
  myEmojis.pop()
  renderEmojis()
})

shiftBtn.addEventListener("click", function() {
  myEmojis.shift()
  renderEmojis()
})