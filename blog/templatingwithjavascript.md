# Templating with JavaScript

I have my first assignment using JavaScript. Again, having trouble getting started. I'm supposed to "create reusable code."
Just going to take it step by step.

First I need to create a folder for the assignment. Done. Easy.

The next step is to "'abstract' out data needed for each template."

_I stopped here on Tuesday May 29th. It is now Wednesday May 30th. I'm diffusing an essential oil blend that is supposed to help with mental focus._

## Abstract Data.
The instructor started with html: built out all of the structure and changed the css to match. I've done that.

But looking at the html now, there's hardly anything there. Even the javascript file is kinda scanty, but observing it I notice two things: 1) the details of each pin --what makes each one different: the image, the url, etc. 2) a forEach loop that has some html looking code in it for structure and no specifics. Ok. That makes sense. So that's what I'm doing. Abstracting the parts that can be templated.

So I'm just going to look at one box from my hulu project and pick out each item, decide if it can be used for the template.

![hulu html](https://s6.postimg.cc/707eo5vmp/Screen_Shot_2018-05-30_at_3.20.47_PM.png)

1. p tag that I'm using for the description. Each box has this item so "yes" to being used in the template.

actually, all of these elements can be used in the template, so what I'm going to do is copy and paste all the html for one box into my javascript file and then take out all of the specifics.

![extracting]Screen Shot 2018-05-30 at 3.35.49 PM.png

Ok. Done. So now I will make the part that has all of the specifics and then tie the two parts together (as soon as I figure out how to do that).

![two parts](https://s6.postimg.cc/4649aplqp/Screen_Shot_2018-05-30_at_3.35.49_PM.png)

So there are the two parts. Now they need to be linked together somehow. Looks like it will be through the dollar sign and curly brackets.

The first part is an array, and I'm writing a forEach loop for each item in the array. To access each item, I'll use dot syntax.

Something is wrong.

![wrong](https://s6.postimg.cc/8s0dj1zk1/Screen_Shot_2018-05-30_at_3.35.58_PM.png)

But I am going to go eat dinner. Okay with where I'm at right now. Before I go, I want to make note that maybe it has something to do with the css, the boxes, and maybe the fact that the images are located inside the css and not the html, or now the javascript. I'll fact check my suspicions later.

_later in the day_

My suspicions were kind of right? I forgot to add a class to the template to reference each individual box, which, obviously was a problem. Fixed it with some  interpolation (I had help figuring out that I needed it and how to use it), but here it is:


![final product](https://s6.postimg.cc/5l5tzg29d/Screen_Shot_2018-05-30_at_8.11.36_PM.png)

I also got to delete a lot of the html. That was fun.
