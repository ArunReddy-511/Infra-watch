# Components Documentation

This document provides comprehensive information on various components used in the Infra-watch project.

## Navigation

The Navigation component is responsible for redirecting users throughout the application.

### HTML Example:
```html
<nav>
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

## Stat Cards

Stat Cards visually represent key metrics and statistics.

### HTML Example:
```html
<div class="stat-card">
    <h3>Active Users</h3>
    <p>1,234</p>
</div>
```

## Score Badge

The Score Badge displays a score in a visually appealing way.

### HTML Example:
```html
<span class="badge score-badge">99</span>
```

## Status Pill

The Status Pill indicates the current status of an operation.

### HTML Example:
```html
<span class="pill status-success">Active</span>
```

## Infrastructure Card

Infrastructure Cards provide details on infrastructure components.

### HTML Example:
```html
<div class="infrastructure-card">
    <h4>Server</h4>
    <p>Location: Data Center 1</p>
</div>
```

## Scoreboard

A scoreboard for displaying scores and rankings.

### HTML Example:
```html
<div class="scoreboard">
    <h2>Leaderboard</h2>
    <ul>
        <li>1. User A - 150</li>
        <li>2. User B - 140</li>
    </ul>
</div>
```

## Modal

Modals are used to capture user input or display important information.

### HTML Example:
```html
<div class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Modal Title</h2>
        <p>Some text inside the modal.</p>
    </div>
</div>
```

## Map Container

This component is used to display maps within the application.

### HTML Example:
```html
<div id="map-container">
    <div id="map"></div>
</div>
```

## Form Components

This section details various form components used for inputs.

### HTML Example:
```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>
```

## Button Component

The Button component can trigger actions and events.

### HTML Example:
```html
<button type="button" class="btn primary">Click Me</button>
```

## Color System

Outlines the colors used across the application.

### HTML Example:
```html
<p style="color: #3498db;">This is a primary color text.</p>
```

## Responsive Behavior

Describes how components behave on different screen sizes.

### HTML Example:
```css
@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

## Animation

Details the animations and transitions applied to components.

### HTML Example:
```css
.fade {
    animation: fadeIn 2s;
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```
