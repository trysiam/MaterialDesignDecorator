# Material Design Decorator

Material Design Decorator can help you style your HTML documents with [Google's Material Design guidelines](https://material.io/guidelines/). This is a lightweight solution - styling runs automatically after importing only two files and you don't need to ingerate in your HTML document structure (like in case of [MUI](https://www.muicss.com/) or [Materialize](http://materializecss.com/)).

## Usage

You can use this project in two styles:

Light
```html
    <link href="style/light_style.css" rel="stylesheet" type="text/css" />
    <script src="js/script.js"></script>
```

Dark
```html
    <link href="style/dark_style.css" rel="stylesheet" type="text/css" />
    <script src="js/script.js"></script>
```

## Mapping HTML5 on Material Design

Table shows main HTML5 tags with mapping on Google Material Design's elements.

HTML5 | Material Design
:--------- | :-----
```<header>``` | Material Design's header that shrinks after scrolling web page.
```<nav>``` | Main navigation, located on the left side of the page.
```<main>``` | Represents main content of page, consists of sections and articles.
```<aside>``` | Located on the right side of the page. If contains an anchor with images and header or paragraph, it'll map to Material Design's card.
```<footer>``` | Material Design's footer, placed at the bottom of the page.
```<details>``` | It has a style of Material Design's card.
```<button>``` | By default, it is mapped to flat button. If it's a direct child of the main tag, it'll convert to floating action button. If it's placed on the form, it'll map to raised button.
```<section>```, ```<article>``` | Default margins are specified for them, which provide the appropriate distance from their headers.
```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5>```, ```<h6>``` | Their size and thickness is consistent with Material Design guidelines for typography.
```<label></label><input type=text>```  | A default text field with a label.
```<input type="checkbox" id="check" /> <label for="check"></label>``` | Checkbox with a label.
```<input type="radio" id="foo" name="radio-group"/> <label for="foo"></label>``` | Radio button with a label.
```<table>``` | Material Design's data table.

## Example

For example, this code

```html
<!doctype html>
<html>

<head>
    <title>Material Design</title>
    <meta charset="utf-8" />

    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    <!-- Material Design Decorator -->
    <link href="style/light_style.css" rel="stylesheet" type="text/css" id="pagestyle" />
    <script type="text/javascript" src="js/script.js"></script>

</head>

<body>
    <header>
        <nav>
            <a><i class="material-icons">dehaze</i></a>
            <a><i class="material-icons">search</i></a>
        </nav>
    </header>

    <nav></nav>

    <main>
        <h1>Material Design</h1>
        <section>
            <h2>Material Design</h2>
            <article>Material Design</article>
        </section>
    </main>

    <aside></aside>

    <footer>
        Copyright 2017 Patrycja Karpińska
    </footer>
</body>

</html>
```

produce:
![](light_style.png)

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Author

Patrycja Karpińska [@karppinska](https://twitter.com/karppinska)
