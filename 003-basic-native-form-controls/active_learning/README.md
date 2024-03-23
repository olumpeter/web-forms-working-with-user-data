# Basic native form controls

we will look at the functionality of the different form controls, or widgets, 
in detail — studying all the different options available to collect different 
types of data. In this particular article, we will look at the original set of 
form controls, available in all browsers since the early days of the web.

You've already met some form elements, including `<form>`, `<fieldset>`, 
`<legend>`, `<textarea>`, `<label>`, `<button>`, and `<input>`. This article 
covers:

- The common input types button, checkbox, file, hidden, image, password, 
radio, reset, submit, and text.
- Some of the attributes that are common to all form controls.

## Text input fields

Text `<input>` fields are the most basic form widgets. They are a very 
convenient way to let the user enter any kind of data.

>*Note:* HTML form text fields are simple plain text input controls. This means 
that you cannot use them to perform rich text editing (bold, italic, etc.). All 
rich text editors you'll encounter are custom widgets created with HTML, CSS, 
and JavaScript.

All basic text controls share some common behaviors:

- They can be marked as **readonly** (the user cannot modify the input value 
but it is still sent with the rest of the form data) or **disabled** 
(the input value can't be modified and is never sent with the rest of the form 
data).
- They can have a **placeholder**; this is the text that appears inside the 
text input box that should be used to briefly describe the purpose of the box.
- They can be constrained in **size** (the physical size of the box) and 
maxlength (the maximum number of characters that can be entered into the box).
- They can benefit from spell checking (using the **spellcheck** attribute), if 
the browser supports it.

>**Note**: The `<input>` element is unique amongst HTML elements because it can 
take many forms depending on its `type` attribute value. It is used for creating 
most types of form widgets including single line text fields, time and date 
controls, controls without text input like checkboxes, radio buttons, and 
color pickers, and buttons.

### Single line text fields

A single line text field is created using an `<input>` element whose type 
attribute value is set to text, or by omitting the type attribute altogether 
(text is the default value). The value `text` for this attribute is also the 
fallback value if the value you specify for the type attribute is unknown by 
the browser (for example if you specify type='color' and the browser doesn't 
support native color pickers). 

Single line text fields have only one true constraint: if you type text with 
line breaks, the browser removes those line breaks before sending the data to 
the server.

### Password field

One of the original input types was the `password` text field type.

The `password` value doesn't add any special constraints to the entered text, 
but it does obscure the value entered into the field (e.g. with dots or 
asterisks) so it can't be easily read by others.

Keep in mind this is just a user interface feature; unless you submit your 
form securely, it will get sent in plain text, which is bad for security — a 
malicious party could intercept your data and steal passwords, credit card 
details, or whatever else you've submitted. The best way to protect users from 
this is to host any pages involving forms over a secure connection (i.e. 
located at an https:// address), so the data is encrypted before it is sent.

Browsers recognize the security implications of sending form data over an 
insecure connection, and have warnings to deter users from using insecure 
forms. For more information on what Firefox implements, see 
(Insecure passwords)[https://developer.mozilla.org/en-US/docs/Web/Security/Insecure_passwords].

## Hidden content

Another original text control is the `hidden` input type. This is used to 
create a form control that is invisible to the user, but is still sent to the 
server along with the rest of the form data once submitted — for example you 
might want to submit a timestamp to the server stating when an order was 
placed. Because it is hidden, the user can not see nor intentionally edit 
the value, it will never receive focus, and a screen reader will not notice 
it either.

If you create such an element, it's required to set its `name` and `value` 
attributes. The value can be dynamically set via JavaScript. The `hidden` input 
type should not have an associated label.

## Checkable items: checkboxes and radio buttons

Checkable items are controls whose state you can change by clicking on them 
or their associated labels. There are two kinds of checkable items: the 
checkbox and the radio button. Both use the `checked` attribute to indicate 
whether the widget is checked by default or not.

It's worth noting that these widgets do not behave exactly like other form 
widgets. For most form widgets, once the form is submitted all widgets that 
have a name attribute are sent, even if no value has been filled out. In the 
case of checkable items, their values are sent only if they are checked. If 
they are not checked, nothing is sent, not even their name. If they are 
checked but have no value, the name is sent with a value of on.

For maximum usability/accessibility, you are advised to surround each list of 
related items in a `<fieldset>`, with a <legend> providing an overall description 
of the list. Each individual pair of <label>/<input> elements should be 
contained in its own list item (or similar). The associated `<label>` is  
generally placed immediately before or after the radio button or checkbox, with 
the instructions for the group of radio button or checkboxes generally being 
the content of the `<legend>`. 

## Actual buttons

The radio button isn't actually a button, despite its name; let's move on and 
look at actual buttons! There are three input types that produce buttons:

<dl>
  <code><dt>submit</dt></code>
  <dd>Sends the form data to the server. For <button> elements, omitting the type attribute (or an invalid value of type) results in a submit button.</dd>
  </dl>
  <code><dt>reset</dt></code>
  <dd>Resets all form widgets to their default values.</dd>
  </dl>
  <code><dt>button</dt></code>
  <dd>Buttons that have no automatic effect but can be customized using JavaScript code.</dd>
  </dl>
</dl>

Then we also have the `<button>` element itself. This can take a `type` 
attribute of value `submit`, `reset`, or `button` to mimic the behavior of 
the three `<input>` types mentioned above. The main difference between the 
two is that actual `<button>` elements are much easier to style.

### Image button

The **image button** control is rendered exactly like an `<img>` element, except 
that when the user clicks on it, it behaves like a submit button.

An image button is created using an `<input>` element with its type attribute 
set to the value image. This element supports exactly the same set of 
attributes as the `<img>` element, plus all the attributes supported by other 
form buttons.

If the image button is used to submit the form, this control doesn't submit 
its value — instead, the X and Y coordinates of the click on the image are 
submitted (the coordinates are relative to the image, meaning that the 
upper-left corner of the image represents the coordinate (0, 0)). The 
coordinates are sent as two key/value pairs:

- The X value key is the value of the name attribute followed by the string '.x'.
- The Y value key is the value of the name attribute followed by the string '.y'.

So for example when you click on the image at coordinate (123, 456) and it 
submits via the `get` method, you'll see the values appended to the URL as 
follows:

```
http://foo.com?pos.x=123&pos.y=456
```

This is a very convenient way to build a 'hot map'. How these values are 
sent and retrieved is detailed in the Sending form data article.

## File picker

There is one last `<input>` type that came to us in early HTML: the file 
input type. Forms are able to send files to a server (this specific action 
is also detailed in the Sending form data article). The file picker widget 
can be used to choose one or more files to send.

To create a **file picker widget**, you use the `<input>` element with its 
type attribute set to file. The types of files that are accepted can be 
constrained using the accept attribute. In addition, if you want to let the 
user pick more than one file, you can do so by adding the `multiple` attribute.

## Common attributes

Many of the elements used to define form controls have some of their own 
specific attributes. However, there is a set of attributes common to all 
form elements. You've met some of these already, but below is a list of 
those common attributes, for your reference:

<dl>
  <code><dt>autofocus (default is false)</dt></code>
  <dd>This Boolean attribute lets you specify that the element should automatically have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.</dd>
  </dl>
  <code><dt>disabled (disabled)</dt></code>
  <dd>This Boolean attribute indicates that the user cannot interact with the element. If this attribute is not specified, the element inherits its setting from the containing element, for example, <fieldset>; if there is no containing element with the disabled attribute set, then the element is enabled.</dd>
  </dl>
  <code><dt>name</dt></code>
  <dd>The name of the element; this is submitted with the form data.</dd>
  </dl>
  <code><dt>value</dt></code>
  <dd>The element's initial value.</dd>
  </dl>
</dl>

## Summary

This article has covered the older input types — the original set introduced 
in the early days of HTML that is well-supported in all browsers. In the 
next section, we'll take a look at the more modern values of the type attribute.



## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-forms-working-with-user-data/003-basic-native-form-controls/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-forms-working-with-user-data/003-basic-native-form-controls/active_learning/">Visit website</a>
  </dd>
</dl>
