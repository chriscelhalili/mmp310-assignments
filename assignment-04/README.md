# Assignment 4
## Multimedia Programming II (MMP 310)

Spring 2017

Instructor: Roy Vanegas

## Description
This assignment is designed to get you to combine your own thinking and the manner in which other JavaScript programmers build libraries.

You are to build an accordion system from scratch. The requirements are as follow:

- An accordion is defined in a container with the ID `accordion`.
- A working accordion uses an `<h2>` followed by a `<div>`, which expands and contracts based on whether the `<h2>` is clicked.
- The initial state of the accordion is closed.
- Only one element in the accordion may be opened at any one time.

Here’s an example of what your markup might look like:

As an example

````html
<div id="accordion">
   <h2>Preamble</h2>
   <div>
      <ul>
         <li><strong>Course Title</strong>: Multimedia Programming II (MMP 310)</li>
         <li><strong>Day</strong>: Monday and Wednesday</li>
         <li><strong>Time</strong>: 5:30 PM – 7:10 PM</li>
         <li><strong>Place</strong>: The Miles and Shirley Fiterman Hall, Rm 1006</li>
         <li><strong>Dates</strong>: 27 January 2017 – 24 May 2017</li>
         <li><strong>Instructor</strong>: Roy Vanegas</li>
      </ul>
   </div>
   <h2>Prerequisite</h2>
   <div>
      <p>Introduction to Multimedia, MMP 100, and Multimedia Programming I, MMP 210.</p>
   </div>
   <h2>Learning Outcomes</h2>
   <div>
      <p>Upon successful completion of this course, you will understand...</p>
      <ul>
         <li>how to author semantic web pages using HTML and CSS;</li>
         <li>how to write object oriented CSS using Sass;</li>
         <li>how to write procedural, functional, and object oriented JavaScript;</li>
         <li>how to revision control your work using Git;</li>
      </ul>
   </div>
</div>
````

Look at our course syllabus at [`http://roy.vanegas.org/teaching/at-bmcc/multimedia-programming-ii/`](http://roy.vanegas.org/teaching/at-bmcc/multimedia-programming-ii/) to get an exact idea of how your accordion should behave.

## Due
This assignment is due by 11:59 PM on Wednesday, 22 March 2017.

## Submitting
Create a pull request (read more [here](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)) from your current branch into the `master` branch of the [assignments repo](https://github.com/code-warrior/mmp310-assignments).
