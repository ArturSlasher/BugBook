import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BugbookService {

  constructor() { }

  Books$ = new BehaviorSubject<Book[]>([
    {
      title: "Web introduction",
      body: `
      Introduction:

      Web programming refers to the development of web applications that run on a web server and can be accessed through a web browser. With the advent of the internet, web programming has become an integral part of modern-day software development. In this chapter, we will discuss the basic concepts of web programming.

      Web Technologies:

      Web programming is a broad field that involves several web technologies. The following are some of the essential web technologies:

      1. HTML (Hypertext Markup Language):
      HTML is a markup language used for creating web pages. It provides the structure and content of a web page. HTML tags are used to define the different parts of a web page, such as headings, paragraphs, images, links, and forms.

      2. CSS (Cascading Style Sheets):
      CSS is a stylesheet language used for describing the presentation of a web page. It provides the visual appearance of a web page by defining the font, color, size, and layout of HTML elements.

      3. JavaScript:
      JavaScript is a scripting language used for creating interactive web pages. It enables the creation of dynamic web content and allows users to interact with the web page.

      Web Architecture:

      Web architecture refers to the overall design and structure of a web application. The following are some of the essential components of web architecture:

      1. Client-side:
      Client-side refers to the part of a web application that runs on the user's computer. It includes HTML, CSS, and JavaScript. Client-side programming is used for creating dynamic web pages that respond to user interactions.

      2. Server-side:
      Server-side refers to the part of a web application that runs on the server. It includes programming languages such as PHP, Python, Ruby, and Java. Server-side programming is used for processing user requests, interacting with databases, and generating dynamic content.

      Web Development Process:

      Web development is a complex process that involves several stages. The following are the essential stages of web development:

      1. Requirement Gathering:
      The first stage of web development involves gathering requirements from the client. The requirements include the purpose of the website, target audience, and features to be implemented.

      2. Design:
      The second stage involves designing the website. The design includes the layout, color scheme, typography, and images.

      3. Development:
      The third stage involves developing the website. The development includes writing HTML, CSS, JavaScript, and server-side programming.

      4. Testing:
      The fourth stage involves testing the website for bugs and errors. The testing includes functional testing, usability testing, and compatibility testing.

      5. Deployment:
      The fifth stage involves deploying the website on a web server. The deployment includes configuring the web server, uploading the files, and testing the website in the production environment.

      Conclusion:

      In conclusion, web programming is a crucial aspect of modern-day software development. The development of web applications requires a solid understanding of web technologies, web architecture, and the web development process. By mastering these basic concepts, developers can create robust and scalable web applications that meet the needs of users and businesses.
      `
    },
    {
      title: "HTML",
      body: `
      In this chapter, we will cover the basics of HTML, including the fundamental elements and structure of HTML, tags and attributes, and HTML forms. HTML (Hypertext Markup Language) is the foundation of the web and is used to create and structure the content of web pages. Understanding HTML is essential for anyone interested in creating websites or web applications.

      3.1 Basics of HTML

      HTML is a markup language used to structure content for web pages. It consists of a set of tags and attributes that define the content and formatting of a web page. HTML documents are composed of elements that are enclosed in tags. Elements can be nested within other elements to create complex page structures.

      A basic HTML document starts with the <!DOCTYPE html> declaration, which indicates that the document is written in HTML5. This is followed by the <html> tag, which contains the entire HTML document. The <head> element contains information about the document, such as the title of the page, meta information, and links to stylesheets and scripts. The <body> element contains the main content of the page.

      3.2 Tags and Attributes in HTML

      Tags and attributes are the building blocks of HTML. Tags are used to define the structure of a web page, while attributes provide additional information about the tag. Tags are enclosed in angle brackets, such as <p>, which defines a paragraph, and </p>, which indicates the end of the paragraph.

      Attributes are used to provide additional information about a tag. They are defined within the opening tag, such as <img src="image.jpg">, which defines an image with the source file "image.jpg". Attributes can also have values, such as <a href="https://www.example.com">Example</a>, which defines a link with the href attribute set to "https://www.example.com".

      3.3 HTML Forms

      HTML forms are used to collect information from users, such as login credentials or contact information. Forms are composed of form elements, such as input fields, checkboxes, and radio buttons, and are enclosed in the <form> tag.

      Input fields are used to collect text input from users, such as their name or email address. There are several types of input fields, such as text, email, and password fields. Checkboxes and radio buttons are used to provide multiple choice options, while select fields are used to create dropdown menus.

      Once the user has completed the form, the data can be submitted to the server using the <button> or <input type="submit"> tag. The server can then process the data and return a response to the user.

      Conclusion

      HTML is a crucial component of web development and is essential for anyone looking to create websites or web applications. Understanding the basic concepts of HTML, including tags and attributes, and HTML forms, is fundamental to creating effective web content. In the next chapter, we will explore Cascading Style Sheets (CSS), which is used to style and format HTML content.
      `
    },
    {
      title: "SCC",
      body: `
      Cascading Style Sheets (CSS)

      Cascading Style Sheets, commonly referred to as CSS, is a language used to describe the presentation of HTML and XML documents. CSS is used to style web pages and make them visually appealing. In this chapter, we will explore the basics of CSS, including selectors, properties, and layout.

      Basics of CSS

      CSS is a stylesheet language that is used to describe the look and feel of a web page written in HTML or XML. It defines how HTML elements should be displayed. CSS is a separate file from HTML that is linked to the HTML document. The styles defined in the CSS file are applied to the HTML document.

      The basic structure of a CSS rule consists of a selector, followed by a declaration block. The declaration block contains one or more property-value pairs, separated by semicolons, and enclosed in curly braces. Here is an example of a CSS rule.

      h1 {
        color: red;
        font-size: 24px;
      }

      In this example, h1 is the selector, and color: red; and font-size: 24px; are the property-value pairs.

      Selectors and Properties in CSS

      CSS selectors are used to select HTML elements that you want to style. There are different types of selectors, including element selectors, class selectors, ID selectors, and attribute selectors.

      Element selectors target specific HTML elements. For example, the following rule targets all the h1 elements in the document:

      h1 {
        color: red;
      }

      Class selectors target elements that have a specific class attribute. For example, the following rule targets all elements with the class button:

      .button {
        background-color: blue;
      }

      ID selectors target elements with a specific ID attribute. For example, the following rule targets the element with the ID header:

      #header {
        font-size: 18px;
      }

      Attribute selectors target elements that have a specific attribute. For example, the following rule targets all elements with a type attribute that is equal to submit:

      [type="submit"] {
        background-color: green;
      }

      CSS properties define how HTML elements should be displayed. There are a variety of CSS properties that can be used to style elements, including font-size, color, background-color, margin, padding, and border.

      Layout with CSS

      CSS can be used to control the layout of a web page. The layout of a web page is the way in which the different elements are arranged on the page. CSS provides a variety of layout techniques, including float, display, and position.

      Float is a layout technique that allows elements to be positioned horizontally. Float is commonly used to position images and text side by side. The float property has two values, left and right.

      Display is a layout technique that controls the display of elements. The display property can be used to make an element a block-level element or an inline element.
      `
    },
    {
      title: "JavaScript",
      body: `
      JavaScript is a popular programming language used for creating dynamic and interactive websites. It is a client-side scripting language, which means it is executed by the browser on the client-side of the web application. In this chapter, we will discuss the basics of JavaScript, actions and functions in JavaScript, and manipulations of the Document Object Model (DOM).

      Basics of JavaScript

      JavaScript is a high-level, object-oriented programming language that is loosely typed, meaning the type of the variable is not specified. The code is written in plain text format and is executed by the browser. Here are some of the basic concepts of JavaScript:

      1. Variables: A variable is a container that stores a value. In JavaScript, variables are declared using the var keyword.

      2. Data Types: JavaScript supports various data types, including strings, numbers, booleans, arrays, and objects.

      3. Operators: JavaScript supports various operators such as arithmetic, comparison, and logical operators.

      Actions and Functions in JavaScript

      JavaScript allows you to create functions that can perform specific tasks. Functions in JavaScript are created using the function keyword followed by a name and a set of parentheses that contain any parameters. The code for the function is then placed inside a set of curly braces.

      Here's an example of a basic JavaScript function:

      function sayHello(name) {
        console.log("Hello, " + name);
      }

      sayHello("John"); // Output: Hello, John
      This function takes a parameter name and logs a message to the console. The sayHello function is then called with an argument of "John", which is passed as the value for the name parameter.

      In addition to creating your own functions, JavaScript provides a number of built-in functions that you can use in your code. Some examples of these built-in functions include alert(), which displays an alert box with a message, and prompt(), which displays a dialog box that prompts the user to enter some input.

      DOM (Document Object Model) manipulations are a critical aspect of JavaScript development. The DOM represents the HTML document as a tree-like structure, and you can use JavaScript to manipulate and interact with this structure.

      Here are some of the most common DOM manipulation tasks you might encounter in JavaScript:

      1. Selecting elements: The first step to manipulating an element in the DOM is to select it. You can use various methods to select elements, such as getElementById, getElementsByClassName, getElementsByTagName, and querySelector.

      2. Modifying element content: Once you have selected an element, you can modify its content using the innerHTML property or the textContent property. For example, you can change the text inside a paragraph element by accessing its textContent property and setting it to a new value.

      3. Modifying element attributes: You can also modify the attributes of an element using the setAttribute method. For example, you can change the src attribute of an image element to change the image displayed on a web page.

      4. Adding and removing elements: You can use the createElement method to create a new element, and then use the appendChild method to add it to the DOM. Similarly, you can use the removeChild method to remove an element from the DOM.

      5. Modifying styles: You can modify the styles of an element using the style property. For example, you can change the background color of a div element by setting its backgroundColor property to a new value.

      6. Responding to events: You can use JavaScript to add event listeners to elements in the DOM, allowing you to respond to user interactions such as clicks and keystrokes.

      DOM manipulations are a powerful tool for creating dynamic and interactive web pages. With JavaScript, you can use the DOM to create responsive user interfaces, update content dynamically, and provide a rich and engaging user experience.
      `
    },
  ]);
  CurrentBook$ = new BehaviorSubject<Book>(this.Books$.value[0]);

}
