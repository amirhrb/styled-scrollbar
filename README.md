<!-- prettier-ignore-start -->
# styled-scrollbar

styled-scrollbar helps you make customized(color, width, ...) scrollbars in react projects!

## Quick start

First, run `npm install styled-scrollbar` for your app. Then, in an React app:

```js
import { ScrollbarX } from "styled-scrollbar";
```


### Horizontal scrollbar:

```js
//parent element
<ScrollbarX>
  //element that is scrollable👇🏽
  <div>
    //...items in scrolled element
  </div>
</ScrollbarX>
```
![Horizontal scrollbar](./public/images/horizontal.JPG?raw=true "Title")

### Vertical scrollbar:

```js
<ScrollbarY>
  //element that is scrollable👇🏽
  <div>
    //...items in scrolled element
  </div>
</ScrollbarY>
```
![Vertical scrollbar](./public/images/vertical.JPG?raw=true "Title")

---

components:
| Scrollbar | component |
| :----------- | :------------ | 
| `Horizontal` |  `ScrollbarX` |
| `Vertical` | `ScrollbarY` |

---
# Component Props guide:

**color Props:**
| Prop | default | data type | meaning|  
| :------|:- | :------- | :-------
| `trackColor`| ![#cecece](https://via.placeholder.com/10/cecece?text=+)`#cecece` | `string` | `color of scrollbar background` |
| `thumbColor` | ![#555](https://via.placeholder.com/10/555?text=+)`#555` | `string` | `color of scrollbar thumb` |

---

**size Props:**
| Prop | data type | meaning |
| :--- | :-------- | :-------------------- |
| `w` | `number` | `width of scrollbar` |
| `h` | `number` | `height of scrollbar` |
| `r` | `number` | `borderRadius of scrollbar` |

---

| type         | default width | default height |default bRadius|
| :----------- | :---------------- | :----------------- |:----------- |
| `ScrollbarX`   | prevEl width | `6px`   | `2px`   |
| `ScrollbarY`   | `6px`          | prevEl height |`2px` |

<!-- prettier-ignore-end -->
