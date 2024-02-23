# Getting Started with Create React App
![Screenshot (449)](https://github.com/praneeth724/React-Props-React-Components/assets/116500216/b1749444-d97a-432d-8f25-557e53efa6ec)


# React Game Cards 🔮

React Game Cards is a collection of reusable React components designed to showcase different video games. Each component displays a game title, an image 🖼️, a brief description, and a button to either play the game or learn more about it.

## Components

### MainComponent

The `MainComponent` component is the main building block of this project. It accepts the following props:

- `Title` (string): The title of the game.
- `Image` (string): The URL of the game's image.
- `Para` (string): A brief description of the game.
- `Button` (string): The text to display on the button.


### Example Usage 🔗

```jsx
<MainComponent
  Title="Call Of the Duty"
  Button="Play COD"
  Image="![Call Of the Duty](https://example.com/cod.jpg)"
  Para="A first-person shooter game that takes players on a thrilling journey through a modern-day conflict. With intense multiplayer modes and a gripping single-player campaign, Modern Warfare offers an immersive experience for fans of the franchise."
  
/>
