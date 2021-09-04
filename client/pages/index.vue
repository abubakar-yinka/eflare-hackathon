<template>
<div>


<body id="top">

    <!-- header
    ================================================== -->
    <header class="s-header">

        <div class="header-logo">
            <a href="/">
                <img src="../assets/no-fire.svg" alt="Homepage">
            </a>
        </div>

        <div  class="header-content">

            <nav class="row header-nav-wrap">
                <ul style="font-size:13px;" class="header-nav">
                    <li><a class="smoothscroll" href="#home" title="Intro">Home</a></li>
                    <li><a class="smoothscroll" href="#about" title="About">About Us</a></li>
                  </ul>
            </nav> <!-- end header-nav-wrap -->

            <button style="font-size:13px;" @click="calculate"  class="btn btn--stroke btn--small">Calculator</button>

        </div> <!-- end header-content -->

        <a class="header-menu-toggle" href="#0"><span>Menu</span></a>

    </header>


    <!-- hero
    ================================================== -->
    <section  id="hero" class="s-hero target-section" data-parallax="scroll" src="Untitled-7.jpg"
        data-natural-width=3000  data-position-y=center>

        <div class="row hero-content">

            <div  class="column large-full">

                <h1 style="text-shadow: 5px 5px 5px #111;font-size:55px;">
                   End Gas flaring<br>
                    in Nigeria<br>

                </h1>

            </div>

        </div> <!-- end hero-content -->

        <div class="hero-scroll">
            <a href="#about" class="scroll-link smoothscroll">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 24l-8-9h6v-15h4v15h6z" /></svg>
            </a>
        </div> <!-- end hero-scroll -->

    </section> <!-- end s-hero -->


  <section id="about"  class="mission  d-flex mt-4 justify-content-between px-0">
    <div class="text col-6 d-flex flex-column justify-content-center  align-items-center">
      <div class="col-10">
<h3>mission</h3>

<p >To convince investors to channel resources into refined natural gas and associated gases because it will markedly
   reduce or even eliminate gas flaring incidences which will ultimately lead to reduced greenhouse gas
    emissions(which is highly detrimental to the surrounding environment, lives and properties) and consequently, carbon reduction in accordance with the Paris agreement, 
  when provided with sufficient data and powerful insights with the aid of AI.</p>
</div>
</div>
<div class="pic col-6">
  <img style="width:100%;height:100%"  src="../assets/flare.jpg" alt="">
</div>



  <h3></h3>
    
  </section>


  <section class="quote d-flex flex-column justify-content-center align-items-center">
<div class="col-10 mt-4 py-2 new">"For our part, we will redouble
our efforts to collaborate with high gas flaring countries,
particularly in developing countries, and work closely with
governments and oil companies to address the most common
challenges to gas flaring reduction."</div>
<div class=" d-flex col-10 mb-3">

<div class="pic ">
  <img class="rounded-circle" style="height:70px;width:70px;" src="../assets/Zubin.jpg" alt="">
</div>


  <div class="d-flex flex-column ml-3 mt-2">


    <span style="font-size:1.1rem;" class="font-weight-bold">Zubin Bamji</span>  <span style="font-size:0.9rem">Program Manager,
Global Gas Flaring Reduction Partnership
World Bank</span>


  </div>

</div>


  </section>

 <section  class="mission  d-flex  justify-content-between px-0">

   <div class="pic col-6">
  <img style="width:100%;height:100%"  src="../assets/green.jpg" alt="">
</div>
    <div class="text col-6 d-flex flex-column justify-content-center  align-items-center">
      <div class="col-10">
<h3>Solution</h3>

<p >Inline with the World bank's efforts in reducing flaring in Nigeria our solution harnesses the great power of AI predictions and efficient IOTs to deploy an intelligent model that accurately
  predicts gas well yields using a variety of set parameters measured in real time. Equipped with this information 
  investors will be able to make informed choices regarding investing in gas flare sites. Ultimately this would help cut
  down massively on flaring.
</p>


</div>
</div>




  <h3></h3>
    
  </section>
<div class="container my-1 col-12">
  <!-- Footer -->
  <footer class="text-center text-white col-12" style="background-color: #3f51b5;font-size:13px;">
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Links -->
    
      <!-- Section: Links -->

      <hr class="my-5" />

      <!-- Section: Text -->
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <section class="text-center mb-5">
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
<!-- End of .container -->

                   
</body>
</div>
</template>

<script>
export default {

  methods:{
    calculate(){
      this.$router.push({
        path:'/solution'
      })
    }
  }
}
</script>


<style scoped>

.mission{

  background: #fff;
}

.mission p{
  font-size:1.1rem;
   font-family: "Gothic A1", sans-serif;
}


.quote{
  background: #f9861a;
  color:#fff;

}

.quote .new{
  font-size:1.9rem;
}

/* =================================================================== 
 *  Ethos Base Stylesheet
 *  Ver. 1.0.0
 *  11-05-2019
 *  ------------------------------------------------------------------
 *
 *  TOC:
 *	# imports
 *	# normalize
 *	# basic/base setup styles
 *	# grid v2.1.2
 *	# block grids
 *	# MISC
 *
 * =================================================================== */



/* ===================================================================
 * # imports 
 *
 * ------------------------------------------------------------------- */
@import url("https://fonts.googleapis.com/css?family=Gothic+A1:300,300i,400,400i,500,500i,600,600i,700,700i|Martel:300,300i,400,400i,700,700i,900,900i|Work+Sans:600,700&display=swap");



/* ==========================================================================
 * # normalize
 * normalize.css v8.0.1 | MIT License |
 * github.com/necolas/normalize.css
 *
 * -------------------------------------------------------------------------- */

/* ------------------------------------------------------------------- 
 * ## document
 * ------------------------------------------------------------------- */

/* 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.*/
html {
	line-height: 1.15;  /* 1 */
	-webkit-text-size-adjust: 100%;  /* 2 */
}

/* ------------------------------------------------------------------- 
 * ## sections
 * ------------------------------------------------------------------- */

/* Remove the margin in all browsers. */
body {
	margin: 0;
}

/* Render the `main` element consistently in IE. */
main {
	display: block;
}

/* Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari. */
h1 {
	font-size: 1em;
	margin: 0.67em 0;
}

/* ------------------------------------------------------------------- 
 * ## grouping
 * ------------------------------------------------------------------- */

/* 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE. */
hr {
	-webkit-box-sizing: content-box;
	box-sizing: content-box;  /* 1 */
	height: 0;  /* 1 */
	overflow: visible;  /* 2 */
}

/* 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers. */
pre {
	font-family: monospace, monospace;  /* 1 */
	font-size: 1em;  /* 2 */
}

/* ------------------------------------------------------------------- 
 * ## text-level semantics
 * ------------------------------------------------------------------- */

/* Remove the gray background on active links in IE 10. */
a {
	background-color: transparent;
}

/* 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */
abbr[title] {
	border-bottom: none;  /* 1 */
	text-decoration: underline;  /* 2 */
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted;  /* 2 */
}

/* Add the correct font weight in Chrome, Edge, and Safari. */
b,
strong {
	font-weight: bolder;
}

/* 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers. */
code,
kbd,
samp {
	font-family: monospace, monospace;  /* 1 */
	font-size: 1em;  /* 2 */
}

/* Add the correct font size in all browsers. */
small {
	font-size: 80%;
}

/* Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers. */
sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/* ------------------------------------------------------------------- 
 * ## embedded content
 * ------------------------------------------------------------------- */

/* Remove the border on images inside links in IE 10. */
img {
	border-style: none;
}

/* ------------------------------------------------------------------- 
 * ## forms
 * ------------------------------------------------------------------- */

/* 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari. */
button,
input,
optgroup,
select,
textarea {
	font-family: inherit;  /* 1 */
	font-size: 100%;  /* 1 */
	line-height: 1.15;  /* 1 */
	margin: 0;  /* 2 */
}

/* Show the overflow in IE.
 * 1. Show the overflow in Edge. */
button,
input {

	/* 1 */
	overflow: visible;
}

/* Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox. */
button,
select {

	/* 1 */
	text-transform: none;
}

/* Correct the inability to style clickable types in iOS and Safari. */
button,
[type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}

/* Remove the inner border and padding in Firefox. */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/* Restore the focus styles unset by the previous rule. */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/* Correct the padding in Firefox. */
fieldset {
	padding: 0.35em 0.75em 0.625em;
}

/* 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers. */
legend {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;  /* 1 */
	color: inherit;  /* 2 */
	display: table;  /* 1 */
	max-width: 100%;  /* 1 */
	padding: 0;  /* 3 */
	white-space: normal;  /* 1 */
}

/* Add the correct vertical alignment in Chrome, Firefox, and Opera. */
progress {
	vertical-align: baseline;
}

/* Remove the default vertical scrollbar in IE 10+. */
textarea {
	overflow: auto;
}

/* 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10. */
[type="checkbox"],
[type="radio"] {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;  /* 1 */
	padding: 0;  /* 2 */
}

/* Correct the cursor style of increment and decrement buttons in Chrome. */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

/* 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari. */
[type="search"] {
	-webkit-appearance: textfield;  /* 1 */
	outline-offset: -2px;  /* 2 */
}

/* Remove the inner padding in Chrome and Safari on macOS. */
[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

/* 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari. */
::-webkit-file-upload-button {
	-webkit-appearance: button;  /* 1 */
	font: inherit;  /* 2 */
}

/* ------------------------------------------------------------------- 
 * ## interactive
 * ------------------------------------------------------------------- */

/* Add the correct display in Edge, IE 10+, and Firefox. */
details {
	display: block;
}

/* Add the correct display in all browsers. */
summary {
	display: list-item;
}

/* ------------------------------------------------------------------- 
 * ## misc
 * ------------------------------------------------------------------- */

/* Add the correct display in IE 10+. */
template {
	display: none;
}

/* Add the correct display in IE 10. */
[hidden] {
	display: none;
}



/* ===================================================================
 * # basic/base setup styles
 *
 * ------------------------------------------------------------------- */
html {
	font-size: 62.5%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	-webkit-box-sizing: inherit;
	box-sizing: inherit;
}

body {
	font-weight: normal;
	line-height: 1;
	word-wrap: break-word;
	-moz-font-smoothing: grayscale;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	-webkit-overflow-scrolling: touch;
	-webkit-text-size-adjust: none;
}

/* ------------------------------------------------------------------- 
 * ## Media
 * ------------------------------------------------------------------- */
svg,
img,
video
embed,
iframe,
object {
	max-width: 100%;
	height: auto;
}

/* ------------------------------------------------------------------- 
 * ## Typography resets 
 * ------------------------------------------------------------------- */
div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {
	margin: 0;
	padding: 0;
}

p {
	font-size: inherit;
	text-rendering: optimizeLegibility;
}

em,
i {
	font-style: italic;
	line-height: inherit;
}

strong,
b {
	font-weight: bold;
	line-height: inherit;
}

small {
	font-size: 60%;
	line-height: inherit;
}

ol,
ul {
	list-style: none;
}

li {
	display: block;
}

/* ------------------------------------------------------------------- 
 * ## links
 * ------------------------------------------------------------------- */
a {
	text-decoration: none;
	line-height: inherit;
}

a img {
	border: none;
}

/* ------------------------------------------------------------------- 
 * ## inputs
 * ------------------------------------------------------------------- */
fieldset {
	margin: 0;
	padding: 0;
}

input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}



/* ===================================================================
 * # grid v2.1.2
 *
 *   -----------------------------------------------------------------
 * - Grid breakpoints are based on MAXIMUM WIDTH media queries, 
 *   meaning they apply to that one breakpoint and ALL THOSE BELOW IT.
 * - Grid columns without a specified width will automatically layout 
 *   as equal width columns.
 * ------------------------------------------------------------------- */

/* rows
 * ------------------------------------- */
.row {
	width: 89%;
	max-width: 1200px;
	margin: 0 auto;
	display: -ms-flexbox;
	display: -webkit-box;
	display: flex;
	-ms-flex-flow: row wrap;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	flex-flow: row wrap;
}

.row .row {
	width: auto;
	max-width: none;
	margin-left: -20px;
	margin-right: -20px;
}

/* columns
 * -------------------------------------- */
.column {
	-ms-flex: 1 1 0%;
	-webkit-box-flex: 1;
	flex: 1 1 0%;
	padding: 0 20px;
}

.collapse > .column,
.column.collapse {
	padding: 0;
}

/* flex row containers utility classes
 * ----------------------------------------- */
.row.row-wrap {
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}

.row.row-nowrap {
	-ms-flex-wrap: none;
	flex-wrap: nowrap;
}

.row.row-y-top {
	-ms-flex-align: start;
	-webkit-box-align: start;
	align-items: flex-start;
}

.row.row-y-bottom {
	-ms-flex-align: end;
	-webkit-box-align: end;
	align-items: flex-end;
}

.row.row-y-center {
	-ms-flex-align: center;
	-webkit-box-align: center;
	align-items: center;
}

.row.row-stretch {
	-ms-flex-align: stretch;
	-webkit-box-align: stretch;
	align-items: stretch;
}

.row.row-baseline {
	-ms-flex-align: baseline;
	-webkit-box-align: baseline;
	align-items: baseline;
}

.row.row-x-left {
	-ms-flex-pack: start;
	-webkit-box-pack: start;
	justify-content: flex-start;
}

.row.row-x-right {
	-ms-flex-pack: end;
	-webkit-box-pack: end;
	justify-content: flex-end;
}

.row.row-x-center {
	-ms-flex-pack: center;
	-webkit-box-pack: center;
	justify-content: center;
}

/* flex item utility alignment classes
 * ----------------------------------------- */
.align-center {
	margin: auto;
	-webkit-align-self: center;
	-ms-flex-item-align: center;
	-ms-grid-row-align: center;
	align-self: center;
}

.align-left {
	margin-right: auto;
	-webkit-align-self: center;
	-ms-flex-item-align: center;
	-ms-grid-row-align: center;
	align-self: center;
}

.align-right {
	margin-left: auto;
	-webkit-align-self: center;
	-ms-flex-item-align: center;
	-ms-grid-row-align: center;
	align-self: center;
}

.align-x-center {
	margin-right: auto;
	margin-left: auto;
}

.align-x-left {
	margin-right: auto;
}

.align-x-right {
	margin-left: auto;
}

.align-y-center {
	-webkit-align-self: center;
	-ms-flex-item-align: center;
	-ms-grid-row-align: center;
	align-self: center;
}

.align-y-top {
	-webkit-align-self: flex-start;
	-ms-flex-item-align: start;
	align-self: flex-start;
}

.align-y-bottom {
	-webkit-align-self: flex-end;
	-ms-flex-item-align: end;
	align-self: flex-end;
}

/* large screen column widths 
 * -------------------------------------- */
.large-1 {
	-ms-flex: 0 0 8.33333%;
	-webkit-box-flex: 0;
	flex: 0 0 8.33333%;
	max-width: 8.33333%;
}

.large-2 {
	-ms-flex: 0 0 16.66667%;
	-webkit-box-flex: 0;
	flex: 0 0 16.66667%;
	max-width: 16.66667%;
}

.large-3 {
	-ms-flex: 0 0 25%;
	-webkit-box-flex: 0;
	flex: 0 0 25%;
	max-width: 25%;
}

.large-4 {
	-ms-flex: 0 0 33.33333%;
	-webkit-box-flex: 0;
	flex: 0 0 33.33333%;
	max-width: 33.33333%;
}

.large-5 {
	-ms-flex: 0 0 41.66667%;
	-webkit-box-flex: 0;
	flex: 0 0 41.66667%;
	max-width: 41.66667%;
}

.large-6,
.large-half {
	-ms-flex: 0 0 50%;
	-webkit-box-flex: 0;
	flex: 0 0 50%;
	max-width: 50%;
}

.large-7 {
	-ms-flex: 0 0 58.33333%;
	-webkit-box-flex: 0;
	flex: 0 0 58.33333%;
	max-width: 58.33333%;
}

.large-8 {
	-ms-flex: 0 0 66.66667%;
	-webkit-box-flex: 0;
	flex: 0 0 66.66667%;
	max-width: 66.66667%;
}

.large-9 {
	-ms-flex: 0 0 75%;
	-webkit-box-flex: 0;
	flex: 0 0 75%;
	max-width: 75%;
}

.large-10 {
	-ms-flex: 0 0 83.33333%;
	-webkit-box-flex: 0;
	flex: 0 0 83.33333%;
	max-width: 83.33333%;
}

.large-11 {
	-ms-flex: 0 0 91.66667%;
	-webkit-box-flex: 0;
	flex: 0 0 91.66667%;
	max-width: 91.66667%;
}

.large-12,
.large-full {
	-ms-flex: 0 0 100%;
	-webkit-box-flex: 0;
	flex: 0 0 100%;
	max-width: 100%;
}

/* ------------------------------------------------------------------- 
 * ## medium screen devices
 * ------------------------------------------------------------------- */
@media screen and (max-width:1200px) {
	.row .row {
		margin-left: -16px;
		margin-right: -16px;
	}

	.column {
		padding: 0 16px;
	}

	.medium-1 {
		-ms-flex: 0 0 8.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 8.33333%;
		max-width: 8.33333%;
	}

	.medium-2 {
		-ms-flex: 0 0 16.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 16.66667%;
		max-width: 16.66667%;
	}

	.medium-3 {
		-ms-flex: 0 0 25%;
		-webkit-box-flex: 0;
		flex: 0 0 25%;
		max-width: 25%;
	}

	.medium-4 {
		-ms-flex: 0 0 33.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 33.33333%;
		max-width: 33.33333%;
	}

	.medium-5 {
		-ms-flex: 0 0 41.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 41.66667%;
		max-width: 41.66667%;
	}

	.medium-6,
	.medium-half {
		-ms-flex: 0 0 50%;
		-webkit-box-flex: 0;
		flex: 0 0 50%;
		max-width: 50%;
	}

	.medium-7 {
		-ms-flex: 0 0 58.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 58.33333%;
		max-width: 58.33333%;
	}

	.medium-8 {
		-ms-flex: 0 0 66.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 66.66667%;
		max-width: 66.66667%;
	}

	.medium-9 {
		-ms-flex: 0 0 75%;
		-webkit-box-flex: 0;
		flex: 0 0 75%;
		max-width: 75%;
	}

	.medium-10 {
		-ms-flex: 0 0 83.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 83.33333%;
		max-width: 83.33333%;
	}

	.medium-11 {
		-ms-flex: 0 0 91.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 91.66667%;
		max-width: 91.66667%;
	}

	.medium-12,
	.medium-full {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}

}

/* ------------------------------------------------------------------- 
 * ## tablets
 * ------------------------------------------------------------------- */
@media screen and (max-width:800px) {
	.tab-1 {
		-ms-flex: 0 0 8.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 8.33333%;
		max-width: 8.33333%;
	}

	.tab-2 {
		-ms-flex: 0 0 16.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 16.66667%;
		max-width: 16.66667%;
	}

	.tab-3 {
		-ms-flex: 0 0 25%;
		-webkit-box-flex: 0;
		flex: 0 0 25%;
		max-width: 25%;
	}

	.tab-4 {
		-ms-flex: 0 0 33.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 33.33333%;
		max-width: 33.33333%;
	}

	.tab-5 {
		-ms-flex: 0 0 41.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 41.66667%;
		max-width: 41.66667%;
	}

	.tab-6,
	.tab-half {
		-ms-flex: 0 0 50%;
		-webkit-box-flex: 0;
		flex: 0 0 50%;
		max-width: 50%;
	}

	.tab-7 {
		-ms-flex: 0 0 58.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 58.33333%;
		max-width: 58.33333%;
	}

	.tab-8 {
		-ms-flex: 0 0 66.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 66.66667%;
		max-width: 66.66667%;
	}

	.tab-9 {
		-ms-flex: 0 0 75%;
		-webkit-box-flex: 0;
		flex: 0 0 75%;
		max-width: 75%;
	}

	.tab-10 {
		-ms-flex: 0 0 83.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 83.33333%;
		max-width: 83.33333%;
	}

	.tab-11 {
		-ms-flex: 0 0 91.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 91.66667%;
		max-width: 91.66667%;
	}

	.tab-12,
	.tab-full {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}

	.hide-on-tablet {
		display: none;
	}

}

/* ------------------------------------------------------------------- 
 * ## mobile devices 
 * ------------------------------------------------------------------- */
@media screen and (max-width:600px) {
	.row {
		width: 100%;
		padding-left: 24px;
		padding-right: 24px;
	}

	.row .row {
		margin-left: -10px;
		margin-right: -10px;
		padding-left: 0;
		padding-right: 0;
	}

	.column {
		padding: 0 10px;
	}

	.mob-1 {
		-ms-flex: 0 0 8.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 8.33333%;
		max-width: 8.33333%;
	}

	.mob-2 {
		-ms-flex: 0 0 16.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 16.66667%;
		max-width: 16.66667%;
	}

	.mob-3 {
		-ms-flex: 0 0 25%;
		-webkit-box-flex: 0;
		flex: 0 0 25%;
		max-width: 25%;
	}

	.mob-4 {
		-ms-flex: 0 0 33.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 33.33333%;
		max-width: 33.33333%;
	}

	.mob-5 {
		-ms-flex: 0 0 41.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 41.66667%;
		max-width: 41.66667%;
	}

	.mob-6,
	.mob-half {
		-ms-flex: 0 0 50%;
		-webkit-box-flex: 0;
		flex: 0 0 50%;
		max-width: 50%;
	}

	.mob-7 {
		-ms-flex: 0 0 58.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 58.33333%;
		max-width: 58.33333%;
	}

	.mob-8 {
		-ms-flex: 0 0 66.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 66.66667%;
		max-width: 66.66667%;
	}

	.mob-9 {
		-ms-flex: 0 0 75%;
		-webkit-box-flex: 0;
		flex: 0 0 75%;
		max-width: 75%;
	}

	.mob-10 {
		-ms-flex: 0 0 83.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 83.33333%;
		max-width: 83.33333%;
	}

	.mob-11 {
		-ms-flex: 0 0 91.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 91.66667%;
		max-width: 91.66667%;
	}

	.mob-12,
	.mob-full {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}

	.hide-on-mobile {
		display: none;
	}

}

/* ------------------------------------------------------------------- 
 * ## small mobile devices <= 400px
 * ------------------------------------------------------------------- */
@media screen and (max-width:400px) {
	.row {
		padding-left: 22px;
		padding-right: 22px;
	}

	.row .row {
		margin-left: 0;
		margin-right: 0;
	}

	.column {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
		width: 100%;
		margin-left: 0;
		margin-right: 0;
		padding: 0;
	}

}



/* ===================================================================
 * # block grids
 *
 * -------------------------------------------------------------------
 * Equally-sized columns define at parent/row level.
 * ------------------------------------------------------------------- */
.block-large-1-8 > .column {
	-ms-flex: 0 0 12.5%;
	-webkit-box-flex: 0;
	flex: 0 0 12.5%;
	max-width: 12.5%;
}

.block-large-1-6 > .column {
	-ms-flex: 0 0 16.66667%;
	-webkit-box-flex: 0;
	flex: 0 0 16.66667%;
	max-width: 16.66667%;
}

.block-large-1-5 > .column {
	-ms-flex: 0 0 20%;
	-webkit-box-flex: 0;
	flex: 0 0 20%;
	max-width: 20%;
}

.block-large-1-4 > .column {
	-ms-flex: 0 0 25%;
	-webkit-box-flex: 0;
	flex: 0 0 25%;
	max-width: 25%;
}

.block-large-1-3 > .column {
	-ms-flex: 0 0 33.33333%;
	-webkit-box-flex: 0;
	flex: 0 0 33.33333%;
	max-width: 33.33333%;
}

.block-large-1-2 > .column {
	-ms-flex: 0 0 50%;
	-webkit-box-flex: 0;
	flex: 0 0 50%;
	max-width: 50%;
}

.block-large-full > .column {
	-ms-flex: 0 0 100%;
	-webkit-box-flex: 0;
	flex: 0 0 100%;
	max-width: 100%;
}

/* ------------------------------------------------------------------- 
 * ## block grids - medium screen devices
 * ------------------------------------------------------------------- */
@media screen and (max-width:1200px) {
	.block-medium-1-8 > .column {
		-ms-flex: 0 0 12.5%;
		-webkit-box-flex: 0;
		flex: 0 0 12.5%;
		max-width: 12.5%;
	}

	.block-medium-1-6 > .column {
		-ms-flex: 0 0 16.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 16.66667%;
		max-width: 16.66667%;
	}

	.block-medium-1-5 > .column {
		-ms-flex: 0 0 20%;
		-webkit-box-flex: 0;
		flex: 0 0 20%;
		max-width: 20%;
	}

	.block-medium-1-4 > .column {
		-ms-flex: 0 0 25%;
		-webkit-box-flex: 0;
		flex: 0 0 25%;
		max-width: 25%;
	}

	.block-medium-1-3 > .column {
		-ms-flex: 0 0 33.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 33.33333%;
		max-width: 33.33333%;
	}

	.block-medium-1-2 > .column {
		-ms-flex: 0 0 50%;
		-webkit-box-flex: 0;
		flex: 0 0 50%;
		max-width: 50%;
	}

	.block-medium-full > .column {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}

}

/* ------------------------------------------------------------------- 
 * ## block grids - tablets
 * ------------------------------------------------------------------- */
@media screen and (max-width:800px) {
	.block-tab-1-8 > .column {
		-ms-flex: 0 0 12.5%;
		-webkit-box-flex: 0;
		flex: 0 0 12.5%;
		max-width: 12.5%;
	}

	.block-tab-1-6 > .column {
		-ms-flex: 0 0 16.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 16.66667%;
		max-width: 16.66667%;
	}

	.block-tab-1-5 > .column {
		-ms-flex: 0 0 20%;
		-webkit-box-flex: 0;
		flex: 0 0 20%;
		max-width: 20%;
	}

	.block-tab-1-4 > .column {
		-ms-flex: 0 0 25%;
		-webkit-box-flex: 0;
		flex: 0 0 25%;
		max-width: 25%;
	}

	.block-tab-1-3 > .column {
		-ms-flex: 0 0 33.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 33.33333%;
		max-width: 33.33333%;
	}

	.block-tab-1-2 > .column {
		-ms-flex: 0 0 50%;
		-webkit-box-flex: 0;
		flex: 0 0 50%;
		max-width: 50%;
	}

	.block-tab-full > .column {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}

}

/* ------------------------------------------------------------------- 
 * ## block grids - mobile devices
 * ------------------------------------------------------------------- */
@media screen and (max-width:600px) {
	.block-mob-1-8 > .column {
		-ms-flex: 0 0 12.5%;
		-webkit-box-flex: 0;
		flex: 0 0 12.5%;
		max-width: 12.5%;
	}

	.block-mob-1-6 > .column {
		-ms-flex: 0 0 16.66667%;
		-webkit-box-flex: 0;
		flex: 0 0 16.66667%;
		max-width: 16.66667%;
	}

	.block-mob-1-5 > .column {
		-ms-flex: 0 0 20%;
		-webkit-box-flex: 0;
		flex: 0 0 20%;
		max-width: 20%;
	}

	.block-mob-1-4 > .column {
		-ms-flex: 0 0 25%;
		-webkit-box-flex: 0;
		flex: 0 0 25%;
		max-width: 25%;
	}

	.block-mob-1-3 > .column {
		-ms-flex: 0 0 33.33333%;
		-webkit-box-flex: 0;
		flex: 0 0 33.33333%;
		max-width: 33.33333%;
	}

	.block-mob-1-2 > .column {
		-ms-flex: 0 0 50%;
		-webkit-box-flex: 0;
		flex: 0 0 50%;
		max-width: 50%;
	}

	.block-mob-full > .column {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
	}

}

/* ------------------------------------------------------------------- 
 * ## block grids - small mobile devices <= 400px
 * ------------------------------------------------------------------- */
@media screen and (max-width:400px) {
	.stack > .column {
		-ms-flex: 0 0 100%;
		-webkit-box-flex: 0;
		flex: 0 0 100%;
		max-width: 100%;
		width: 100%;
		margin-left: 0;
		margin-right: 0;
		padding: 0;
	}

}



/* ===================================================================
 * # MISC
 *
 * ------------------------------------------------------------------- */
.h-group:after {
	content: "";
	display: table;
	clear: both;
}

/* misc helper classes
 * -------------------------------------- */
.is-hidden {
	display: none;
}

.is-invisible {
	visibility: hidden;
}

.h-antialiased {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.h-overflow-hidden {
	overflow: hidden;
}

.h-remove-bottom {
	margin-bottom: 0;
}

.h-add-half-bottom {
	margin-bottom: 1.6rem !important;
}

.h-add-bottom {
	margin-bottom: 3.2rem !important;
}

.h-no-border {
	border: none;
}

.h-full-width {
	width: 100%;
}

.h-text-center {
	text-align: center;
}

.h-text-left {
	text-align: left;
}

.h-text-right {
	text-align: right;
}

.h-pull-left {
	float: left;
}

.h-pull-right {
	float: right;
}

/* =================================================================== 
 *  Ethos Main Stylesheet
 *  Template Ver. 1.0.0
 *  11-05-2019
 *  ------------------------------------------------------------------
 *
 *  TOC:
 *  # custom block grid STACK breakpoints
 *  # base style overrides
 *    ## links
 *  # typography & general theme styles
 *    ## Lists
 *    ## responsive video container
 *    ## floated image 
 *    ## tables
 *    ## Spacing
 *  # preloader
 *  # forms
 *    ## Style Placeholder Text
 *    ## Change Autocomplete styles in Chrome
 *  # buttons
 *  # additional components
 *    ## additional typo styles 
 *    ## skillbars
 *    ## alert box 
 *  # Common and Reusable Styles
 *  # site header
 *    ## header logo
 *    ## main navigation
 *    ## mobile menu toggle
 *    ## download resume button
 *  # hero
 *    ## hero social
 *    ## hero scroll
 *    ## animate intro content
 *    ## animations
 *  # about section
 *    ## career position
 *  # services section
 *    ## services list
 *  # portfolio
 *    ## portfolio list
 *  # testimonials
 *  # CTA
 *  # footer
 *    ## contact block
 *    ## copyright
 *    ## go top
 *
 * =================================================================== */




/* ===================================================================
 * # custom block grid STACK breakpoints
 *
 * ------------------------------------------------------------------- */
@media screen and (max-width:1000px) {
  .block-1000-full > .column {
    -ms-flex: 0 0 100%;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }

}

@media screen and (max-width:900px) {
  .block-900-full > .column {
    -ms-flex: 0 0 100%;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }

}



/* ===================================================================
 * # base style overrides
 *
 * ------------------------------------------------------------------- */
html {
  font-size: 10px;
}

@media screen and (max-width:400px) {
  html {
    font-size: 9.444444444444444px;
  }

}

html,
body {
  height: 100%;
}

body {
  background: #0b0a15;
  font-family: "Martel", serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.778;
  color: #000000;
  margin: 0;
  padding: 0;
  position: relative;
}

/* ------------------------------------------------------------------- 
 * ## links
 * ------------------------------------------------------------------- */
a {
  color: #f9861a;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

a:hover,
a:focus,
a:active {
  color: #544d9d;
}

a:hover,
a:active {
  outline: 0;
}



/* ===================================================================
 * # typography & general theme styles
 * 
 * ------------------------------------------------------------------- */
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #000000;
  -webkit-font-variant-ligatures: common-ligatures;
  font-variant-ligatures: common-ligatures;
  text-rendering: optimizeLegibility;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4 {
  margin-top: 6rem;
  margin-bottom: 1.6rem;
}

@media screen and (max-width:600px) {
  h1, .h1, h2, .h2, h3, .h3, h4, .h4 {
    margin-top: 5.6rem;
  }

}

h5, .h5, h6, .h6 {
  margin-top: 4.8rem;
  margin-bottom: 1.2rem;
}

@media screen and (max-width:600px) {
  h5, .h5, h6, .h6 {
    margin-top: 4.4rem;
    margin-bottom: 0.8rem;
  }

}

h1, .h1 {
  font-size: 3.6rem;
  line-height: 1.222;
}

@media screen and (max-width:600px) {
  h1, .h1 {
    font-size: 3.3rem;
  }

}

h2, .h2 {
  font-size: 3.2rem;
  line-height: 1.25;
}

h3, .h3 {
  font-size: 2.4rem;
  line-height: 1.167;
}

h4, .h4 {
  font-size: 2.1rem;
  line-height: 1.333;
}

h5, .h5 {
  font-size: 1.8rem;
  line-height: 1.333;
}

h6, .h6 {
  font-size: 1.6rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: .3rem;
}

p img {
  margin: 0;
}

p.lead {
  font-family: "Gothic A1", sans-serif;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 1.833;
  margin-bottom: 3.6rem;
  color: #000000;
}

@media screen and (max-width:1200px) {
  p.lead {
    font-size: 2.2rem;
  }

}

@media screen and (max-width:600px) {
  p.lead {
    font-size: 2.1rem;
  }

}

em,
i,
strong,
b {
  font-size: inherit;
  line-height: inherit;
}

em,
i {
  font-family: "Martel", serif;
  font-style: italic;
}

strong,
b {
  font-family: "Martel", serif;
  font-weight: 700;
}

small {
  font-size: 1.2rem;
  line-height: inherit;
}

blockquote {
  margin: 4rem 0;
  padding: 4rem 4rem;
  border-left: 4px solid black;
  position: relative;
}

@media screen and (max-width:600px) {
  blockquote {
    padding: 3.2rem 3.2rem;
  }

}

@media screen and (max-width:400px) {
  blockquote {
    padding: 2.8rem 2.8rem;
  }

}

blockquote p {
  font-family: "Martel", serif;
  font-weight: 400;
  padding: 0;
  font-size: 2.8rem;
  line-height: 1.857;
  color: #000000;
}

@media screen and (max-width:1200px) {
  blockquote p {
    font-size: 2.6rem;
  }

}

@media screen and (max-width:600px) {
  blockquote p {
    font-size: 2.2rem;
  }

}

blockquote cite {
  display: block;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  line-height: 1.333;
}

blockquote cite:before {
  content: "\2014 \0020";
}

blockquote cite,
blockquote cite a,
blockquote cite a:visited {
  color: #7e7e7e;
  border: none;
}

abbr {
  font-family: "Martel", serif;
  font-weight: 700;
  font-variant: small-caps;
  text-transform: lowercase;
  letter-spacing: .05rem;
  color: #7e7e7e;
}

var,
kbd,
samp,
code,
pre {
  font-family: Consolas, "Andale Mono", Courier, "Courier New", monospace;
}

pre {
  padding: 2.4rem 3.2rem 3.2rem;
  background: #efefef;
  overflow-x: auto;
}

code {
  font-size: 1.4rem;
  margin: 0 .2rem;
  padding: .4rem .8rem;
  white-space: nowrap;
  background: #efefef;
  border: 1px solid #d3d3d3;
  color: #000000;
  border-radius: 3px;
}

pre > code {
  display: block;
  white-space: pre;
  line-height: 2;
  padding: 0;
  margin: 0;
}

pre.prettyprint > code {
  border: none;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
  text-decoration: none;
}

mark {
  background: #fff099;
  color: #000000;
}

hr {
  border: solid #e0e0e0;
  border-width: 1px 0 0;
  clear: both;
  margin: 8rem 0 9.6rem;
  height: 0;
}

/* ------------------------------------------------------------------- 
 * ## Lists
 * ------------------------------------------------------------------- */
ol {
  list-style: decimal;
}

ul {
  list-style: disc;
}

li {
  display: list-item;
}

ol,
ul {
  margin-left: 1.6rem;
}

ul li {
  padding-left: .4rem;
}

ul ul,
ul ol,
ol ol,
ol ul {
  margin: .8rem 0 .8rem 1.6rem;
}

ul.disc li {
  display: list-item;
  list-style: none;
  padding: 0 0 0 .8rem;
  position: relative;
}

ul.disc li::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f9861a;
  position: absolute;
  left: -16px;
  top: 11px;
  vertical-align: middle;
}

dt {
  margin: 0;
  color: #f9861a;
}

dd {
  margin: 0 0 0 2rem;
}

/* ------------------------------------------------------------------- 
 * ## responsive video container
 * ------------------------------------------------------------------- */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* ------------------------------------------------------------------- 
 * ## floated image 
 * ------------------------------------------------------------------- */
img.h-pull-right {
  margin: 1.2rem 0 1.2rem 2.8rem;
}

img.h-pull-left {
  margin: 1.2rem 2.8rem 1.2rem 0;
}

/* ------------------------------------------------------------------- 
 * ## tables
 * ------------------------------------------------------------------- */
table {
  border-width: 0;
  width: 100%;
  max-width: 100%;
  font-family: "Gothic A1", sans-serif;
  border-collapse: collapse;
}

th,
td {
  padding: 1.5rem 3.2rem;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  color: #000000;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
}

th:first-child,
td:first-child {
  padding-left: 0;
}

th:last-child,
td:last-child {
  padding-right: 0;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* ------------------------------------------------------------------- 
 * ## Spacing
 * ------------------------------------------------------------------- */
button,
.btn {
  margin-bottom: 1.6rem;
}

fieldset {
  margin-bottom: 1.6rem;
}

input,
textarea,
select,
pre,
blockquote,
figure,
table,
p,
ul,
ol,
dl,
form,
.video-container,
.ss-custom-select {
  margin-bottom: 3.2rem;
}



/* ===================================================================
 * # preloader
 *
 * ------------------------------------------------------------------- */
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0b0a15;
  z-index: 500;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.no-js #preloader,
.oldie #preloader {
  display: none;
}

#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  padding: 0;
  display: inline-block;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

#loader > div {
  content: "";
  background: #ffffff;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}

#loader > div:nth-of-type(1) {
  left: 15px;
}

#loader > div:nth-of-type(3) {
  left: -15px;
}

/* dots jump */
.dots-jump > div {
  -webkit-animation: dots-jump 1.2s infinite ease;
  animation: dots-jump 1.2s infinite ease;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.dots-jump > div:nth-of-type(1) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.dots-jump > div:nth-of-type(3) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

@-webkit-keyframes dots-jump {
  0% {
    top: 0;
  }

  40% {
    top: -6px;
  }

  80% {
    top: 0;
  }

}

@keyframes dots-jump {
  0% {
    top: 0;
  }

  40% {
    top: -6px;
  }

  80% {
    top: 0;
  }

}

/* dots fade */
.dots-fade > div {
  -webkit-animation: dots-fade 1.6s infinite ease;
  animation: dots-fade 1.6s infinite ease;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.dots-fade > div:nth-of-type(1) {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.dots-fade > div:nth-of-type(3) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

@-webkit-keyframes dots-fade {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 0.2;
  }

  80% {
    opacity: 1;
  }

}

@keyframes dots-fade {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 0.2;
  }

  80% {
    opacity: 1;
  }

}

/* dots pulse */
.dots-pulse > div {
  -webkit-animation: dots-pulse 1.2s infinite ease;
  animation: dots-pulse 1.2s infinite ease;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.dots-pulse > div:nth-of-type(1) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.dots-pulse > div:nth-of-type(3) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

@-webkit-keyframes dots-pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  40% {
    -webkit-transform: scale(1.1);
    transform: scale(1.3);
  }

  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

}

@keyframes dots-pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  40% {
    -webkit-transform: scale(1.1);
    transform: scale(1.3);
  }

  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

}



/* ===================================================================
 * # forms
 *
 * ------------------------------------------------------------------- */
fieldset {
  border: none;
}

input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
  display: block;
  height: 6.8rem;
  padding: 1.8rem 0 1.5rem;
  border: 0;
  outline: none;
  color: #000000;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.6rem;
  line-height: 3.2rem;
  max-width: 100%;
  background: transparent;
  border-bottom: 1px solid #d3d3d3;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.ss-custom-select {
  position: relative;
  padding: 0;
}

.ss-custom-select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 0.01px;
  text-overflow: '';
  margin: 0;
  line-height: 3rem;
  vertical-align: middle;
}

.ss-custom-select select option {
  padding-left: 2rem;
  padding-right: 2rem;
}

.ss-custom-select select::-ms-expand {
  display: none;
}

.ss-custom-select::after {
  border-bottom: 2px solid #000000;
  border-right: 2px solid #000000;
  content: '';
  display: block;
  height: 8px;
  width: 8px;
  margin-top: -7px;
  pointer-events: none;
  position: absolute;
  right: 2.4rem;
  top: 50%;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  -webkit-transform-origin: 66% 66%;
  transform-origin: 66% 66%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

textarea {
  min-height: 25.6rem;
}

input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="text"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
  color: #000000;
  border-bottom: 1px solid #000000;
}

label,
legend {
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: .8rem;
  line-height: 1.714;
  color: #000000;
  display: block;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline;
}

label > .label-text {
  display: inline-block;
  margin-left: 1rem;
  font-family: "Gothic A1", sans-serif;
  line-height: inherit;
}

label > input[type="checkbox"],
label > input[type="radio"] {
  margin: 0;
  position: relative;
  top: .2rem;
}

/* ------------------------------------------------------------------- 
 * ## Style Placeholder Text
 * ------------------------------------------------------------------- */
::-webkit-input-placeholder {

  /* WebKit, Blink, Edge */
  color: #8c8c8c;
}

:-ms-input-placeholder {

  /* Internet Explorer 10-11 */
  color: #8c8c8c;
}

::-ms-input-placeholder {

  /* Microsoft Edge */
  color: #8c8c8c;
}

::placeholder {

  /* Most modern browsers support this now. */
  color: #8c8c8c;
}

.placeholder {
  color: #8c8c8c !important;
}

/* ------------------------------------------------------------------- 
 * ## Change Autocomplete styles in Chrome
 * ------------------------------------------------------------------- */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
input:-webkit-autofill,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: #f9861a;
  -webkit-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
}



/* ===================================================================
 * # buttons
 *
 * ------------------------------------------------------------------- */
.btn,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: .6rem;
  height: 6rem;
  line-height: 3.6rem;
  padding: 0 3.2rem;
  margin: 0 .4rem 1.6rem 0;
  color: #000000;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  -webkit-transition: all .3s;
  transition: all .3s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #d3d3d3;
  border: 0.2rem solid #d3d3d3;
}

.btn:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.btn:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  background-color: #000000;
  border-color: #000000;
  color: #ffffff;
  outline: 0;
}

/* button primary
 * ------------------------------------------------- */
.btn.btn--primary,
button.btn--primary,
input[type="submit"].btn--primary,
input[type="reset"].btn--primary,
input[type="button"].btn--primary {
  background: #f9861a;
  border-color: #f9861a;
  color: #ffffff;
}

.btn.btn--primary:hover,
button.btn--primary:hover,
input[type="submit"].btn--primary:hover,
input[type="reset"].btn--primary:hover,
input[type="button"].btn--primary:hover,
.btn.btn--primary:focus,
button.btn--primary:focus,
input[type="submit"].btn--primary:focus,
input[type="reset"].btn--primary:focus,
input[type="button"].btn--primary:focus {
  background: #000000;
  border-color: #000000;
}

/* button modifiers
 * ------------------------------------------------- */
.btn.h-full-width,
button.h-full-width {
  width: 100%;
  margin-right: 0;
}

.btn--small,
button.btn--small {
  height: 3.6rem !important;
  line-height: 3.2rem !important;
}

.btn--medium,
button.btn--medium {
  height: 6.4rem !important;
  line-height: 6rem !important;
}

.btn--large,
button.btn--large {
  height: 6.8rem !important;
  line-height: 6.4rem !important;
}

.btn--stroke,
button.btn--stroke {
  background: transparent !important;
  border: 0.2rem solid #000000;
  color: #000000;
}

.btn--stroke:hover,
button.btn--stroke:hover {
  background: #000000 !important;
  border: 0.2rem solid #000000;
  color: #ffffff;
}

.btn--pill,
button.btn--pill {
  padding-left: 3.2rem !important;
  padding-right: 3.2rem !important;
  border-radius: 1000px !important;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}



/* =================================================================== 
 * # additional components
 *
 * ------------------------------------------------------------------- */

/* ------------------------------------------------------------------- 
 * ## additional typo styles 
 * ------------------------------------------------------------------- */
.drop-cap:first-letter {
  float: left;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  font-size: 5.334em;
  line-height: 1;
  padding: 0 0.125em 0 0;
  text-transform: uppercase;
  background: transparent;
  color: #000000;
}

/* line definition style 
 * ----------------------------------------------- */
.lining dt,
.lining dd {
  display: inline;
  margin: 0;
}

.lining dt + dt:before,
.lining dd + dt:before {
  content: "\A";
  white-space: pre;
}

.lining dd + dd:before {
  content: ", ";
}

.lining dd + dd:before {
  content: ", ";
}

.lining dd:before {
  content: ": ";
  margin-left: -0.2em;
}

/* dictionary definition style 
 * ----------------------------------------------- */
.dictionary-style dt {
  display: inline;
  counter-reset: definitions;
}

.dictionary-style dt + dt:before {
  content: ", ";
  margin-left: -0.2em;
}

.dictionary-style dd {
  display: block;
  counter-increment: definitions;
}

.dictionary-style dd:before {
  content: counter(definitions, decimal) ". ";
}

/** 
 * Pull Quotes
 * -----------
 * markup:
 *
 * <aside class="pull-quote">
 *    <blockquote>
 *      <p></p>
 *    </blockquote>
 *  </aside>
 *
 * --------------------------------------------------------------------- */
.pull-quote {
  position: relative;
  padding: 2.4rem 0;
}

.pull-quote blockquote {
  background-color: #efefef;
  border: none;
  margin: 0;
  padding-top: 9.6rem;
  position: relative;
}

.pull-quote blockquote:before {
  content: "";
  display: block;
  height: 3.2rem;
  width: 3.2rem;
  background-repeat: no-repeat;
  background: center center;
  background-size: contain;
  
  position: absolute;
  top: 4rem;
  left: 4rem;
}

/** 
 * Stats Tab
 * ---------
 * markup:
 *
 * <ul class="stats-tabs">
 *    <li><a href="#">[value]<em>[name]</em></a></li>
 *  </ul>
 *
 * Extend this object into your markup.
 *
 * --------------------------------------------------------------------- */
.stats-tabs {
  padding: 0;
  margin: 3.2rem 0;
}

.stats-tabs li {
  display: inline-block;
  margin: 0 1.6rem 3.2rem 0;
  padding: 0 1.5rem 0 0;
  border-right: 1px solid #e0e0e0;
}

.stats-tabs li:last-child {
  margin: 0;
  padding: 0;
  border: none;
}

.stats-tabs li a {
  display: inline-block;
  font-size: 2.5rem;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  border: none;
  color: #000000;
}

.stats-tabs li a:hover {
  color: #f9861a;
}

.stats-tabs li a em {
  display: block;
  margin: .8rem 0 0 0;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
  font-style: normal;
  color: #7e7e7e;
}

/* ------------------------------------------------------------------- 
 * ## skillbars
 * ------------------------------------------------------------------- */
.skill-bars {
  list-style: none;
  margin: 6.8rem 0 3.2rem;
}

.skill-bars li {
  height: .4rem;
  background: #c3c3c3;
  width: 100%;
  margin-bottom: 6.8rem;
  padding: 0;
  position: relative;
}

.skill-bars li strong {
  position: absolute;
  left: 0;
  top: -4rem;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
}

.skill-bars li .progress {
  background: #000000;
  position: relative;
  height: 100%;
}

.skill-bars li .progress span {
  position: absolute;
  right: 0;
  top: -3.6rem;
  display: block;
  font-family: "Gothic A1", sans-serif;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1;
  background: #000000;
  padding: .8rem .8rem;
  border-radius: 3px;
}

.skill-bars li .progress span::after {
  position: absolute;
  left: 50%;
  bottom: -10px;
  margin-left: -5px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: #000000;
  content: "";
}

.skill-bars li .percent5 {
  width: 5%;
}

.skill-bars li .percent10 {
  width: 10%;
}

.skill-bars li .percent15 {
  width: 15%;
}

.skill-bars li .percent20 {
  width: 20%;
}

.skill-bars li .percent25 {
  width: 25%;
}

.skill-bars li .percent30 {
  width: 30%;
}

.skill-bars li .percent35 {
  width: 35%;
}

.skill-bars li .percent40 {
  width: 40%;
}

.skill-bars li .percent45 {
  width: 45%;
}

.skill-bars li .percent50 {
  width: 50%;
}

.skill-bars li .percent55 {
  width: 55%;
}

.skill-bars li .percent60 {
  width: 60%;
}

.skill-bars li .percent65 {
  width: 65%;
}

.skill-bars li .percent70 {
  width: 70%;
}

.skill-bars li .percent75 {
  width: 75%;
}

.skill-bars li .percent80 {
  width: 80%;
}

.skill-bars li .percent85 {
  width: 85%;
}

.skill-bars li .percent90 {
  width: 90%;
}

.skill-bars li .percent95 {
  width: 95%;
}

.skill-bars li .percent100 {
  width: 100%;
}

/* ------------------------------------------------------------------- 
 * ## alert box 
 * ------------------------------------------------------------------- */
.alert-box {
  padding: 2.4rem 4rem 2.4rem 3.2rem;
  position: relative;
  margin-bottom: 3.2rem;
  border-radius: 3px;
  font-family: "Gothic A1", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.6;
}

.alert-box__close {
  position: absolute;
  display: block;
  right: 1.6rem;
  top: 1.6rem;
  cursor: pointer;
  width: 12px;
  height: 12px;
}

.alert-box__close::before,
.alert-box__close::after {
  content: '';
  position: absolute;
  display: inline-block;
  width: 2px;
  height: 12px;
  top: 0;
  left: 5px;
}

.alert-box__close::before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.alert-box__close::after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.alert-box--error {
  background-color: #ffd1d2;
  color: #dd4043;
}

.alert-box--error .alert-box__close::before,
.alert-box--error .alert-box__close::after {
  background-color: #dd4043;
}

.alert-box--success {
  background-color: #c8e675;
  color: #637533;
}

.alert-box--success .alert-box__close::before,
.alert-box--success .alert-box__close::after {
  background-color: #637533;
}

.alert-box--info {
  background-color: #d5ebfb;
  color: #387fb2;
}

.alert-box--info .alert-box__close::before,
.alert-box--info .alert-box__close::after {
  background-color: #387fb2;
}

.alert-box--notice {
  background-color: #fff099;
  color: #827217;
}

.alert-box--notice .alert-box__close::before,
.alert-box--notice .alert-box__close::after {
  background-color: #827217;
}



/* ===================================================================
 * # Common and Reusable Styles
 *
 * ------------------------------------------------------------------- */
.wide {
  max-width: 1400px;
}

.wider {
  max-width: 1600px;
}

.narrow {
  max-width: 1000px;
}

.subhead {
  font-size: 1.4rem;
  line-height: 1.286;
  text-transform: uppercase;
  letter-spacing: .4em;
  margin-top: 0;
  margin-bottom: 6rem;
  color: #f9861a;
}

.display-1 {
  font-size: 4.8rem;
  line-height: 1.333;
}

.section-intro {
  position: relative;
  margin-bottom: 12rem;
}

.section-intro .display-1 {
  margin-top: 0;
}

.section-intro .subhead,
.section-intro .display-1 {
  position: relative;
}

.section-intro::before {
  content: attr(data-num);
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 30rem;
  line-height: 1;
  letter-spacing: -.045em;
  color: rgba(0, 0, 0, 0.12);
  position: absolute;
  top: -.25em;
  left: 4.4rem;
}

.h-dark-bg {
  color: #ffffff;
}

.h-dark-bg .section-intro .display-1 {
  color: #ffffff;
}

.h-dark-bg .section-intro::before {
  color: rgba(255, 255, 255, 0.08);
}

.h-dark-bg p.lead {
  color: #ffffff;
}

.right-vert-line {
  width: 2px;
  height: 20rem;
  background-color: #302c59;
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
  position: absolute;
  top: 0;
  right: 11.2rem;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * common and reusable styles
 * ------------------------------------------------------------------- */
@media screen and (max-width:1200px) {
  .right-vert-line {
    right: 9rem;
  }

}

@media screen and (max-width:800px) {
  .section-intro::before {
    font-size: 24rem;
  }

  .right-vert-line {
    height: 16rem;
    right: 6.2rem;
  }

}

@media screen and (max-width:600px) {
  .subhead {
    font-size: 1.3rem;
  }

  .display-1 {
    font-size: 4.2rem;
  }

  .section-intro::before {
    font-size: 22rem;
  }

  .right-vert-line {
    height: 12rem;
    right: 5rem;
  }

}

@media screen and (max-width:500px) {
  .display-1 {
    font-size: 4rem;
  }

}

@media screen and (max-width:400px) {
  .section-intro {
    margin-bottom: 9.6rem;
  }

  .section-intro::before {
    font-size: 20rem;
  }

}

@media screen and (max-width:360px) {
  .display-1 {
    font-size: 3.6rem;
  }

  .section-intro::before {
    font-size: 18rem;
  }

}



/* ===================================================================
 * # site header
 *
 * ------------------------------------------------------------------- */
.s-header {
  z-index: 100;
  width: 100%;
  height: 4rem;
  position: absolute;
  top: 2rem;
  left: 0;
}

.s-header.offset {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  -webkit-transition: all .5s;
  transition: all .5s;
}

.s-header.scrolling {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.s-header.sticky {
  background-color: #050505;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.s-header.sticky .header-logo img {
  width: 35px;
  height: 38px;
}

.s-header.sticky .header-content .btn {
  height: 2.8rem !important;
  line-height: 4.4rem !important;
}

.s-header.sticky .header-nav a {
  color: rgba(255, 255, 255, 0.6);
}

.s-header.sticky.scrolling {
  opacity: 1;
  visibility: visible;
}

.header-content {
  height: 2.8rem;
  position: relative;
}

/* -------------------------------------------------------------------
 * ## header logo
 * ------------------------------------------------------------------- */
.header-logo {
  z-index: 101;
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-transition: all .5s;
  transition: all .5s;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  position: absolute;
  left: 8rem;
  top: 50%;
}

.header-logo a {
  display: block;
  border: none;
  padding: 0;
  outline: 0;
}

.header-logo img {
  width: 41px;
  height: 44px;
  vertical-align: bottom;
}

/* -------------------------------------------------------------------
 * ## main navigation
 * ------------------------------------------------------------------- */
.header-nav-wrap {
  max-width: 1400px;
  padding-left: 10px;
}

.header-nav {
 
  list-style: none;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  margin: 0;
}

.header-nav a {
  color: rgba(255, 255, 255, 0.4);
}

.header-nav a:hover,
.header-nav a:focus {
  color: #ffffff !important;
}

.header-nav li {
  display: inline-block;
  padding-left: 0;
  margin: 0 1rem;
}

/* ------------------------------------------------------------------- 
 * ## mobile menu toggle
 * ------------------------------------------------------------------- */
.header-menu-toggle {
  z-index: 101;
  display: none;
  height: 4.2rem;
  width: 4.2rem;
  line-height: 4.2rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: .2rem;
  color: #ffffff;
  outline: none;
  -webkit-transition: all .3s;
  transition: all .3s;
  position: absolute;
  right: 5.2rem;
  top: 1.6rem;
}

.header-menu-toggle:hover,
.header-menu-toggle:focus {
  color: #ffffff;
}

.header-menu-toggle span {
  display: block;
  width: 2.4rem;
  height: 2px;
  background-color: #ffffff;
  -webkit-transition: all .5s;
  transition: all .5s;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  left: .9rem;
  right: auto;
  bottom: auto;
}

.header-menu-toggle span::before,
.header-menu-toggle span::after {
  content: '';
  width: 100%;
  height: 100%;
  background-color: inherit;
  -webkit-transition: all .5s;
  transition: all .5s;
  position: absolute;
  left: 0;
}

.header-menu-toggle span::before {
  top: -.9rem;
}

.header-menu-toggle span::after {
  bottom: -.9rem;
}

.header-menu-toggle.is-clicked span {
  background-color: rgba(255, 255, 255, 0);
  -webkit-transition: all .1s;
  transition: all .1s;
}

.header-menu-toggle.is-clicked span::before,
.header-menu-toggle.is-clicked span::after {
  background-color: white;
}

.header-menu-toggle.is-clicked span::before {
  top: 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.header-menu-toggle.is-clicked span::after {
  bottom: 0;
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
}

/* ------------------------------------------------------------------- 
 * ## download resume button
 * ------------------------------------------------------------------- */
.header-content .btn {
  border-color: #ffffff;
  color: #ffffff;
  margin: 0;
  padding: 0 4rem;
  font-size: 1.1rem;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  position: absolute;
  top: 50%;
  right: 8rem;
}

.header-content .btn:hover,
.header-content .btn:focus {
  background-color: #f9861a !important;
  border-color: #f9861a !important;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * header
 * ------------------------------------------------------------------- */
@media screen and (max-width:1700px) {
  .header-logo {
    left: 6rem;
  }

  .header-nav-wrap {
    max-width: none;
    width: 100%;
    padding-left: 13.2rem;
  }

  .header-content .btn {
    right: 6rem;
  }

}

@media screen and (max-width:1000px) {
  .header-content .btn {
    height: 4.8rem !important;
    line-height: 4.4rem !important;
  }

}

@media screen and (max-width:900px) {
  .s-header {
    top: 2rem;
    height: 8rem;
  }

  .header-logo img {
    width: 37px;
    height: 40px;
  }

  .header-content {
    display: block;
    background-color: #050505;
    height: auto;
    width: 100%;
    padding: 16rem 6rem 8rem;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    position: absolute;
    top: -2rem;
    left: 0;
  }

  .header-content .btn {
    margin-top: 4.8rem;
    -webkit-transform: translate3d(0, -2rem, 0);
    transform: translate3d(0, -2rem, 0);
    opacity: 0;
    visibility: hidden;
    position: static;
  }

  .header-nav-wrap {
    padding: 0;
    -webkit-transform: translate3d(0, -2rem, 0);
    transform: translate3d(0, -2rem, 0);
    opacity: 0;
    visibility: hidden;
  }

  .header-nav {
    display: block;
    width: 100%;
    padding: 0;
  }

  .header-nav a {
    display: block;
  }

  .header-nav li {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    display: block;
    margin: 0;
  }

  .header-nav li:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .header-menu-toggle {
    display: block;
  }

  .menu-is-open .header-content {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .menu-is-open .header-content .btn {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
    visibility: visible;
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
    -webkit-transition-duration: .5s;
    transition-duration: .5s;
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transition-delay: .7s;
    transition-delay: .7s;
  }

  .menu-is-open .header-nav-wrap {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transition-delay: .6s;
    transition-delay: .6s;
  }

}

@media screen and (max-width:600px) {
  .header-logo {
    left: 4rem;
  }

  .header-menu-toggle {
    right: 3.2rem;
  }

  .header-content {
    padding: 16rem 4rem 8rem;
  }

  .header-content .btn {
    display: block;
  }

}



/* ===================================================================
 * # hero
 *
 * ------------------------------------------------------------------- */
.s-hero {
  width: 100%;
  height: 50vh;
  min-height: 41rem;
  overflow: hidden;
  background-color: transparent;
  position: relative;
}

.s-hero::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-gradient(linear, left top, right top, color-stop(10%, black), to(rgba(0, 0, 0, 0)));
  background: linear-gradient(90deg, black 10%, rgba(0, 0, 0, 0) 100%);
  opacity: .25;
}

.no-js .s-hero {
  background: #ffffff;
}

.hero-content {
  height: 90%;
  max-width: 1400px;
  -ms-flex-align: end;
  -webkit-box-align: end;
  align-items: flex-end;
  padding-top: 5vh;
  padding-bottom: 14vh;
  position: relative;
}

.hero-content h1 {
  font-size: 7rem;
  font-weight: 400;
  line-height: 1.257;
  padding-right: 3.2rem;
  margin-top: 0;
  color: #ffffff;
  position: relative;
}

.hero-content h1::before {
  content: "";
  display: block;
  height: 2px;
  width: 8rem;
  background-color: #f9861a;
  position: absolute;
  left: -10.8rem;

}

/* -------------------------------------------------------------------
 * ## hero social
 * ------------------------------------------------------------------- */
.hero-social {
  list-style: none;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-flow: row wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 3.2rem;
  text-transform: uppercase;
  letter-spacing: .5em;
  margin-top: 8rem;
  margin-left: .4rem;
  margin-bottom: 0;
  position: relative;
}

.hero-social a {
  color: #ffffff;
}

.hero-social a:hover,
.hero-social a:focus,
.hero-social a:active {
  color: #f9861a;
}

.hero-social li {
  padding-left: 0;
}

.hero-social li::after {
  content: '/';
  color: rgba(255, 255, 255, 0.1);
  margin-left: 0rem;
  margin-right: 1rem;
}

.hero-social li:last-child::after {
  display: none;
}

/* -------------------------------------------------------------------
 * ## hero scroll
 * ------------------------------------------------------------------- */
.hero-scroll {
  position: absolute;
  right: 8rem;
  bottom: 10rem;
}

.hero-scroll::after {
  content: "";
  display: block;
  width: 2px;
  height: 7rem;
  background-color: white;
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
  position: absolute;
  right: 50%;
  bottom: -10rem;
}

.hero-scroll .scroll-link,
.hero-scroll .scroll-link svg path {
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.hero-scroll .scroll-link {
  text-decoration: none;
  border: 0 none;
  display: block;
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0;
  position: relative;
}

.hero-scroll .scroll-link svg {
  height: 1.2rem;
  width: 1.2rem;
  position: absolute;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  left: 50%;
  top: 50%;
}

.hero-scroll .scroll-link svg path {
  fill: #ffffff;
}

.hero-scroll .scroll-link:hover,
.hero-scroll .scroll-link:focus {
  background-color: #f9861a;
}

/* -------------------------------------------------------------------
 * ## animate intro content
 * ------------------------------------------------------------------- */
html.ss-preload .hero-content {
  opacity: 0;
}

html.ss-loaded .hero-content {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

html.no-csstransitions .hero-content {
  opacity: 1;
}

/* ------------------------------------------------------------------- 
 * ## animations
 * ------------------------------------------------------------------- */

/* fade in */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

@keyframes fadeIn {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

/* fade in left */
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

/* fade out */
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

}

@keyframes fadeOut {
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

}

/* ------------------------------------------------------------------- 
 * responsive:
 * hero
 * ------------------------------------------------------------------- */
@media screen and (max-width:1800px) {
  .hero-content h1 {
    font-size: 6.3rem;
  }

  .hero-content h1::before {
    width: 6rem;
    left: -8.8rem;
  }

}

@media screen and (max-width:1700px) {
  .hero-content {
    max-width: 1200px;
  }

}

@media screen and (max-width:1500px) {
  .hero-content {
    max-width: 1000px;
  }

}

@media screen and (max-width:1300px) {
  .hero-content {
    max-width: 1200px;
  }

  .hero-content h1 {
    font-size: 6rem;
    padding-top: 3.2rem;
  }

  .hero-content h1::before {
    width: 6rem;
    top: 0;
    left: 0;
  }

}

@media screen and (max-width:1200px) {
  .hero-scroll {
    right: 6rem;
  }

  .hero-scroll::after {
    height: 8rem;
  }

  .hero-scroll .scroll-link {
    height: 6rem;
    width: 6rem;
  }

}

@media screen and (max-width:1000px) {
  .hero-content h1 {
    font-size: 5.6rem;
  }

  .hero-social {
    font-size: 1.1rem;
  }

}

@media screen and (max-width:800px) {
  .hero-content h1 {
    font-size: 4.8rem;
  }

  .hero-social {
    padding-right: 7.2rem;
  }

  .hero-scroll {
    right: 3.6rem;
  }

  .hero-scroll .scroll-link {
    height: 5.2rem;
    width: 5.2rem;
  }

}

@media screen and (max-width:600px) {
  .hero-content h1 {
    font-size: 4.6rem;
  }

  .hero-content h1 br {
    display: none;
  }

  .hero-social {
    font-size: 1rem;
  }

  .hero-scroll {
    right: 2.4rem;
  }

}

@media screen and (max-width:500px) {
  .hero-content h1 {
    font-size: 4.4rem;
    padding-right: 0;
  }

}

@media screen and (max-width:400px) {
  .hero-content h1 {
    font-size: 4rem;
  }

}

@media screen and (max-width:360px) {
  .hero-content h1 {
    font-size: 3.8rem;
  }

}



/* ===================================================================
 * # about section
 *
 * ------------------------------------------------------------------- */
.s-about {
  padding-bottom: 16rem;
  background-color: #ffffff;
  position: relative;
}

.s-about .right-vert-line {
  background-color: #302c59;
}

.s-about__section--profile {
  padding-top: 28rem;
  padding-bottom: 4rem;
  min-height: 108rem;
  position: relative;
}

.s-about__section--profile::before {
  content: "";
  display: block;
  background-color: #b3c2c1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: calc(50% + 12vw);
}

.s-about__section--profile .row {
  position: relative;
}

.s-about__section--profile .profile-pic {
  width: 24vw;
  position: absolute;
  top: 8rem;
  left: calc(50% + 80px);
}

/* ------------------------------------------------------------------- 
 * ## career position
 * ------------------------------------------------------------------- */
.work-positions {
  margin-top: 2rem;
}

.work-positions .column:nth-child(2n + 1) {
  padding-right: 40px;
}

.work-positions .column:nth-child(2n + 2) {
  padding-left: 40px;
}

.position {
  padding-top: 3.6rem;
  padding-bottom: 3.2rem;
  border-top: 1px solid #b3c2c1;
}

.position__header {
  margin-bottom: 4rem;
}

.position__header h6 {
  font-family: "Martel", serif;
  line-height: 2.8rem;
  margin-top: 0;
  margin-bottom: .4rem;
}

.position__header h6 .position__co {
  margin-right: 2rem;
}

.position__header h6 .position__pos {
  display: inline-block;
  font-size: 1.8rem;
  text-transform: none;
  letter-spacing: 0;
}

.position__timeframe {
  font-family: "Gothic A1", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  color: #7e7e7e;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * about
 * ------------------------------------------------------------------- */
@media screen and (max-width:1200px) {
  .s-about__section--profile::before {
    left: 75%;
  }

  .s-about__section--profile .profile-pic {
    width: 26vw;
    right: 0;
    left: auto;
  }

  .work-positions .column:nth-child(2n + 1) {
    padding-right: 30px;
  }

  .work-positions .column:nth-child(2n + 2) {
    padding-left: 30px;
  }

}

@media screen and (max-width:900px) {
  .work-positions .column:nth-child(n) {
    padding: 0 16px;
  }

  .position {
    padding-right: 8rem;
  }

}

@media screen and (max-width:800px) {
  .s-about__section--profile {
    padding-top: 20rem;
    padding-bottom: 0;
    min-height: 0;
  }

  .s-about__section--profile::before,
  .s-about__section--profile .profile-pic {
    display: none;
  }

  .position {
    padding-right: 0;
  }

}

@media screen and (max-width:600px) {
  .work-positions .column:nth-child(n) {
    padding: 0 10px;
  }

}

@media screen and (max-width:400px) {
  .work-positions .column:nth-child(n) {
    padding: 0;
  }

}



/* ===================================================================
 * # services section
 *
 * ------------------------------------------------------------------- */
.s-services {
  padding-top: 24rem;
  padding-bottom: 20rem;
  background-color: #1d1b37;
  position: relative;
}

.s-services__content {
  position: relative;
}

.s-services__leftcol {
  padding-bottom: 12rem;
}

.s-services__leftcol p.lead {
  max-width: 90%;
}

.s-services .vert-line {
  width: 2px;
  height: 20rem;
  background-color: #f9861a;
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
  position: absolute;
  bottom: -20rem;
  left: 20px;
}

/* ------------------------------------------------------------------- 
 * ## services list
 * ------------------------------------------------------------------- */
.services-list {
  list-style: none;
  padding-left: 20px;
  margin: 8.8rem 0 0 0;
  counter-reset: ctr;
}

.services-list h5 {
  color: #ffffff;
}

.services-list__item {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-left: 0;
}

.services-list__item:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.services-list__item-header {
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  padding-right: 6rem;
  cursor: pointer;
  position: relative;
}

.services-list__item-header h5 {
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-size: 3.6rem;
  padding-left: 1.111em;
  margin: 0;
  position: relative;
}

.services-list__item-header h5::before {
  content: counter(ctr, decimal-leading-zero) ".";
  counter-increment: ctr;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: .5em;
  line-height: 1;
  color: #f9861a;
  position: absolute;
  top: .5em;
  left: 0;
}

.services-list__item-header::after {
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  content: '';
  display: block;
  height: 6px;
  width: 6px;
  margin-top: -6px;
  pointer-events: none;
  position: absolute;
  right: 2.4rem;
  top: 50%;
  -webkit-transform-origin: 66% 66%;
  transform-origin: 66% 66%;
  -webkit-transition: all, .3s;
  transition: all, .3s;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.services-list__item-body {
  padding-top: 1.2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  display: none;
}

.is-active .services-list__item-header::after {
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
}

.is-active .services-list__item-body {
  display: block;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * services
 * ------------------------------------------------------------------- */
@media screen and (max-width:1200px) {
  .services-list {
    padding-left: 10px;
  }

}

@media screen and (max-width:1040px) {
  .s-services .vert-line {
    height: 12rem;
    left: 16px;
  }

  .s-services__content .column {
    -ms-flex: 0 0 100%;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .s-services__content .s-services__leftcol {
    -ms-flex: 0 0 75%;
    -webkit-box-flex: 0;
    flex: 0 0 75%;
    max-width: 75%;
    padding-bottom: 0;
  }

  .s-services__content .s-services__leftcol p.lead {
    max-width: none;
  }

  .services-list {
    padding-left: 0;
    margin: 0;
  }

}

@media screen and (max-width:800px) {
  .s-services {
    padding-top: 20rem;
  }

  .s-services__content .s-services__leftcol {
    -ms-flex: 0 0 100%;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }

}

@media screen and (max-width:600px) {
  .s-services .vert-line {
    left: 34px;
  }

  .services-list__item-header h5 {
    font-size: 3.2rem;
  }

}

@media screen and (max-width:500px) {
  .services-list__item-header h5 {
    font-size: 3rem;
  }

}

@media screen and (max-width:400px) {
  .s-services .vert-line {
    left: 24px;
  }

  .services-list__item-header h5 {
    font-size: 2.8rem;
  }

}



/* ===================================================================
 * # portfolio
 *
 * ------------------------------------------------------------------- */
.s-portfolio {
  padding-top: 24rem;
  padding-bottom: 0;
  background-color: #ffffff;
  position: relative;
}

.s-portfolio::before {
  content: "";
  display: block;
  background-color: #b3c2c1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
}

/* ------------------------------------------------------------------- 
 * ## portfolio list
 * ------------------------------------------------------------------- */
.s-portfolio__list {
  max-width: 1240px;
}

.folio-item {
  position: relative;
  overflow: hidden;
}

.folio-item__caption {
  display: none;
}

/* thumbnail
 *---------------------------------------------- */
.folio-item__thumb a {
  display: block;
}

.folio-item__thumb a::before {
  z-index: 1;
  content: "";
  display: block;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all, .5s;
  transition: all, .5s;
}

.folio-item__thumb a::after {
  z-index: 1;
  content: "+";
  font-family: "Gothic A1", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  color: #ffffff;
  display: block;
  height: 32px;
  width: 32px;
  line-height: 32px;
  margin-left: -16px;
  margin-top: -16px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: absolute;
  left: 50%;
  top: 50%;
}

.folio-item__thumb img {
  vertical-align: bottom;
}

/* portfolio info
 *---------------------------------------------- */
.folio-item__info {
  z-index: 2;
  padding: 0 3rem;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: absolute;
  left: 0;
  top: 3.6rem;
}

.folio-item__title {
  color: #ffffff;
  font-weight: 400;
  font-size: 2.1rem;
  line-height: 1.333;
  margin: 0;
}

.folio-item__cat {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Gothic A1", sans-serif;
  font-size: 1.4rem;
  margin-bottom: 0;
}

.folio-item__project-link {
  z-index: 2;
  display: block;
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #000000;
  background-color: #ffffff;
  padding: .6rem 1.2rem;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  -webkit-transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: absolute;
  bottom: 3.9rem;
  left: 3rem;
}

.folio-item__project-link::before {
  display: block;
  content: "";
  height: 1px;
  width: 3rem;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  left: -3rem;
}

.folio-item__project-link:hover,
.folio-item__project-link:focus,
.folio-item__project-link:active {
  background-color: #f9861a;
  color: #ffffff;
}

/* on hover
 *---------------------------------------------- */
.folio-item:hover .folio-item__thumb a::before {
  opacity: 1;
  visibility: visible;
}

.folio-item:hover .folio-item__thumb a::after {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.folio-item:hover .folio-item__project-link {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.folio-item:hover .folio-item__info {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* ------------------------------------------------------------------- 
 * responsive:
 * portfolio
 * ------------------------------------------------------------------- */
@media screen and (max-width:1200px) {
  .s-portfolio::before {
    display: none;
  }

  .folio-item__thumb a::after {
    font-size: 2rem;
  }

  .folio-item__title {
    font-size: 1.8rem;
  }

  .folio-item__cat {
    font-size: 1.2rem;
  }

}

@media screen and (max-width:800px) {
  .s-portfolio {
    padding-top: 20rem;
  }

  .folio-item__thumb a::after {
    font-size: 3rem;
  }

  .folio-item__title {
    font-size: 2.1rem;
  }

  .folio-item__cat {
    font-size: 1.4rem;
  }

}

@media screen and (max-width:600px) {
  .folio-item__thumb a::after {
    font-size: 2rem;
  }

  .folio-item__title {
    font-size: 1.8rem;
  }

  .folio-item__cat {
    font-size: 1.2rem;
  }

}



/* ===================================================================
 * # testimonials
 *
 * ------------------------------------------------------------------- */
.s-testimonials {
  padding-top: 14.4rem;
  padding-bottom: 16rem;
  background-color: #ffffff;
}

.testimonial-slider {
  position: relative;
}

.testimonial-slider p {
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.882;
  color: #000000;
}

.testimonial-slider .slick-slide {
  outline: none;
}

.testimonial-slider .slick-dots {
  display: block;
  list-style: none;
  padding: 0;
  margin: 5.6rem 0 0 0;
  text-align: center;
}

.testimonial-slider .slick-dots li {
  display: inline-block;
  width: 27px;
  height: 27px;
  margin: 0;
  padding: 9px;
  cursor: pointer;
}

.testimonial-slider .slick-dots li button {
  display: block;
  width: 10px;
  height: 10px;
  line-height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
}

.testimonial-slider .slick-dots li button:hover,
.testimonial-slider .slick-dots li button:focus {
  outline: none;
}

.testimonial-slider .slick-dots li.slick-active button,
.testimonial-slider .slick-dots li:hover button {
  background: #000000;
}

.testimonial-slider__slide {
  position: relative;
  padding: 0 20px;
}

.testimonial-slider__author {
  min-height: 7.2rem;
  margin-top: 4rem;
  padding-left: 8.8rem;
  position: relative;
}

.testimonial-slider__avatar {
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 100%;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
}

.testimonial-slider__cite {
  display: block;
}

.testimonial-slider__cite strong,
.testimonial-slider__cite span {
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
}

.testimonial-slider__cite strong {
  font-size: 1.6rem;
  line-height: 1.75;
}

.testimonial-slider__cite span {
  display: block;
  font-size: 1.5rem;
  line-height: 1.333;
  color: rgba(0, 0, 0, 0.7);
}

/* ------------------------------------------------------------------- 
 * responsive:
 * testimonials
 * ------------------------------------------------------------------- */
@media screen and (max-width:800px) {
  .testimonial-slider__slide {
    text-align: center;
  }

  .testimonial-slider__author {
    display: inline-block;
  }

}

@media screen and (max-width:400px) {
  .testimonial-slider__author {
    margin: 0;
    padding: 0;
  }

  .testimonial-slider__avatar {
    position: static;
    margin-bottom: 2.4rem;
  }

}



/* ===================================================================
 * # CTA
 *
 * ------------------------------------------------------------------- */
.s-cta {
  padding-top: 12rem;
  background-color: #ffffff;
  font-size: 2.2rem;
  line-height: 1.818;
  text-align: center;
}

.s-cta h2 {
  margin-top: 0;
}

.cta-content {
  max-width: 800px;
}

.cta-content .btn {
  max-width: 600px;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * cta
 * ------------------------------------------------------------------- */
@media screen and (max-width:800px) {
  .s-cta {
    font-size: 2rem;
  }

  .cta-content {
    max-width: 600px;
  }

}

@media screen and (max-width:600px) {
  .s-cta {
    font-size: 1.8rem;
  }

}



/* ===================================================================
 * # footer
 *
 * ------------------------------------------------------------------- */
.s-footer {
  padding-top: 24rem;
  padding-bottom: 8rem;
  background-color: #0b0a15;
  position: relative;
}

.s-footer .right-vert-line {
  background-color: #f9861a;
}

.s-footer__bottom {
  font-family: "Gothic A1", sans-serif;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8rem;
}

.s-footer .footer-email-us .btn:hover,
.s-footer .footer-email-us .btn:focus {
  background-color: #ffffff;
  border-color: #ffffff;
  color: #000000;
}

.s-footer .footer-contacts {
  margin-top: 7.2rem;
  margin-left: 8.33333%;
}

/* ------------------------------------------------------------------- 
 * ## contact block
 * ------------------------------------------------------------------- */
.footer-contact-block {
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.2;
}

.footer-contact-block a {
  color: #ffffff;
}

.footer-contact-block a:hover,
.footer-contact-block a:focus {
  color: #f9861a;
}

.footer-contact-block__content,
.footer-contact-block__list li {
  padding: .8rem 0;
}

.footer-contact-block__list {
  list-style: none;
  margin-top: .4rem;
  margin-left: 0;
}

.footer-contact-block__list li {
  padding-left: 0;
}

.footer-contact-block__header {
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
}

/* ------------------------------------------------------------------- 
 * ## copyright
 * ------------------------------------------------------------------- */
.ss-copyright {
  z-index: 2;
  position: relative;
}

.ss-copyright a {
  color: #ffffff;
}

.ss-copyright a:hover,
.ss-copyright a:focus {
  color: #f9861a;
}

.ss-copyright span {
  font-size: 1.5rem;
  display: inline-block;
}

.ss-copyright span::after {
  content: "|";
  display: inline-block;
  padding: 0 .8rem 0 1rem;
  color: rgba(255, 255, 255, 0.1);
}

.ss-copyright span:last-child::after {
  display: none;
}

/* ------------------------------------------------------------------- 
 * ## go top
 * ------------------------------------------------------------------- */
.ss-go-top {
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
  -webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: fixed;
  bottom: 8.4rem;
  right: 8rem;
}

.ss-go-top a {
  text-decoration: none;
  border: 0 none;
  display: block;
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 50%;
  background-color: #000000;
  -webkit-transition: all .3s;
  transition: all .3s;
  position: relative;
}

.ss-go-top a:hover,
.ss-go-top a:focus {
  background-color: #f9861a;
}

.ss-go-top svg {
  height: 1.2rem;
  width: 1.2rem;
  position: absolute;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  left: 50%;
  top: 50%;
}

.ss-go-top svg path {
  fill: #ffffff;
}

.ss-go-top.link-is-visible {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* ------------------------------------------------------------------- 
 * responsive:
 * footer
 * ------------------------------------------------------------------- */
@media screen and (max-width:1200px) {
  .ss-go-top {
    right: 6rem;
  }

  .ss-go-top a {
    height: 6rem;
    width: 6rem;
  }

}

@media screen and (max-width:900px) {
  .s-footer .footer-contacts {
    margin-left: 0;
  }

  .s-footer__main .column {
    -ms-flex: 0 0 100%;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }

}

@media screen and (max-width:800px) {
  .s-footer {
    padding-top: 20rem;
  }

  .ss-copyright {
    padding-right: 10rem;
  }

  .ss-go-top {
    right: 3.6rem;
  }

  .ss-go-top a {
    height: 5.2rem;
    width: 5.2rem;
  }

}

@media screen and (max-width:600px) {
  .ss-copyright {
    padding-right: 8rem;
  }

  .ss-copyright span {
    display: block;
  }

  .ss-copyright span::after {
    display: none;
  }

  .ss-go-top {
    right: 2.4rem;
    bottom: 4rem;
  }

}


</style>
