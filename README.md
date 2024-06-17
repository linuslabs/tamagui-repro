# Tamagui Accordion Component Issue

## Problem Description

This repository demonstrates an issue with the `Accordion` component from Tamagui when attempting to use the `Trigger` with the `asChild` property in order to use a custom component for the trigger.

## Relevant Code

The code relevant to this issue is located in the `Root.tsx` file.

## Error Message

Upon using the component as instructed, the following warning appears in the console:

```
react-dom.development.js:86 Warning: React does not recognize the `__scopeCollapsible` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `__scopecollapsible` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

```
