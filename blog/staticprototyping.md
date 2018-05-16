# Assignment 4: Static Prototyping

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E6349DA107BBAD6F8990C909A7C1D2150358590466FCCAEFE8E7EC905184A9DC_1526313750119_Screen+Shot+2018-05-14+at+7.42.49+AM.png)


*Start: 5/14/18 7:00pm*
The [assignment](http://helpmewithcode.com/topics/translatingDesign/huluHomepage) is to build Hulu’s home page in HTML and CSS. It’s hard to even get started because it seems so daunting. I think I’m afraid of the code. I’m not joking. And I’m not even afraid of the real code: I went to atom and typed in html and pressed the tab key to get all of the necessary “starting html” and just seeing it all there was scary. I can’t think of a better word to describe the feeling: I all of a sudden go into this mindset that I don’t know what I’m doing and I shouldn’t be doing this and I probably can’t do this. That to me describes fear aka being scared.

And then to open the [screenshot of the Hulu page](http://helpmewithcode.com/topics/translatingDesign/huluHomepage), look back at the blank (except for the beginning html) page in atom —realizing I’m supposed to *make* this, just pushes me further into a hole.  

I’ll slowly climb out of this hole by focusing on one thing. Just one box. Because they’re all just boxes, and although they’re different sizes they’re basically (1) rectangular pictures with a (2) title, (3) enticing, one-word description, and a (4) logo.

##  (2) title, (3) description, (4) network logo
  Went to the [MDN HTML elements reference page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to familiarize myself with some common elements and decide which one would best fit this portion of the project. Couldn’t find what I was looking for because I was expecting to find some element that was super specific, but of course, no.  

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E6349DA107BBAD6F8990C909A7C1D2150358590466FCCAEFE8E7EC905184A9DC_1526315119141_Screen+Shot+2018-05-14+at+11.24.54+AM.png)

  So I’ll go with a list (as was the case in the [lecture example](https://github.com/helpmewithcode/assignments/blob/master/examples/youtube.html)) because on the homepage it’s just a list of shows but it’s more interesting because they added photos and moved the photos around in some kind of grid, but I’ll just focus on the list structure for now. I will copy and paste from the lecture example to get started and change a few things as I go. Starting with the Live TV tile.


  I’ll copy and paste the list item five times and use it as a template.
 




![](https://d2mxuefqeaa7sj.cloudfront.net/s_E6349DA107BBAD6F8990C909A7C1D2150358590466FCCAEFE8E7EC905184A9DC_1526342624752_Screen+Shot+2018-05-14+at+7.03.22+PM.png)

  Here’s how the site looks after copy/pasting the list items and adding the content. Not much yet, but I’m definitely feeling out of that hole I was in earlier. At least, kind of. Still a long way to go. Seems like getting started was the hard part.

















## (1) picture boxes

Not sure how I’m going to do this but I know I’m going to look up “flexbox” and “grid” because they are mentioned during lecture. [After reading about the two](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout) I decided to go with grid (but not before doing [a bit more research about it](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)) because it feels easier to use for what I’m trying to accomplish. I used code pen to play around with the code and ended up building [the exact layout I need](https://codepen.io/aprilvanderslice/full/VxBdvb) for the project. I felt successful and it was getting late so I used that as a stopping point and went to bed.
*Stop: 5/14 8:00pm*

*Start: 5/15 6:15am*
I woke up this morning excited to work again so I injected the codepen code into my code and it didn’t work 😖 . The example has each box contained in a div and mine are contained in an unordered list (<ul>. I figure to get it to work I need to make it look more like the example, so I deleted all of the <ul> and <li> elements and separated each thumbnail structure in a div. It worked.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E6349DA107BBAD6F8990C909A7C1D2150358590466FCCAEFE8E7EC905184A9DC_1526384646718_Screen+Shot+2018-05-15+at+6.35.13+AM.png)


It’s like I’m building a house and I laid down the foundation and built all the walls, so now all I have to do is put the furniture in —which is usually fun for me so we’ll see if that holds true here.  But first, coffee.
*Stop: 5/15 6:52AM*

*Start: 5/16 1:16PM*
I did work more on it more yesterday during/after coffee but I got so into it I didn’t do very well keeping a log. Here’s the basic breakdown of events that lead to this next version of the project:

  - added photos (I didn’t work hard to find exact photos to match Hulu’s page)
  - changed the font size and color
  - moved the font within the container
  - didn’t get to add actual logos though
![](https://d2mxuefqeaa7sj.cloudfront.net/s_E6349DA107BBAD6F8990C909A7C1D2150358590466FCCAEFE8E7EC905184A9DC_1526494813603_Screen+Shot+2018-05-16+at+1.19.31+PM.png)


Honestly, I would like to continue working on this. I didn’t actually measure space between lines and I don’t get to practice putting in a logo. Also, I feel that it could look better if the photos were more complimentary to the white text .

Anyway, a very rough draft that I’m actually pretty proud of considering where my head was at at the beginning of this post.
