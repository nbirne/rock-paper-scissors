# rock-paper-scissors

Simple version of the Rock Paper Scissors game from The Odin Project curriculum.
    - https://www.theodinproject.com/courses/foundations/lessons/rock-paper-scissors
    - https://www.theodinproject.com/courses/foundations/lessons/dom-manipulation

The live version of the game can be found [here](https://nbirne.github.io/rock-paper-scissors/).

The logic behind the game involves variables, functions, loops, and conditions in JS, and was not too challenging to create. Creating a functional UI took more effort. A few key things I was able to practice as I made the game:

- When choosing a color palette, it was very helpful to play around with https://coolors.co/, rather than randomly testing out different color combinations
- I initially tried to use image inputs for icons, but text icons from https://fontawesome.com/ proved much easier to work with. They were easy to resize, recolor, and arrange on the page.
- To make the webpage more interactive, I adjusted the color of various elements on the page to reflect each move. This involved selecting the appropriate element, adding a CSS class using an event listener, and then removing the class at the end of the transition using another event listener.
- Flexbox was helpful for making the page responsive to screen sizes; flex items wrap on smaller screens, so that everything remains visible
- I tried to organize my code into smaller-sized functions, although I will continue to work on creating more organized, approachable code.

I could improve this project in a few ways. First, my code could be more organized, with clearer names for variables and functions. In future projects, I would benefit from doing more planning before starting to write code (in particular, it would be helpful to map out the layout of the page on paper before transferring it to code). Additionally, when the user makes selections too quickly, the color transitions can start to act strangely, which I could find a way to fix. 