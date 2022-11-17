# to-do-list

## A simple, but polished To-Do list with local browser storage.

Sometimes you just need to take down a quick note that locally saves to your browser.
This incredibly innovative webapp (which has never been done before) is a to-do list that saves to-dos to your browsers storage.

In all honesty its just a to-do app. Just having some fun! Maybe someone will find it useful.

### Some unique quirks I learned from this project:

// Event listeners need to be readded on page refresh, they do not stick around.
// An entire HTML element along with its children can be stored into local storgage as a string with the 'outerhtml' property. This allowed me to load the whole container at once rather than iterating through key/value pairs, appending them to the document separately. . On page load the container is replaced by the one in localstorage.
