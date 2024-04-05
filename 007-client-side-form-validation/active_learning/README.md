# Client-side form validation

Before submitting data to the server, it is important to ensure all 
required form controls are filled out, in the correct format. This is called 
**client-side form validation**, and helps ensure data submitted matches the 
requirements set forth in the various form controls. This article leads you 
through basic concepts and examples of client-side form validation.

Client-side validation is an initial check and an important feature of good 
user experience; by catching invalid data on the client-side, the user can 
fix it straight away. If it gets to the server and is then rejected, a 
noticeable delay is caused by a round trip to the server and then back to the 
client-side to tell the user to fix their data.

However, client-side validation should not be considered an exhaustive 
security measure! Your apps should always perform security checks on any 
form-submitted data on the server-side as well as the client-side, because 
client-side validation is too easy to bypass, so malicious users can still 
easily send bad data through to your server. Read [Website security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security) 
for an idea of what could happen; implementing server-side validation is 
somewhat beyond the scope of this module, but you should bear it in mind.

## What is form validation?

Go to any popular site with a registration form, and you will notice that 
they provide feedback when you don't enter your data in the format they are 
expecting. You'll get messages such as:

- 'This field is required' (You can't leave this field blank).
- 'Please enter your phone number in the format xxx-xxxx' (A specific data 
- format is required for it to be considered valid).
- 'Please enter a valid email address' (the data you entered is not in the 
right format).
- 'Your password needs to be between 8 and 30 characters long and contain one 
uppercase letter, one symbol, and a number.'' (A very specific data format 
is required for your data).

This is called **form validation**. When you enter data, the browser and/or the 
web server will check to see that the data is in the correct format and 
within the constraints set by the application. Validation done in the browser 
is called **client-side** validation, while validation done on the server is 
called **server-side** validation. In this chapter we are focusing on client-side validation.

If the information is correctly formatted, the application allows the data to 
be submitted to the server and (usually) saved in a database; if the 
information isn't correctly formatted, it gives the user an error message 
explaining what needs to be corrected, and lets them try again.

We want to make filling out web forms as easy as possible. So why do we 
insist on validating our forms? There are three main reasons:

- **We want to get the right data, in the right format.** Our applications 
won't work properly if our users' data is stored in the wrong format, is 
incorrect, or is omitted altogether.
- **We want to protect our users' data.** Forcing our users to enter 
secure passwords makes it easier to protect their account information.
- **We want to protect ourselves.** There are many ways that malicious 
users can misuse unprotected forms to damage the application. See 
[Website security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security).

>**Warning**: Never trust data passed to your server from the client. 
Even if your form is validating correctly and preventing malformed input on 
the client-side, a malicious user can still alter the network request.

## Different types of client-side validation

There are two different types of client-side validation that you'll encounter 
on the web:

- Built-in form validation uses HTML form validation features, which we've 
discussed in many places throughout this module. This validation generally 
doesn't require much JavaScript. Built-in form validation has better 
performance than JavaScript, but it is not as customizable as JavaScript 
validation.
- JavaScript validation is coded using JavaScript. This validation is 
completely customizable, but you need to create it all (or use a library).

## Using built-in form validation

One of the most significant features of modern form controls is the ability 
to validate most user data without relying on JavaScript. This is done by 
using validation attributes on form elements. We've seen many of these 
earlier in the course, but to recap:

- `required`: Specifies whether a form field needs to be filled in before 
the form can be submitted.
- `minlength` and `maxlength`: Specifies the minimum and maximum length of 
textual data (strings).
- `min` and `max`: Specifies the minimum and maximum values of numerical input 
types.
- `type`: Specifies whether the data needs to be a number, an email address, or 
some other specific preset type.
- `pattern`: Specifies a regular expression that defines a pattern the entered 
data needs to follow.

If the data entered in a form field follows all of the rules specified by the 
above attributes, it is considered valid. If not, it is considered invalid.

When an element is valid, the following things are true:

- The element matches the `:valid` CSS pseudo-class, which lets you apply a 
specific style to valid elements.
- If the user tries to send the data, the browser will submit the form, 
provided there is nothing else stopping it from doing so (e.g., JavaScript).

When an element is invalid, the following things are true:

- The element matches the `:invalid` CSS pseudo-class, and sometimes other 
UI pseudo-classes (e.g., `:out-of-range`) depending on the error, which lets 
you apply a specific style to invalid elements.
- If the user tries to send the data, the browser will block the form and 
display an error message.

>**Note**: There are several errors that will prevent the form from being 
submitted, including a `badInput`, `patternMismatch`, `rangeOverflow` or 
`rangeUnderflow`, `stepMismatch`, 'tooLong` or `tooShort`, `typeMismatch`, 
'valueMissing`, or a `customError`.

## Built-in form validation examples

In this section, we'll test out some of the attributes that we discussed above.

### Simple start file

Let's start with a simple example: an input that allows you to choose whether 
you prefer a banana or a cherry. This example involves a simple text `<input>` 
with an associated `<label>` and a submit `<button>`. 

### The required attribute

The simplest HTML validation feature is the `required` attribute. To make an 
input mandatory, add this attribute to the element. When this attribute is 
set, the element matches the `:required` UI pseudo-class and the form won't 
submit, displaying an error message on submission when the input is empty. 
While empty, the input will also be considered invalid, matching the `:invalid` 
UI pseudo-class.

The presence of the required attribute on any element that supports this 
attribute means the element matches the `:required` pseudo-class whether it 
has a value or not. If the `<input>` has no value, the input will match the 
`:invalid` pseudo-class.

>**Note**: For good user experience, indicate to the user when form fields 
are required. It isn't only good user experience, it is required by WCAG 
accessibility guidelines. Also, only require users to input data you actually 
need: For example, why do you really need to know someone's gender or title?

### Validating against a regular expression

Another useful validation feature is the `pattern` attribute, which expects a 
Regular Expression as its value. A regular expression (regexp) is a pattern 
that can be used to match character combinations in text strings, so regexps 
are ideal for form validation and serve a variety of other uses in JavaScript.

Regexps are quite complex, and we don't intend to teach you them exhaustively 
in this article. Below are some examples to give you a basic idea of how they 
work.

  `a` — Matches one character that is `a` (not `b`, not `aa`, and so on).
  `abc` — Matches `a`, followed by b, followed by `c`.
  `ab?c` — Matches `a`, optionally followed by a single `b`, followed by `c`. (`ac` or `abc`)
  `ab*c` — Matches `a`, optionally followed by any number of `b`s, followed by `c`. (`ac`, `abc`, `abbbbbc`, and so on).
  `a|b` — Matches one character that is `a` or `b`.
  `abc|xyz` — Matches exactly `abc` or exactly `xyz` (but not `abcxyz` or `a` or `y`, and so on).

There are many more possibilities that we don't cover here. For a complete 
list and many examples, consult our [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) documentation.

### Constraining the length of your entries

You can constrain the character length of all text fields created by `<input>` 
or `<textarea>` by using the `minlength` and `maxlength` attributes. A field 
is invalid if it has a value and that value has fewer characters than the 
`minlength` value or more than the `maxlength` value.

Browsers often don't let the user type a longer value than expected into text 
fields. A better user experience than just using `maxlength` is to also 
provide character count feedback in an accessible manner and let them edit 
their content down to size. An example of this is the character limit when 
posting on social media. JavaScript, including solutions using `maxlength`, 
can be used to provide this.

## Validating forms using JavaScript

You must use JavaScript if you want to take control over the look and 
feel of native error messages. In this section we will look at the different 
ways to do this.

### The Constraint Validation API

The Constraint Validation API consists of a set of methods and properties 
available on the following form element DOM interfaces:

- `HTMLButtonElement` (represents a `<button>` element)
- `HTMLFieldSetElement` (represents a `<fieldset>` element)
- `HTMLInputElement` (represents an `<input>` element)
- `HTMLOutputElement` (represents an `<output>` element)
- `HTMLSelectElement` (represents a `<select>` element)
- `HTMLTextAreaElement` (represents a `<textarea>` element)

The Constraint Validation API makes the following properties available on the 
above elements.

- `validationMessage`: Returns a localized message describing the validation 
constraints that the control doesn't satisfy (if any). If the control is not 
a candidate for constraint validation (`willValidate` is `false`) or the 
element's value satisfies its constraints (is valid), this will return an 
empty string.
- `validity`: Returns a `ValidityState` object that contains several properties 
describing the validity state of the element. You can find full details of all 
the available properties in the `ValidityState` reference page; below is listed 
a few of the more common ones:
  - `patternMismatch`: Returns `true` if the value does not match the specified 
  pattern, and `false` if it does match. If true, the element matches the `:invalid` 
  CSS pseudo-class.
  - `tooLong`: Returns `true` if the value is longer than the maximum length 
  specified by the `maxlength` attribute, or `false` if it is shorter than or 
  equal to the maximum. If true, the element matches the `:invalid` CSS 
  pseudo-class.
  - `tooShort`: Returns `true` if the value is shorter than the minimum length 
  specified by the `minlength` attribute, or `false` if it is greater than or 
  equal to the minimum. If `true`, the element matches the `:invalid` CSS 
  pseudo-class.
  - `rangeOverflow`: Returns `true` if the value is greater than the maximum 
  specified by the max attribute, or `false` if it is less than or equal to 
  the maximum. If `true`, the element matches the `:invalid` and `:out-of-range` 
  CSS pseudo-classes.
  - `rangeUnderflow:` Returns true if the value is less than the minimum specified 
  by the `min` attribute, or false if it is greater than or equal to the minimum. 
  If `true`, the element matches the `:invalid` and `:out-of-range` CSS 
  pseudo-classes.
  - `typeMismatch:` Returns true if the value is not in the required syntax 
  (when type is email or url), or `false` if the syntax is correct. If true, 
  the element matches the `:invalid` CSS pseudo-class.
  - `valid:` Returns `true` if the element meets all its validation constraints, 
  and is therefore considered to be valid, or `false` if it fails any constraint. 
  If `true`, the element matches the `:valid` CSS pseudo-class; the `:invalid` 
  CSS pseudo-class otherwise.
  - `valueMissing`: Returns true if the element has a required attribute, but 
  no value, or false otherwise. If `true`, the element matches the `:invalid` 
  CSS pseudo-class.
  `willValidate:` Returns true if the element will be validated when the form is 
  submitted; false otherwise.

The Constraint Validation API also makes the following methods available on 
the above elements and the form element.

- `checkValidity()`: Returns `true` if the element's value has no validity 
problems; false otherwise. If the element is invalid, this method also fires 
an invalid event on the element.
- `reportValidity()`: Reports invalid field(s) using events. This method is 
useful in combination with preventDefault() in an onSubmit event handler.
- `setCustomValidity(message)`: Adds a custom error message to the element; if 
you set a custom error message, the element is considered to be invalid, and 
the specified error is displayed. This lets you use JavaScript code to 
establish a validation failure other than those offered by the standard HTML 
validation constraints. The message is shown to the user when reporting the 
problem.

### Implementing a customized error message

As you saw in the HTML validation constraint examples earlier, each time a 
user tries to submit an invalid form, the browser displays an error message. 
The way this message is displayed depends on the browser.

These automated messages have two drawbacks:

- There is no standard way to change their look and feel with CSS.
- They depend on the browser locale, which means that you can have a page in 
one language but an error message displayed in another language.

Customizing these error messages is one of the most common use cases of the 
Constraint Validation API. 

The constraint validation API gives you a powerful tool to handle form 
validation, letting you have enormous control over the user interface above 
and beyond what you can do with HTML and CSS alone.

### Validating forms without a built-in API

In some cases, such as [custom controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls), 
you won't be able to or won't want to use the Constraint Validation API. 
You're still able to use JavaScript to validate your form, but you'll just 
have to write your own.

To validate a form, ask yourself a few questions:

> What kind of validation should I perform?
>> You need to determine how to validate your data: string operations, 
type conversion, regular expressions, and so on. It's up to you.
> What should I do if the form doesn't validate?
>> This is clearly a UI matter. You have to decide how the form will behave. 
Does the form send the data anyway? Should you highlight the fields that are 
in error? Should you display error messages?
> How can I help the user to correct invalid data?
>> In order to reduce the user's frustration, it's very important to provide 
as much helpful information as possible in order to guide them in correcting 
their inputs. You should offer up-front suggestions so they know what's 
expected, as well as clear error messages. If you want to dig into form 
validation UI requirements, here are some useful articles you should read:
  - [Help users enter the right data in forms](https://web.dev/learn/forms/validation/)
  - [Validating input](https://www.w3.org/WAI/tutorials/forms/validation/)
  - [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

## Summary
Client-side form validation sometimes requires JavaScript if you want to customize styling 
and error messages, but it always requires you to think carefully about the user. Always 
remember to help your users correct the data they provide. To that end, be sure to:

- Display explicit error messages.
- Be permissive about the input format.
- Point out exactly where the error occurs, especially on large forms.

Once you have checked that the form is filled out correctly, the form can be submitted.


## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/web-forms-working-with-user-data/007-client-side-form-validation/active_learning/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/web-forms-working-with-user-data//007-client-side-form-validation/active_learning/">Visit website</a>
  </dd>
</dl>
