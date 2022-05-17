/**Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :] */

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smileyCount = 0
    for(let i = 0; i < arr.length; i++){
      if( arr[i].includes(':') || arr[i].includes(';') ){
        if(arr[i].includes(')') || arr[i].includes('D') ){
          if(arr[i].length == 3){
            if(arr[i].includes('-') || arr[i].includes('~')){
              smileyCount++
            }
          }
        if(arr[i].length == 2){
          smileyCount++
        }
        }
      }
    }
    return smileyCount
  }