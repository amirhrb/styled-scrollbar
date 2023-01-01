# styled-scrollbar

styled-scrollbar helps you make customized(color, width, ...) scrollbars in react projects!

## Quick start

First, run `npm install styled-scrollbar` for your app. Then, in an React app:

```js
import { ScrollbarX } from "styled-scrollbar";
```

there is some notes in using this package, you have to make the scrolled element and Scrollbar **childs** of a **FLEXED PARENT** , here we see:

### Horizontal scrollbar:

```js
//parent element
<div style={{ display: "flex", flexDirection: "column" }}>
  //element that is scrollable
  <div>
  //...items in scrolled element
  </div>
  //Here we put the scrollbar
  <ScrollbarX />
</div>
```

### Vertical scrollbar:

```js
//parent element
<div style={{ display: "flex", flexDirection: "row" }}>
  //element that is scrollable
  <div>
  //...items in scrolled element
  </div>
  //Here we put the scrollbar
  <ScrollbarY />
</div>
```

---

components props:
| Scrollbar | flexDirection | `component` |
| :----------- | :------------ | :----------- |
| `Horizontal` | `column` | `ScrollbarX` |
| `Vertical` | `row` | `ScrollbarY` |

---

**guide for flexDirection:**
| Scrollbar | flexDirection | component |
| :----------- | :------------ | :----------- |
| `Horizontal` | `column` | `ScrollbarX` |
| `Vertical` | `row` | `ScrollbarY` |

# Component Props guide:

**colors Props:**
| Prop | default | data type | meaning|  
| :------|:- | :------- | :-------
| `trackColor`| ![#cecece](https://via.placeholder.com/10/cecece?text=+)`#cecece` | `string` | `color of scrollbar background` |
| `thumbColor` | ![#555](https://via.placeholder.com/10/555?text=+)`#555` | `string` | `color of scrollbar thumb` |

---

**sizes Props:**
| Prop | data type | meaning |
| :--- | :-------- | :-------------------- |
| `w` | `number` | `width of scrollbar` |
| `h` | `number` | `height of scrollbar` |

---

| type         | default width(px) | default height(px) |
| :----------- | :---------------- | :----------------- |
| `ScrollbarX` | `180`             | `6`                |
| `ScrollbarY` | `6`               | `90`               |
