// The `Streamlit` object exists because our html file includes
// `streamlit-component-lib.js`.
// If you get an error about "Streamlit" not being defined, that
// means you're missing that file.

function sendValue(value) {
  Streamlit.setComponentValue(value)
}

/**
 * The component's render function. This will be called immediately after
 * the component is initially loaded, and then again every time the
 * component gets new data from Python.
 */
 function onRender(event) {
  // Only run the render code the first time the component is loaded.
  if (!window.rendered) {
    // Grab the label and default value that the user specified


    // Set the default value to be what the user specified
    const editorDom = document.getElementById("editor").getElementsByClassName('ql-editor')[0];
    const {innerHtml} = event.detail.args

    if(innerHtml){
      editorDom.innerHTML = innerHtml
    }

    // On the keyup event, send the new value to Python
    editorDom.onkeyup = event => sendValue(editorDom.innerHTML)

    window.rendered = true
  }
  Streamlit.setFrameHeight(260)
}


// Render the component whenever python send a "render event"
Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender)
// Tell Streamlit that the component is ready to receive events
Streamlit.setComponentReady()
// Render with the correct height, if this is a fixed-height component
Streamlit.setFrameHeight(260)
