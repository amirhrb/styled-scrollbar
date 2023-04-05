<!-- prettier-ignore-start -->
# styled-scrollbar

styled-scrollbar helps you make customized(color, width, ...) scrollbars in react projects!

## Quick start

First, run this command in your react app:
```js
npm install styled-scrollbar
```
for your app.

Then:
```js
import { ScrollbarX } from "styled-scrollbar";
```


### Horizontal scrollbar:

```js
//parent element
<ScrollbarX h={3} w={95}>
  //element that is scrollable👇🏽
  <div>
    //...items in scrolled element
  </div>
</ScrollbarX>
```
![Horizontal scrollbar](./public/scrollbarX-default.png?raw=true "Title")

### Vertical scrollbar:

```js
<ScrollbarY w={4} h={300}>
  //element that is scrollable👇🏽
  <div>
    //...items in scrolled element
  </div>
</ScrollbarY>
```
![Vertical scrollbar](./public/scrollbarY-default.png?raw=true "Title")

---

components:
| Scrollbar | component |
| :----------- | :------------ | 
| `Horizontal` |  `ScrollbarX` |
| `Vertical` | `ScrollbarY` |

---
# Component Props guide:


----
**color Props:**
| Prop | default | data type | meaning|  
| :------|:- | :------- | :-------
| `trackColor`| ![#cecece](https://via.placeholder.com/10/cecece?text=+)`#cecece` | `string` | `color of scrollbar background` |
| `thumbColor` | ![#555](https://via.placeholder.com/10/555?text=+)`#555` | `string` | `color of scrollbar thumb` |


**size Props:**
| Prop | data type | meaning |
| :--- | :-------- | :-------------------- |
| `w` | `number` | `width of scrollbar` |
| `h` | `number` | `height of scrollbar` |
| `r` | `number` | `borderRadius of scrollbar` |
  

| type         | default width | default height |default bRadius|
| :----------- | :---------------- | :----------------- |:----------- |
| `ScrollbarX`   | prevEl width | `6px`   | `2px`   |
| `ScrollbarY`   | `6px`          | prevEl height |`2px` |

## New update 3.0.2 :

now  in version 3.0.2 you can give style for `wraper`, `track` and `thumb` by passing their own styles that you like not only the colors and sizes!

| Prop | default | data type | meaning|  
| :------|:- | :------- | :-------
  `thumbStyle`| `{}` |`object`|styles applid on thumb of scrollbar
  `trackStyle` | `{}` | `object`|styles applid on track of scrollbar
  `wraperStyle`| `{}` | `object`|styles applid on wraper of scrollbar and scolling element

  example:
  -
  ```js
    <ScrollbarY
        wraperStyle={{ display: 'flex', flexDirection: 'row-reverse' }}
        trackStyle={{ margin: '0 5px' }}
        >
        ...
    </ScrollbarY>
   ```
<!-- prettier-ignore-end -->
