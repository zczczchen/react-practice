# Challenge: Add a dark/light mode to the React Facts site

挑戰：在 React Facts 網站中添加深色/亮色模式

Imagine you've been handed this code base which includes
all the design elements for a light and dark mode already,
but the team needs you to add the functionality to it so
it can switch from light to dark mode when the toggle is
flipped.

想像你手上有這個程式碼庫，其中已經包含所有深色和亮色模式的設計元素，但團隊需要你添加功能，讓它在切換擺動時能夠從亮色模式切換到深色模式。

## Advice:

1. Spend a good amount of time looking through the existing
   code base to make sure you understand how everything is
   working
   a. Check the markup starting in index.js -> App.js
   -> Main.js and Navbar.js
   b. Follow the CSS classNames to the style.css file
   and make sure you understand how the styles should
   be applied
   c. Look closely at the conditional classNames in
   the JSX to help you decide what kind of props
   the components need to receive

   花一些時間仔細查看現有的程式碼庫，確保你了解所有的運作方式。
   a. 從 index.js -> App.js -> Main.js 和 Navbar.js 開始檢查標記。
   b. 跟隨 CSS 的 classNames 到 style.css 檔案，確保你了解樣式應該如何應用。
   c. 仔細檢查 JSX 中的條件 classNames，以幫助你決定組件需要接收什麼樣的 props。

2. Think carefully about which components need state.
   This will help you decide where to write the code
   initializing state and how to pass that state to
   the components that need access to it.
   a. Also think about how state will need to change,
   and see if you can find the hint in the code as
   to how/where that should happen.

仔細思考哪些組件需要狀態。這將幫助你決定在哪裡編寫初始化狀態的程式碼，以及如何將該狀態傳遞給需要訪問它的組件。
a. 同時思考狀態需要如何更改，看看程式碼中是否能找到提示，指示應該如何/在哪裡進行更改。
