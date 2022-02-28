currrently what the system does
have text area for javascript html and css
inputtext that let user enter values
depending on input value css and html code is generated
there is iframe element that displays generated codes

doesn't add another element
can't further edit one element

to make sure that css code is not duplicated we have boolean variable. if already css code is generated it don't happen again
get rid of this instead let css duplicate because we can't be sure weather those duplicates value are the same. instead let them duplicate but when the project is about to be exported compare those and if identical get rid of one of them.

there are many stages stages when new element is created stage when component is edited. 0 if user input is used to create new element 1 to ediit it etc

https://developer.mozilla.org/en-US/docs/Web/API/Document/write

