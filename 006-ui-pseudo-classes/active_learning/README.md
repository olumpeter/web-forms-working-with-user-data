# UI pseudo-classes

## What pseudo-classes do we have available?

The original pseudo-classes that are relevant to forms are:

- `:hover:` Selects an element only when it is being hovered over by a mouse pointer.
- `:focus:` Selects an element only when it is focused (i.e. by being tabbed to 
via the keyboard).
- `:active:` selects an element only when it is being activated (i.e. while it 
is being clicked on, or when the Return / Enter key is being pressed down in 
the case of a keyboard activation).

Other pseudo-classes related to HTML forms are:

- `:required` and `:optional:` Target elements that can be required 
(e.g. elements that support the required HTML attribute), based on whether 
they are required or optional.
- `:valid` and `:invalid`, and :in-range and :out-of-range: Target form 
controls that are valid/invalid according to form validation constraints set 
on them, or in-range/out-of-range.
- `:enabled` and `:disabled`, and :read-only and :read-write: Target elements 
that can be disabled (e.g. elements that support the disabled HTML attribute), 
based on whether they are currently enabled or disabled, and read-write or 
read-only form controls (e.g. elements with the readonly HTML attribute set).
- `:checked`, `:indeterminate`, and `:default:` Respectively target checkboxes 
and radio buttons that are checked, in an indeterminate state (neither 
checked or not checked), and the default selected option when the page loads
(e.g. an <input type='checkbox'> with the checked attribute set, or an 
<option> element with the selected attribute set).

There are many others, but the ones listed above are the most obviously 
useful. Some of them are aimed at solving very specific niche problems. The 
UI pseudo-classes listed above have excellent browser support, but of course, 
you should test your form implementations carefully to ensure they work for 
your target audience.

## Styling inputs based on whether they are required or not

One of the most basic concepts regarding client-side form validation is 
whether a form input is required (it has to be filled in before the form can 
be submitted) or optional.

`<input>`, `<select>`, and `<textarea>` elements have a required attribute 
available which, when set, means that you have to fill in that control before 
the form will successfully submit. For example:

## Using generated content with pseudo-classes

The idea is that we can use the `::before` and `::after` pseudo-elements 
along with the content property to make a chunk of content appear before or 
after the affected element. The chunk of content is not added to the DOM, so 
it may be invisible to some screen readers. Because it is a pseudo-element, 
it can be targeted with styles in the same way that any actual DOM node can.

This is really useful when you want to add a visual indicator to an element, 
such as a label or icon, when alternative indicators are also available to 
ensure accessibility for all users. For example, in our custom radio buttons example,

## Styling controls based on whether their data is valid

The other really important, fundamental concept in form validation is whether 
a form control's data is valid or not (in the case of numerical data, we can 
also talk about in-range and out-of-range data). Form controls with constraint 
limitations can be targeted based on these states.

## `:valid` and `:invalid`

You can target form controls using the `:valid` and `:invalid` pseudo-classes. 
Some points worth bearing in mind:

- Controls with no constraint validation will always be valid, and therefore 
matched with `:valid`.
- Controls with `required` set on them that have no value are counted as 
invalid — they will be matched with `:invalid` and `:required`.
- Controls with built-in validation, such as `<input type='email'>` or 
`<input type='url'>` are (matched with) `:invalid` when the data entered into 
them does not match the pattern they are looking for (but they are valid when 
empty).
- Controls whose current value is outside the range limits specified by the 
`min` and `max` attributes are (matched with) `:invalid`, but also matched by 
`:out-of-range`, as you'll see later on.
- There are some other ways to make an element matched by `:valid/:invalid`, 
as you'll see in the Client-side form validation article. But we'll keep 
things simple for now.

## Styling enabled and disabled inputs, and read-only and read-write

An enabled element is an element that can be activated; it can be selected, 
clicked on, typed into, etc. A disabled element on the other hand cannot be 
interacted with in any way, and its data isn't even sent to the server.

These two states can be targeted using `:enabled` and `:disabled`. Why are 
disabled inputs useful? Well, sometimes if some data does not apply to a 
certain user, you might not even want to submit that data when they submit 
the form. A classic example is a shipping form — commonly you'll get asked 
if you want to use the same address for billing and shipping; if so, you can 
just send a single address to the server, and might as well just disable the 
billing address fields.

## Read-only and read-write

In a similar manner to `:disabled` and `:enabled`, the `:read-only` and 
`:read-write` pseudo-classes target two states that form inputs toggle 
between. Read-only inputs have their values submitted to the server, but 
the user can't edit them, whereas read-write means they can be edited — their 
default state.

An input is set to read-only using the `readonly` attribute. As an example, 
imagine a confirmation page where the developer has sent the details filled 
in on previous pages over to this page, with the aim of getting the user to 
check them all in one place, add any final data that is needed, and then 
confirm the order by submitting. At this point, all the final form data can 
be sent to the server in one go.

## Radio and checkbox states — checked, default, indeterminate

Radio buttons and checkboxes can be checked or unchecked. But there are a 
couple of other states to consider too:

- `:default:` Matches radios/checkboxes that are checked by default, on page 
load (i.e. by setting the checked attribute on them). These match the 
`:default` pseudo-class, even if the user unchecks them.
- `:indeterminate:` When radios/checkboxes are neither checked nor unchecked, 
they are considered indeterminate and will match the `:indeterminate` 
pseudo-class. 

### `:checked`

When checked, they will be matched by the `:checked` pseudo-class.

The most common use of this is to add a different style onto the checkbox or 
radio button when it is checked, in cases where you've removed the system 
default styling with `appearance: none;` and want to build the styles back 
up yourself. We saw examples of this in the previous article when we talked 
about Using `appearance: none` on radios/checkboxes.

Basically, we build the styling for a radio button's 'inner circle' using 
the `::before` pseudo-element, but set a `scale(0)` transform on it. We then 
use a transition to make the generated content on the label nicely animate 
into view when the radio is selected/checked. The advantage of using a 
transform rather than transitioning `width`/`height` is that you can use 
transform-origin to make it grow from the center of the circle, rather than 
having it appear to grow from the circle's corner, and there is no jumping 
behavior as no box model property values are updated.

### `:default` and `:indeterminate`

The `:default` pseudo-class matches radios/checkboxes that are checked by default, 
on page load, even when unchecked. This could be useful for adding an indicator 
to a list of options to remind the user what the defaults (or starting options) 
were, in case they want to reset their choices.

Also, the radios/checkboxes mentioned above will be matched by the :indeterminate 
pseudo-class when they are in a state where they are neither checked nor unchecked. 
But what does this mean? Elements that are indeterminate include:

  - `<input/radio>` inputs, when all radio buttons in a same-named group are unchecked.
  - `<input/checkbox>` inputs whose indeterminate property is set to true via JavaScript
  - `<progress>` elements that have no value.

This isn't something you'll likely use very often. One use case could be an indicator 
to tell users that they really need to select a radio button before they move on.

This provides a little 'Default' label on the item that was originally selected when 
the page loaded. Note here we are using the subsequent-sibling combinator (~) rather 
than the Next-sibling combinator (+) — we need to do this because the <span> does 
not come right after the <input> in the source order.

For the `:indeterminate` example, we've got no default selected radio button — this 
is important — if there was, then there would be no indeterminate state to style. 

## More pseudo-classes

There are a number of other pseudo-classes of interest, and we don't have space to 
write about them all in detail here. Let's talk about a few more that you should 
take the time to investigate.

- The `:focus-within` pseudo-class matches an element that has received focus 
or contains an element that has received focus. This is useful if you want 
a whole form to highlight in some way when an input inside it is focused.
- The `:focus-visible` pseudo-class matches focused elements that received 
focus via keyboard interaction (rather than touch or mouse) — useful if you 
want to show a different style for keyboard focus compared to mouse (or other) focus.
- The `:placeholder-shown` pseudo-class matches `<input>` and <textarea> elements that 
have their placeholder showing (i.e. the contents of the placeholder attribute) because 
the value of the element is empty.

## Summary

This completes our look at UI pseudo-classes that relate to form inputs. Keep playing 
with them, and create some fun form styles! Next up, we'll move on to something 
different — client-side form validation.

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
