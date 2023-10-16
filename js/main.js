 // Define an array of element IDs and their corresponding delays
 const elements = [
    { id: "text", delay: "0.5s" },
    { id: "text1", delay: "1s" },
    { id: "text2", delay: "1.5s" },
    { id: "text3", delay: "2s" },
  ];

  // Function to set visibility and transition delay for elements
  function setVisibilityAndDelay(elementId, delay) {
    const element = document.getElementById(elementId);
    element.style.visibility = "visible";
    element.style.transitionDelay = delay;
  }

  // Call the function for each element on window load
  window.onload = () => {
    elements.forEach((element) => {
      setVisibilityAndDelay(element.id, element.delay);
    });
  };