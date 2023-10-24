from pathlib import Path
from typing import Optional

import streamlit as st
import streamlit.components.v1 as components

# Tell streamlit that there is a component called st_editor,
# and that the code to display that component is in the "frontend" folder
frontend_dir = (Path(__file__).parent / "frontend").absolute()
_component_func = components.declare_component(
	"st_editor", path=str(frontend_dir)
)

# Create the python function that will be called
def st_editor(
    key: Optional[str] = None,
    innerHtml = ''
):
    """
    Add a descriptive docstring
    """
    component_value = _component_func(
        key=key,
        innerHtml = innerHtml
    )

    return component_value


def main():
    value = st_editor(innerHtml="")

    st.write(value)


if __name__ == "__main__":
    main()
