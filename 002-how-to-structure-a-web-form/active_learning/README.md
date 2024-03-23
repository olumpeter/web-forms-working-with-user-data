# How to structure a web form

With the basics out of the way, we'll now look in more detail at the 
elements used to provide structure and meaning to the different parts of a 
form.

The flexibility of forms makes them one of the most complex structures in HTML;
you can build any kind of basic form using dedicated form elements and 
attributes. Using the correct structure when building an HTML form will help 
ensure that the form is both usable and accessible.

## The `<form>` element

The `<form>`  element formally defines a form and attributes that 
determine the form's behavior. Each time you want to create an HTML form, you 
must start it by using this element, nesting all the contents inside. Many 
assistive technologies and browser plugins can discover `<form>` 
elements and implement special hooks to make them easier to use.

>*Warning:* It's strictly forbidden to nest a form inside another form. 
Nesting can cause forms to behave unpredictably, so it is a bad idea.

## The `<fieldset>` and `<legend>` elements

The `<fieldset>` element is a convenient way to create groups of widgets 
that share the same purpose, for styling and semantic purposes. You can label a 
`<fieldset>` by including a `<legend>` element just below the opening 
`<fieldset>` tag. The text content of the `<legend>` formally describes the 
purpose of the `<fieldset>` it is included inside.

see an example in code.

When reading the above form, a screen reader will speak 'Fruit juice size 
small' for the first widget, 'Fruit juice size medium' for the 
second, and 'Fruit juice size large' for the third.

The use case in this example is one of the most important. Each time you have a 
set of radio buttons, you should nest them inside a `<fieldset> element>`.
There are other use cases, and in general the `<fieldset>` element can also 
be used to section a form. Ideally, long forms should be spread across multiple 
pages, but if a form is getting long and must be on a single page, putting the 
different related sections inside different fieldsets improves usability.


## The `<label>` element

The `<label>` element is the formal way to define a label for an HTML 
form widget. Labels are clickable. This is useful for controls like text inputs, 
where you can click the label as well as the input to focus it, but it is 
especially useful for radio buttons and checkboxes — the hit area of such a 
control can be very small, so it is useful to make it as easy to activate as 
possible.

see examples in code.

The paragraph at the top states a rule for required elements. The rule must be 
included before it is used so that sighted users and users of assistive 
technologies such as screen readers can learn what it means before they 
encounter a required element. While this helps inform users what an asterisk 
means, it can not be relied upon. A screen reader will speak an asterisk as 
'star' when encountered. When hovered by a sighted mouse user, 'required' 
should appear, which is achieved by use of the title attribute. Titles being 
read aloud depends on the screen reader's settings, so it is more reliable to 
also include the aria-label attribute, which is always read by screen readers.

## Common HTML structures used with forms

Beyond the structures specific to web forms, it's good to remember that form 
markup is just HTML. This means that you can use all the power of HTML to 
structure a web form.

It's common practice to wrap a label and its widget with a `<li>` element 
within a `<ul>` or `<ul>` list. `<p>` and `<div>` elements 
are also commonly used. Lists are recommended for structuring multiple 
checkboxes or radio buttons.

In addition to the `<fieldset>` element, it's also common practice to 
use HTML titles (e.g. h1, h2) and sectioning (e.g. `<section>>)` to 
structure complex forms.

## Summary

You now have all the knowledge you'll need to properly structure your web forms. 
We will cover many of the features introduced here in the next few articles, 
with the next article looking in more detail at using all the different types 
of form widgets you'll want to use to collect information from your users.


## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-forms-working-with-user-data/002-how-to-structure-a-web-form/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-forms-working-with-user-data/002-how-to-structure-a-web-form/active_learning/">Visit website</a>
  </dd>
</dl>
