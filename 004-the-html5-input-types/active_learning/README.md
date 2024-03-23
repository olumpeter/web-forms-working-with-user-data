# The HTML5 input types

## Email address field

This type of field is set using the value `email` for the `type` attribute.

## Search field

Search fields are intended to be used to create search boxes on pages and 
apps. This type of field is set by using the value search for the `type` 
attribute.

The main difference between a `text` field and a `search` field is how the 
browser styles its appearance. Often, search fields are rendered with 
rounded corners; they also sometimes display an 'Ⓧ', which clears the 
field of any value when clicked. Additionally, on devices with dynamic 
keyboards, the keyboard's enter key may read 'search', or display a 
magnifying glass icon.

Another worth-noting feature is that the values of a search field can be 
automatically saved and re-used to offer auto-completion across multiple 
pages of the same website; this tends to happen automatically in most modern 
browsers.

## Phone number field

A special field for filling in phone numbers can be created using `tel` as 
the value of the type attribute.

Due to the wide variety of phone number formats around the world, this type 
of field does not enforce any constraints on the value entered by a user 
(this means it may include letters, etc.).

## URL field

A special type of field for entering URLs can be created using the value 
`url` for the `type` attribute.

It adds special validation constraints to the field. The browser will report 
an error if no protocol (such as http:) is entered, or if the URL is otherwise 
malformed. On devices with dynamic keyboards, the default keyboard will often 
display some or all of the colon, period, and forward slash as default keys.

## Numeric field

Controls for entering numbers can be created with an `<input>` `type` of 
`number`. This control looks like a text field but allows only floating-point 
numbers, and usually provides buttons in the form of a spinner to increase 
and decrease the value of the control. On devices with dynamic keyboards, the 
numeric keyboard is generally displayed.

With the `number` input type, you can constrain the minimum and maximum 
values allowed by setting the `min` and `max` attributes.

You can also use the step attribute to set the increment increase and 
decrease caused by pressing the spinner buttons. By default, the number 
input type only validates if the number is an integer. To allow float numbers, 
specify step='any'. If omitted, the step value defaults to 1, meaning only 
whole numbers are valid.

## Slider controls

Another way to pick a number is to use a **slider**. You see these quite often 
on sites like house-buying sites where you want to set a maximum property 
price to filter by.

One problem with sliders is that they don't offer any kind of visual 
feedback as to what the current value is. This is why we've included an 
`<output>` element to contain the current value. You could display an input 
value or the output of a calculation inside any element, but `<output>` is 
special — like `<label>` — and it can take a for attribute that allows you to 
associate it with the element or elements that the output value came from.

To actually display the current value, and update it as it changed, you must 
use JavaScript, but this is relatively easy to do.

## Date and time pickers

Gathering date and time values has traditionally been a nightmare for web 
developers. For a good user experience, it is important to provide a calendar 
selection UI, enabling users to select dates without necessitating context 
switching to a native calendar application or potentially entering them in 
differing formats that are hard to parse. The last minute of the previous 
millennium can be expressed in the following different ways, for example: 
1999/12/31, 23:59 or 12/31/99T11:59PM.

HTML date controls are available to handle this specific kind of data, 
providing calendar widgets and making the data uniform.

A date and time control is created using the `<input>` element and an 
appropriate value for the `type` attribute, depending on whether you wish to 
collect dates, times, or both.

### datetime-local

`<input type='datetime-local'>` creates a widget to display and pick a date 
with time with no specific time zone information.

## Color picker control

Colors are always a bit difficult to handle. There are many ways to express 
them: RGB values (decimal or hexadecimal), HSL values, keywords, and so on.

A `color` control can be created using the `<input>` element with its `type` 
attribute set to the value `color`.

Clicking a color control generally displays the operating system's default 
color-picking functionality for you to choose.

The value returned is always a lowercase 6-value hexadecimal color.

## Summary

That brings us to the end of our tour of the HTML5 form input types. There 
are a few other control types that cannot be easily grouped together due to 
their very specific behaviors, but which are still essential to know about. We 
cover those in the next article.

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
