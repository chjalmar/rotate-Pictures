#Sinopsis
Script for randomly rotating a set of images in a smaller grid, with random timings for each frame.

#Usage
You should have previously loaded an array of objects containing a title and a url for each image, like this one:
```javascript
[
  {
    "titulo": "Titulo 1",
    "img_url": "http://localhost/sociales/wp-content/uploads/2016/11/disco-party-people-vector-background-free-34002.jpg"
  },
  {
    "titulo": "Titulo 2",
    "img_url": "http://localhost/sociales/wp-content/uploads/2016/11/fiestsa.jpg"
  },
  ...
]
```
And it would be better if it had more images than frames in the grid rotating them.

So, in a HTML markup like this one (with background images previously loaded by default; the script would change them in it's own time intervals):

```html
<div class="right-data">
   <a href="#">
      <div id="cuadro_1" style="background-image:url(example_img_1.jpg);">
         <div class="inside">
            <h2>Title 1</h2>
         </div>
      </div>
      <div>
         <div  id="cuadro_2" style="background-image:url(example_img_2.jpg);">
            <div class="inside">
               <h2>Title 2</h2>
            </div>
         </div>
         <div id="cuadro_3" style="background-image:url(example_img_3.jpg);">
            <div class="inside">
               <h2>Title 3</h2>
            </div>
         </div>
      </div>
      <div>
         <div id="cuadro_4" style="background-image:url(example_img_4.jpg);">
            <div class="inside">
               <h2>Title 4</h2>
            </div>
         </div>
         <div id="cuadro_5" style="background-image:url(example_img_5.jpg);">
            <div class="inside">
               <h2>Title 5</h2>
            </div>
         </div>
      </div>
   </a>
</div>
```
The script would set random intervals of time between 5 seconds and (5 * the number of frames in the grid) seconds, and would rotate the images in the previously defined array, randomly choosing images that are not currently being shown in another frame - so there's never a repeated image in the grid.