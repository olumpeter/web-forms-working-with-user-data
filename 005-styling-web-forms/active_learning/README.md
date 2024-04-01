# Styling web forms

## Challenges in styling form widgets

### Types of widgets

#### Easy-to-style

1. `<form>`
1. `<fieldset>` and `<legend>`
1. Single-line text `<input>s` (e.g. type text, url, email), except for `<input type='search'>`
1. Multi-line `<textarea>`
1. Buttons (both `<input>` and `<button>`)
1. `<label>`
1. `<output>`

#### Harder-to-style (**The bad**)

1. Checkboxes and radio buttons
1. <input type='search'>

#### Having internals can't be styled in CSS alone (**The ugly**)

- `<input type='color'>`
- Date-related controls such as `<input type='datetime-local'>`
- `<input type='range'>`
- `<input type='file'>`
- Elements involved in creating dropdown widgets, including `<select>`, `<option>`, `<optgroup>` and `<datalist>`.
- `<progress>` and `<meter>`

For example, the date picker calendar, and the button on `<select>` that 
displays an options list when clicked, can't be styled using CSS alone.

We will see how to handle form widgets which fall into the 'bad' and 'ugly' categories.
The types of form control that are more difficult to style.

## appearance: controlling OS-level styling

The styling of web form controls was largely taken from the underlying 
operating system, which is part of the problem with customizing the look 
of these controls.

The `appearance` property was created as a way to control what OS- or 
system-level styling was applied to web form controls. By far the most 
helpful value, and probably the only one you'll use, is none. This stops 
any control you apply it to from using system-level styling, as much as 
possible, and lets you build up the styles yourself using CSS.

In most cases, the effect is to remove the stylized border, which makes CSS 
styling a bit easier, but isn't really essential. In a couple of cases — search 
and radio buttons/checkboxes, it becomes way more useful. We'll look at those now.

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-forms-working-with-user-data/005-styling-web-forms/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-forms-working-with-user-data/005-styling-web-forms/active_learning/">Visit website</a>
  </dd>
</dl>
